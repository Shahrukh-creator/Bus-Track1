import React, { PureComponent } from 'react'
import {StyleSheet, Text, View, Dimensions, TextInput,TouchableHighlight,Alert } from 'react-native'
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import Animated, { EasingNode} from 'react-native-reanimated';
import Svg, {Image, Circle, ClipPath} from 'react-native-svg';
import firebase from '../../database/firebase';
import CustomHeader from '../CustomHeader';

const {width, height} = Dimensions.get('window');
const {
    Value,
     event, 
     block, 
     cond, 
     eq, 
     set, 
     Clock,
    startClock, 
    stopClock,
    debug,
    timing,
    clockRunning,
    interpolateNode,
    Extrapolate,
    concat,
} = Animated

function runTiming(clock, value, dest) {
    const state = {
      finished: new Value(0),
      position: new Value(0),
      time: new Value(0),
      frameTime: new Value(0)
    };
  
    const config = {
      duration: 1000,
      toValue: new Value(0),
      easing: EasingNode.inOut(EasingNode.ease)
    };
  
    return block([
      cond(clockRunning(clock), 0, [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock)
      ]),
      timing(clock, state, config),
      cond(state.finished, debug('stop clock', stopClock(clock))),
      state.position
    ]);
  }

export default class LoginApp extends PureComponent {

    constructor()
    {
        super();
        this.state = {
          email: '',
          password: '',
          isLoading: false
        }

        this.buttonOpacity = new Value(1)

        this.onStateChange = event ([
            {
                nativeEvent: ({state}) =>
                block([cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(),1,0))
                    )])   
            }
        ])

        this.onCloseState = event ([
            {
                nativeEvent: ({state}) =>
                block([cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(),0,1))
                    )])   
            }
        ])

        this.buttonY = interpolateNode(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [100, 0],
            extrapolate: Extrapolate.CLAMP
          });
      
          this.bgY = interpolateNode(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [-height / 3-50, 0],
            extrapolate: Extrapolate.CLAMP
          });

          this.textInputZindex = interpolateNode(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, -2],
            extrapolate: Extrapolate.CLAMP
          });

          this.textInputOpacity = interpolateNode(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, 100],
            extrapolate: Extrapolate.CLAMP
          });

          this.textInputY = interpolateNode(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: Extrapolate.CLAMP
          });

          this.rotateCross = interpolateNode(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [180, 360],
            extrapolate: Extrapolate.CLAMP
          });   

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
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              justifyContent: "flex-end",
            }}
          >
          <CustomHeader title="Sign In" navigation={this.props.navigation}/>

            <Animated.View
              style={{
                ...StyleSheet.absoluteFill,
                transform: [{ translateY: this.bgY }],
              }}
            >
              <Svg height = {height + 50} width = {width}>
              <ClipPath id = "clip">
              <Circle r  ={height + 50} cx ={width /  2}/>
              </ClipPath>
                <Image
                  href={require("../../assets/green.jpg")}
                  height = {height + 50}
                  width = {width}
                  preserveAspectRatio = 'xMidYMid slice'
                  clipPath = "url(#clip)"
                />
              </Svg>

            </Animated.View>

            <View style={{ height: height / 3, justifyContent: "center" }}>
              <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                <Animated.View
                  style={{
                    ...styles.button,
                    opacity: this.buttonOpacity,
                    transform: [{ translateY: this.buttonY }],
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    SIGN IN
                  </Text>
                </Animated.View>
              </TapGestureHandler>

              <Animated.View
                style={{
                  ...styles.button,
                  backgroundColor: "#2E71DC",
                  opacity: this.buttonOpacity,
                  transform: [{ translateY: this.buttonY }],
                }}
              >
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
                >
                  SIGN IN WITH FACEBOOK
                </Text>
              </Animated.View>

              <Animated.View
                style={{
                  zIndex: this.textInputZindex,
                  opacity: this.textInputOpacity,
                  transform: [{ translateY: this.textInputY }],
                  height: height / 3,
                  ...StyleSheet.absoluteFill,
                  top: null,
                  justifyContent: "center",
                }}
              >
                <TapGestureHandler onHandlerStateChange={this.onCloseState}>
                  <Animated.View style={styles.closeButton}>
                    <Animated.Text
                      style={{
                        fontSize: 15,
                        transform: [
                          { rotate: concat(this.rotateCross, "deg") },
                        ],
                      }}
                    >
                      X
                    </Animated.Text>
                  </Animated.View>
                </TapGestureHandler>

                <TextInput
                  placeholder="Email"
                  style={styles.textInput}
                  placeholderTextColor="purple"
                  onChangeText={(text) => this.setState({ email: text })}
                />

                <TextInput
                  placeholder="Password"
                  style={styles.textInput}
                  placeholderTextColor="purple"
                  onChangeText={(text) => this.setState({ password: text })}
                  maxLength={15}
                  secureTextEntry={true}
                />

                <Animated.View style={{ ...styles.button }}>
                <TouchableHighlight 
                onPress={() => this.userLogin()}>
                <Text  style ={{ fontSize:15, fontWeight:'bold'}}>SIGN IN</Text>
                </TouchableHighlight>
                </Animated.View>
              </Animated.View>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        height:70,
        marginHorizontal:20,
        borderRadius:35,
        marginVertical:5,
        
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.2,
                shadowColor:'black',
            },
            android: {
              elevation: 3
            }
          })
    },
    closeButton:{
        width:40,
        height:40,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        position:'absolute',
        top:-20,
        left:width / 2 - 20,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.2,
                shadowColor:'black',
            },
            android: {
              elevation: 3
            }
          })
    },
    textInput:{
        height: 50,
        borderRadius:25,
        borderWidth:1,
        marginHorizontal:20,
        paddingLeft:10,
        marginVertical:5,
        borderColor:'rgba(0,0,0,0.2)',
        color:'white'
    }
  });