import { StyleSheet, Text, Touchable, TouchableOpacity, View , Image,Button} from 'react-native'
import React, {useState, useRef} from 'react';


      






export default function LoginScreen({navigation})  {
  
  return (
   <>
   <View> 
   
   <Image source={require("..//assets/images/adda.png")}   
   style={{width:350, height:350}} /> 
   <h1 style={styles.wel}>welcome to fudo </h1>
   <Button title="Add" onPress={()=>navigation.navigate("Slider")}/>

   

      </View>

   </>
    
  )
}



const styles = StyleSheet.create({
  wel:{
    color:"#3498db",
    textAlign:"center",

  }
})