import React from 'react';
import {Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

const FlashCards = ({ subjectTitle, backgroundImage, onPress }) => {
  return (
    <TouchableOpacity style={prop.container} onPress={onPress}>
      <ImageBackground source={backgroundImage} style={prop.background}>
        <Text style={prop.title}> {subjectTitle} </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}; 

const prop = StyleSheet.create({
  container: {
    marginRight: 5, 
    marginLeft: 30,
    overflow: 'hidden',
    borderRadius: 20,
    elevation: 8
  },
  background: {
    aspectRatio: 4 / 2.5,
    height: 200,
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 23,
    color: '#082029',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default FlashCards;