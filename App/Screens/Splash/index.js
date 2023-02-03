/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import Styles from './Styles';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/user';

import {FONT, SCREEN} from '../../helper/Constant';

import AsyncStorage from '@react-native-async-storage/async-storage';
const Splash = props => {
  useEffect(() => {
    checkUSer();
  });

  const checkUSer = async () => {
    const userDetail = await AsyncStorage.getItem('userdetail');
    const TOKEN = await AsyncStorage.getItem('token');

    setTimeout(async () => {
      if (userDetail) {
        props.navigation.navigate('Home');
      } else if (!userDetail) {
        props.navigation.navigate('Main');
      }
    }, 100);
  };
  return (
    <View style={Styles.ImgaeView}>
      <Image
        style={{
          height: (SCREEN.width - 70) * 0.247,
          width: SCREEN.width - 70,
          resizeMode: 'contain',
        }}
        source={require('../../Images/Logo.png')}
      />
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    callApi: (user, uid) => dispatch(userActions.alterUser({user, uid})),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
