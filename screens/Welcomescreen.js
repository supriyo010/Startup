import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import React from 'react'


export default function Welcomescreen({navigation}){
  return (
   
    <View style={styles.headingContainer}>
        <Text
            className="text-white font-italic text-4xl text-center">
               
        </Text>
        <View className="hello">
    <Image source={require("..//assets/images/fud.png")}
     style={{width:350, height:350}} />                
            
        </View>
        <View className = "space-y-4 ">
                     
       
    
  
              
               
                    <View style={styles.signin}>
                    <Text
                    className= "text-xl font-bold text-center text-gray-700">
                       <Button  title="Sign in " style={styles.in} onPress={() => navigation.navigate("Signup")}/>  
                    </Text>
                    </View>
          
                    

          
            <View>
                <Text>Already have an account? <a  style={styles.up}>sign in</a></Text>
            </View>
        </View>

    </View>
  
  )
}


const styles = StyleSheet.create({
    headingContainer: {
		backgroundColor:'' ,
        
		padding: 10,
		borderRadius: 10,
		marginBottom: 20,
	},
     signin:{
     
        
        textAlign: 'center',

     },
in:{
    color: '#3498db',
    textAlign: 'center',
    alignItems:'center',
}
   
})