import { StyleSheet, Text, TextInput, View , Image , Button } from 'react-native'
import React from 'react'

 export default function SignUpScreen({navigation})  {
  
  return (
    <View>
     
      
      
  
    <View className="flex-row justify-center">
    <Image source={require("..//assets/images/sign.png")}
     style={{width:350, height:350}} />  
    </View>
    <TextInput
      style={styles.input}
      placeholder={"username"}/>

          <TextInput
      style={styles.input}
      placeholder={"Password"}/>
      <Text>
        <Button  title="Login " style={styles.in} onPress={() => navigation.navigate("Login")}/> 
        </Text> 
    </View>
   
  )
}



const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
})