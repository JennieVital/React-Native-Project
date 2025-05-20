import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CreateCard({ navigation, addCard }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#FFF3E2');

  const handleCancel = () => {
    setQuestion('');
    setAnswer('');
  };

  const handleSave = () => {
    if (!question.trim() || !answer.trim()) {
      alert('Both Question and Answer must be filled out!');
      return;
    }
    addCard({ question, answer, backgroundColor });
    alert('Card saved successfully!');
    navigation.navigate('Card List'); // Navigate back to Card List
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.cardWrapper}>
        <Text style={styles.title}>Edit Your Card</Text>

        <View style={styles.cardContainer}>
          <Text style={styles.label}>Question</Text>
          <View style={styles.cardBox}>
            <TextInput
              placeholder="Enter your question..."
              placeholderTextColor="#555"
              value={question}
              onChangeText={setQuestion}
              multiline
              style={styles.textInput}
            />
          </View>

          <Text style={styles.label}>Answer</Text>
          <View style={styles.cardBox}>
            <TextInput
              placeholder="Enter the answer..."
              placeholderTextColor="#555"
              value={answer}
              onChangeText={setAnswer}
              multiline
              style={styles.textInput}
            />
          </View>

          <Text style={styles.label}>Card Background</Text>
          <View style={styles.colorRow}>
            <TouchableOpacity style={[styles.colorDot, { backgroundColor: '#FFD6D6' }]} onPress={() => handleColorChange('#FFD6D6')} />
            <TouchableOpacity style={[styles.colorDot, { backgroundColor: '#CDE7F0' }]} onPress={() => handleColorChange('#CDE7F0')} />
            <TouchableOpacity style={[styles.colorDot, { backgroundColor: '#FFF3E2' }]} onPress={() => handleColorChange('#FFF3E2')} />
            <TouchableOpacity style={[styles.colorDot, { backgroundColor: '#E4D8DC' }]} onPress={() => handleColorChange('#E4D8DC')} />
          </View>

          <View style={styles.footerButtons}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>

          {/* Back to Home Button */}
          <View style={styles.homeWrapper}>
            <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardWrapper: {
    width: '90%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 12,
    color: '#444',
  },
  cardBox: {
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#ddd',
    backgroundColor: '#FAFAFA',
    padding: 12,
    height: 100,
    marginBottom: 12,
  },
  textInput: {
    fontSize: 15,
    color: '#333',
    flex: 1,
    textAlignVertical: 'top',
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  colorDot: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#999',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 20,
  },
  saveButton: {
    backgroundColor: '#4D7083',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cancelButton: {
    backgroundColor: '#FF857A',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  homeWrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
  homeButton: {
    backgroundColor: '#5EAAA8',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});