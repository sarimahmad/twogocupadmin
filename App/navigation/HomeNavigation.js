/* eslint-disable no-alert */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainScreen from '../Screens/MainScreen';
import Location from '../Screens/LocationScreen';
import SelectLocation from '../Screens/SelectLocation';

import signIn from '../Screens/signIn';
import signUp from '../Screens/signup';
import profile from '../Screens/profile';
import DetailScreen from '../Screens/DetailScreen';
import Admin from '../Screens/Admin';
import AdminList from '../Screens/AdminList';
import ForgotPass from '../Screens/ForgotPass';
import Splash from '../Screens/Splash';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const drawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      drawerContentOptions={{
        itemStyle: {marginVertical: 5},
        labelStyle: {
          color: 'black',
        },
      }}>
      <Drawer.Screen
        name="Home"
        options={{
          title: 'Home',
        }}
        component={Admin}
      />
      <Drawer.Screen
        name="Business"
        options={{
          title: 'List of Businesses',
        }}
        component={AdminList}
      />
    </Drawer.Navigator>
  );
};

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
      <Stack.Screen name="signUp" component={signUp} />
      <Stack.Screen name="forgot" component={ForgotPass} />
      <Stack.Screen name="signIn" component={signIn} />
      <Stack.Screen
        name="Home"
        component={drawerNavigation}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen name="detail" component={DetailScreen} />
      <Stack.Screen name="profile" component={profile} />
    </Stack.Navigator>
  );
};
export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
