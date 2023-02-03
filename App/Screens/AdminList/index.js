/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../redux/actions';
import AdminListStyles from './AdminListStyles';
import {FONT} from '../../helper/Constant';
import {BLACK, BLUE, BROWN, GREEN} from '../../helper/Color';

const listColor = [
  BROWN.light,
  GREEN.dark,
  BLUE.light,
  BLACK.dark,
  BROWN.semilight,
];

class AdminList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: true,
      loading: false,
      fcmToken: '',
      visibityOfPopUp: false,
      numbeHolder: 1,
      itemList: [
        {
          id: 1,
          nameofPlace: 'Tesla Showroom',
          placeType: 'Automotice/Car',
          status: 'Added',
          date: '02 May 2021',
          time: '02:25 PM',
        },
        {
          id: 2,
          nameofPlace: 'Tesla Showroom',
          placeType: 'Automotice/Car',
          status: 'Added',
          date: '02 May 2021',
          time: '02:25 PM',
        },
        {
          id: 3,
          nameofPlace: 'Tesla Showroom',
          placeType: 'Automotice/Car',
          status: 'Added',
          date: '02 May 2021',
          time: '02:25 PM',
        },
        {
          id: 4,
          nameofPlace: 'Tesla Showroom',
          placeType: 'Automotice/Car',
          status: 'Added',
          date: '02 May 2021',
          time: '02:25 PM',
        },
        {
          id: 5,
          nameofPlace: 'Tesla Showroom',
          placeType: 'Automotice/Car',
          status: 'Added',
          date: '02 May 2021',
          time: '02:25 PM',
        },
        {
          id: 6,
          nameofPlace: 'Tesla Showroom',
          placeType: 'Automotice/Car',
          status: 'Added',
          date: '02 May 2021',
          time: '02:25 PM',
        },
        {
          id: 7,
          nameofPlace: 'Tesla Showroom',
          placeType: 'Automotice/Car',
          status: 'Added',
          date: '02 May 2021',
          time: '02:25 PM',
        },
        {
          id: 8,
          nameofPlace: 'Tesla Showroom',
          placeType: 'Automotice/Car',
          status: 'Added',
          date: '02 May 2021',
          time: '02:25 PM',
        },
        {
          id: 9,
          nameofPlace: 'Tesla Showroom',
          placeType: 'Automotice/Car',
          status: 'Added',
          date: '02 May 2021',
          time: '02:25 PM',
        },
        {
          id: 10,
          nameofPlace: 'Tesla Showroom',
          placeType: 'Automotice/Car',
          status: 'Added',
          date: '02 May 2021',
          time: '02:25 PM',
        },
      ],
    };
  }
  generateRandomNumbers() {
    var randomNumber = Math.floor(Math.random() * 5);
    return listColor[randomNumber];
  }

  componentDidMount() {}

  render() {
    return (
      <AdminListStyles.WrapperViewVertical>
        <AdminListStyles.SafeView>
          <AdminListStyles.BackImage
            source={require('../../assets/backImage.png')}
          />
          <AdminListStyles.WholeView>
            <AdminListStyles.headerView>
              <AdminListStyles.TouchableOpacity
                onPress={() => this.props.navigation.navigate('DetailScreen')}>
                <AdminListStyles.List>List</AdminListStyles.List>
              </AdminListStyles.TouchableOpacity>
              <AdminListStyles.filterImg
                source={require('../../assets/filter.png')}
              />
            </AdminListStyles.headerView>
            <AdminListStyles.headerView1>
              <AdminListStyles.searchInput
                placeholder={'Search'}
                style={{
                  color: BROWN.lightBrwon,
                  fontFamily: FONT.Roboto.regular,
                  fontSize: 12,
                }}
              />
              <AdminListStyles.searchIcon
                source={require('../../assets/searchIcon.png')}
              />
            </AdminListStyles.headerView1>

            <AdminListStyles.WrapperView>
              <AdminListStyles.FlatList
                data={this.state.itemList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <AdminListStyles.listView>
                    <AdminListStyles.simpleView
                      style={{flexDirection: 'row', alignItems: 'center'}}>
                      <AdminListStyles.signBox
                        style={{
                          backgroundColor: this.generateRandomNumbers(),
                        }}
                      />
                      <AdminListStyles.txtView>
                        <AdminListStyles.listTxt1>
                          {item.nameofPlace}
                        </AdminListStyles.listTxt1>
                        <AdminListStyles.listTxt2>
                          {item.placeType}
                        </AdminListStyles.listTxt2>
                      </AdminListStyles.txtView>
                    </AdminListStyles.simpleView>
                    <AdminListStyles.dateView>
                      <AdminListStyles.dateTxt>
                        {item.status}
                      </AdminListStyles.dateTxt>
                      <AdminListStyles.dateTxt>
                        {item.date}
                      </AdminListStyles.dateTxt>
                      <AdminListStyles.dateTxt>
                        {item.time}
                      </AdminListStyles.dateTxt>
                    </AdminListStyles.dateView>
                  </AdminListStyles.listView>
                )}
              />
            </AdminListStyles.WrapperView>
          </AdminListStyles.WholeView>
        </AdminListStyles.SafeView>
      </AdminListStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);
