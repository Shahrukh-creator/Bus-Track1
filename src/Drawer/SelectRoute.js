// import React, { Component } from 'react';
// import { Button, Text,ImageBackground,View,StyleSheet } from 'react-native';
// import CustomHeader from '../CustomHeader';



// export default class SelectRoute extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <ImageBackground source={require('D:/React Native apps/track-app1/assets/yellow_bus.jpg')} style={{ width: '100%', height: '100%' }}>
//       <CustomHeader  title = "Select Route" navigation = {this.props.navigation}/>
//         <View style = {styles.container}>


//         <View style = {{top:-100,width:60}}>  



//         <Button 
//         title = 'Route 1'
//         color='#161D70'

//         onPress={()=>this.props.navigation.navigate('TrackRoute')} /> 
//         <View style ={{paddingTop:20}}>
//         </View>


//         <Button
//         color="#161D70"
//         title="Route 2"
//         onPress={()=>this.props.navigation.navigate('TrackRoute')}
//         />
//         <View style ={{paddingTop:20}}>
//         </View>

//         <Button
//         color="#161D70"
//         title="Route 3"
//         onPress={()=>this.props.navigation.navigate('TrackRoute')}
//         /> 
//         <View style ={{paddingTop:20}}>
//         </View>

//         <Button
//         color="#161D70"
//         title="Route 4"
//         onPress={()=>this.props.navigation.navigate('TrackRoute')}
//         />
//         <View style ={{paddingTop:20}}>
//         </View>
//         <Button
//         color="#161D70"
//         title="Route 5"
//         onPress={()=>this.props.navigation.navigate('TrackRoute')}
//         />

//         <View style ={{paddingTop:20}}>
//         </View>
//         <Button
//         color="#161D70"
//         title="Route 6"
//         onPress={()=>this.props.navigation.navigate('TrackRoute')}
//       /> 


//     </View> 
//     </View>
//     </ImageBackground>

//     );
//   }
// }



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         padding: 35,
//         paddingTop:155,


//     },

//   });







































import React, { Component } from 'react';
import { Text, ImageBackground, TouchableHighlight, View, StyleSheet } from 'react-native';
import CustomHeader from '../CustomHeader';
import { Ionicons } from '@expo/vector-icons';


export default class SelectRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 


  render() {


    return (
      <ImageBackground source={require('D:/React Native apps/track-full-app/assets/yellow_bus.jpg')} style={{ width: '100%', height: '100%' }}>
        <CustomHeader title="Select Route" navigation={this.props.navigation} />
        
        <View style={styles.container}>


          <TouchableHighlight
            style={{
              elevation: 8,
              backgroundColor: "sandybrown",
              borderRadius: 1010,
              paddingVertical: 10,
              paddingHorizontal: 1

            }}
            onPress={() => this.props.navigation.navigate('TrackRoute1')}>
            
            <Ionicons name="location" size={25} style={{color:'whitesmoke'}}>
            <Text style={styles.appButtonText}>            Route 1</Text>
            </Ionicons>
          </TouchableHighlight>

          <View style={styles.space} />

          <TouchableHighlight
            style={{
              elevation: 8,
              backgroundColor: "sandybrown",
              borderRadius: 1010,
              paddingVertical: 10,
              paddingHorizontal: 1

            }}
            onPress={() => this.props.navigation.navigate('TrackRoute1')}>
            <Ionicons name="location" size={25} style={{color:'whitesmoke'}}>
            <Text style={styles.appButtonText}>            Route 2</Text>
            </Ionicons>
          </TouchableHighlight>

          <View style={styles.space} />

          <TouchableHighlight
            style={{
              elevation: 8,
              backgroundColor: "sandybrown",
              borderRadius: 1010,
              paddingVertical: 10,
              paddingHorizontal: 1

            }}
            onPress={() => this.props.navigation.navigate('TrackRoute1')}>
            <Ionicons name="location" size={25} style={{color:'whitesmoke'}}>
            <Text style={styles.appButtonText}>            Route 3</Text>
            </Ionicons>
          </TouchableHighlight>

          <View style={styles.space} />

          <TouchableHighlight
            style={{
              elevation: 8,
              backgroundColor: "sandybrown",
              borderRadius: 1010,
              paddingVertical: 10,
              paddingHorizontal: 1

            }}
            onPress={() => this.props.navigation.navigate('TrackRoute1')}>
            <Ionicons name="location" size={25} style={{color:'whitesmoke'}}>
            <Text style={styles.appButtonText}>            Route 4</Text>
            </Ionicons>
          </TouchableHighlight>

          <View style={styles.space} />

          <TouchableHighlight
            style={{
              elevation: 8,
              backgroundColor: "sandybrown",
              borderRadius: 1010,
              paddingVertical: 10,
              paddingHorizontal: 1

            }}
            onPress={() => this.props.navigation.navigate('TrackRoute1')}>
            <Ionicons name="location" size={25} style={{color:'whitesmoke'}}>
            <Text style={styles.appButtonText}>            Route 5</Text>
            </Ionicons>
          </TouchableHighlight>

          <View style={styles.space} />

          <TouchableHighlight
            style={{
              elevation: 8,
              backgroundColor: "sandybrown",
              borderRadius: 1010,
              paddingVertical: 10,
              paddingHorizontal: 1

            }}
            onPress={() => this.props.navigation.navigate('TrackRoute1')}>
            <Ionicons name="location" size={25} style={{color:'whitesmoke'}}>
            <Text style={styles.appButtonText}>            Route 6</Text>
            </Ionicons>
          </TouchableHighlight>


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
  },

  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },

});