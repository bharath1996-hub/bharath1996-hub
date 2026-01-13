import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WebView } from 'react-native-webview';
import { exercises } from '../data/exercises';

export default function ExercisesScreen() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [userCode, setUserCode] = useState('');
  const [output, setOutput] = useState('');
  const [completedExercises, setCompletedExercises] = useState([]);
  const webViewRef = useRef(null);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const saved = await AsyncStorage.getItem('completedExercises');
      if (saved) {
        setCompletedExercises(JSON.parse(saved));
      }
    } catch (e) {
      console.log('Error loading progress:', e);
    }
  };

  const saveProgress = async (exerciseId) => {
    try {
      const updated = [...new Set([...completedExercises, exerciseId])];
      await AsyncStorage.setItem('completedExercises', JSON.stringify(updated));
      setCompletedExercises(updated);
    } catch (e) {
      console.log('Error saving progress:', e);
    }
  };

  const openExercise = (exercise) => {
    setSelectedExercise(exercise);
    setUserCode(exercise.starterCode || '# Write your solution here\n');
    setOutput('');
    setModalVisible(true);
  };

  const closeExercise = () => {
    setModalVisible(false);
    setSelectedExercise(null);
    setUserCode('');
    setOutput('');
  };

  const checkSolution = () => {
    setOutput('Running tests...\n');

    if (webViewRef.current) {
      const testCode = `
${userCode}

# Running tests
${selectedExercise.testCode}
      `;
      webViewRef.current.postMessage(JSON.stringify({
        type: 'run',
        code: testCode,
      }));
    }
  };

  const handleWebViewMessage = (event) => {
    try {
      const message = JSON.parse(event.nativeEvent.data);

      if (message.type === 'output') {
        setOutput((prev) => prev + message.text);
      } else if (message.type === 'error') {
        setOutput((prev) => prev + '\nError: ' + message.text);
      } else if (message.type === 'done' && message.success) {
        if (output.includes('All tests passed!')) {
          saveProgress(selectedExercise.id);
          Alert.alert(
            'Congratulations!',
            'You solved the exercise correctly!',
            [{ text: 'OK' }]
          );
        }
      }
    } catch (e) {
      console.log('Error parsing message:', e);
    }
  };

  const isCompleted = (exerciseId) => {
    return completedExercises.includes(exerciseId);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Practice Exercises</Text>
        <Text style={styles.subHeader}>
          Solve problems to improve your skills
        </Text>
        <Text style={styles.statsText}>
          Completed: {completedExercises.length} / {exercises.length}
        </Text>

        {exercises.map((exercise, index) => (
          <TouchableOpacity
            key={exercise.id}
            style={[
              styles.exerciseCard,
              isCompleted(exercise.id) && styles.completedCard,
            ]}
            onPress={() => openExercise(exercise)}
          >
            <View style={styles.exerciseHeader}>
              <Text style={styles.exerciseNumber}>Exercise {index + 1}</Text>
              <View style={styles.badges}>
                <Text style={styles.difficultyBadge}>{exercise.difficulty}</Text>
                {isCompleted(exercise.id) && (
                  <Text style={styles.completedBadge}>✓</Text>
                )}
              </View>
            </View>
            <Text style={styles.exerciseTitle}>{exercise.title}</Text>
            <Text style={styles.exerciseDescription}>{exercise.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeExercise}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{selectedExercise?.title}</Text>
            <TouchableOpacity onPress={closeExercise} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.modalContent}>
            <Text style={styles.problemText}>{selectedExercise?.problem}</Text>

            {selectedExercise?.hint && (
              <View style={styles.hintBox}>
                <Text style={styles.hintTitle}>Hint:</Text>
                <Text style={styles.hintText}>{selectedExercise.hint}</Text>
              </View>
            )}

            <Text style={styles.codeTitle}>Your Solution:</Text>
            <TextInput
              style={styles.codeInput}
              multiline
              value={userCode}
              onChangeText={setUserCode}
              placeholder="Write your solution here..."
              placeholderTextColor="#999"
              autoCapitalize="none"
              autoCorrect={false}
              spellCheck={false}
            />

            <TouchableOpacity
              style={styles.checkButton}
              onPress={checkSolution}
            >
              <Text style={styles.checkButtonText}>Check Solution</Text>
            </TouchableOpacity>

            <Text style={styles.outputTitle}>Test Results:</Text>
            <View style={styles.outputBox}>
              <Text style={styles.outputText}>
                {output || 'Run tests to see results...'}
              </Text>
            </View>
          </ScrollView>
        </View>
      </Modal>

      <WebView
        ref={webViewRef}
        source={{
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <script src="https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js"></script>
              <script src="https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js"></script>
            </head>
            <body>
              <script>
                function outf(text) {
                  window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: 'output',
                    text: text
                  }));
                }

                function builtinRead(x) {
                  if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
                    throw "File not found: '" + x + "'";
                  return Sk.builtinFiles["files"][x];
                }

                window.addEventListener('message', function(e) {
                  const data = JSON.parse(e.data);
                  if (data.type === 'run') {
                    Sk.configure({
                      output: outf,
                      read: builtinRead,
                      __future__: Sk.python3
                    });

                    Sk.misceval.asyncToPromise(function() {
                      return Sk.importMainWithBody("<stdin>", false, data.code, true);
                    }).then(
                      function(mod) {
                        window.ReactNativeWebView.postMessage(JSON.stringify({
                          type: 'done',
                          success: true
                        }));
                      },
                      function(err) {
                        window.ReactNativeWebView.postMessage(JSON.stringify({
                          type: 'error',
                          text: err.toString()
                        }));
                      }
                    );
                  }
                });
              </script>
            </body>
            </html>
          `,
        }}
        onMessage={handleWebViewMessage}
        style={styles.hiddenWebView}
        javaScriptEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3776ab',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  statsText: {
    fontSize: 14,
    color: '#3776ab',
    fontWeight: 'bold',
    marginBottom: 24,
  },
  exerciseCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completedCard: {
    borderWidth: 2,
    borderColor: '#4caf50',
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  exerciseNumber: {
    fontSize: 12,
    color: '#3776ab',
    fontWeight: 'bold',
  },
  badges: {
    flexDirection: 'row',
    gap: 8,
  },
  difficultyBadge: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  completedBadge: {
    fontSize: 16,
    color: '#4caf50',
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  exerciseDescription: {
    fontSize: 14,
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#3776ab',
    paddingTop: 50,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContent: {
    flex: 1,
    padding: 16,
  },
  problemText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 16,
  },
  hintBox: {
    backgroundColor: '#fff3cd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  hintTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 4,
  },
  hintText: {
    fontSize: 14,
    color: '#856404',
  },
  codeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3776ab',
    marginBottom: 8,
  },
  codeInput: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 12,
    fontFamily: 'monospace',
    fontSize: 14,
    minHeight: 150,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
  },
  checkButton: {
    backgroundColor: '#4caf50',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  checkButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  outputTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3776ab',
    marginBottom: 8,
  },
  outputBox: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 12,
    minHeight: 100,
  },
  outputText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#00ff00',
  },
  hiddenWebView: {
    width: 0,
    height: 0,
  },
});
