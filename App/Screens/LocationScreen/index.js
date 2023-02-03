/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
  Modal,
  Linking,
} from 'react-native';
import {BROWN, GREEN, WHITE, RED} from '../../helper/Color';
import {SCREEN, FONT} from '../../helper/Constant';
import SeacrhBarheader from '../../Components/SeacrhBarheader';
import Carousel from 'react-native-snap-carousel';
import MapView from 'react-native-maps';

export default class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editType: false,
      selectedItem: 'Restrauents',
      activeIndex: 0,
      carouselItems: [
        {
          text1: 'Lounge Coffee Bar',
          text2: 'Coffee Bar',
          text3: '1st  Floor Gulberg Galleria, Main Boulevard',
          text4: 'Closes : 12:00 AM',
        },
        {
          text2: 'Coffee Bar',
          text3: '1st  Floor Gulberg Galleria, Main Boulevard',
          text4: 'Closes : 12:00 AM',
        },
        {
          text1: 'Lounge Coffee Bar',
          text2: 'Coffee Bar',
          text3: '1st  Floor Gulberg Galleria, Main Boulevard',
          text4: 'Closes : 12:00 AM',
        },
        {
          text1: 'Lounge Coffee Bar',
          text2: 'Coffee Bar',
          text3: '1st  Floor Gulberg Galleria, Main Boulevard',
          text4: 'Closes : 12:00 AM',
        },
        {
          text1: 'Lounge Coffee Bar',
          text2: 'Coffee Bar',
          text3: '1st  Floor Gulberg Galleria, Main Boulevard',
          text4: 'Closes : 12:00 AM',
        },
      ],
      detailItem: {},
      markerData: [],
      bussnisses: [],
      markerlat: '',
      markerlong: '',
      singleBussnisses: {},
    };

    this._renderItem = this._renderItem.bind(this);
  }

  changeState(item) {
    this.setState({editType: !this.state.editType});
    this.setState({detailItem: item});
  }
  filters = () => {
    return (
      <View style={styles.IconViews}>
        <View style={styles.IconDirection}>
          <TouchableOpacity
            onPress={() => this.setState({selectedItem: 'Shopping'})}
            style={[
              styles.boxIcon,
              this.state.selectedItem === 'Shopping'
                ? {backgroundColor: '#426078'}
                : {backgroundColor: 'white'},
            ]}>
            <Image source={require('../../assets/Icons/shopping.png')} />
            <Text
              style={[
                styles.IcontextStyle,
                this.state.selectedItem === 'Shopping'
                  ? {color: 'white'}
                  : {color: 'black'},
              ]}>
              Shopping
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({selectedItem: 'Automotive'})}
            style={[
              styles.boxIcon,
              this.state.selectedItem === 'Automotive'
                ? {backgroundColor: '#426078'}
                : {backgroundColor: 'white'},
            ]}>
            <Image source={require('../../assets/Icons/Automotive.png')} />
            <Text
              style={[
                styles.IcontextStyle,
                this.state.selectedItem === 'Automotive'
                  ? {color: 'white'}
                  : {color: 'black'},
              ]}>
              Automotive
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({selectedItem: 'Coffee'})}
            style={[
              styles.boxIcon,
              this.state.selectedItem === 'Coffee'
                ? {backgroundColor: '#426078'}
                : {backgroundColor: 'white'},
            ]}>
            <Image source={require('../../assets/Icons/Coffeebar.png')} />
            <Text
              style={[
                styles.IcontextStyle,
                this.state.selectedItem === 'Coffee'
                  ? {color: 'white'}
                  : {color: 'black'},
              ]}>
              {' '}
              Coffee & Bar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({selectedItem: 'Events'})}
            style={[
              styles.boxIcon,
              this.state.selectedItem === 'Events'
                ? {backgroundColor: '#426078'}
                : {backgroundColor: 'white'},
            ]}>
            <Image source={require('../../assets/Icons/Events.png')} />
            <Text
              style={[
                styles.IcontextStyle,
                this.state.selectedItem === 'Events'
                  ? {color: 'white'}
                  : {color: 'black'},
              ]}>
              {' '}
              Events
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.IconDirection, {marginTop: 10}]}>
          <TouchableOpacity
            onPress={() => this.setState({selectedItem: 'JobSeeker'})}
            style={[
              styles.boxIcon,
              this.state.selectedItem === 'JobSeeker'
                ? {backgroundColor: '#426078'}
                : {backgroundColor: 'white'},
            ]}>
            <Image source={require('../../assets/Icons/jobseeker.png')} />
            <Text
              style={[
                styles.IcontextStyle,
                this.state.selectedItem === 'JobSeeker'
                  ? {color: 'white'}
                  : {color: 'black'},
              ]}>
              JobSeeker
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({selectedItem: 'Restrauents'})}
            style={[
              styles.boxIcon,
              this.state.selectedItem == 'Restrauents'
                ? {backgroundColor: '#426078'}
                : {backgroundColor: 'white'},
            ]}>
            <Image source={require('../../assets/Icons/restaurant.png')} />
            <Text
              style={[
                styles.IcontextStyle,
                this.state.selectedItem === 'Restrauents'
                  ? {color: 'white'}
                  : {color: 'black'},
              ]}>
              Restrauents
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({selectedItem: 'Sports'})}
            style={[
              styles.boxIcon,
              this.state.selectedItem === 'Sports'
                ? {backgroundColor: '#426078'}
                : {backgroundColor: 'white'},
            ]}>
            <Image source={require('../../assets/Icons/Sports.png')} />
            <Text
              style={[
                styles.IcontextStyle,
                this.state.selectedItem === 'Sports'
                  ? {color: 'white'}
                  : {color: 'black'},
              ]}>
              {' '}
              Sports
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({selectedItem: 'View'})}
            style={[
              styles.boxIcon,
              this.state.selectedItem == 'View'
                ? {backgroundColor: '#426078'}
                : {backgroundColor: 'white'},
            ]}>
            <Image
              style={[
                styles.imageSize,
                {marginBottom: 7, height: 5, width: 23},
              ]}
              source={require('../../assets/Icons/DOT.png')}
            />
            <Text
              style={[
                styles.IcontextStyle,
                this.state.selectedItem == 'View'
                  ? {color: 'white'}
                  : {color: 'black'},
              ]}>
              {' '}
              View More
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  direction = (lat, lng) => {
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const latLng = `${lat},${lng}`;
    const label = 'Custom Label';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    Linking.openURL(url);
  };
  componentDidMount() {
    this.carousel.snapToItem(1, true, true);
    let singleBussnisses = this.props.route.params.singleBussnisses;
    let bussnisses = this.props.route.params.bussnisses;
    let activeIndex = this.props.route.params.activeIndex;
    this.setState({activeIndex: activeIndex});
    if (bussnisses) {
      this.setState({bussnisses: bussnisses});
    }
    if (singleBussnisses) {
      this.setState({singleBussnisses: singleBussnisses});
      this.setState({markerlat: JSON.parse(singleBussnisses.lat)});
      this.setState({markerlong: JSON.parse(singleBussnisses.long)});
    }

    let markerData = this.props.route.params.markerData;
    if (markerData) {
      console.log(markerData);
      this.setState({markerData: markerData});
    }
  }
  _renderItem({item, index}) {
    return (
      <View style={styles.sliderView}>
        <View style={{height: 152, alignSelf: 'center'}}>
          <View style={styles.cardView}>
            <Text style={[styles.cardViewtext, {marginTop: 16}]}>
              {item.business_name}
            </Text>
            <TouchableOpacity
              style={{
                width: 60,
                height: 30,
                backgroundColor: GREEN.dark,
                alignItems: 'center',
                borderRadius: 15,
                justifyContent: 'center',
                marginTop: 10,
              }}
              onPress={() => this.changeState(item)}>
              <Text style={[styles.cardViewtext, {color: WHITE.btn}]}>
                OPEN
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={[styles.cardViewtext2]}>{item.business_type}</Text>
            <Text style={[styles.cardViewtext2]}>{item.adress}</Text>
            <Text style={[styles.cardViewtext2, {color: RED.dark}]}>
              {item.open_time.toDate().toLocaleTimeString()}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => this.direction(item.lat, item.long)}
              style={{
                width: 128,
                marginRight: 10,
                height: 34,
                backgroundColor: GREEN.dark,
                alignItems: 'center',
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <Image
                style={{width: 20, height: 20, marginHorizontal: 13}}
                source={require('../../assets/Icons/forwardDirection.png')}
              />
              <Text style={[styles.cardViewtext, {color: WHITE.btn}]}>
                Directions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 128,
                height: 34,
                backgroundColor: WHITE.btn,
                alignItems: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: 'lightgrey',
              }}>
              <Image
                style={{width: 20, height: 20, marginLeft: 36, marginRight: 12}}
                source={require('../../assets/Icons/hello.png')}
              />
              <Text style={[styles.cardViewtext, {color: BROWN.Textcolor}]}>
                Call
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  modelView = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.editType}>
        <TouchableOpacity
          onPress={() => this.setState({editType: !this.state.editType})}
          style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.popView}>
              <Image
                style={{
                  width: SCREEN.width - 40,
                  height: 157,
                  alignSelf: 'center',
                  resizeMode: 'stretch',
                  marginTop: 20,
                  borderRadius: 15,
                }}
                source={require('../../assets/Icons/chairImage.jpg')}
              />
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: FONT.Roboto.bold,
                    fontSize: 14,
                    color: BROWN.Textcolor3,
                  }}>
                  {this.state.detailItem.business_name}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('detail', {
                      detailItem: this.state.detailItem,
                    })
                  }
                  style={{
                    width: 60,
                    height: 30,
                    backgroundColor: GREEN.dark,
                    alignItems: 'center',
                    borderRadius: 15,
                    justifyContent: 'center',
                  }}>
                  <Text style={[styles.cardViewtext, {color: WHITE.btn}]}>
                    OPEN
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', marginTop: 13}}>
                <Text style={[styles.modalText, {marginRight: 10}]}>
                  {this.state.detailItem.rating}
                </Text>
                <Image
                  style={styles.starImage}
                  source={require('../../assets/Icons/marked.png')}
                />
                <Image
                  style={styles.starImage}
                  source={require('../../assets/Icons/marked.png')}
                />
                <Image
                  style={styles.starImage}
                  source={require('../../assets/Icons/marked.png')}
                />
                <Image
                  style={styles.starImage}
                  source={require('../../assets/Icons/marked.png')}
                />
                <Image
                  style={styles.starImage}
                  source={require('../../assets/Icons/marked.png')}
                />
                <Text style={[styles.modalText, {marginLeft: 5}]}>(9,246)</Text>
                <Image
                  style={{width: 23, height: 22.5, marginLeft: 10}}
                  source={require('../../assets/Icons/loading.png')}
                />
                <Text style={[styles.modalText, {marginLeft: 6.5}]}>
                  82% Match
                </Text>
              </View>
              <Text style={[styles.modalText, {marginTop: 11}]}>
                {this.state.detailItem.business_type}
              </Text>
              <Text style={[styles.modalText, {marginTop: 10}]}>
                {this.state.detailItem.adress}
              </Text>
              <View
                style={[
                  styles.modalText,
                  {flexDirection: 'row', marginTop: 10},
                ]}>
                <Text
                  style={[
                    styles.modalText,
                    {marginRight: 18, color: RED.dark},
                  ]}>
                  Opens :{' '}
                  {this.state.detailItem.open_time &&
                    this.state.detailItem.open_time
                      .toDate()
                      .toLocaleTimeString()}
                </Text>
                <Text style={[styles.modalText, {color: GREEN.dark}]}>
                  Closes :{' '}
                  {this.state.detailItem.close_time &&
                    this.state.detailItem.close_time
                      .toDate()
                      .toLocaleTimeString()}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 20,
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.direction(
                      this.state.detailItem.lat,
                      this.state.detailItem.long,
                    )
                  }
                  style={{
                    width: SCREEN.width * 0.38,
                    height: 50,
                    backgroundColor: GREEN.dark,
                    alignItems: 'center',
                    borderRadius: 10,
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{width: 20, height: 20, marginHorizontal: 13}}
                    source={require('../../assets/Icons/forwardDirection.png')}
                  />
                  <Text style={[styles.cardViewtext, {color: WHITE.btn}]}>
                    Directions
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: SCREEN.width * 0.38,
                    height: 50,
                    backgroundColor: WHITE.btn,
                    alignItems: 'center',
                    borderRadius: 10,
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                  }}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      marginLeft: 36,
                      marginRight: 12,
                    }}
                    source={require('../../assets/Icons/hello.png')}
                  />
                  <Text style={[styles.cardViewtext, {color: BROWN.Textcolor}]}>
                    Call
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };
  render() {
    return (
      <View style={styles.wrapperView}>
        <SafeAreaView style={styles.wrapperView}>
          <SeacrhBarheader />
          <MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: 31.52037,
              longitude: 74.358749,
              latitudeDelta: 46,
              longitudeDelta: 46,
            }}>
            {this.state.markerlat !== '' && this.state.markerlong !== '' && (
              <MapView.Marker
                coordinate={{
                  latitude: this.state.markerlat,
                  longitude: this.state.markerlong,
                }}
                onPress={() => this.changeState(this.state.singleBussnisses)}
                image={require('../../assets/Icons/marker.png')}
              />
            )}
            {this.state.markerData.map((marker, index) => (
              <MapView.Marker
                coordinate={{
                  latitude: JSON.parse(marker.lat),
                  longitude: JSON.parse(marker.lng),
                }}
                onPress={() => this.changeState(marker.item)}
                image={require('../../assets/Icons/marker.png')}
              />
            ))}
          </MapView>

          <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
            <Carousel
              layout={'default'}
              ref={ref => (this.carousel = ref)}
              data={this.state.bussnisses}
              sliderWidth={SCREEN.width}
              itemWidth={SCREEN.width * 0.8}
              renderItem={this._renderItem}
              initialScrollIndex={this.state.activeIndex}
              onLayout={() => {
                this.carousel.snapToItem(this.state.activeIndex);
              }}
            />
          </View>

          {this.filters()}

          {this.modelView()}
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
    backgroundColor: WHITE.btn,
  },
  IconViews: {
    height: SCREEN.height * 0.12,
    width: SCREEN.width - 39,
    position: 'absolute',
    top: SCREEN.height * 0.12,
    alignSelf: 'center',
  },
  IconDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  boxIcon: {
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 5},
    width: 77,
    height: 37,
    backgroundColor: WHITE.btn,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IcontextStyle: {
    fontFamily: FONT.Roboto.regular,
    fontSize: 10,
    color: BROWN.Textcolor,
  },
  imageSize: {
    width: 20,
    height: 20,
  },
  cardView: {
    width: SCREEN.width - 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardViewtext: {
    fontFamily: FONT.Roboto.bold,
    fontSize: 14,
    color: BROWN.Textcolor3,
  },
  cardViewtext2: {
    fontSize: 12,
    fontFamily: FONT.Roboto.regular,
    color: BROWN.Textcolor3,
    marginBottom: 5,
  },
  sliderView: {
    // marginTop: 100,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    marginLeft: -10,

    shadowRadius: 7,
    shadowOffset: {width: 5, height: 2},
    borderWidth: 0.3,
    elevation: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    width: SCREEN.width * 0.83,
    borderRadius: 10,
    height: 162,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    width: SCREEN.width,
    height: 425,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  popView: {
    flex: 1,
    width: SCREEN.width - 72,
  },
  starImage: {
    marginRight: 5,
    width: 16,
    height: 14,
  },
  modalText: {
    fontFamily: FONT.Roboto.regular,
    fontSize: 12,
    color: BROWN.Textcolor3,
  },
});
