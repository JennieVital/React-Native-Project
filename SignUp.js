import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    Alert.alert('Sign Up Successful', 'Welcome to ActiveRecall!');
    navigation.navigate('Login'); // Navigate to the Login screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/Images/SignUpWallpaper.jpg')} style={styles.background}>
        <View style={styles.textGroup}>
          <Text style={styles.greeting}>Welcome!</Text>
          <Text style={styles.welcome}>Create your account</Text>
        </View>
        <View style={styles.signUpBox}>
          <Text style={styles.signUp}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.divider}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.logIn}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  greeting: {
    fontSize: 60,
    color: 'white',
    fontWeight: 'bold'
  },
  welcome: {
    color: 'white',
    fontSize: 18
  },
  textGroup: {
    marginLeft: 30,
    marginBottom: 50
  },
  signUpBox: {
    height: 550,
    backgroundColor: '#EBEFEE',
    padding: 35,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  signUp: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4D7083',
    marginLeft: 20
  },
  input: {
    borderRadius: 20,
    paddingLeft: 19,
    margin: 13,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#4D7083',
    padding: 10,
    borderRadius: 50,
    width: 'auto',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    borderColor: 'black',
    borderTopWidth: 1,
    margin: 15,
    flexDirection: 'row',
    gap: 6,
    padding: 10,
    alignSelf: 'center'
  },
  logIn: {
    textDecorationLine: 'underline',
    color: '#4D7083'
  }
});