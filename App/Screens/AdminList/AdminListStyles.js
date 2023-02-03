/* eslint-disable prettier/prettier */
import { ServerStyleSheet } from 'styled-components';
import styled from 'styled-components/native';

import { BLACK, BLUE, BROWN, GREEN, InputLocation, RED, WHITE ,} from '../../helper/Color';
import { FONT, SCREEN,isIphoneXorAbove } from '../../helper/Constant';

const AdminListStyles = {
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
  width: 16.6px;
  height: 19px;
  marginRight: 20px;
  `,
  headerView1: styled.View`
  marginTop: 10px;
  flexDirection: row;
  justifyContent: space-between;
  height: 26.5px;
  width: ${SCREEN.width * 0.662};
  borderBottomWidth: 1px;
  borderBottomColor: ${BROWN.lightBrwon};
  `,
  searchInput: styled.TextInput`
  paddingBottom: 10px;
  `,
  searchIcon: styled.Image`
  width: 16px;
  height: 16px;
  `,
  WrapperView: styled.View`
  marginTop: 70px;
  flex:1;
  `,
  
  FlatList: styled.FlatList`
  
  `,
  listView: styled.View`
  height: 60px;
  borderRadius: 10px;
  flexDirection: row;
  justifyContent: space-between;
  backgroundColor: ${BROWN.Textcolor2};
  alignItems: center;
  marginBottom: 10px;
  marginRight: 20px;
  `,
  signBox: styled.View`
  width: 40px;
  height: 40px;
  borderRadius: 10px;
  borderWidth: 1px;
  borderColor: ${BROWN.lightBrwon};
  marginHorizontal: 10px;
  alignSelf: center;

  `,
  txtView: styled.View`
  height: 36px;
  justifyContent: space-between;

  `,
  listTxt1: styled.Text`
  color: ${BROWN.lightBrwon};
  fontFamily: ${FONT.Roboto.regular};
  fontSize: 14px;
  `,
  listTxt2: styled.Text`
  color: ${BROWN.lightBrwon};
  fontFamily: ${FONT.Roboto.bold};
  fontSize: 14px;
  `,

  dateView: styled.View`
  marginRight: 10px;
  `,

  dateTxt: styled.Text`
  color: ${BROWN.btn};
  fontFamily: ${FONT.Roboto.light};
  fontSize: 10px;
  `,
  TouchableOpacity: styled.TouchableOpacity`
  
  `,








};

export default AdminListStyles;
