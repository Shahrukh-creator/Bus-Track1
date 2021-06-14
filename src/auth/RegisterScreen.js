// import React, { Component } from 'react';
// import { StyleSheet, Image, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
// import CustomHeader from '../CustomHeader';
// import firebase from '../../database/firebase';

// export default class RegisterScreen extends Component {

//     constructor() {
//         super();
//         this.state = { 
//           displayName: '',
//           email: '', 
//           password: '',
//           isLoading: false
//         }
//       }

//       updateInputVal = (val, prop) => {
//         const state = this.state;
//         state[prop] = val;
//         this.setState(state);
//       }

//       registerUser = () => {
//         if(this.state.email === '' && this.state.password === '') {
//           Alert.alert('Enter details to signup!')
//         } else {
//           this.setState({
//             isLoading: true,
//           })
//           firebase
//           .auth()
//           .createUserWithEmailAndPassword(this.state.email, this.state.password)
//           .then((res) => {
//             res.user.updateProfile({
//               displayName: this.state.displayName
//             })
//             console.log('User registered successfully!')
//             this.setState({
//               isLoading: false,
//               displayName: '',
//               email: '', 
//               password: ''
//             })
//             this.props.navigation.navigate('SignIn')
//           })
//           .catch(error => this.setState({ errorMessage: error.message }))      
//         }
//       }

//       render() {
//         if(this.state.isLoading){
//           return(
//             <View style={styles.preloader}>
//               <ActivityIndicator size="large" color="#9E9E9E"/>
//             </View>
//           )
//         }    
//         return (
//           <View style={styles.container}> 
//           <Image  
//           style = {{flex:1,position:'absolute',width:150,top:95,height:150,marginLeft:100}}   

//             source = {require('D:/React Native apps/track-app1/assets/Bus_Track.png')}
//             />
//             <View style = {{flex:1,position:'absolute',width:350,top:15}}>
//           <CustomHeader  title = "Sign Up" navigation = {this.props.navigation}/>
//           </View>


//             <TextInput
//               style={styles.inputStyle}
//               placeholder="Name"
//               value={this.state.displayName}
//               onChangeText={(val) => this.updateInputVal(val, 'displayName')}
//             />      
//             <TextInput
//               style={styles.inputStyle}
//               placeholder="Email"
//               value={this.state.email}
//               onChangeText={(val) => this.updateInputVal(val, 'email')}
//             />
//             <TextInput
//               style={styles.inputStyle}
//               placeholder="Password"
//               value={this.state.password}
//               onChangeText={(val) => this.updateInputVal(val, 'password')}
//               maxLength={15}
//               secureTextEntry={true}
//             />   
//             <View style={styles.butttonStyle}>
//             <Button
//               color="#161D70"
//               title="Sign up"
//               onPress={() => this.registerUser()}
//             />
//             </View>

//             <Text 
//               style={styles.loginText}
//               onPress={() => this.props.navigation.navigate('SignIn')}>
//               Already Registered? Click here to login
//             </Text>                          
//           </View>
//         );
//       }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       padding: 35,
//       paddingTop:155,
//       backgroundColor:'#FEF9E7'

//     },
//     inputStyle: {
//       width: '100%',

//       top:45,
//       marginBottom: 15,
//       paddingBottom: 15,
//       alignSelf: "center",
//       borderColor: "#ccc",
//       borderBottomWidth: 1
//     },
//     butttonStyle: {

//       top: 35,

//     },
//     loginText: {
//       color: '#161D70',
//       marginTop: 55,
//       textAlign: 'center',

//     },

//   });






































import React, { Component } from 'react';
import { StyleSheet, ImageBackground,TouchableHighlight, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import CustomHeader from '../CustomHeader';
import firebase from '../../database/firebase';

export default class RegisterScreen extends Component {

  constructor() {
    super();
    this.state = {
      displayName: '',
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

  registerUser = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName
          })
          console.log('User registered successfully!')
          this.setState({
            isLoading: false,
            displayName: '',
            email: '',
            password: ''
          })
          this.props.navigation.navigate('SignIn')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      )
    }
    return (

      <ImageBackground source={require('D:/React Native apps/track-full-app/assets/yellow_bus.jpg')} style={{ width: '100%', height: '100%' }}>


        <View style={{ flex: 1, position: 'absolute', width: 370, top: 1 }}>
          <CustomHeader title="Sign Up" navigation={this.props.navigation} />
        </View>
        <View style={styles.container}> 

        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          placeholderTextColor = "snow"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />
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
        onPress={() => this.registerUser()}>
        <Text style = {styles.appButtonText}>Sign Up</Text>
        </TouchableHighlight>


        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('SignIn')}>
          Already Registered? Click here to login
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
    paddingTop: 210,
   
  },
  inputStyle: {
    width: '90%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "whitesmoke",
    borderRadius:20,
    paddingVertical:15,
    fontSize:20,
    color:'snow',
    backgroundColor:'sandybrown'
  },
  loginText: {
    color: 'whitesmoke',
    marginTop: 25,
    textAlign: 'center'
  },
  
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }

});