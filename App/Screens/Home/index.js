/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import {BROWN, GREEN, MIX, WHITE, BLACK, BLUE} from '../../helper/Color';
import {SCREEN, FONT} from '../../helper/Constant';
import BottomBar from '../../Components/BottomBar';
import {ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: 'Long Coffee Bar',
          description: 'Arts Humanities',
          reviews: 4.2,
          image: require('../../assets/Icons/image.jpg'),
        },
        {
          id: 2,
          name: 'Long Coffee Bar',
          description: 'Arts Humanities',
          reviews: 4.2,
          image: require('../../assets/Icons/image.jpg'),
        },
        {
          id: 3,
          name: 'Long Coffee Bar',
          description: 'Arts Humanities',
          reviews: 4.2,
          image: require('../../assets/Icons/image.jpg'),
        },
        {
          id: 4,
          name: 'Long Coffee Bar',
          description: 'Arts Humanities',
          reviews: 4.2,
          image: require('../../assets/Icons/image.jpg'),
        },
        {
          id: 5,
          name: 'Long Coffee Bar',
          description: 'Arts Humanities',
          reviews: 4.2,
          image: require('../../assets/Icons/image.jpg'),
        },
      ],
      bussnisses: [],
      markerArray: [],
    };
  }
  headerComponent = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text> hello</Text>
        <Text> hello world</Text>
      </View>
    );
  };
  componentDidMount() {
    let markers = [];
    let bussnisses_data = [];
    const usersRef = firestore().collection('businesses');
    usersRef.get().then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        let one_obj = {};
        one_obj = {
          lat: documentSnapshot._data.lat,
          lng: documentSnapshot._data.long,
          item: documentSnapshot._data,
        };
        bussnisses_data.push(documentSnapshot._data);
        markers.push(one_obj);
      });

      this.setState({
        loading: false,
        bussnisses: bussnisses_data,
        markerArray: markers,
      });
    });
  }

  render() {
    return (
      <View style={styles.wrapperView}>
        <SafeAreaView style={styles.wrapperView}>
          <ScrollView>
            <View style={styles.headerView}>
              <View style={styles.start}>
                <Image
                  style={{
                    marginRight: SCREEN.width * 0.05,
                    width: 20,
                    height: 13.5,
                  }}
                  source={require('../../assets/Icons/Option.png')}
                />
                <Text style={styles.headertxt}>Hello, John Doe</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('profile')}
                style={styles.end}>
                <Image
                  style={styles.lastIcon}
                  source={require('../../assets/Icons/profileImage2.png')}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.locationtxt}>Your Location</Text>
            <View style={styles.locationPoint}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../../assets/Icons/location.png')} />
                <Text style={styles.locationPointtxt}>Ireland, Europe</Text>
              </View>
              <View style={styles.locationPointend}>
                <Text
                  style={[
                    styles.locationPointtxt,
                    {fontSize: 14, color: BLUE.light},
                  ]}>
                  Change
                </Text>
                <Image
                  style={{marginLeft: 13, width: 16, height: 17}}
                  source={require('../../assets/Icons/direction.png')}
                />
              </View>
            </View>
            <View style={styles.searchBarView}>
              <TextInput
                placeholderTextColor={BLACK.dark}
                placeholder={'Search for salons, services'}
                style={styles.searchBar}
              />
              <Image
                style={{position: 'absolute', left: 20}}
                source={require('../../assets/Icons/searchIcon.png')}
              />
            </View>
            <View style={{marginLeft: 36, marginTop: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  marginRight: 36,
                }}>
                <Text
                  style={{
                    fontFamily: FONT.Roboto.bold,
                    fontSize: 16,
                    color: BLACK.dark,
                  }}>
                  Popular Business NearBy
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Location', {
                      markerData: this.state.markerArray,
                      bussnisses: this.state.bussnisses,
                    })
                  }>
                  <Text
                    style={{
                      fontFamily: FONT.Roboto.Medium,
                      fontSize: 14,
                      color: MIX.dark,
                    }}>
                    {' '}
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={this.state.bussnisses}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Location', {
                        singleBussnisses: item,
                        bussnisses: this.state.bussnisses,
                        activeIndex: index,
                      })
                    }
                    style={{
                      justifyContent: 'flex-end',
                      height: 194,
                      width: 275,
                      marginRight: 20,
                      borderRadius: 15,
                      flex: 1,
                    }}>
                    <Image
                      style={{
                        width: 275,
                        height: 141,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        resizeMode: 'stretch',
                      }}
                      source={require('../../assets/Icons/image.jpg')}
                    />
                    <View style={styles.lowerView}>
                      <View style={styles.insideLowerView}>
                        <View>
                          <Text
                            style={{
                              fontFamily: FONT.Roboto.bold,
                              fontSize: 14,
                              color: BROWN.Textcolor3,
                            }}>
                            {item.business_name}
                          </Text>
                          <Text
                            style={{
                              fontFamily: FONT.Roboto.regular,
                              fontSize: 12,
                              color: BROWN.Textcolor3,
                            }}>
                            {item.business_type}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={{marginRight: 5}}>{item.rating[0]}</Text>
                          <Image
                            source={require('../../assets/Icons/marked.png')}
                          />
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View style={{marginLeft: 36, marginTop: 20, marginBottom: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  marginRight: 36,
                }}>
                <Text
                  style={{
                    fontFamily: FONT.Roboto.bold,
                    fontSize: 16,
                    color: BLACK.dark,
                  }}>
                  Most Related
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Location', {
                      markerData: this.state.markerArray,
                      bussnisses: this.state.bussnisses,
                    })
                  }>
                  <Text
                    style={{
                      fontFamily: FONT.Roboto.Medium,
                      fontSize: 14,
                      color: MIX.dark,
                    }}>
                    {' '}
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={this.state.bussnisses}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Location', {
                        singleBussnisses: item,
                        bussnisses: this.state.bussnisses,
                        activeIndex: index,
                      })
                    }
                    style={{
                      justifyContent: 'flex-end',
                      height: 194,
                      width: 275,
                      marginRight: 20,
                      borderRadius: 15,
                      flex: 1,
                    }}>
                    <Image
                      style={{
                        width: 275,
                        height: 141,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        resizeMode: 'stretch',
                      }}
                      source={require('../../assets/Icons/image.jpg')}
                    />
                    <View style={styles.lowerView}>
                      <View style={styles.insideLowerView}>
                        <View>
                          <Text
                            style={{
                              fontFamily: FONT.Roboto.bold,
                              fontSize: 14,
                              color: BROWN.Textcolor3,
                            }}>
                            {item.business_name}
                          </Text>
                          <Text
                            style={{
                              fontFamily: FONT.Roboto.regular,
                              fontSize: 12,
                              color: BROWN.Textcolor3,
                            }}>
                            {item.business_type}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={{marginRight: 5}}>{item.rating}</Text>
                          <Image
                            source={require('../../assets/Icons/marked.png')}
                          />
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </ScrollView>
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
  headerView: {
    flexDirection: 'row',
    height: 93,
    width: SCREEN.width,
    backgroundColor: 'lightblue',
    justifyContent: 'space-between',
  },
  start: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 36,
  },
  end: {
    justifyContent: 'center',
    marginRight: 36,
  },
  headertxt: {
    fontFamily: FONT.Roboto.bold,
    color: WHITE.btn,
    fontSize: 20,
  },
  lastIcon: {
    width: 45,
    height: 45,
  },
  locationtxt: {
    marginLeft: 36,
    marginTop: 19,
    fontFamily: FONT.Roboto.regular,
    fontSize: 16,
    color: BLACK.dark,
  },
  locationPoint: {
    marginTop: 19,
    flexDirection: 'row',
    marginHorizontal: 36,
    justifyContent: 'space-between',
  },
  locationPointtxt: {
    fontFamily: FONT.Roboto.regular,
    fontSize: 16,
    color: BLACK.dark,
    marginLeft: 10,
  },
  locationPointend: {
    flexDirection: 'row',
  },
  searchBarView: {
    marginTop: 18,
    marginHorizontal: 36,
    justifyContent: 'center',
  },
  searchBar: {
    backgroundColor: GREEN.searchInputColor,
    width: SCREEN.width * 0.84,
    height: 36,
    borderRadius: 10,
    paddingLeft: 50,
  },
  lowerView: {
    height: 53,
    width: 275,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    borderBottomWidth: 0.17,
    borderEndWidth: 0.17,
    borderStartWidth: 0.17,
    borderColor: BROWN.borderColor,
  },
  insideLowerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    flex: 1,
    marginHorizontal: 13,
  },
});
