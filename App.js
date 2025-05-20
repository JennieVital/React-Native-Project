import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login'; 
import SignUp from './SignUp';
import Home from './Home'; 
import Preview from './preview';
import Math7 from './Math7';
import English7 from './English7';
import Filipino7 from './Filipino7';
import Science7 from './Science7';
import TLE7 from './TLE7';
import AralPan7 from './AralPan7';
import ESP7 from './ESP7';
import MAPEH7 from './MAPEH7';
import CreateCard from './CreateCard';
import CreateDetails from './CreateDetails';

const Stack = createStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Preview" component={Preview} />
        <Stack.Screen name="Math7" component={Math7} />
        <Stack.Screen name="Science7" component={Science7} />
        <Stack.Screen name="Filipino7" component={Filipino7} />
        <Stack.Screen name="English7" component={English7} />
        <Stack.Screen name="AralPan7" component={AralPan7} />
        <Stack.Screen name="ESP7" component={ESP7} />
        <Stack.Screen name="TLE7" component={TLE7} />
        <Stack.Screen name="MAPEH7" component={MAPEH7} />
        <Stack.Screen name="CreateCard" component={CreateCard} />
        <Stack.Screen name="CreateDetails" component={CreateDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}