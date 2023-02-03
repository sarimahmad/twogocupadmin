/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

import {BROWN, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const ForgotStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${WHITE.dark};
  `,
  SafeView: styled.SafeAreaView`
    flex: 1;
  `,
  BackIconView: styled.TouchableOpacity`
  `,
  BackIcon: styled.Image`
   height: 17.5;
   width: 18.5;
   marginTop: ${SCREEN.height * 0.04};
   marginLeft: ${SCREEN.width * 0.045};

  `,
  WholeView: styled.View`
  alignItems: center;
  `,
  ForgetPassTxt: styled.Text`
  marginTop: ${SCREEN.height * 0.105};
  color: ${BROWN.btn};
  fontFamily: ${FONT.Roboto.bold};
  fontSize: 30;
  `,
  entermailtxt: styled.Text`
  marginTop: ${SCREEN.height * 0.026};
  color: ${BROWN.semilight};
  fontFamily: ${FONT.Roboto.regular};
  fontSize: 16;
  textAlign: center
  `,
  EmailView: styled.View`
  height: 50px;
  width: ${SCREEN.width - 72}px;
  backgroundColor: ${WHITE.searchInputColor};
  marginTop: ${SCREEN.height * 0.047};
  borderRadius: 10px;
  justifyContent:center;

  `,
  Email: styled.TextInput`
  paddingLeft: 55px;
  `,
  EmailImg: styled.Image`
  width: 16px;
  height: 16px;
  position: absolute;
  left:20;
  `,
  Resetbtn: styled.TouchableOpacity`
  height: 50px;
  width: ${SCREEN.width - 72}px;
  backgroundColor: ${BROWN.btn};
  borderRadius: 10px;
  justifyContent:center;
  shadowColor: ${BROWN.shadowColor};
  shadowOffset: {
      width: 10,
      height: 0
  };
  shadowOpacity: 1;
  shadowRadius: 5;
  marginTop: ${SCREEN.height * 0.044};

  `,
  Resetbtntxt: styled.Text`
  fontFamily:${FONT.Roboto.bold};
  fontSize: 16px;
  color: ${WHITE.btn};
  textAlign:center;        
  `,
};

export default ForgotStyles;
