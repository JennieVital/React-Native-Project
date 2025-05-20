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

const TLE7 = ({ navigation }) => {
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
    { question: 'What does ICT stand for?', answer: 'Information and Communication Technology' },
    { question: 'What is the main function of a computer?', answer: 'To process data and perform tasks.' },
    { question: 'What does CPU stand for?', answer: 'Central Processing Unit' },
    { question: 'What is an operating system?', answer: 'Software that manages computer hardware and software.' },
    { question: 'What is a network?', answer: 'A system of computers and devices connected to share resources and information.' },
    { question: 'What is the internet?', answer: 'A global system of interconnected computer networks.' },
    { question: 'What is a browser?', answer: 'A software application used to access websites.' },
    { question: 'What is a URL?', answer: 'Uniform Resource Locator, the address of a webpage.' },
    { question: 'What is the purpose of a spreadsheet?', answer: 'To organize, analyze, and store data in rows and columns.' },
    { question: 'What is an email?', answer: 'A method of exchanging digital messages over the internet.' },
    { question: 'What is a word processor?', answer: 'Software used for creating, editing, and formatting text documents.' },
    { question: 'What does HTTP stand for?', answer: 'HyperText Transfer Protocol' },
    { question: 'What is a cloud storage?', answer: 'A service that allows users to store data online and access it remotely.' },
    { question: 'What is cybersecurity?', answer: 'The practice of protecting systems, networks, and data from digital attacks.' },
    { question: 'What is phishing?', answer: 'A type of scam where attackers trick people into revealing personal information.' },
    { question: 'What is a computer virus?', answer: 'A malicious software program that can infect and harm a computer system.' },
    { question: 'What is a database?', answer: 'An organized collection of data that can be accessed and managed digitally.' },
    { question: 'What is a search engine?', answer: 'A tool used to search for information on the internet, like Google or Bing.' },
    { question: 'What is Wi-Fi?', answer: 'A technology that allows devices to connect to the internet wirelessly.' },
    { question: 'What is software?', answer: 'A collection of programs that tell a computer how to perform tasks.' },
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
      <View style={{ backgroundColor: '#89C5F0' }}>
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
    backgroundColor: '#89C5F0',
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
    backgroundColor: '#89C5F0',
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

export default TLE7;
