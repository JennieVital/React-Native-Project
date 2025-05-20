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

const Science7 = ({ navigation }) => {
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
    { question: 'What are the states of matter?', answer: 'Solid, Liquid, Gas, Plasma' },
    { question: 'What is the basic unit of life?', answer: 'Cell' },
    { question: 'What is the center of the solar system?', answer: 'Sun' },
    { question: 'What gas do plants use for photosynthesis?', answer: 'Carbon dioxide (CO₂)' },
    { question: 'What is the force that pulls objects toward Earth?', answer: 'Gravity' },
    { question: 'Which organ pumps blood throughout the body?', answer: 'Heart' },
    { question: 'What is H₂O?', answer: 'Water' },
    { question: 'What planet is known as the Red Planet?', answer: 'Mars' },
    { question: 'What organ is responsible for breathing?', answer: 'Lungs' },
    { question: 'What do we call animals that eat only plants?', answer: 'Herbivores' },
    { question: 'What part of the plant conducts photosynthesis?', answer: 'Leaves' },
    { question: 'Which part of the cell contains DNA?', answer: 'Nucleus' },
    { question: 'What is the boiling point of water in Celsius?', answer: '100°C' },
    { question: 'What tool is used to look at tiny objects?', answer: 'Microscope' },
    { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
    { question: 'What is the process of liquid turning into gas?', answer: 'Evaporation' },
    { question: 'What is a vertebrate?', answer: 'An animal with a backbone' },
    { question: 'What kind of energy does the sun give off?', answer: 'Solar energy' },
    { question: 'Which body system fights off disease?', answer: 'Immune system' },
    { question: 'What is the process by which plants make food?', answer: 'Photosynthesis' },
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
      <View style={{ backgroundColor: '#D3D3D3' }}>
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
    backgroundColor: '#D3D3D3',
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
    backgroundColor: '#D3D3D3',
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

export default Science7;