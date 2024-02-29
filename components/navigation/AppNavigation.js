import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Homescreen from '../../screens/Homescreen'
import SignUpScreen from '../../screens/SignUpScreen'
import LoginScreen from '../../screens/LoginScreen'
import Welcomescreen from '../../screens/Welcomescreen'

const AppNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='navigation'>
        <Stack.Screen name='Home' options={{headersShown: false}} component={Homescreen}/>
        <Stack.Screen name='Welcome' options={{headersShown: false}} component={Welcomescreen}/>
        <Stack.Screen name='Login' options={{headersShown: false}} component={LoginScreen}/>
        <Stack.Screen name='SignUp' options={{headersShown: false}} component={SignUpScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})