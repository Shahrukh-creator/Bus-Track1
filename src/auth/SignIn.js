import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, ActivityIndicator } from 'react-native';
import firebase from '../../database/firebase';
import CustomHeader from '../CustomHeader';
import { ImageBackground } from 'react-native';


export default class SignIn extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res)
          console.log('User logged-in successfully!')
          this.setState({
            isLoading: false,
            email: '',
            password: ''
          })
          this.props.navigation.navigate('HomeApp')

        })
        .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <ImageBackground source={require('D:/React Native apps/track-full-app/assets/yellow_bus.jpg')} style={{ width: '100%', height: '100%' }}>

          <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E" />
          </View>
        </ImageBackground>
      )
    }
    return (
      <ImageBackground source={require('D:/React Native apps/track-full-app/assets/yellow_bus.jpg')} style={{ width: '100%', height: '100%' }}>

      <View style={{ flex: 1, position: 'absolute', width: 370, top: 1 }}>
      <CustomHeader title="Sign In" navigation={this.props.navigation} />
      </View> 

      <View style={styles.container}>

          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            placeholderTextColor = "snow"
            value={this.state.email}
            onChangeText={(val) => this.updateInputVal(val, 'email')}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            placeholderTextColor = "snow"
            value={this.state.password}
            onChangeText={(val) => this.updateInputVal(val, 'password')}
            maxLength={15}
            secureTextEntry={true}
          />
         
          <TouchableHighlight 
          style ={{
            elevation: 8,
            backgroundColor: "sandybrown",
            borderRadius: 1010,
            paddingVertical: 10,
            paddingHorizontal: 1
                        
          }}
          onPress={() => this.userLogin()}>
          <Text style = {styles.appButtonText}>Sign in</Text>
          </TouchableHighlight>

          <Text
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('Register')}>
            Don't have account? Click here to signup
                  </Text>
        </View>
       
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    paddingTop: 155,
   
  },
  inputStyle: {
    width: '90%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "whitesmoke",
    fontSize:20,
    borderRadius:20,
    paddingVertical:15,
    color:'snow',
    backgroundColor:'sandybrown'
  },
  loginText: {
    color: 'whitesmoke',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
































































// import * as React from 'react';
// import {StyleSheet, View, Text, Image } from 'react-native';
// import AppLoading from 'expo-app-loading';
// import { Asset } from 'expo-asset';
// import LoginApp from './Login_animation';

// function cacheImages(images) {
//   return images.map(image => {
//     if (typeof image === 'string') {
//       return Image.prefetch(image);
//     } else {
//       return Asset.fromModule(image).downloadAsync();
//     }
//   });
// }

// export default class SignIn extends React.Component {
//   state = {
//     isReady: false,
//   };

//   async _loadAssetsAsync() {
//     const imageAssets = cacheImages([require("../../assets/green.jpg")]);

//     await Promise.all([...imageAssets]);
//   }

//   render() {
//     if (!this.state.isReady) {
//       return (
//         <AppLoading
//           startAsync={this._loadAssetsAsync}
//           onFinish={() => this.setState({ isReady: true })}
//           onError={console.warn}
//         />
//       );
//     }

//     return <LoginApp/>
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });