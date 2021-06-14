// import React, { Component } from 'react';
// import { Text, View, SafeAreaView, ImageBackground } from 'react-native';
// import CustomHeader from '../CustomHeader';

// export default class SettingsScreenDetail extends Component {

//   render() {
//     return (
//       <ImageBackground source={require('D:/React Native apps/track-app1/assets/yellow_bus.jpg')} style={{ width: '100%', height: '100%' }}>

//         <CustomHeader title="Settings Detail" navigation={this.props.navigation} />
//         <View style={{ flex: 1, paddingTop: 25, justifyContent: 'center', alignItems: 'center' }}>

//           <Text style={{ color: 'whitesmoke', fontSize: 18 }}>Screen Details</Text>


//         </View>
//       </ImageBackground>
//     );
//   }
// }
















import React, { Component } from 'react';
import { Text,View, TouchableHighlight, StyleSheet, ScrollView,TextInput, Button, Alert  } from 'react-native';
import CustomHeader from '../CustomHeader';
import firebase from '../../database/firebase';

export default class SettingsScreenDetail extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      newPassword: "",
      currentPassword:"",
      newEmail: "",
      error1:"Password Should be atleast 6 letters"
    }

  }

  reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
        user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  }


  onChangeEmail = () =>
  {

    this.reauthenticate(this.state.currentPassword).then(() => {

      var user = firebase.auth().currentUser;
      user.updateEmail(this.state.newEmail).then(() => {
        Alert.alert("Email was Changed");
      }).catch((error) =>{
        Alert.alert(error.message);
  
      });

    }).catch((error) =>{
      Alert.alert(error.message);

    });

  }
 

  render() {
    return (
      <ScrollView style={styles.container}>
      <CustomHeader title="Settings Detail" navigation={this.props.navigation} />
      
      <TextInput
      style = {styles.textInput}
      value = {this.state.currentPassword}
      placeholder = "Current Password"
      autoCapitalize = "none"
      secureTextEntry ={true}
      onChangeText ={(text) => {this.setState({currentPassword: text})}}
      />
     
      <TextInput
      style = {styles.textInput}
      value = {this.state.newEmail}
      placeholder = "New Email"
      autoCapitalize = "none"
      secureTextEntry ={false}
      onChangeText ={(text) => {this.setState({newEmail: text})}}
      />

      <Button title = "New Email"  onPress = {this.onChangeEmail}/>

        </ScrollView>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEF9E7',
    flex: 1,
  
  },

  textInput: {
 borderWidth:1,
 borderColor:'gray',
 marginVertical:20,
 padding:10,
 height:40,
 alignItems:'center',

  },
 
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }

});
