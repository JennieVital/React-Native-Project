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

const AralPan7 = ({ navigation }) => { 
  const [showHint, setShowHint] = useState(true); //when you change False, hindi mag aappear yung TAP CARD TO REVEAL YOUR ANSWER
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false); //when you change true, hindi na mawawala ang TAP CARD TO REVEAL YOUR ANSWER
    }, 3000); //3 seconds para mawala yung TAP CARD TO REVEAL YOUR ANSWER

    return () => clearTimeout(timer); //parang cancel button sya ng setTimeout
  }, []);
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(offsetX / screenWidth);
    setCurrentPage(pageIndex);
  };

  const flashcards = [
    {
      question:
        'Ano ang agham na nag-aaral tungkol sa paglalarawan sa ibabaw ng mundo?',
      answer: 'Heograpiya',
    },
    {
      question: 'Ano ang tawag sa pinakamalaking masa ng lupain sa mundo?',
      answer: 'Kontinente',
    },
    {
      question: 'Ano ang kabuuang sukat ng Asya?',
      answer: '44,486,104 kilometro kuwadrado',
    },
    { question: 'Ilang bansa at teritoryo ang bumubuo sa Asya?', answer: '49' },
    {
      question: 'Alin ang rehiyong kinabibilangan ng bansang Pilipinas?',
      answer: 'Timog-Silangang Asya',
    },
    {
      question: 'Piliin ang mga bansang kabilang sa Silangang Asya.',
      answer: 'South Korea, Taiwan, China, Japan',
    },
    {
      question: 'Piliin ang mga bansang kabilang sa Hilagang Asya.',
      answer: 'Kyrgyzstan, Tajikistan',
    },
    {
      question: 'Piliin ang mga bansang kabilang sa Timog Asya.',
      answer: 'India, Nepal, Bhutan',
    },
    {
      question: 'Piliin ang mga bansang kabilang sa Kanlurang Asya.',
      answer: 'Oman, Yemen, Georgia, Saudi Arabia',
    },
    {
      question: 'Piliin ang mga bansang kabilang sa Timog-Silangang Asya.',
      answer: 'Singapore, Laos, Vietnam',
    },
    {
      question:
        'Anong uri ng grasslands ang may matataas na damo at malalalim na ugat?',
      answer: 'Prairie',
    },
    {
      question:
        'Ano ang tawag sa karaniwang panahon ng isang lugar sa mahabang panahon?',
      answer: 'Klima',
    },
    {
      question:
        'Ano ang kalagayan ng atmospera sa isang lugar sa maikling panahon?',
      answer: 'Panahon',
    },
    { question: 'Anong hangin ang may dalang ulan?', answer: 'Monsoon' },
    {
      question: 'Ang uri o dami ng halaman sa isang lugar ay tinatawag na?',
      answer: 'Vegetation',
    },
    {
      question: 'Ano ang kontinente na may pinakamaraming populasyon?',
      answer: 'Asya',
    },
    {
      question: 'Anong rehiyon sa Asya ang pinakamayaman sa langis?',
      answer: 'Kanlurang Asya',
    },
    {
      question: 'Ano ang tawag sa malalawak na damuhan na may kaunting puno?',
      answer: 'Savanna',
    },
    {
      question:
        'Ano ang tawag sa rehiyon kung saan matatagpuan ang China at Japan?',
      answer: 'Silangang Asya',
    },
    {
      question:
        'Ano ang tawag sa rehiyon kung saan kabilang ang India at Nepal?',
      answer: 'Timog Asya',
    },
    {
      question: 'Pang-ilan sa pitong kontinente ang Asya sa laki?',
      answer: 'Una',
    },
    {
      question: 'Ano ang tawag sa lugar kung saan nag-uumpisa ang isang ilog?',
      answer: 'Pinagmulan ng ilog',
    },
    {
      question: 'Ano ang tawag sa lugar kung saan nagtatapos ang isang ilog?',
      answer: 'Bunganga ng ilog',
    },
    {
      question:
        'Ano ang pangunahing anyong tubig na naghihiwalay sa Pilipinas at Vietnam?',
      answer: 'Dagat ng South China',
    },
    {
      question: 'Anong bansa ang tinatawag na "Land of the Rising Sun"?',
      answer: 'Japan',
    },
    {
      question: 'Ano ang tawag sa pinakamalaking ilog sa Asya?',
      answer: 'Ilog Yangtze',
    },
    {
      question:
        'Anong bansa sa Silangang Asya ang may pinakamaraming populasyon?',
      answer: 'China',
    },
    {
      question: 'Ano ang tawag sa pagsabog ng bulkan, lindol, at bagyo?',
      answer: 'Kalagayang heolohikal',
    },
    { question: 'Ano ang tawag sa mataas na anyong lupa?', answer: 'Bundok' },
    { question: 'Ano ang tawag sa patag na anyong lupa?', answer: 'Kapatagan' },
    {
      question: 'Anong bahagi ng Asya ang may pinakamaraming disyerto?',
      answer: 'Kanlurang Asya',
    },
    {
      question: 'Ano ang tawag sa pinakamataas na bundok sa Asya?',
      answer: 'Mt. Everest',
    },
    {
      question: 'Saang rehiyon matatagpuan ang Mt. Everest?',
      answer: 'Timog Asya',
    },
    {
      question: 'Anong dagat ang nasa pagitan ng Saudi Arabia at Africa?',
      answer: 'Red Sea',
    },
    {
      question: 'Ano ang tawag sa mga pook na mababa at laging binabaha?',
      answer: 'Lambak',
    },
    {
      question: 'Ano ang tawag sa heograpikal na kinaroroonan ng isang bansa?',
      answer: 'Lokasyon',
    },
    {
      question: 'Ano ang tawag sa ugnayan ng tao at ng kanyang kapaligiran?',
      answer: 'Interaksyon ng tao at kapaligiran',
    },
    {
      question:
        'Ano ang tawag sa pagkilos ng tao mula isang lugar patungo sa iba?',
      answer: 'Paggalaw',
    },
    {
      question: 'Aling ilog ang tinuturing na sagradong ilog sa India?',
      answer: 'Ilog Ganges',
    },
    {
      question: 'Ano ang tawag sa paghahati ng mundo batay sa katangian nito?',
      answer: 'Rehiyon',
    },
    {
      question: 'Anong bansa sa Asya ang may pinakamaraming isla?',
      answer: 'Pilipinas',
    },
    {
      question: 'Ano ang tawag sa anyong tubig na napapalibutan ng lupa?',
      answer: 'Lawa',
    },
    {
      question:
        'Ano ang tawag sa mas maliit sa dagat ngunit mas malaki sa ilog?',
      answer: 'Look',
    },
    {
      question: 'Ano ang tawag sa ilog na umaagos papuntang dagat?',
      answer: 'Ilog',
    },
    {
      question:
        'Ano ang tawag sa malawak na bahagi ng karagatan na napalilibutan ng lupa?',
      answer: 'Golpo',
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
      <View style={{ backgroundColor: '#F7ECCA' }}>
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
    backgroundColor: '#F7ECCA',
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
    backgroundColor: '#F7ECCA',
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

export default AralPan7;
