import React, { Component } from 'react';
import { Text, View,StyleSheet, SafeAreaView, TouchableOpacity, Button, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firebase from '.././database/firebase';


export default class CustomDrawerContent extends Component {
 
  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      email: firebase.auth().currentUser.email
    } 

    return (
        <SafeAreaView style = {{flex:1, backgroundColor:'sandybrown',paddingTop:20}}>
        <ScrollView     style={{marginLeft:15}}>
        <View style = {{flexDirection:'row',alignItems: 'center',height:75}}>
         <Ionicons name="md-person" size={80} style = {{paddingTop:95,margin:100,color:'whitesmoke'}} />
         </View>
         <Text style = {{marginTop:70,marginLeft:95,color:'whitesmoke'}}>
         {this.state.displayName} 
       </Text>
       <Text style = {{margin:10,marginTop:0,marginLeft:65,color:'whitesmoke'}}> 
       {this.state.email}
       </Text>
         
         
        <TouchableOpacity
        style={styles.iconsSpace}
          onPress = {() => this.props.navigation.navigate('MenuTab')}
          >
          <Ionicons name="ios-home" size={30} style={{color:'whitesmoke'}}>
          <Text   style={{fontSize:20,color:'whitesmoke'}}>  Home</Text>
          </Ionicons>

       
          </TouchableOpacity>
    
          <TouchableOpacity
          style={styles.iconsSpace}
          onPress = {() => this.props.navigation.navigate('Notifications')}
          >

          <Ionicons name="ios-notifications" size={30} style={{color:'whitesmoke'}}>
          <Text   style={{fontSize:20,color:'whitesmoke'}}>  Notifications</Text>
          </Ionicons>

         
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.iconsSpace}
          onPress = {() => this.props.navigation.navigate('SelectRoute')}
          >
          <Ionicons name="ios-bus" size={30} style={{color:'whitesmoke'}}>
          <Text   style={{fontSize:20,color:'whitesmoke'}}>  Track Route</Text>
          </Ionicons>

         
          </TouchableOpacity>
        
          <TouchableOpacity
          style={styles.iconsSpace}
          onPress = {() => this.props.navigation.navigate('RFID_Status')}
          >
          <Ionicons name="newspaper" size={30} style={{color:'whitesmoke'}}>
          <Text   style={{fontSize:20,color:'whitesmoke'}}>  Check Status</Text>
          </Ionicons>
         
          </TouchableOpacity>


          <TouchableOpacity
          style={styles.iconsSpace}
          onPress = {() => this.props.navigation.navigate('Bus_Schedule')}
          >
          <Ionicons name="newspaper" size={30} style={{color:'whitesmoke'}}>
          <Text   style={{fontSize:20,color:'whitesmoke'}}> Bus Schedule</Text>
          </Ionicons>
         
          </TouchableOpacity>
          
          <TouchableOpacity
          style={styles.iconsSpace}
          onPress = {() => this.props.navigation.navigate('SignOut')}
          >
          <Ionicons name="ios-log-out" size={30} style={{color:'whitesmoke'}}>
          <Text   style={{fontSize:20,color:'whitesmoke'}}>  Log Out</Text>
          </Ionicons>
         
          </TouchableOpacity>
        </ScrollView>
        
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  iconsSpace:{
    marginTop:50

  }
});