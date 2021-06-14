// import React, { Component } from 'react';
// import { Text, View, SafeAreaView, TouchableHighlight,Button, StyleSheet } from 'react-native';
// import CustomHeader from '../CustomHeader';
// import firebase from '../../database/firebase';
// import { DataTable } from 'react-native-paper';

// export default class HomeScreen extends Component {


//   render() {
//     this.state = { 
//       displayName: firebase.auth().currentUser.displayName,
//       email: firebase.auth().currentUser.email
//     } 

//     return (
//         <SafeAreaView style = {{flex:1,paddingTop:25,backgroundColor:'#FEF9E7'}}>
//         <CustomHeader title = "Home" isHome={true} navigation={this.props.navigation}/>
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <DataTable style = {{top:-240}}>
//         <DataTable.Header style = {{backgroundColor:'skyblue'}}>
//           <DataTable.Title >Name</DataTable.Title>
//           <DataTable.Title  style = {{marginLeft:80}}>Email</DataTable.Title>
//           <DataTable.Title style = {{marginLeft:60}}>Roll No</DataTable.Title>
//         </DataTable.Header>

//         <DataTable.Row>
//           <DataTable.Cell>{this.state.displayName} </DataTable.Cell>
//           <DataTable.Cell>{this.state.email}</DataTable.Cell>
//           <DataTable.Cell>            {this.state.email}</DataTable.Cell>
//         </DataTable.Row>

//       </DataTable>




//           <Button
//           title = 'Home Details'
//           color='#161D70'
//           style = {{paddingTop:40}}
//           onPress = {() => this.props.navigation.navigate('HomeDetail')}
//           />

//         </View>
//         </SafeAreaView>
//     );
//     }
// }



// const styles = StyleSheet.create({
//   container: {
//     backgroundColor:'#FEF9E7',
//     flex:1,
//     paddingTop:300,
//     padding: 90
//   },

//  spaceText: {
//     paddingTop:35,
//     marginLeft:20

//   },

// });




























import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableHighlight, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import CustomHeader from '../CustomHeader';
import firebase from '../../database/firebase';
import { DataTable } from 'react-native-paper';

export default class HomeScreen extends Component {


  render() {
    this.state = {
      displayName: firebase.auth().currentUser.displayName,
      email: firebase.auth().currentUser.email
    }

    return (
      <ImageBackground source={require('D:/React Native apps/track-full-app/assets/yellow_bus.jpg')} style={{ width: '100%', height: '100%' }}>
        <CustomHeader title="Home" isHome={true} navigation={this.props.navigation} />
        <ScrollView>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <DataTable style={{ top: 5 }}>
          <DataTable.Header style={{ backgroundColor: 'lightblue' }}>
            <DataTable.Title style={{  justifyContent: 'center', alignItems: 'center'}}><Text style={{ fontSize:20,fontWeight:"bold"}}>Personal Info</Text></DataTable.Title>

          </DataTable.Header>

          <View style={{ backgroundColor: '#D1FDFF' }}>

          <DataTable.Row>
            <DataTable.Cell style={{ marginLeft:10}}><Text style={{ fontSize:15,fontWeight:"bold"}}>Name:</Text></DataTable.Cell>
            <DataTable.Cell style={{ marginLeft:100}}><Text style={{ fontSize:10,}}>{this.state.displayName}</Text></DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          <DataTable.Cell style={{ marginLeft:10}}><Text style={{ fontSize:15,fontWeight:"bold"}}>Email:</Text></DataTable.Cell>
          <DataTable.Cell style={{ marginLeft:60}}><Text style={{ fontSize:10,}}>{this.state.email}</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell style={{ marginLeft:10}}><Text style={{ fontSize:15,fontWeight:"bold"}}>Phone no:</Text></DataTable.Cell>
          <DataTable.Cell style={{ marginLeft:100}}><Text style={{ fontSize:10}}>0323-5178697</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell style={{ marginLeft:10}}><Text style={{ fontSize:15,fontWeight:"bold"}}>Address:</Text></DataTable.Cell>
          <DataTable.Cell style={{ marginLeft:-180}}><Text style={{ fontSize:10}}>Punjab Cooperative Housing Society Ghazi Road Lahore</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell style={{ marginLeft:10}}><Text style={{ fontSize:15,fontWeight:"bold"}}>City:</Text></DataTable.Cell>
          <DataTable.Cell style={{ marginLeft:120}}><Text style={{ fontSize:10}}>Lahore</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell style={{ marginLeft:10}}><Text style={{ fontSize:15,fontWeight:"bold"}}>Postal Code:</Text></DataTable.Cell>
          <DataTable.Cell style={{ marginLeft:120}}><Text style={{ fontSize:10}}>5400</Text></DataTable.Cell>
        </DataTable.Row>
          </View>

        </DataTable>



        <DataTable style={{ top: 10 }}>
        <DataTable.Header style={{ backgroundColor: 'lightblue' }}>
          <DataTable.Title style={{  justifyContent: 'center', alignItems: 'center'}}><Text style={{ fontSize:20,fontWeight:"bold"}}>Academic Info</Text></DataTable.Title>

        </DataTable.Header>

        <View style={{ backgroundColor: '#D1FDFF' }}>

        <DataTable.Row>
          <DataTable.Cell style={{ marginLeft:10}}><Text style={{ fontSize:15,fontWeight:"bold"}}>Name:</Text></DataTable.Cell>
          <DataTable.Cell style={{ marginLeft:100}}><Text style={{ fontSize:10,}}>{this.state.displayName}</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
        <DataTable.Cell style={{ marginLeft:10}}><Text style={{ fontSize:15,fontWeight:"bold"}}>Roll no:</Text></DataTable.Cell>
        <DataTable.Cell style={{ marginLeft:100}}><Text style={{ fontSize:10,}}>17F-8057</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell style={{ marginLeft:10}}><Text style={{ fontSize:15,fontWeight:"bold"}}>Degree:</Text></DataTable.Cell>
      <DataTable.Cell style={{ marginLeft:100}}><Text style={{ fontSize:10,}}>BS(CS)</Text></DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell style={{ marginLeft:10}}><Text style={{ fontSize:15,fontWeight:"bold"}}>Batch:</Text></DataTable.Cell>
      <DataTable.Cell style={{ marginLeft:100}}><Text style={{ fontSize:10,}}>17th</Text></DataTable.Cell>
    </DataTable.Row>

        </View>

      </DataTable>

          </View>
        </ScrollView>

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