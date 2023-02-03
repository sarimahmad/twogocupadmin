/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Modal, TouchableOpacity, SafeAreaView, Image, Text} from 'react-native';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import ForgotStyles from './ForgotStyles';
import {FONT, SCREEN} from '../../helper/Constant';
import {BROWN, WHITE} from '../../helper/Color';

class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: true,
      loading: false,
      fcmToken: '',
      visibityOfPopUp: false,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <ForgotStyles.WrapperViewVertical>
        <ForgotStyles.BackIconView
          onPress={() => this.props.navigation.goBack()}>
          <ForgotStyles.BackIcon
            source={require('../../assets/BackIcon.png')}
          />
        </ForgotStyles.BackIconView>
        <ForgotStyles.WholeView>
          <ForgotStyles.ForgetPassTxt>
            Forgot Password
          </ForgotStyles.ForgetPassTxt>
          <ForgotStyles.entermailtxt>
            Please enter your email address. You will receive a code to create a
            newpassword via email.
          </ForgotStyles.entermailtxt>
          <ForgotStyles.EmailView>
            <ForgotStyles.Email placeholder={'Your email address'} />
            <ForgotStyles.EmailImg
            />
          </ForgotStyles.EmailView>
          <ForgotStyles.Resetbtn
            onPress={() =>
              this.setState({visibityOfPopUp: !this.state.visibityOfPopUp})
            }>
            <ForgotStyles.Resetbtntxt>Reset Password</ForgotStyles.Resetbtntxt>
          </ForgotStyles.Resetbtn>
        </ForgotStyles.WholeView>
        <Modal
          animation={'slide'}
          transparent={true}
          visible={this.state.visibityOfPopUp}>
          <TouchableOpacity
            style={{
              height: SCREEN.height,
              width: SCREEN.width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SafeAreaView
              style={{
                backgroundColor: WHITE.dark,
                width: SCREEN.width - 64,
                height: 318,
                alignItems: 'center',
                borderRadius: 15,
                borderWidth: 0.3,
                borderColor: 'lightgrey',
              }}>
              <Image
                style={{width: 90, height: 90, marginTop: 15}}
              />
              <Text
                style={{
                  fontFamily: FONT.Roboto.bold,
                  fontSize: 20,
                  color: BROWN.borderColor,
                  marginTop: 11,
                  textAlign: 'center',
                }}>
                Code has been sent to reseta new password
              </Text>

              <Text
                style={{
                  fontFamily: FONT.Roboto.regular,
                  fontSize: 16,
                  marginTop: 22,
                  color: BROWN.borderColor,
                  textAlign: 'center',
                }}>
                You'll shortly receive an email witha code to setup a new
                password
              </Text>

              <TouchableOpacity
                onPress={() =>
                  this.setState({visibityOfPopUp: !this.state.visibityOfPopUp})
                }
                style={{
                  height: 50,
                  width: SCREEN.width * 0.67,
                  backgroundColor: BROWN.btn,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: SCREEN.height * 0.03,
                  borderRadius: 15,
                }}>
                <Text
                  style={{
                    fontFamily: FONT.Roboto.bold,
                    fontSize: 16,
                    color: WHITE.btn,
                  }}>
                  Done
                </Text>
              </TouchableOpacity>
            </SafeAreaView>
          </TouchableOpacity>
        </Modal>
      </ForgotStyles.WrapperViewVertical>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPass);
