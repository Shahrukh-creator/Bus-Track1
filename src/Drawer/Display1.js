// import React, { Component } from 'react'
// import {TouchableHighlight, StyleSheet, View, Text, Dimensions } from "react-native";
// import firebase from '../../database/firebase'
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";



// let lat = "";
// let lng = "";
// let Speed = "";

// const { width, height } = Dimensions.get("window");

// export default class Display1 extends React.Component {

//     constructor(props) {
//         super(props);
//         global.SampleLat = '';
//     }




//     saveitems = () => {

//         const coordinates = firebase.database().ref('Coords');
//         coordinates.set({
//             Lat: this.props.value1,
//             Lng: this.props.value2,
//             speed: this.props.value3,
//         })


//         firebase.database().ref('Coords').child('Lat').on('value', function (snapshot) {
//             const exists = (snapshot.val() != null);

//             if (exists)

//                 lat = parseFloat(snapshot.val());
//             console.log('Latitude: ', lat);

//         })


//         firebase.database().ref('Coords').child('Lng').on('value', function (snapshot) {
//             const exists1 = (snapshot.val() != null);

//             if (exists1)

//                 lng = parseFloat(snapshot.val());
//             console.log('Longitude: ', lng);

//         })

//         firebase.database().ref('Coords').child('speed').on('value', function (snapshot) {
//             const exists2 = (snapshot.val() != null);

//             if (exists2)

//                 Speed = parseFloat(snapshot.val());
//             // console.log('Speed: ', Speed);

//         })

//     }


//     render() {

//         return (
//             <View style={styles.container}>

//                 {this.saveitems()}

//                 <MapView
//                     initialRegion={{
//                         latitude: parseFloat(lat),
//                         longitude:  parseFloat(lng),
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
//                         width,
//                         height,
//                     }}
//                 >

//                     <MapView.Marker

//                         style={{ width: 100, height: 15 }}
//                         title="Uni Bus"
//                         description="Route-1"
//                         resizeMode="contain"

//                         image={require('D:/React Native apps/track-full-app/assets/Bus_image_2.png')}
//                         coordinate={{
//                             latitude: parseFloat(lat),
//                             longitude: parseFloat(lng),
//                         }}
//                     />
//                     <View style = {{paddingTop:585, padding:130}}>
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
//         paddingTop: 0,
//         padding: -15,
//     },

// });










































//Marker Animation//


// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   Button,
//   Text,
//   image,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';

// import MapView, {
//   ProviderPropType,
//   Marker,
//   PROVIDER_GOOGLE,
//   AnimatedRegion,
// } from 'react-native-maps';

// const { width, height } = Dimensions.get('window');

// export default class Display1 extends React.Component {
//   constructor(props) {
//     super(props);

//     this.marker = null;

//     this.state = {
//       coordinate: new AnimatedRegion({
//         latitude: parseFloat(this.props.value1),
//         longitude: parseFloat(this.props.value2),
//         latitudeDelta: 0.05,
//         longitudeDelta: 0.04,
//       }),
//     };
//   }

//   componentDidUpdate(nextProps) {
//     if (nextProps.value1 !== this.props.value1) {
//       const newCoordinate = new AnimatedRegion({
//         latitude: parseFloat(nextProps.value1),
//         longitude: parseFloat(nextProps.value2),
//         latitudeDelta: 0.05,
//         longitudeDelta: 0.04,
//       });
//       this.setState({ coordinate: newCoordinate });
//     }
//     console.log('Latitude: ', this.props.value1);
//     console.log('Longitude: ', this.props.value2);
//   }

//   animateMarker() {
//     var newCoordinate = new AnimatedRegion({
//       latitude: parseFloat(32.46215),
//       longitude: parseFloat(73.36603),
//       latitudeDelta: 0.05,
//       longitudeDelta: 0.04,
//     });

//     this.setState({ coordinate: newCoordinate });

//     if (Platform.OS === 'android') {
//       if (this.marker) {
//         this.marker.animateMarkerToCoordinate(newCoordinate, 4000); //  number of duration between points
//       }
//     } else {
//       this.state.coordinate.timing(newCoordinate).start();
//     }

//   }

//   render() {
//     console.log('Latitude: ', this.props.value1);
//     console.log('Longitude: ', this.props.value2);

//     return (
//       <View style={styles.container}>
//         <MapView
//           initialRegion={{
//             latitude: parseFloat(this.props.value1),
//             longitude: parseFloat(this.props.value2),
//             latitudeDelta: 0.05,
//             longitudeDelta: 0.04,
//           }}
//           provider={PROVIDER_GOOGLE}
//           showsUserLocation={false}
//           showsCompass={true}
//           rotateEnabled={true}
//           showsBuildings={true}
//           showsTraffic={true}
//           showsIndoors={true}
//           showsPointsOfInterest={true}
//           style={{
//             width,
//             height,
//           }}
//         >
//           <Marker.Animated
//             ref={marker => {
//               this.marker = marker;
//             }}
//             title = "Route 1"
//             coordinate={this.state.coordinate}
//           />
//         </MapView>

//         <View style={{ position: 'absolute', top: 575, left: 110 }}>
//           <Text style={{ fontSize: 20 }}>{this.props.value3} km/hr</Text>
//           <TouchableOpacity onPress={() => this.animateMarker()}>
//             <Text style={{ fontSize: 20 }}>Animate</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// Display1.propTypes = { provider: ProviderPropType };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 0,
//     padding: -15,
//   },
//   // container: {
//   //   ...StyleSheet.absoluteFillObject,
//   //   justifyContent: 'flex-end',
//   //   alignItems: 'center',
//   // },
//   // map: {
//   //   ...StyleSheet.absoluteFillObject,
//   // },

//   bubble: {
//     flex: 1,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     paddingHorizontal: 18,
//     paddingVertical: 12,
//     borderRadius: 20,
//   },
//   button: {
//     width: 80,
//     paddingHorizontal: 12,
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   buttonContainer: {
//     paddingTop: 35,
//     backgroundColor: 'transparent',
//   },
// });
































































































// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   Button,
//   Text,
//   image,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';

// import MapView, {
//   ProviderPropType,
//   Marker,
//   PROVIDER_GOOGLE,
//   AnimatedRegion,
// } from 'react-native-maps';

// const { width, height } = Dimensions.get('window');

// export default class Display1 extends React.Component {
//   // constructor(props) {
//   //   super(props);

//   //   this.marker = null;

//   //   this.state = {
//   //     coordinate: new AnimatedRegion({
//   //       latitude: parseFloat(this.props.value1),
//   //       longitude: parseFloat(this.props.value2),
//   //       latitudeDelta: 0.05,
//   //       longitudeDelta: 0.04,
//   //     }),
//   //   };
//   // }
//   constructor(props) {
//     super(props);
//     this.state = {
//       x: {
//         latitude: parseFloat(this.props.value1),
//         longitude: parseFloat(this.props.value2),
//         latitudeDelta: 0.009,
//         longitudeDelta: 0.009,
//       },

//     };
//     this.mapRef = null;
//   }

//   // static getDerivedStateFromProps(props, state) {
//   //   let newCoords = {};
//   //   newCoords.latitude = parseFloat(this.props.value1),
//   //   newCoords.longitude = parseFloat(this.props.value2),
//   //   newCoords.latitudeDelta = 0.09;
//   //   newCoords.longitudeDelta = 0.09;
//   //   return {
//   //     x: newCoords,
//   //   };
//   // }

//   // async componentDidMount() {
//   //   this.props.navigation.setParams({
//   //     headerTitle: this.props.isLoading.Config.languageJson2['Map Screen'],
//   //   });
//   // }

//   componentDidUpdate(nextProps) {
//     if (nextProps.value1 !== this.props.value1) {
//       const newCoordinate = new AnimatedRegion({
//         latitude: parseFloat(nextProps.value1),
//         longitude: parseFloat(nextProps.value2),
//         latitudeDelta: 0.05,
//         longitudeDelta: 0.04,
//       });
//       this.setState({ x: newCoordinate });
//     }
//     console.log('Latitude: ', this.props.value1);
//     console.log('Longitude: ', this.props.value2);
//   }

//   onLayout = () => {
//     setTimeout(() => {
//       if (
//         this.state.x !== null &&
//         this.state.x !== undefined &&
//         this.state.x !== null &&
//         this.state.x !== undefined &&
//         this.mapRef !== null
//       ) {
//         this.mapRef.fitToCoordinates([this.state.x, this.state.x], {
//           edgePadding: { top: 200, right: 200, bottom: 200, left: 200 },
//           animated: false,
//         });
//       }
//     }, 3000);
//   };





//   render() {
//     console.log('Latitude: ', this.props.value1);
//     console.log('Longitude: ', this.props.value2);

//     return (
//       <View style={styles.container}>
//         <MapView
//           showsUserLocation={true}
//           ref={(ref) => {
//             this.mapRef = ref;
//           }}
//           //
//           loadingEnabled={true}
//           loadingIndicatorColor="#666666"
//           loadingBackgroundColor="#eeeeee"
//           moveOnMarkerPress={false}
//           showsCompass={true}
//           showsPointsOfInterest={false}
//           //
//           style={{
//             flex:1,
//             width,
//             height,
//           }}
//           showsMyLocationButton={true}
//           onMapReady={this.onLayout}
//           initialRegion={this.state.x}
//           region={this.state.x}>
//           <Marker
//             coordinate={{
//               latitude: parseFloat(this.props.value1),
//               longitude: parseFloat(this.props.value2),
//             }}
//             key={1}
//             title="Route 1"
//           >

//           </Marker>


//         </MapView>

//       </View>
//     );
//   }
// }

// Display1.propTypes = { provider: ProviderPropType };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 0,
//     padding: -15,
//   },
//   // container: {
//   //   ...StyleSheet.absoluteFillObject,
//   //   justifyContent: 'flex-end',
//   //   alignItems: 'center',
//   // },
//   // map: {
//   //   ...StyleSheet.absoluteFillObject,
//   // },

//   bubble: {
//     flex: 1,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     paddingHorizontal: 18,
//     paddingVertical: 12,
//     borderRadius: 20,
//   },
//   button: {
//     width: 80,
//     paddingHorizontal: 12,
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   buttonContainer: {
//     paddingTop: 35,
//     backgroundColor: 'transparent',
//   },
// });





























































































import React, { Component } from 'react';
import { View,Text } from 'react-native';
import { StyleSheet, Dimensions } from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import CustomHeader from '../CustomHeader'
const { width, height } = Dimensions.get("window");


export default class Display1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  render() {
    console.log('Latitude: ', this.props.value1);
    console.log('Longitude: ', this.props.value2);
    return (

      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: parseFloat(this.props.value1),
            longitude: parseFloat(this.props.value2),
            latitudeDelta: 0.002,
            longitudeDelta: 0.003,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={false}
          showsCompass={true}
          rotateEnabled={true}
          showsBuildings={true}
          showsTraffic={true}
          showsIndoors={true}
          style={{
            width,
            height,
          }}
        >
          <MapView.Marker
            style={{ width: 100, height: 15 }}
            title="Uni Bus"
            description="Route-1"
            resizeMode="contain"
            image={require("D:/React Native apps/track-full-app/assets/Bus_image_2.png")}
            coordinate={{
              latitude: parseFloat(this.props.value1),
              longitude: parseFloat(this.props.value2),
            }}
          />
        </MapView>

        <View style={{ position: 'absolute', top: 575, left: 110 }}>
          <Text style={{ fontSize: 20 }}>{this.props.value3} km/hr</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0,
    padding: -15,
  },
});


