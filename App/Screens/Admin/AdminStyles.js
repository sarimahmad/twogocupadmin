/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

import { BROWN, WHITE} from '../../helper/Color';
import { FONT, SCREEN } from '../../helper/Constant';

const AdminStyles = {
    WrapperViewVertical: styled.View`
    flex: 1;
  `,
    SafeView: styled.SafeAreaView`
    flex: 1;
  `,
  ScrollView: styled.ScrollView`
  `,
    BackImage: styled.Image`
    position:absolute;
    width: ${SCREEN.width};
    height: ${SCREEN.height};
    resizeMode:stretch;
  `,
  simpleView: styled.View`

  `,
  InnerWrapper: styled.View`
    flex: 1;
    flexDirection: row;
  `,
  InnerLeftView: styled.View`
    flex: 0.25;
  `,
  InnerRightView: styled.View`
    flex: 0.75;
  `,
  WholeView: styled.View`
  flex: 1;
  `,
  welcome: styled.Text`
  marginTop:17px;
  color: ${BROWN.lightBrwon};
  fontFamily: ${FONT.Roboto.light};
  fontSize: 12px;
  `,
  BussinessOwner: styled.Text`
  color: ${BROWN.lightBrwon};
  fontFamily: ${FONT.Roboto.bold};
  fontSize: 20px;
  marginBottom:30px;
  `,
  CarUppertxtView: styled.View`
  flexDirection: row;
  justifyContent:space-between;
  `,
  CarUppertxt: styled.Text`
  color: ${BROWN.lightBrwon};
  fontFamily: ${FONT.Roboto.bold};
  fontSize: 12px;
  `,
  CarUppertxt2: styled.Text`
  marginRight:${SCREEN.width * 0.2}
  color: ${BROWN.lightBrwon};
  fontFamily: ${FONT.Roboto.bold};
  fontSize: 12px;
  `,
  CardBoxView: styled.View`
  flexDirection: row;
  justifyContent:space-between;
  marginTop: 10px;
  marginBottom:20px;
  marginRight: 28px;
  `,
  CardBox: styled.View`
  height: 120px ;
  width: 120px;
  backgroundColor: ${WHITE.btn};
  borderRadius: 10px;
  borderWidth:0.5px;
  borderColor:lightgrey;
  `,
  InsidecardBox: styled.View`
  marginTop:11px;
  flexDirection: row;
  justifyContent:space-between;
  marginHorizontal: 10px;

  `,
  InsidecardBoxtxt: styled.Text`
  color: ${BROWN.btn};
  fontFamily: ${FONT.Roboto.regular};
  fontSize: 9px;
  `,
  InsidecardBoxImg: styled.Image`
  width: 16.7px;
  height: 16.7px;
  `,
  InsidecardlargeView: styled.View`
  height: 80px;
  justifyContent: flex-end;

  `,
  Insidecardlargetxt: styled.Text`
  color: ${BROWN.btn};
  fontFamily: ${FONT.Roboto.light};
  fontSize: 30px;
  textAlign: center;

  `,



};

export default AdminStyles;
