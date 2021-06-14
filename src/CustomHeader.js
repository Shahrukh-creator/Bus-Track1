import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class CustomHeader extends Component {
 
  render() {
      let {navigation, isHome, title} = this.props
    return (
        <View style = {{flexDirection:'row', height:75,backgroundColor:'sandybrown'}}>
        <View style = {{flex:1,}}>
      { isHome?
      
        <TouchableOpacity onPress = {() => navigation.openDrawer()} >
        <Ionicons name="ios-menu" size={45} style = {{paddingTop:10,margin:10,color:'whitesmoke'}} />
        </TouchableOpacity>
         
         :
         <TouchableOpacity 
         style = {{paddingTop:10,flexDirection:'row',alignItems: 'center',height:75}}
         onPress = {() => navigation.goBack()}
         >
         <Ionicons name="ios-arrow-back" size={30} style = {{paddingTop:3,margin:20,color:'whitesmoke'}} />
    
         </TouchableOpacity>
      }
      </View>
        
        <View style = {{flex:1.5,justifyContent: 'center'}}>
        <Text style = {{paddingTop:10,textAlign:'center',fontSize:20,color:'whitesmoke'}}>{title}</Text>
        </View>
    
    
        <View style = {{flex:1}}></View>
    
    
        </View>
    
    );
  }
}



// <Text style = {{fontSize:15,color:'whitesmoke'}}>Back</Text>