import React from 'react';
import { ScrollView, View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FlashCards from './FlashCardComponent';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('./assets/Images/Dashboard.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Active Recall</Text>
          <Text style={styles.subtitle}>Ready to start your day!</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Discover More</Text>
          <ScrollView horizontal style={styles.cardContainer}>
            <FlashCards
              subjectTitle="Mathematics"
              backgroundImage={require('./assets/Images/Mathematics.jpg')}
              onPress={() => navigation.navigate('Math7')} />
            <FlashCards
              subjectTitle="English"
              backgroundImage={require('./assets/Images/English.jpg')} 
              onPress={() => navigation.navigate('English7')} />
            <FlashCards
              subjectTitle="Filipino"
              backgroundImage={require('./assets/Images/Filipino.jpg')}
              onPress={() => navigation.navigate('Filipino7')} />
            <FlashCards
              subjectTitle="Science"
              backgroundImage={require('./assets/Images/Science.jpg')}
              onPress={() => navigation.navigate('Science7')} />
              <FlashCards
              subjectTitle="Technology and Livelihood Education 7"
              backgroundImage={require('./assets/Images/TLE.jpg')}
              onPress={() => navigation.navigate('TLE7')} />
              <FlashCards
              subjectTitle="Araling Panlipunan"
              backgroundImage={require('./assets/Images/AralPan.jpg')}
              onPress={() => navigation.navigate('AralPan7')} />
              <FlashCards
              subjectTitle="Edukasyon sa Pagpapakatao"
              backgroundImage={require('./assets/Images/ESP.jpg')}
              onPress={() => navigation.navigate('ESP7')} />
              <FlashCards
              subjectTitle="MAPEH"
              backgroundImage={require('./assets/Images/MAPEH.jpg')}
              onPress={() => navigation.navigate('MAPEH7')} />
          </ScrollView>
          <Text style={styles.mineText}>Mine</Text>
          <ScrollView horizontal style={styles.cardContainer}>
            <FlashCards
              subjectTitle="+"
              backgroundImage={require('./assets/Images/AddCard.jpg')}
              onPress={() => navigation.navigate('CreateDetails')}/> 
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    marginLeft: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#EBEFEE',
  },
  subtitle: {
    fontSize: 20,
    color: '#EBEFEE',
    marginLeft: 20,
  },
  cardContainer: {
    height: 190,
    alignItems: 'center'
  },
  section: {
    backgroundColor: '#EBEFEE',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30,
    height: 700
  },
  sectionTitle: {
    fontSize: 20,
    color: '#082029',
    fontWeight: 'bold',
    marginLeft: 30,
    marginBottom: 10,
  },
  mineText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10
  }
});