import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Flashcard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setShowAnswer(!showAnswer)}>
      <Text style={styles.text}>{showAnswer ? answer : question}</Text>
    </TouchableOpacity>
  );
};

const Math7 = ({ navigation }) => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(offsetX / screenWidth);
    setCurrentPage(pageIndex);
  };


  const flashcards = [
    { question: 'What is 9 - (-4)?', answer: '13' },
    { question: 'Find the value of x: 2x = 16', answer: 'x = 8' },
    { question: 'What is the square root of 81?', answer: '9' },
    { question: 'Simplify: 4a + 3a', answer: '7a' },
    { question: 'What is the product of -3 and 5?', answer: '-15' },
    { question: 'Convert 1.25 to a fraction.', answer: '5/4' },
    { question: 'What is 25% of 200?', answer: '50' },
    { question: 'What is the greatest common factor (GCF) of 12 and 18?', answer: '6' },
    { question: 'Evaluate: 5² - 3', answer: '22' },
    { question: 'What is the next prime number after 7?', answer: '11' },
    { question: 'If a triangle has sides 3cm, 4cm, 5cm, what is its perimeter?', answer: '12 cm' },
    { question: 'Simplify: (2x + 4) - (x + 1)', answer: 'x + 3' },
    { question: 'Is 0 a positive or negative number?', answer: 'Neither' },
    { question: 'Round 67.489 to the nearest whole number.', answer: '67' },
    { question: 'What is the median of: 3, 7, 9?', answer: '7' },
    { question: 'Write 1/1000 in decimal form.', answer: '0.001' },
    { question: 'What is the sum of angles in a triangle?', answer: '180°' },
    { question: 'Find the area of a triangle with base 10cm and height 6cm.', answer: '30 cm²' },
    { question: 'Write 0.0006 in scientific notation.', answer: '6 × 10⁻⁴' },
    { question: 'What is the value of |–12|?', answer: '12' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.horizontalScroll}>
        <ScrollView
          horizontal
          pagingEnabled
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}>
          {flashcards.map((card, index) => (
            <View style={styles.cardsWidth}>
              <Flashcard
                key={index}
                question={card.question}
                answer={card.answer}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{ backgroundColor: '#DFEBE9' }}>
        {showHint && (
          <View style={styles.hintBox}>
            <Text style={styles.hintText}>Tap card to reaveal the answer!</Text>
          </View>
        )}
        <Text
          style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold', fontSize: 20 }}>
          Page {currentPage + 1} of {flashcards.length}
        </Text>
      </View>
      <View style={styles.homeWrapper}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hintBox: {
    backgroundColor: '#FFD700',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  hintText: {
    color: '#000',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  horizontalScroll: {
    flex: 1,
    backgroundColor: '#DFEBE9',
  },
  cardsWidth: {
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 30,
    height: 265,
    aspectRatio: 4 / 3,
    justifyContent: 'center',
    padding: 30,
    margin: 30,
    elevation: 8,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  homeWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginBottom: 0,
    backgroundColor: '#DFEBE9',
  },
  homeButton: {
    backgroundColor: '#5EAAA8',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 14,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Math7;