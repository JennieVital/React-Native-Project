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

const ESP7 = ({ navigation }) => {
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
    { question: 'What does self-discipline mean?', answer: 'The ability to control one\'s emotions, behaviors, and actions to achieve goals.' },
    { question: 'Why is respect important?', answer: 'It helps build trust and positive relationships with others.' },
    { question: 'What is empathy?', answer: 'The ability to understand and share the feelings of others.' },
    { question: 'What does it mean to be responsible?', answer: 'Taking care of your duties and being accountable for your actions.' },
    { question: 'What is honesty?', answer: 'Telling the truth and being trustworthy.' },
    { question: 'What is a good way to deal with peer pressure?', answer: 'Stay true to your values and make decisions that align with your beliefs.' },
    { question: 'What does it mean to be a good citizen?', answer: 'Obeying the law, helping others, and contributing to the community.' },
    { question: 'Why should we forgive others?', answer: 'To maintain peace and emotional well-being.' },
    { question: 'What is cooperation?', answer: 'Working together with others to achieve a common goal.' },
    { question: 'What does accountability mean?', answer: 'Being responsible for one\'s actions and decisions.' },
    { question: 'What is self-awareness?', answer: 'Understanding your thoughts, emotions, and behaviors.' },
    { question: 'How can we show respect to elders?', answer: 'By listening to them, speaking kindly, and offering help when needed.' },
    { question: 'What is responsibility?', answer: 'Being reliable and dependable in fulfilling one\'s duties and obligations.' },
    { question: 'Why is it important to develop good character?', answer: 'Good character helps in making positive choices and building trust.' },
    { question: 'How can you show kindness to others?', answer: 'By being compassionate, helpful, and considerate.' },
    { question: 'What does the term “peer pressure” mean?', answer: 'The influence exerted by a group on an individual to conform to their behavior.' },
    { question: 'What is the importance of hard work?', answer: 'It leads to personal growth, success, and achievement of goals.' },
    { question: 'What is decision making?', answer: 'The process of choosing from various options based on values and consequences.' },
    { question: 'What does it mean to be loyal?', answer: 'Being faithful and supportive to friends, family, and causes.' },
    { question: 'What is patriotism?', answer: 'Love for one’s country and the willingness to contribute to its well-being.' },
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
      <View style={{ backgroundColor: '#FFFCDF' }}>
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
    backgroundColor: '#FFFCDF',
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
    backgroundColor: '#FFFCDF',
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

export default ESP7;