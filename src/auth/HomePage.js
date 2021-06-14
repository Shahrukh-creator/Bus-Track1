import React, { Component } from 'react';
import {  Text, View,  StyleSheet, SafeAreaView, TouchableHighlight } from 'react-native';
import { ImageBackground } from 'react-native';

export default class HomePage extends Component {
 
  render() {
    return (
       <ImageBackground source = {require('D:/React Native apps/track-full-app/assets/yellow_bus.jpg')} style = {{width: '100%', height: '100%'}}>
   


       <SafeAreaView style = {styles.container}>

          <View style ={styles.spaceText}></View>

          <TouchableHighlight 
          style ={{
            elevation: 8,
            backgroundColor: "sandybrown",
            borderRadius: 1010,
            paddingVertical: 10,
            paddingHorizontal: 1
                           
          }}
          onPress = {() => this.props.navigation.navigate('SignIn')}>
          <Text style = {styles.appButtonText}>Sign In</Text>
          </TouchableHighlight>

          <View style ={styles.spaceText}><Text style ={{color: "whitesmoke"}}>Dont have an account?</Text></View>
    
          <TouchableHighlight 
          style ={{
            elevation: 8,
            backgroundColor: "sandybrown",
            borderRadius: 1010,
            paddingVertical: 10,
            paddingHorizontal: 1
                        
          }}
          onPress = {() => this.props.navigation.navigate('Register')}>
          <Text style = {styles.appButtonText}>Sign Up</Text>
          </TouchableHighlight>

         <View style ={{marginLeft:15,paddingTop:295}}>
         <Text style ={{fontSize:15,color:'sandybrown'}}>
         @Bus Track App 2021 
         </Text>
         </View>
         </SafeAreaView>

   </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:265,
    padding: 90
  },
 
 spaceText: {
    paddingTop:35,
    marginLeft:20
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
 
});





































// import React, { Component } from 'react';
// import {  Text, View,  StyleSheet, SafeAreaView, TouchableHighlight } from 'react-native';
// import { ImageBackground } from 'react-native';

// export default class HomePage extends Component {
 
//   render() {
//     return (
//        <SafeAreaView style = {styles.container}>

//           <View style ={styles.spaceText}></View>

//           <TouchableHighlight 
//           style ={{
//             elevation: 8,
//             backgroundColor: "limegreen",
//             borderRadius: 1010,
//             paddingVertical: 10,
//             paddingHorizontal: 1
                           
//           }}
//           onPress = {() => this.props.navigation.navigate('SignIn')}>
//           <Text style = {styles.appButtonText}>Sign In</Text>
//           </TouchableHighlight>

//           <View style ={styles.spaceText}><Text style ={{color: "whitesmoke"}}>Dont have an account?</Text></View>
    
//           <TouchableHighlight 
//           style ={{
//             elevation: 8,
//             backgroundColor: "limegreen",
//             borderRadius: 1010,
//             paddingVertical: 10,
//             paddingHorizontal: 1
                        
//           }}
//           onPress = {() => this.props.navigation.navigate('Register')}>
//           <Text style = {styles.appButtonText}>Sign Up</Text>
//           </TouchableHighlight>

//          <View style ={{marginLeft:15,paddingTop:295}}>
//          <Text style ={{fontSize:15,color:'limegreen'}}>
//          @Bus Track App 2021 
//          </Text>
//          </View>
//          </SafeAreaView>
      
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop:265,
//     padding: 90,
//     backgroundColor:"cornsilk"
//   },
 
//  spaceText: {
//     paddingTop:35,
//     marginLeft:20
//   },
//   appButtonText: {
//     fontSize: 18,
//     color: "#fff",
//     fontWeight: "bold",
//     alignSelf: "center",
//     textTransform: "uppercase"
//   }
 
// });