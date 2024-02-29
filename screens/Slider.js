import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Imagesslider from './pages/Imagesslider'


const Slider = () => {
  return (
    <View >
      <Text >Slider</Text>
      <View style={styles.slider} className="hello">
    <Image source={require("..//assets/images/fud.png")}
     style={{width:50, height:50}} />
      <View className="hello">
    <Image source={require("..//assets/images/fud.png")}
     style={{width:50, height:50}} />                
             <View className="hello">
    <Image source={require("..//assets/images/fud.png")}
     style={{width:50, height:50}} />                
            <View >
        <Image source={require("..//assets/images/fud.png")}
           style={{width:350, height:350}}  />
        </View>
        </View>
        </View>
        

            
        </View>


      


     <Imagesslider/>
   
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({ 
    slider:{
       
        backgroundColor:'',
    }
})