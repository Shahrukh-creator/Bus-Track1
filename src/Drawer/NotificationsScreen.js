import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import CustomHeader from '../CustomHeader';
import Notification1 from './Notification1';

export default class NotificationsScreen extends Component {
 
  render() {
    return (
      <ImageBackground source={require('D:/React Native apps/track-full-app/assets/yellow_bus.jpg')} style={{ width: '100%', height: '100%' }}>

        <CustomHeader title = "Notifications" navigation = {this.props.navigation}/>
        <View style={{ flex: 1,paddingTop:25, justifyContent: 'center', alignItems: 'center' }}>
          
        </View>
        </ImageBackground>
        
    );
  }
}
