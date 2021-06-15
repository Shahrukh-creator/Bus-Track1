// import React, { Component } from "react";
// import { StyleSheet, View,Image, Animated } from "react-native";
// import MapView from "react-native-maps";
// import * as Location from "expo-location";
// import { Ionicons } from '@expo/vector-icons';

// import * as TaskManager from "expo-task-manager";
// import CustomHeader from '../CustomHeader';

// const LOCATION_TASK_NAME = "background-location-task";

// export default class TrackRoute extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           region: null,
//           error: '',
//         };
//       }
    
//       _getLocationAsync = async () => {
        
//         await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, { 
//           enableHighAccuracy: true,
//           distanceInterval: 1,
//           timeInterval: 5000
          
//         });
//         // watchPositionAsync Return Lat & Long on Position Change
//         this.location = await Location.watchPositionAsync(
//           {
//             enableHighAccuracy: true,
//             distanceInterval: 1,
//             timeInterval: 10000
//           },
//           newLocation => {
//             let { coords } = newLocation;
//             // console.log(coords);
//             let region = {
//               latitude: coords.latitude,
//               longitude: coords.longitude,
//               latitudeDelta: 0.045,
//               longitudeDelta: 0.045
//             };
//             this.setState({ region: region });
//           },
//           error => console.log(error)
//         );
//         return this.location;
//       };
    
//       async componentDidMount() {
//         // Asking for device location permission
    
//         // const { status } = await Permissions.askAsync(Permissions.LOCATION);
    
//         // if (status === "granted") {
//         //   this._getLocationAsync();
//         // } else {
//         //   this.setState({ error: "Locations services needed" });
//         // }
    
//         this._getLocationAsync();
//         // userId = (await AsyncStorage.getItem("userId")) || "none";
//         // userName = (await AsyncStorage.getItem("userName")) || "none";
//       }
      
//       componentWillUnmount()
//       {
//         //////To clean up resources after the data is Mounted ////
//         clearInterval(this.state.region);
    
//       }
    
//       render() {
//         return (
//           <View style={styles.container}>
//           <View style = {{flex:1,position:'absolute',width:350,top:15}}>
//           <CustomHeader  title = "Track Route" navigation = {this.props.navigation}/>
//           </View> 
//             {
//               this.state.region ?
//             <MapView
//               initialRegion={this.state.region}
//               showsCompass={true}
//               showsUserLocation={true}
//               rotateEnabled={true}
//               ref={map => {
//                 this.map = map;
//               }}
//               style={{ flex: 1 }}
//             >
//               <MapView.Marker.Animated 
//               coordinate={ this.state.region}
//               title="Uni Bus"
//               description="Route-1">
//                 <Image style={styles.carImage} 
//                 source={{uri: 'https://image.flaticon.com/icons/png/512/64/64283.png'}}/>
                      
//                 </MapView.Marker.Animated>
    
//               </MapView>
//               : null
//       }
//           </View>
//         );
//       }
//     }
    
//     TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
//       if (error) {
//         console.log(error);
//         return;
//       }
//       if (data) {
//         const { locations } = data;
//         let lat = locations[0].coords.latitude;
//         let long = locations[0].coords.longitude;
//         // userId = (await AsyncStorage.getItem("userId")) || "none";
    
//         // Storing Received Lat & Long to DB by logged In User Id
//         // axios({
//         //   method: "POST",
//         //   url: "http://000.000.0.000/phpServer/ajax.php",
//         //   data: {
//         //     action: "saveLocation",
//         //     userId: userId,
//         //     lat,
//         //     long
//         //   }
//         // });
//         // console.log("Received new locations for user = ", userId, locations);
//         console.log('Received new locations', locations);
    
//       }
//     });
    
//     const styles = StyleSheet.create({
//       container: {
//         flex: 1,
       
//         justifyContent: "center",
//         paddingTop:75,
//       },
//       carImage: {
//         width:40,
//         height: 40
//       }
//     });
    
    





































// import React, { Component } from "react";
// import { StyleSheet, View,Image, Animated,Text,image } from "react-native";
// import MapView, {Marker} from "react-native-maps";

// import CustomHeader from '../CustomHeader';



// export default class App extends React.Component 
// {
//   constructor(props)
//   {
//     super(props);
//     this.State ={
//       region:
//       {
//         latitude:31.4624435,
//         longitude:74.3665922,
//         latitudeDelta:0.01,
//         longitudeDelta:0.0
//       }
//     }
//   }


//   render()
//   {
//   return (
//     <View style={styles.container}>
//    <CustomHeader  title = "Track Route" navigation = {this.props.navigation}/>


//       <MapView
//       initialRegion = {this.State.region}
//       showsUserLocation = {false}
//       showsCompass = {true}
//       rotateEnabled = {false}
//       style = {{flex: 1}}
//       >


//       <MapView.Marker 
       
//         style={{width: 100,height: 15}}
//         title="Uni Bus"
//         description="Route-1" 
        
//         image={require('D:/React Native apps/track-app1/assets/Bus_image_2.png')}
//          coordinate={{ latitude:this.State.region.latitude,
//         longitude:this.State.region.longitude}} 
//         />
//       </MapView>
    
//     </View>
//   )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop:0,
//     padding: -15
//   },
// });






































// import React, { Component } from 'react';
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';
// import { StyleSheet, Dimensions } from "react-native";

// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import CustomHeader from '../CustomHeader'
// const { width, height } = Dimensions.get("window");


// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [],
//       isLoading: true
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.getCoords(), 1000);
//   }

//   componentDidMount() {
//     fetch('https://api.thingspeak.com/channels/1323137/feeds.json?results=1')
//       .then((response) => response.json())
//       .then((json) => {
//         this.setState({ data: json.feeds });
//       })
//       .catch((error) => console.error(error))
//       .finally(() => {
//         this.setState({ isLoading: false });
//       });
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);

//   }

//   render() {
//     const { data, isLoading } = this.state;

//     return (
//       <View style={{ flex: 1, padding: 24 }}>
//       <CustomHeader  title = "Track Route" navigation = {this.props.navigation}/>

//         {isLoading ? <ActivityIndicator /> : (
//           <FlatList
//             data={data}
//             keyExtractor={(id, index) => index.toString()}
//             renderItem={({ item }) =>
            
//               <View style={styles.container}>

//                 <MapView
//                   initialRegion={{
//                     latitude: parseFloat(item.field1),
//                     longitude: parseFloat(item.field2),
//                     latitudeDelta: 0.01,
//                     longitudeDelta: 0.0
//                   }}
//                   provider={PROVIDER_GOOGLE}
//                   showsUserLocation={false}
//                   showsCompass={true}
//                   rotateEnabled={true}
//                   showsBuildings={true}
//                   showsTraffic={true}
//                   showsIndoors={true}
//                   style={{
//                     width,
//                     height,
//                   }}
//                 >


//                   <MapView.Marker

//                     style={{ width: 100, height: 15 }}
//                     title="Uni Bus"
//                     description='Route-1'
//                     resizeMode="contain"

//                     image={require('D:/React Native apps/track-full-app/assets/Bus_image_2.png')}
//                     coordinate={{
//                       latitude: parseFloat(item.field1),
//                       longitude: parseFloat(item.field2)
//                     }}
//                   />

//                 </MapView>
               

//               </View>
//             }
//           />
//         )}
//       </View>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 0,
//     padding: -15,
//   },
// });












































// import React, { Component } from 'react'
// import { StyleSheet, View, Text, Dimensions } from "react-native";
// import firebase from '../../database/firebase';
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import { LogBox } from 'react-native';
// import CustomHeader from '../CustomHeader';

// LogBox.ignoreLogs(['Setting a timer']);

// let lat = "";
// let lng = "";
// let Speed = "";

// const { width, height } = Dimensions.get("window");

// export default class Display1 extends React.Component {

//     constructor(props) {
//         super(props);
//     }

//     saveitems = () => {

//         const myitems = firebase.database().ref('Coords').child('Lat').on('value', function (snapshot) {
//             const exists = (snapshot.val() != null);

//             if (exists)

//                 lat = parseFloat(snapshot.val());
//             console.log('Latitude: ', lat);

//         })

        
//         const myitems1 = firebase.database().ref('Coords').child('Lng').on('value', function (snapshot) {
//             const exists1 = (snapshot.val() != null);

//             if (exists1)

//                 lng = parseFloat(snapshot.val());
//             console.log('Longitude: ', lng);

//         })
       
//         const myitems2 = firebase.database().ref('Coords').child('speed').on('value', function (snapshot) {
//             const exists2 = (snapshot.val() != null);

//             if (exists2)

//                 Speed = parseFloat(snapshot.val());
//             console.log('Speed: ', Speed);

//         })
//         // lat = 1;

//     }


//     render() {

//         return (
//             <View style={styles.container}>
//             <CustomHeader title="Track Route" navigation={this.props.navigation} />


//                 {this.saveitems()}

//                 <MapView
//                     region={{
//                         latitude: Number(lat),
//                         longitude: Number(lng),
//                         latitudeDelta: 0.01,
//                         longitudeDelta: 0.0
//                     }}
//                     provider={PROVIDER_GOOGLE}
//                     showsUserLocation={false}
//                     showsCompass={true}
//                     rotateEnabled={false}
//                     showsBuildings={true}
//                     showsTraffic={true}
//                     showsIndoors={true}
//                     style={{
//                       width,
//                       height,
//                   }}
//                     >

//                     <MapView.Marker

//                         style={{ width: 100, height: 15 }}
//                         title="Uni Bus"
//                         description="Route-1"
//                         resizeMode="contain"

//                         image={require('D:/React Native apps/track-app1/assets/Bus_image_2.png')}
//                         coordinate={{
//                             latitude: Number(lat),
//                             longitude: Number(lng),
//                         }}
//                     />
//                     <View style = {{paddingTop:635, padding:130}}>
//                     <Text>{Speed} km/hr</Text>
//                     </View>
//                 </MapView>

//             </View>
//         )
//     }
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         paddingTop: 25,
//         padding: -15,
//     },
// });































































import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import Display1 from './Display1';
import { LogBox } from 'react-native';
import CustomHeader from '../CustomHeader';


LogBox.ignoreLogs(['Setting a timer']);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getCoords(), 1000);
  }

  async getCoords() {
    fetch('https://api.thingspeak.com/channels/1323137/feeds.json?results=1')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.feeds });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
      <CustomHeader title="Track Route" navigation={this.props.navigation} />


        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={( id, index ) => index.toString()}
            renderItem={({ item }) =>
            <Display1
            value1 = {item.field1} 
            value2 = {item.field2}
            value3 = {item.field3}
            />                  
            }
          />
        )}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});
