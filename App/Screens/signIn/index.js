/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import TextField from '../../Components/TextField/index';
import {BLACK, WHITE} from '../../helper/Color';

import {FONT, SCREEN} from '../../helper/Constant';
import ButtonResetPassaword from '../../Components/ButtonResetPassword/index';
import Validations from '../../helper/Validations';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/user';
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  storeInputData = (text, type) => {
    if (type === 'firstName') {
      this.setState({firstName: text});
    } else if (type === 'lastName') {
      this.setState({lastName: text});
    } else if (type === 'email') {
      this.setState({email: text});
    } else if (type === 'password') {
      this.setState({password: text});
    } else if (type === 'confirmPassword') {
      this.setState({confirmPassword: text});
    }
  };
  isFormFilled() {
    let checkPassword = Validations.checkPassword(this.state.password);
    let checkEmail = Validations.checkEmail(this.state.email);

    if (checkEmail && checkPassword) {
      return true;
    }
    if (!checkEmail) {
      alert('invalid email');
    } else if (!checkPassword) {
      alert('invalid password');
    }
    return false;
  }
  handleSubmit = () => {
    if (this.isFormFilled()) {
      auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(response => {
          const uid = response.user.uid;
          console.log(response);
          const usersRef = firestore().collection('users');
          usersRef
            .doc(uid)
            .get()
            .then(async firestoreDocument => {
              if (!firestoreDocument.exists) {
                alert('User does not exist.');
                return;
              }
              console.log(firestoreDocument);
              const user = firestoreDocument._data;
              this.props.callApi(user, uid);
              this.props.navigation.navigate('Home');
              // RootNavigation.navigate('main')
              // saveUserState(user)
            })
            .catch(error => {
              alert(error);
            });
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  render() {
    return (
      <View style={styles.wrapperView}>
        <SafeAreaView style={styles.wrapperView}>
          <ScrollView>
            <View style={{alignItems: 'center'}}>
              <View style={styles.ImgaeView}>
                <Image
                  style={{
                    height: (SCREEN.width - 70) * 0.247,
                    width: SCREEN.width - 70,
                    resizeMode: 'contain',
                  }}
                  source={require('../../Images/Logo.png')}
                />
              </View>
              <View style={styles.topView}>
                <Text style={styles.titleText}>WELCOME BACK!</Text>
              </View>

              <TextField
                placeholder="Email adress"
                type={'email'}
                parentCallBack={this.storeInputData}
              />
              <TextField
                placeholder="Password"
                type={'password'}
                parentCallBack={this.storeInputData}
              />
              <TouchableOpacity>
                <Text style={[styles.textPurple, {marginTop: 10}]}>
                  Forgot password?
                </Text>
              </TouchableOpacity>
              <ButtonResetPassaword
                btnLabel={'LOG IN'}
                data={this.handleSubmit}
              />
              <Text
                style={styles.subtitleTextBold}
                onPress={() => this.props.navigation.navigate('Home')}>
                Other login up options
              </Text>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('signUp')}
                style={{marginTop: 25, flexDirection: 'row'}}>
                <Text style={styles.subtitleText}>Don’t have an account? </Text>
                <Text style={styles.textPurple}>Sign up.</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ImgaeView: {
    marginTop: SCREEN.height * 0.1,
  },
  topView: {
    // height:hp('35%'),
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 26,
  },
  subtitleText: {
    fontFamily: FONT.Roboto.regular,
  },
  btnContainer: {
    width: '100%',
    borderRadius: 25,
    height: 55,
    justifyContent: 'center',
    backgroundColor: 'grey',
    marginBottom: '2%',
    marginTop: '2%',
  },
  btnText: {
    textAlignVertical: 'center',
    fontSize: 16,
    textAlign: 'center',
    // paddingTop:'5%',
    fontFamily: FONT.Roboto.bold,
    color: '#f1f1f2',
  },
  subtitleTextBold: {
    marginVertical: 10,
    fontFamily: FONT.Roboto.bold,
  },

  logo: {
    height: 64,
    width: 64,
    resizeMode: 'contain',
    marginTop: 26,

    alignSelf: 'center',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  text: {
    color: 'grey',
    fontFamily: FONT.Roboto.regular,
    fontSize: 14,
  },
  textPurple: {
    color: 'grey',
    fontFamily: FONT.Roboto.regular,
    fontSize: 14,
  },
  titleText: {
    marginTop: 13,
    marginBottom: '3%',
    color: BLACK.textInputTitle,
    fontFamily: FONT.Roboto.bold,
    fontSize: 24,
    alignSelf: 'flex-end',
  },
  subtitletext: {
    color: BLACK.textInputTitle,
    fontFamily: FONT.Roboto.semiBold,
    fontSize: 16,
  },
  detailWrapper: {
    alignSelf: 'center',
  },
  wrapperView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE.dark,
  },

  policyText: {
    alignSelf: 'center',
    marginTop: '2%',
    color: BLACK.appDark,
    fontFamily: FONT.Roboto.regular,
  },
  btnFaceBook: {
    backgroundColor: '#3664A2',
    width: '100%',
    borderRadius: 25,
    height: 55,
    justifyContent: 'center',
    marginTop: 10,
  },
  btnGoogle: {
    backgroundColor: '#FF3B30',
    width: '100%',
    borderRadius: 25,
    height: 55,
    justifyContent: 'center',
    marginTop: 19,
  },
});

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    callApi: (user, uid) => dispatch(userActions.setUser({user, uid})),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
