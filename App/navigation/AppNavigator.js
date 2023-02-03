/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Animated,
  Easing,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {DrawerItems, createDrawerNavigator} from 'react-navigation-drawer';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/Entypo';

import Splash from '../screen/Splash';
import Landing from '../screen/Landing';
import Login from '../screen/Login';
import ForgotPass from '../screen/ForgotPass';
import SignUp from '../screen/SignUp';
import AdminUser from '../screen/Admin';
import AdminList from '../screen/AdminList';
import DetailScreen from '../screen/DetailScreen';

import {SCREEN} from '../helper/Constant';
import {BLACK, WHITE, RED, BLUE, BROWN} from '../helper/Color';

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.linear,
  },
});

const _renderItem = (text, screenToMove, props, screenMove, nameIcon, type) => {
  return (
    <TouchableOpacity
      onPress={() => {
        screenMove ? props.navigation.navigate(screenToMove) : alert('open');
      }}
      style={{
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 18,
      }}>
      {type === 'image' ? (
        <Image style={{height: 23, width: 24}} source={nameIcon} />
      ) : nameIcon !== 'user-circle-o' ? (
        <Icon4 name={nameIcon} color={BLACK.extra_light} size={20} />
      ) : (
        <Icon2 name={nameIcon} color={BLACK.extra_light} size={20} />
      )}
      <Text
        style={{
          fontSize: 13,
          marginLeft: SCREEN.width / 12,
          color: type === 'image' ? BLACK.dark : BLACK.extra_light,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerComponent = props => (
  <SafeAreaView style={{flex: 1}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          minHeight: 125,
          paddingBottom: 5,
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('EditProfile')}
          style={{marginLeft: 10}}>
          <Image
            style={{
              height: 120,
              width: 120,
              borderRadius: 60,
              alignSelf: 'center',
            }}
          />
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                color: BLACK.dark,
              }}>
              Abbo Adroa
            </Text>
            <Text
              style={{
                marginTop: 5,
                color: BLUE.text,
                fontSize: 14,
              }}>
              View and edit profile{'   '}
              <Text
                style={{
                  fontSize: 14,
                  color: BLACK.extra_light,
                }}>
                69%
              </Text>
            </Text>
            <View style={{position: 'absolute', right: 20}}>
              <Icon2
                name={'chevron-right'}
                size={20}
                color={BLACK.placeholder}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 1,
          width: '95%',
          alignSelf: 'center',
          backgroundColor: BLACK.placeholder,
        }}
      />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Call4CarePlus')}
        style={{
          height: 80,
          paddingHorizontal: 10,
          paddingVertical: 15,
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 15}}>Call4Cares{'  '}</Text>
          <View
            style={{
              paddingHorizontal: 2,
              paddingVertical: 1,
              borderRadius: 5,
              backgroundColor: RED.app,
            }}>
            <Text
              style={{
                color: WHITE.dark,
                paddingHorizontal: 5,
                fontSize: 12,
                borderRadius: 5,
              }}>
              Plus
            </Text>
          </View>
        </View>

        <Text
          style={{
            marginTop: 5,
            fontSize: 13,
            color: BLACK.extra_light,
          }}>
          Heath Plan for your family
        </Text>

        <View style={{position: 'absolute', right: 20}}>
          <Icon2 name={'chevron-right'} size={20} color={BLACK.placeholder} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          height: 1,
          width: '95%',
          backgroundColor: BLACK.placeholder,
          alignSelf: 'center',
        }}
      />
      <DrawerItems
        {...props}
        iconContainerStyle={{width: 25}}
        itemStyle={{backgroundColor: WHITE.dark}}
        labelStyle={{
          fontSize: 13,
          color: BLACK.dark,
        }}
      />

      <View
        style={{
          height: 1,
          width: '95%',
          backgroundColor: BLACK.placeholder,
          alignSelf: 'center',
        }}
      />
      <View style={{marginTop: 10}}>
        <View
          style={{
            paddingLeft: 20,
            paddingBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              width: '80%',
              color: BLACK.extra_light,
              fontSize: 8,
            }}>
            Copyright © 2020,
            <Text>Call4Cares.</Text>
            All rights reserved. Developed & Design by
            <Text> 20thFloor Technologies</Text>
          </Text>
          <Image
            style={{
              position: 'absolute',
              right: 15,
              height: 40,
              width: 40,
              borderRadius: 20,
            }}
          />
        </View>
      </View>
      <View style={{height: 10}} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: Splash,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: ({focused}) => (
          <Icon2
            size={30}
            color={focused ? BROWN.Textcolor2 : BROWN.light}
            name={'home'}
          />
        ),
      },
    },
  },
  {
    contentComponent: CustomDrawerComponent,
    initialRouteName: 'Main',
    activeTintColor: BROWN.Textcolor,
    inactiveTintColor: BROWN.light,
    drawerWidth: SCREEN.width - 50,
    showLabel: false,
    animationEnabled: true,
    activeBackgroundColor: WHITE.dark,
    inactiveBackgroundColor: WHITE.dark,
    drawerOpenRoute: 'LeftSideMenu',
    drawerCloseRoute: 'LeftSideMenuClose',
    drawerToggleRoute: 'LeftSideMenuToggle',
  },
);

// login stack
const LoginStack = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  Landing: {
    screen: Landing,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  Login: {
    screen: Login,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  ForgotPass: {
    screen: ForgotPass,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  AdminUser: {
    screen: AdminUser,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  AdminList: {
    screen: AdminList,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  DetailScreen: {
    screen: DetailScreen,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
});

// eslint-disable-next-line no-undef
export default SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: LoginStack,
    App: LoginStack,
    Auth: LoginStack,
  },
  {
    initialRouteName: 'AuthLoading',
    transitionConfig: noTransitionConfig,
  },
);
