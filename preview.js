import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Preview({ navigation, route }) {
  const { question, answer, backgroundColor } = route.params || {};
  const [questionState] = useState(question || '');
  const [answerState] = useState(answer || '');
  const [bgColorState] = useState(backgroundColor || '#FFF3E2');

  const handleEdit = () => {
    navigation.navigate('CreateCard', {
      question: questionState, 
      answer: answerState,
      backgroundColor: bgColorState,
    });
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.cardWrapper}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>CARD 1</Text>

          <Text style={styles.label}>Question</Text>
          <Text style={styles.content}>{question}</Text>

          <Text style={styles.label}>Answer</Text>
          <Text style={styles.content}>{answer}</Text>

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
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
  //Card 1 title
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'left'
  },
  content: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  backButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});