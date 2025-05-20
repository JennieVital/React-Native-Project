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

const Filipino7 = ({ navigation }) => {
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
    { question: 'Ano ang pangngalan?', answer: 'Pangalan ng tao, hayop, bagay, o lugar' },
    { question: 'Ano ang pandiwa?', answer: 'Salitang kilos o gawa' },
    { question: 'Magbigay ng halimbawa ng pang-uri.', answer: 'Maganda, matangkad, pula' },
    { question: 'Ano ang simuno sa pangungusap: "Si Ana ay kumain ng mangga."', answer: 'Si Ana' },
    { question: 'Ano ang kasingkahulugan ng "malungkot"?', answer: 'Malumbay' },
    { question: 'Ano ang kasalungat ng "maaga"?', answer: 'Huli' },
    { question: 'Ano ang panghalip?', answer: 'Pumapalit sa ngalan ng tao o bagay (hal. siya, kami)' },
    { question: 'Ano ang panlapi sa salitang "magluto"?', answer: 'Mag-' },
    { question: 'Ano ang pokus ng pandiwa kung ang paksa ay tagaganap?', answer: 'Pokus sa aktor' },
    { question: 'Ano ang pang-abay?', answer: 'Nagbibigay-turing sa pandiwa, pang-uri, o kapwa pang-abay' },
    { question: 'Ano ang uri ng pangungusap: "Tulog ang bata."', answer: 'Pasalaysay' },
    { question: 'Magbigay ng halimbawa ng tambalang salita.', answer: 'Bahaghari, silid-aralan' },
    { question: 'Ano ang bugtong?', answer: 'Isang palaisipan na may sagot' },
    { question: 'Ano ang sawikain?', answer: 'Idyomatikong pahayag na may nakatagong kahulugan' },
    { question: 'Ano ang pangatnig?', answer: 'Nag-uugnay ng mga salita o kaisipan (hal. at, ngunit)' },
    { question: 'Ano ang panaguri sa pangungusap: "Ang aso ay tumatakbo."', answer: 'Ay tumatakbo' },
    { question: 'Ano ang kasarian ng pangngalan: "lola"?', answer: 'Babae' },
    { question: 'Magbigay ng halimbawang pangungusap na pasalungat.', answer: '"Gusto kong sumama, ngunit may gagawin ako."' },
    { question: 'Ano ang tayutay?', answer: 'Matalinghagang paraan ng pagpapahayag' },
    { question: 'Ano ang tula?', answer: 'Isang anyo ng panitikan na may sukat, tugma, at talinhaga' },
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
      <View style={{ backgroundColor: '#FAEFD1' }}>
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
    backgroundColor: '#FAEFD1',
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
    backgroundColor: '#FAEFD1',
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

export default Filipino7;
