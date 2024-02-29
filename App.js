import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './screens/Homescreen';
import Welcomescreen from './screens/Welcomescreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import Slider from './screens/Slider';





const Stack = createStackNavigator();

function MyStack() {
  return (

      <Stack.Navigator initialRouteName="Slider">
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="Welcome" component={Welcomescreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Slider" component={Slider} />

 
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}