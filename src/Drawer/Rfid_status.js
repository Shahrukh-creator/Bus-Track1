

import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableHighlight, StyleSheet } from 'react-native';
import CustomHeader from '../CustomHeader';
import firebase from '../../database/firebase';
import { DataTable } from 'react-native-paper';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

let RFID_Value = "";

export default class Rfid_status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: firebase.auth().currentUser.displayName,
            email: firebase.auth().currentUser.email,
            RFID_Tag:""
          }
       
      }

    // fetchitems = () => {
    //     firebase.database().ref('D0 EE D4 32').on('value', function (snapshot) {
    //         const exists = (snapshot.val() != null);

    //         if (exists)

    //         RFID_Value = parseFloat(snapshot.val());
    //         console.log('Tag 1: ', RFID_Value);

    //     })
        
    //     if(RFID_Value < 1)
    //     {
    //         this.setState({RFID_Tag:"Inactive"})
    //     }
    //     else{
    //         this.setState({RFID_Tag:"Active"})
    //     }


    // }

    componentDidMount()
    {
        firebase.database().ref('D0 EE D4 32').on('value', function (snapshot) {
            const exists = (snapshot.val() != null);

            if (exists)

            RFID_Value = parseFloat(snapshot.val());
            console.log('Tag 1: ', RFID_Value);

        })
        
        if(RFID_Value < 1)
        {
            this.setState({RFID_Tag:"Inactive"})
        }
        else{
            this.setState({RFID_Tag:"Active"})
        }


    }


  render() {

    return (
      <ImageBackground source={require('D:/React Native apps/track-full-app/assets/yellow_bus.jpg')} style={{ width: '100%', height: '100%' }}>
      <CustomHeader title="Bus Status" navigation={this.props.navigation} />
      <View style={{ flex: 1, paddingTop: 25,  }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <DataTable style={{ top: -255 }}>
            <DataTable.Header style={{ backgroundColor: 'lightblue' }}>
              <DataTable.Title style={{  justifyContent: 'center', alignItems: 'center'}}><Text style={{ fontSize:20,fontWeight:"bold"}}>Bus Services</Text></DataTable.Title>
              
            </DataTable.Header>

            <View style={{ backgroundColor: '#D1FDFF' }}>

            <DataTable.Row>
              <DataTable.Cell style={{ marginLeft:10}}><Text style={{ fontSize:15,fontWeight:"bold"}}>Route no:</Text></DataTable.Cell>
              <DataTable.Cell style={{ marginLeft:100}}><Text style={{ fontSize:10,}}>(9)</Text></DataTable.Cell>
            </DataTable.Row>

            
          <DataTable.Row>
            <DataTable.Cell style={{ marginLeft:10}}><Text style={{ fontSize:15,fontWeight:"bold"}}>Fee Status</Text></DataTable.Cell>
            <DataTable.Cell style={{ marginLeft:100}}><Text style={{ fontSize:20,color:"red"}}>{this.state.RFID_Tag}</Text></DataTable.Cell>
          </DataTable.Row>


          <DataTable.Row>
          <DataTable.Cell style={{ marginLeft:10}}><Text style={{ fontSize:15,fontWeight:"bold"}}>Address:</Text></DataTable.Cell>
          <DataTable.Cell style={{ marginLeft:-180}}><Text style={{ fontSize:10}}>Punjab Cooperative Housing Society Ghazi Road Lahore</Text></DataTable.Cell>
        </DataTable.Row>


            </View>

          </DataTable>

         
        </View>
       
      </View>

    </ImageBackground>

    );
  }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEF9E7',
        flex: 1,
        paddingTop: 300,
        padding: 90
      },
    
      appButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }

});



