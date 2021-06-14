import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../../database/firebase';

export default class SignOut extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          uid: ''
        }
      }
    
      signOut = () => {
        firebase.auth().signOut().then(() => {
          console.log("Signed Out")
          this.props.navigation.navigate('HomePage')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
      }  
    
      render() {
        
        this.state = { 
     
          uid: firebase.auth().currentUser.uid
        }
        
        return (
          <View>
            

            {this.signOut()}
    
          
          </View>
        );
      }
    }
    
   
    
    
