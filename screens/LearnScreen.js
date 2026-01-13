import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { lessons } from '../data/lessons';

export default function LearnScreen() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openLesson = (lesson) => {
    setSelectedLesson(lesson);
    setModalVisible(true);
  };

  const closeLesson = () => {
    setModalVisible(false);
    setSelectedLesson(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Python Lessons</Text>
        <Text style={styles.subHeader}>
          Start your Python journey from basics to advanced
        </Text>

        {lessons.map((lesson, index) => (
          <TouchableOpacity
            key={index}
            style={styles.lessonCard}
            onPress={() => openLesson(lesson)}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonNumber}>Lesson {index + 1}</Text>
              <Text style={styles.lessonDifficulty}>{lesson.difficulty}</Text>
            </View>
            <Text style={styles.lessonTitle}>{lesson.title}</Text>
            <Text style={styles.lessonDescription}>{lesson.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeLesson}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>
              {selectedLesson?.title}
            </Text>
            <TouchableOpacity onPress={closeLesson} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.modalContent}>
            <Text style={styles.contentText}>{selectedLesson?.content}</Text>

            {selectedLesson?.examples && (
              <View style={styles.examplesSection}>
                <Text style={styles.examplesTitle}>Examples:</Text>
                {selectedLesson.examples.map((example, idx) => (
                  <View key={idx} style={styles.exampleCard}>
                    <Text style={styles.exampleCode}>{example}</Text>
                  </View>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
      </Modal>
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
    marginBottom: 24,
  },
  lessonCard: {
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
  lessonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  lessonNumber: {
    fontSize: 12,
    color: '#3776ab',
    fontWeight: 'bold',
  },
  lessonDifficulty: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  lessonDescription: {
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
    fontSize: 20,
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
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 24,
  },
  examplesSection: {
    marginTop: 16,
  },
  examplesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3776ab',
    marginBottom: 12,
  },
  exampleCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3776ab',
  },
  exampleCode: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#333',
  },
});
