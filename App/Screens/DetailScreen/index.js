/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../redux/actions';
import DetailScreenStyle from './DetailScreenStyle';
import ImagePicker from 'react-native-image-crop-picker';

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: true,
      loading: false,
      fcmToken: '',
      visibityOfPopUp: false,
      imageUri: '',
    };
  }
  PicMultiple() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      this.setState({imageUri: image.path});
      console.log('imageDeatail', JSON.stringify(image));
    });
  }

  componentDidMount() {}

  render() {
    return (
      <DetailScreenStyle.WrapperViewVertical>
        <DetailScreenStyle.SafeView>
          <DetailScreenStyle.BackImage
            source={require('../../assets/backImage.png')}
          />

          <DetailScreenStyle.WholeView>
            <DetailScreenStyle.headerView>
              <DetailScreenStyle.List>List</DetailScreenStyle.List>
              <DetailScreenStyle.filterImg
                source={require('../../assets/backIcon2.png')}
              />
            </DetailScreenStyle.headerView>
            <DetailScreenStyle.placeName>
              Tesla Showroo
            </DetailScreenStyle.placeName>
            <DetailScreenStyle.placeId>#123456</DetailScreenStyle.placeId>
            <DetailScreenStyle.ScrollView bounces={false}>
              <DetailScreenStyle.simpleView
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 45,
                  marginBottom: 21,
                }}>
                {this.state.imageUri === '' ? (
                  <DetailScreenStyle.ImagePicker
                    onPress={() => this.PicMultiple()}>
                    <DetailScreenStyle.ImagepickerIcon
                      source={require('../../assets/plusIcon.png')}
                    />
                  </DetailScreenStyle.ImagePicker>
                ) : (
                  <DetailScreenStyle.ImageView />
                )}
                <DetailScreenStyle.simpleView
                  style={{
                    height: 120,
                    marginRight: 20,
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                  }}>
                  <DetailScreenStyle.editIcon
                    source={require('../../assets/edit.png')}
                  />
                  <DetailScreenStyle.simpleView>
                    <DetailScreenStyle.businessrequest>
                      Busines request
                    </DetailScreenStyle.businessrequest>
                    <DetailScreenStyle.approved>
                      Approved
                    </DetailScreenStyle.approved>
                  </DetailScreenStyle.simpleView>
                </DetailScreenStyle.simpleView>
              </DetailScreenStyle.simpleView>

              <DetailScreenStyle.txt1>Business Name</DetailScreenStyle.txt1>
              <DetailScreenStyle.txt2>Tesla Showroom</DetailScreenStyle.txt2>

              <DetailScreenStyle.txt1>Business Type</DetailScreenStyle.txt1>
              <DetailScreenStyle.txt2>Partnership</DetailScreenStyle.txt2>

              <DetailScreenStyle.txt1>Offered Services</DetailScreenStyle.txt1>
              <DetailScreenStyle.txt2>
                Buying & selling of cars
              </DetailScreenStyle.txt2>

              <DetailScreenStyle.txt1>Industry</DetailScreenStyle.txt1>
              <DetailScreenStyle.txt2>Automotive</DetailScreenStyle.txt2>

              <DetailScreenStyle.txt1>Address</DetailScreenStyle.txt1>
              <DetailScreenStyle.txt2>
                23, Rodao Drive, 5 Ave, LA, USA.
              </DetailScreenStyle.txt2>

              <DetailScreenStyle.txt1>Contact Details</DetailScreenStyle.txt1>
              <DetailScreenStyle.txt2>
                +123 456 789, +123 456 789
              </DetailScreenStyle.txt2>

              <DetailScreenStyle.txt1>Contact Person</DetailScreenStyle.txt1>
              <DetailScreenStyle.txt2>
                John Doe - Manager
              </DetailScreenStyle.txt2>

              <DetailScreenStyle.txt1>Email</DetailScreenStyle.txt1>
              <DetailScreenStyle.txt2>
                info@tesla-showroom.com
              </DetailScreenStyle.txt2>

              <DetailScreenStyle.txt1>Website</DetailScreenStyle.txt1>
              <DetailScreenStyle.txt2>
                www.tesla-showroom.com
              </DetailScreenStyle.txt2>

              <DetailScreenStyle.txt1>Description</DetailScreenStyle.txt1>
              <DetailScreenStyle.txt2>
                Some business description comes here.
              </DetailScreenStyle.txt2>

              <DetailScreenStyle.simpleView
                style={{
                  marginTop: 9,
                  justifyContent: 'space-between',
                  marginRight: 20,
                  flexDirection: 'row',
                  marginBottom: 20,
                }}>
                <DetailScreenStyle.btn1>
                  <DetailScreenStyle.btnInsidetxt>
                    Delete
                  </DetailScreenStyle.btnInsidetxt>
                </DetailScreenStyle.btn1>
                <DetailScreenStyle.btn2>
                  <DetailScreenStyle.btnInsidetxt>
                    Update
                  </DetailScreenStyle.btnInsidetxt>
                </DetailScreenStyle.btn2>
              </DetailScreenStyle.simpleView>
            </DetailScreenStyle.ScrollView>
          </DetailScreenStyle.WholeView>
        </DetailScreenStyle.SafeView>
      </DetailScreenStyle.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
