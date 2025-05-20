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

const MAPEH7 = ({ navigation }) => {
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
    // Music
    {
      question:
        'Which of the following is NOT a traditional form of Filipino folk music?',
      answer: 'Classical music',
    },
    {
      question:
        'What is the primary characteristic of folk songs from the Luzon lowlands?',
      answer: 'Performed in native languages',
    },
    {
      question: 'Which of the following is an example of a Visayan folk song?',
      answer: 'Atin Cu Pung Singsing',
    },
    {
      question: 'Which is NOT a characteristic of folk songs?',
      answer: 'Composed by professional musicians',
    },
    {
      question: 'What is the typical mood of Filipino folk songs?',
      answer: 'All of the above',
    },
    {
      question: 'Which of these folk songs is from the Ilocos region?',
      answer: 'Pamulinawen',
    },
    {
      question: 'Folk songs are typically performed by?',
      answer: 'Everyone in the community',
    },
    {
      question: 'What is the main purpose of folk songs?',
      answer: 'To express emotions and tell stories',
    },
    {
      question: 'Which instrument is commonly used in Filipino folk music?',
      answer: 'Guitar',
    },
    {
      question: 'Which of these is a popular Filipino folk song?',
      answer: 'Pamulinawen',
    },

    // Arts
    {
      question: 'What is landscape art?',
      answer: 'Art depicting outdoor scenes like mountains and rivers',
    },
    {
      question: 'Which of these is an example of a seascape?',
      answer: 'A view of the beach',
    },
    {
      question: 'What is the primary purpose of art?',
      answer: 'To express ideas and emotions',
    },
    {
      question:
        'Which element is essential in creating a successful piece of art?',
      answer: 'Color and form',
    },
    {
      question: 'What is a common subject in landscape art?',
      answer: 'Nature and outdoor scenes',
    },
    {
      question: 'What does a sculpture typically involve?',
      answer: 'Shaping materials like clay, wood, or metal',
    },
    {
      question: 'Which of the following is an example of a famous painting?',
      answer: 'Mona Lisa',
    },
    {
      question: 'What type of art includes visual storytelling through images?',
      answer: 'Illustration',
    },
    {
      question: 'Which art form includes creating three-dimensional objects?',
      answer: 'Sculpture',
    },
    {
      question: 'Which of these is an important aspect of visual art?',
      answer: 'Composition',
    },

    // Physical Education
    {
      question: 'Which of the following is NOT a goal of physical education?',
      answer: 'Developing mental strength',
    },
    {
      question:
        'Physical education aims to develop skills in which of the following areas?',
      answer: 'All of the above',
    },
    {
      question:
        'What does physical education contribute to in terms of mental health?',
      answer: 'Improves focus and concentration',
    },
    {
      question:
        'Which of the following is an important aspect of physical development?',
      answer: 'All of the above',
    },
    {
      question: 'What is one benefit of physical education?',
      answer: 'It helps students socialize and work in teams',
    },
    {
      question:
        'Which system in the body is strengthened through physical education?',
      answer: 'Respiratory system',
    },
    {
      question:
        'Which activity is typically part of physical education classes?',
      answer: 'Dancing',
    },
    {
      question:
        'Physical education helps improve what aspect of social development?',
      answer: 'Teamwork',
    },
    {
      question: 'Which of these is a primary focus in physical education?',
      answer: 'Building physical power',
    },
    {
      question:
        'Which of the following can be improved through physical education?',
      answer: 'Physical endurance',
    },

    // Health
    {
      question: 'What is an essential part of a healthy lifestyle?',
      answer: 'All of the above',
    },
    {
      question: 'What is an important factor in maintaining good health?',
      answer: 'Proper nutrition',
    },
    {
      question: 'Which of the following can help reduce stress?',
      answer: 'Exercising',
    },
    {
      question: 'Why is sleep important for health?',
      answer: 'It improves brain function',
    },
    {
      question: 'What is the role of hydration in health?',
      answer: 'All of the above',
    },
    {
      question: 'What is one of the key benefits of a balanced diet?',
      answer: 'Prevents diseases',
    },
    {
      question: 'Which is an example of a good mental health practice?',
      answer: 'Meditation',
    },
    {
      question: 'Why is exercise essential for health?',
      answer: 'It helps maintain a healthy weight',
    },
    {
      question: 'What is one way to manage stress effectively?',
      answer: 'Breathing exercises',
    },
    {
      question: 'How can good hygiene improve your health?',
      answer: 'It prevents infections',
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
      <View style={{ backgroundColor: '#FFEEFF' }}>
        {showHint && (
          <View style={styles.hintBox}>
            <Text style={styles.hintText}>
              Tap card to reaveal the answer!
            </Text>
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
    alignItems: 'center'
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
    backgroundColor: '#FFEEFF',
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
    backgroundColor: '#FFEEFF',
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

export default MAPEH7;
