import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CreateCard from './CreateCard';
import PreviewCard from './preview';

const Drawer = createDrawerNavigator();

export default function CreateDetails() {
  const [cards, setCards] = useState([]); //for all cards

  const addCard = (card) => {
    setCards((prevCards) => [...prevCards, card]); // Add new card 
  };

  return (
    <Drawer.Navigator initialRouteName="Card List">
      <Drawer.Screen name="Card List">
        {({ navigation }) => (
          <CardList cards={cards} navigation={navigation} />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Create Card">
        {({ navigation }) => (
          <CreateCard navigation={navigation} addCard={addCard} />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Preview Card">
        {({ route, navigation }) => (
          <PreviewCard route={route} navigation={navigation} />
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

function CardList({ cards, navigation }) {
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() =>
        navigation.navigate('Preview Card', {
          question: item.question,
          answer: item.answer,
          backgroundColor: item.backgroundColor,
        })
      }
    >
      <Text style={styles.cardTitle}>CARD {index + 1}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.cardList}>
      <Text style={styles.title}>Preview Cards</Text>
      <FlatList
        data={cards}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <View>
            <View>
              <Text>No cards available. Create a new card!</Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('Create Card')}
              >
                <Text style={styles.addButtonText}>Create Card</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.homeWrapper}>
              <TouchableOpacity
                style={styles.homeButton}
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={styles.buttonText}>Back to Home</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardList: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF3E2',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardItem: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  homeWrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
  homeButton: {
    backgroundColor: '#5EAAA8',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});