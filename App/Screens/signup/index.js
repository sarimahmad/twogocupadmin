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
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Validations from '../../helper/Validations';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/user';

class SignUp extends Component {
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
    let checkfirstName = Validations.checkUsername(this.state.firstName);
    let checklastName = Validations.checkUsername(this.state.lastName);
    if (checkEmail && checkPassword && checkfirstName && checklastName) {
      return true;
    }
    if (!checkfirstName) {
      alert('firstName required');
    } else if (!checkEmail) {
      alert('invalid email');
    } else if (!checklastName) {
      alert('lastname required');
    } else if (!checkPassword) {
      alert('invalid password');
    }
    return false;
  }
  handleSubmit = () => {
    // apiCall.SignUp(this.state).then((responce)=>{
    //  alert(responce)
    // })
    if (this.isFormFilled()) {
      auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(response => {
          console.log('responce' + JSON.stringify(response));
          const uid = response.user.uid;

          const data = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            id: uid,
            email: this.state.email,
          };
          const usersRef = firestore().collection('users');
          usersRef
            .doc(uid)
            .set(data)
            .then(async firestoreDocument => {
              this.props.callApi(data, uid);
              this.props.navigation.navigate('Home');
              // console.log(firestoreDocument)
            })
            .catch(error => {
              alert(error);
            });
        })
        .catch(error => {
          alert(error);
        });
    } else {
    }
  };
  render() {
    return (
      <View style={styles.wrapperView}>
        <SafeAreaView style={styles.contentView}>
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

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: '5%',
                }}>
                <View style={{marginRight: 6}}>
                  <TextField
                    placeholder="First Name"
                    type={'firstName'}
                    typeSize="small"
                    parentCallBack={this.storeInputData}
                  />
                </View>
                <View style={{marginLeft: 6}}>
                  <TextField
                    placeholder="Last Name"
                    type={'lastName'}
                    typeSize="small"
                    parentCallBack={this.storeInputData}
                  />
                </View>
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
              <TextField
                placeholder="ConfirmPassword"
                type={'confirmPassword'}
                parentCallBack={this.storeInputData}
              />
              <ButtonResetPassaword
                btnLabel={'SIGN UP'}
                data={this.handleSubmit}
              />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('signIn')}
                style={{marginTop: 26, flexDirection: 'row'}}>
                <Text style={styles.subtitletext}>
                  Already have an account?
                </Text>
                <Text style={[styles.subtitletext, {color: 'grey'}]}>
                  {' '}
                  Log in
                </Text>
              </TouchableOpacity>
              <Text style={[styles.subtitletextbold, {marginTop: 10}]}>
                Other sign up options
              </Text>

              <View style={{marginTop: 25}}>
                <Text style={{fontSize: 12}}>
                  By signing up, you agree to Slizzr’s{' '}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.text, {fontSize: 12}]}>
                    Terms of Service
                  </Text>
                  <Text style={{fontSize: 12}}> and </Text>
                  <Text style={[styles.text, {fontSize: 12}]}>
                    Privacy Policy.
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    callApi: (user, uid) => dispatch(userActions.setUser({user, uid})),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
const styles = StyleSheet.create({
  ImgaeView: {
    marginTop: SCREEN.height * 0.1,
  },
  logo: {
    height: 65,
    width: 65,
    resizeMode: 'contain',
    marginTop: 25,

    alignSelf: 'center',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  text: {
    color: 'grey',
    fontFamily: FONT.Roboto.regular,
  },
  textPurple: {
    color: BLACK.textInputTitle,
    fontFamily: FONT.Roboto.regular,
    fontSize: 14,
  },
  titleText: {
    marginTop: 26,

    color: BLACK.textInputTitle,
    fontFamily: FONT.Roboto.bold,
    fontSize: 28,
    alignSelf: 'flex-end',
  },
  subtitletext: {
    color: BLACK.textInputTitle,
    fontFamily: FONT.Roboto.regular,
    fontSize: 15,
  },
  subtitletextbold: {
    color: BLACK.textInputTitle,
    fontFamily: FONT.Roboto.bold,
    fontSize: 14,
  },
  detailWrapper: {
    alignSelf: 'center',
  },
  wrapperView: {
    flex: 1,
    backgroundColor: WHITE.btn,
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: SCREEN.width - 40,
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
  btnText: {
    textAlignVertical: 'center',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: FONT.Roboto.bold,
    color: '#f1f1f2',
  },

  btnGoogle: {
    backgroundColor: '#FF3B30',
    width: '100%',
    borderRadius: 25,
    height: 55,
    justifyContent: 'center',
    marginTop: 19,
  },
  //     absoluteLeftIcon: {
  //       position: 'absolute',
  //       left: 10,
  //     },
  //     flex: {
  //       flexDirection: 'row'
  //     },
  //     alreadyHaveAccount: {
  //       fontSize: 14,
  //       fontFamily: FONT.Roboto.regular,
  //       color: BLACK.textInputTitle,
  //       alignSelf: 'center',
  //       marginTop: 19,
  //     }
});
