import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function CodePlaygroundScreen() {
  const [code, setCode] = useState('# Write your Python code here\nprint("Hello, Python!")');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const webViewRef = useRef(null);

  const runCode = () => {
    setIsRunning(true);
    setOutput('Running code...\n');

    const pythonExecutorHTML = `
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

          function runPython() {
            const code = ${JSON.stringify(code)};

            Sk.configure({
              output: outf,
              read: builtinRead,
              __future__: Sk.python3
            });

            Sk.misceval.asyncToPromise(function() {
              return Sk.importMainWithBody("<stdin>", false, code, true);
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

          runPython();
        </script>
      </body>
      </html>
    `;

    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(`
        window.location.reload();
      `);
    }

    setTimeout(() => {
      setIsRunning(false);
    }, 100);
  };

  const handleWebViewMessage = (event) => {
    try {
      const message = JSON.parse(event.nativeEvent.data);

      if (message.type === 'output') {
        setOutput((prev) => prev + message.text);
      } else if (message.type === 'error') {
        setOutput((prev) => prev + '\nError: ' + message.text);
      } else if (message.type === 'done') {
        setIsRunning(false);
      }
    } catch (e) {
      console.log('Error parsing message:', e);
    }
  };

  const clearOutput = () => {
    setOutput('');
  };

  const loadExample = (exampleCode) => {
    setCode(exampleCode);
    setOutput('');
  };

  const examples = [
    {
      name: 'Hello World',
      code: 'print("Hello, World!")',
    },
    {
      name: 'Variables',
      code: 'name = "Python"\nversion = 3.11\nprint(f"{name} version {version}")',
    },
    {
      name: 'Loop',
      code: 'for i in range(5):\n    print(f"Count: {i}")',
    },
    {
      name: 'Function',
      code: 'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Python Learner"))',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.editorSection}>
        <Text style={styles.sectionTitle}>Code Editor</Text>
        <View style={styles.examplesRow}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {examples.map((example, index) => (
              <TouchableOpacity
                key={index}
                style={styles.exampleButton}
                onPress={() => loadExample(example.code)}
              >
                <Text style={styles.exampleButtonText}>{example.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <TextInput
          style={styles.codeInput}
          multiline
          value={code}
          onChangeText={setCode}
          placeholder="Write your Python code here..."
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.runButton}
            onPress={runCode}
            disabled={isRunning}
          >
            <Text style={styles.runButtonText}>
              {isRunning ? 'Running...' : 'Run Code'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={clearOutput}
          >
            <Text style={styles.clearButtonText}>Clear Output</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.outputSection}>
        <Text style={styles.sectionTitle}>Output</Text>
        <ScrollView style={styles.outputScroll}>
          <Text style={styles.outputText}>{output || 'Output will appear here...'}</Text>
        </ScrollView>
      </View>

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

                window.runPython = function(code) {
                  Sk.configure({
                    output: outf,
                    read: builtinRead,
                    __future__: Sk.python3
                  });

                  Sk.misceval.asyncToPromise(function() {
                    return Sk.importMainWithBody("<stdin>", false, code, true);
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
                };

                window.addEventListener('message', function(e) {
                  if (e.data.type === 'run') {
                    window.runPython(e.data.code);
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
        onLoadEnd={() => {
          if (isRunning && webViewRef.current) {
            webViewRef.current.postMessage(JSON.stringify({
              type: 'run',
              code: code,
            }));
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  editorSection: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3776ab',
    marginBottom: 12,
  },
  examplesRow: {
    marginBottom: 12,
  },
  exampleButton: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  exampleButtonText: {
    fontSize: 12,
    color: '#333',
  },
  codeInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontFamily: 'monospace',
    fontSize: 14,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 12,
  },
  runButton: {
    flex: 2,
    backgroundColor: '#3776ab',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  runButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearButton: {
    flex: 1,
    backgroundColor: '#666',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  outputSection: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
  },
  outputScroll: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 12,
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
