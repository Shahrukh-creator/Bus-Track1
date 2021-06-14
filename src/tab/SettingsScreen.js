import React, { Component } from 'react';
import { Text,View, TouchableHighlight, StyleSheet, ScrollView,TextInput, Button, Alert  } from 'react-native';
import CustomHeader from '../CustomHeader';
import { Ionicons } from '@expo/vector-icons';

export default class SettingsScreen extends Component {

  constructor(props)
  {
    super(props);

  }

  render() {
    return (
      <ScrollView style={styles.container}>
      <CustomHeader title="Settings" navigation={this.props.navigation} />
     
      <View style={styles.space1} />
      <TouchableHighlight 
      style ={{
        elevation: 8,
        backgroundColor: "sandybrown",
        borderRadius: 0,
        paddingVertical: 20,
        paddingHorizontal: 10,
                    
      }}
      onPress={() => this.props.navigation.navigate('SettingsPasswordDetail')}>

      <Ionicons name="ios-settings" size={20} style={{color:'whitesmoke'}}>
          <Text   style={styles.appButtonText}>  Change Password</Text>
          </Ionicons>
      </TouchableHighlight>

      <View style={styles.space1} />
      
      <TouchableHighlight 
      style ={{
        elevation: 8,
        backgroundColor: "sandybrown",
        borderRadius: 0,
        paddingVertical: 20,
        paddingHorizontal: 10,
                    
      }}
      onPress={() => this.props.navigation.navigate('SettingsEmailDetail')}>
      <Ionicons name="ios-settings" size={20} style={{color:'whitesmoke'}}>
          <Text   style={styles.appButtonText}>  Change Email</Text>
          </Ionicons>
      </TouchableHighlight>

        </ScrollView>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEF9E7',
    flex: 1,
  
  },
  space: {
    width: 10, // or whatever size you need
    height: 10,
  },
  space1: {
    width: 1, // or whatever size you need
    height: 1,
  },
  appButtonText: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    // textTransform: "uppercase",
    color:'whitesmoke'
  }

});
