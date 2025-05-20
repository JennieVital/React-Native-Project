import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    Alert.alert('Login Successful', `Welcome, ${email}`);
    navigation.navigate('Home'); // Navigate to Home
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/Images/SignUpWallpaper.jpg')}
        style={styles.background}>
        <View style={styles.textGroup}>
          <Text style={styles.greeting}>Hello!</Text>
          <Text style={styles.welcome}>Welcome to Active Recall</Text>
        </View>

        <View style={styles.loginBox}>
          <Text style={styles.logIn}>Log In</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.divider}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textGroup: {
    marginLeft: 30,
    marginBottom: 50,
  },
  greeting: {
    fontSize: 60,
    color: 'white',
    fontWeight: 'bold',
  },
  welcome: {
    color: 'white',
    fontSize: 18,
  },
  loginBox: {
    height: 450,
    backgroundColor: '#EBEFEE',
    padding: 35,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  logIn: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4D7083',
    marginLeft: 20,
  },
  input: {
    borderRadius: 20,
    paddingLeft: 19,
    margin: 13,
    backgroundColor: 'white',
    height: 50,
  },
  forgotPassword: {
    color: '#4D7083',
    fontSize: 14,
    marginLeft: 'auto',
    marginRight: 18,
    textDecorationLine: 'underline',
    marginBottom: 35,
  },
  button: {
    backgroundColor: '#4D7083',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
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
    alignSelf: 'center',
  },
  signUp: {
    textDecorationLine: 'underline',
    color: '#4D7083',
  },
});

export default LoginScreen;
