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

const English7 = ({ navigation }) => {
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
    { question: 'What is a noun?', answer: 'A person, place, thing, or idea' },
    {
      question: 'Give an example of an adjective.',
      answer: 'Beautiful, big, fast',
    },
    { question: 'What is a verb?', answer: 'An action word' },
    { question: 'Identify the subject: "The cat sleeps."', answer: 'The cat' },
    { question: 'What is a synonym for "happy"?', answer: 'Joyful, cheerful' },
    { question: 'What is an antonym for "hot"?', answer: 'Cold' },
    {
      question: 'What is a complete sentence?',
      answer: 'A sentence with a subject and a predicate',
    },
    {
      question: 'Give an example of a proper noun.',
      answer: 'Maria, Philippines, Monday',
    },
    {
      question: 'What punctuation ends a question?',
      answer: 'A question mark (?)',
    },
    {
      question: 'What do we call a word that joins other words?',
      answer: 'A conjunction (e.g., and, but, or)',
    },
    { question: 'What is the past tense of "run"?', answer: 'Ran' },
    {
      question: 'Identify the verb: "She dances gracefully."',
      answer: 'Dances',
    },
    { question: 'What is the plural of "child"?', answer: 'Children' },
    { question: 'What is the opposite of "early"?', answer: 'Late' },
    { question: 'What part of speech is "quickly"?', answer: 'Adverb' },
    {
      question: 'What is the difference between "its" and "it\'s"?',
      answer: '"Its" is possessive; "it\'s" is a contraction of "it is".',
    },
    {
      question: 'What is a simile?',
      answer: 'A figure of speech comparing two things using "like" or "as".',
    },
    {
      question: 'What is the meaning of "onomatopoeia"?',
      answer: 'Words that imitate sounds (e.g., buzz, hiss).',
    },
    {
      question: 'What is a preposition?',
      answer:
        'A word that shows the relationship between a noun and other words (e.g., on, under, beside).',
    },
    { question: 'What is the plural of "foot"?', answer: 'Feet' },
    {
      question: 'What is an interjection?',
      answer:
        'A word or phrase that expresses strong emotion (e.g., wow, ouch, hey).',
    },
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
      <View style={{ backgroundColor: '#D3E4EC' }}>
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
    backgroundColor: '#D3E4EC',
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
    backgroundColor: '#D3E4EC',
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

export default English7;
