import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from  '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CustomDrawerContent from './src/CustomDrawerContent';
import HomeScreen from './src/tab/HomeScreen';
import HomeScreenDetail from './src/tab/HomeScreenDetail';
import SettingsScreen from './src/tab/SettingsScreen';
import SettingsPasswordDetail from './src/tab/SettingsPasswordDetail';
import SettingsEmailDetail from './src/tab/SettingsEmailDetail';
import NotificationsScreen from './src/Drawer/NotificationsScreen';
import HomePage from './src/auth/HomePage';
import RegisterScreen from './src/auth/RegisterScreen';
import SignIn from './src/auth/SignIn';
import SignOut from './src/auth/SignOut';
import TrackRoute1 from './src/Drawer/TrackRoute1';
import SelectRoute from './src/Drawer/SelectRoute';
import Display1 from './src/Drawer/Display1';
import Rfid_status from './src/Drawer/Rfid_status';
import Bus_Schedule from './src/Drawer/Bus_Schedule';

const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <StackApp.Navigator 
    initialRouteName = "HomePage"
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: 'sandybrown',
      },
      headerTintColor: 'mintcream',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
    <StackApp.Screen name="HomeApp" component={DrawerNavigator} options ={navOptionalHandler}/>
    <StackApp.Screen name="HomePage" component={HomePage} options ={navOptionalHandler}/>
    <StackApp.Screen name="Register" component={RegisterScreen} options ={navOptionalHandler}/>
    <StackApp.Screen name="SignIn" component={SignIn} options ={navOptionalHandler}/>
    <StackApp.Screen name="SignOut" component={SignOut} options ={navOptionalHandler}/>
    <StackApp.Screen name="SelectRoute" component={TrackStack} options ={navOptionalHandler}/>
    <StackApp.Screen name="Display1" component={Display1} options ={navOptionalHandler}/>
    <StackApp.Screen name="RFID_Status" component={Rfid_status} options ={navOptionalHandler}/>
    <StackApp.Screen name="Bus_Schedule" component={Bus_Schedule} options ={navOptionalHandler}/>
    
  </StackApp.Navigator>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation})
{
  return(
    <Drawer.Navigator initialRouteName="MenuTab" 
    drawerContent = {() => <CustomDrawerContent navigation = {navigation}/>}>
    <Drawer.Screen name="MenuTab" component={TabNavigator} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    <Drawer.Screen name="TrackRoute" component={TrackStack} />

    </Drawer.Navigator>

  )
}



const Tab = createBottomTabNavigator();

function TabNavigator()
{
  return(
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-construct' : 'ios-construct';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'whitesmoke',
        inactiveTintColor: 'black',
        activeBackgroundColor:'sandybrown'
      }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingStack} />
      </Tab.Navigator>


  )

}

const navOptionalHandler = () =>(
  {
    headerShown:false
  })
  
  const StackHome = createStackNavigator();
  
  
  function HomeStack()
  {
    return(
    <StackHome.Navigator 
    initialRouteName = "Home"
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: 'sandybrown',
              },
        headerTintColor: 'mintcream',
        headerTitleStyle: {
         fontWeight: 'bold',
           },
    }}
    >
    <StackHome.Screen name="Home" component={HomeScreen} options ={navOptionalHandler} />
    <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options ={navOptionalHandler}/>
  </StackHome.Navigator>
    )
  }
  
  const StackSetting = createStackNavigator();
  
  
  function SettingStack()
  {
    return(
    <StackSetting.Navigator 
    initialRouteName = "Setting"
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: 'sandybrown',
      },
      headerTintColor: 'mintcream',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
    <StackSetting.Screen name="Setting" component={SettingsScreen} options ={navOptionalHandler}/>
    <StackSetting.Screen name="SettingsPasswordDetail" component={SettingsPasswordDetail} options ={navOptionalHandler}/>
    <StackSetting.Screen name="SettingsEmailDetail" component={SettingsEmailDetail} options ={navOptionalHandler}/>

  </StackSetting.Navigator>
    )
  }
  


  
  const StackTrack = createStackNavigator();
  
  
  function TrackStack()
  {
    return(
    <StackTrack.Navigator 
    initialRouteName = "SelectRoute"
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: 'sandybrown',
      },
      headerTintColor: 'mintcream',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
    <StackTrack.Screen name="SelectRoute" component={SelectRoute} options ={navOptionalHandler}/>
    <StackTrack.Screen name="TrackRoute1" component={TrackRoute1} options ={navOptionalHandler}/>
  </StackTrack.Navigator>
    )
  }


































































