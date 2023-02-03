/* eslint-disable prettier/prettier */
import { ServerStyleSheet } from 'styled-components';
import styled from 'styled-components/native';

import { BLACK, BLUE, BROWN, GREEN, InputLocation, RED, WHITE ,} from '../../helper/Color';
import { FONT, SCREEN,isIphoneXorAbove } from '../../helper/Constant';

const DetailScreenStyle = {
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
  height: ${ SCREEN.height};
  resizeMode:stretch;
  `,

  simpleView: styled.View`

  `,

  WholeView: styled.View`
  height: ${SCREEN.height};
  width: ${SCREEN.width * 0.700};
  alignSelf: flex-end;
  `,

  headerView: styled.View`
  marginTop: 17px;
  flexDirection: row;
  justifyContent: space-between;

  `,
  List: styled.Text`
  color: ${BROWN.lightBrwon};
  fontFamily: ${FONT.Roboto.bold};
  fontSize: 20px;
  `,
  filterImg: styled.Image`
  width: 18px;
  height: 17px;
  marginRight: 20px;
  `,
  placeName: styled.Text`
  color: ${BROWN.lightBrwon};
  fontFamily: ${FONT.Roboto.bold};
  fontSize: 16px;
  marginTop: 10px;
  `,
  placeId: styled.Text`
  color: ${BROWN.lightBrwon};
  fontFamily: ${FONT.Roboto.light};
  fontSize: 12px;
  marginTop: 18px;
  
  `,
  ImagePicker: styled.TouchableOpacity`
  width: 120px;
  height: 120px;
  backgroundColor: ${BROWN.imagePickercolor};
  borderRadius: 20px;
  borderColor: ${BROWN.lightBrwon};
  borderWidth: 1px;
  alignItems:center;
  justifyContent: center;
  `,
  ImagepickerIcon: styled.Image`
  width: 20px;
  height:21px;
  `,
  ImageView: styled.View`
  width: 120px;
  height: 120px;
  borderRadius: 20px;
  borderColor: ${BROWN.lightBrwon};
  borderWidth: 1px;
  alignItems:center;
  justifyContent: center;
  marginTop: 45px;
  
  `,
  businessrequest: styled.Text`
  color: ${BROWN.btn};
  fontFamily: ${FONT.Roboto.light};
  fontSize: 12px;
  `,
  approved: styled.Text`
  color: ${BROWN.lightBrwon};
  fontFamily: ${FONT.Roboto.bold};
  fontSize: 14px;
  marginTop: 10px
  
  `,

  editIcon: styled.Image`
  width: 17px;
  height: 17px;
  
  `,
  ImageAfter: styled.Image`



  `,
  txt1: styled.Text`
  color: ${BROWN.btn};
  fontFamily: ${FONT.Roboto.light};
  fontSize: 10px;
  marginBottom: 4px
  `,
  txt2: styled.Text`
  color: ${BROWN.lightBrwon};
  fontFamily: ${FONT.Roboto.regular};
  fontSize: 14px;
  marginBottom: 12px
  
  `,
  btn1: styled.TouchableOpacity`
  height:40px;
  width: 120px;
  alignItems:center;
  justifyContent: center;
  backgroundColor: ${BROWN.btn};
  borderRadius: 10px;
  `,
  btn2: styled.TouchableOpacity`
  height:40px;
  width: 120px;
  alignItems:center;
  justifyContent: center;
  backgroundColor: ${BROWN.imagePickercolor}
  borderRadius: 10px;
  `,
  btnInsidetxt: styled.Text`
  color: ${BROWN.Textcolor2};
  fontFamily: ${FONT.Roboto.regular};
  fontSize: 12px;
  `,

  TouchableOpacity: styled.TouchableOpacity`
  
  `,




};

export default DetailScreenStyle;
