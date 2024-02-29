import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import Welcomescreen from './Welcomescreen'

const Homescreen = () => {
  return (
    <View >
      <Text>kolgkfjd
        <Button 
        title="go to" 
        onPress={() => navigation.navigate("Welcome")}/>
      </Text>

 

    </View>
    
  )
}

export default Homescreen

const styles = StyleSheet.create({})