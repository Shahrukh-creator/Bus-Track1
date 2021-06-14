import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import CustomHeader from '../CustomHeader';

export default class HomeScreenDetail extends Component {

  render() {
    return (
      <ImageBackground source={require('D:/React Native apps/track-full-app/assets/yellow_bus.jpg')} style={{ width: '100%', height: '100%' }}>
        <CustomHeader title="Home Detail" navigation={this.props.navigation} />


        <View style={{ flex: 1, justifyContent: 'center', paddingTop: 25, alignItems: 'center' }}>

          <Text style = {{color:'whitesmoke',fontSize:18}}>Home Details</Text>


        </View>
      </ImageBackground>
    );
  }
}
