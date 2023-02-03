import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {FONT, SCREEN} from '../../helper/Constant';
import {SafeAreaView} from 'react-navigation';
import {BLACK, WHITE} from '../../helper/Color';

export default class profile extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.wrapperView}>
        <SafeAreaView style={styles.wrapperView}>
          <ScrollView style={styles.wrapperView} bounces={true}>
            <TouchableOpacity
              style={{
                top: 20,
                left: 20,
              }}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                style={{
                  height: 20,

                  width: 20,
                  borderRadius: 50,
                }}
                source={require('../../assets/Icons/BackIcon.png')}
              />
            </TouchableOpacity>
            <View style={styles.wrapperView2}>
              <View style={{width: SCREEN.width}}>
                <View style={{height: 200, width: SCREEN.width}}>
                  <Image
                    style={{
                      position: 'absolute',
                      alignSelf: 'center',

                      height: 140,
                      top: 50,
                      width: 140,
                      borderRadius: 50,
                    }}
                    source={require('../../assets/Icons/profileImage2.png')}
                  />
                </View>
              </View>

              <Text style={styles.text1}>Dwayne Johnson</Text>
              <Text style={styles.text2}>28 years,Male</Text>
              <View
                style={{flexDirection: 'row', marginBottom: 30, marginTop: 5}}>
                <Text style={styles.textView1}>Dwyne@gmail.com</Text>
              </View>
              <Text style={styles.text3}>BIO:</Text>
              <Text style={styles.bio}>
                Tousled food truck polaroid, salvia bespoke small batch
                Pinterest Marfa. Fingerstache authentic craft beer, food truck
                Banksy Carles kale chips hoodie. Trust fund artisan master
                cleanse fingerstache post-ironic, fashion axe art party Etsy
                direct trade retro organic. Cliche Shoreditch Odd Future
                Pinterest, pug disrupt photo booth VHS literally occupy
                gluten-free polaroid Intelligentsia PBR mustache. Locavore
                fashion axe chia, iPhone cardigan disrupt Etsy dreamcatcher.
                Craft beer selvage fanny pack, 8-bit post-ironic keffiyeh iPhone
                mlkshk pop-up. Pug blog asymmetrical ethnic, stumptown shabby
                chic chillwave ugh before they sold out.
              </Text>
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
    backgroundColor: WHITE.dark,
  },
  wrapperView2: {
    flex: 1,
    alignItems: 'center',
  },
  imageBlock: {
    height: SCREEN.height * 0.4,
    // width: 100,
  },
  messageIcon: {
    height: 51,
    width: 51,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 9,
  },
  text1: {
    fontFamily: FONT.Roboto.bold,
    fontSize: 17,
    color: BLACK.textColor,
    marginTop: 10,
  },
  text2: {
    marginTop: 5,
    fontFamily: FONT.Roboto.bold,
    fontSize: 12,
    color: BLACK.textColor2,
  },
  text3: {
    fontFamily: FONT.Roboto.bold,
    fontSize: 17,
    color: BLACK.textColor,
    marginBottom: 5,
  },
  bio: {
    fontFamily: FONT.Roboto.regular,
    fontSize: 12,
    color: BLACK.textColor,
    textAlign: 'center',
    width: SCREEN.width - 80,
  },
  titleText: {
    color: BLACK.textInputTitle,
    fontFamily: FONT.Roboto.bold,
    fontSize: 17,
  },
  purpleText: {
    fontSize: 12,
    color: '#F818D9',
    textDecorationLine: 'underline',
    fontFamily: FONT.Roboto.semiBold,
    marginTop: 10,
  },
  listView: {
    marginRight: 11,
  },
  ImageView: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  blockUser: {
    fontFamily: FONT.Roboto.bold,
    fontSize: 14,
    color: '#FF2D55',
    letterSpacing: 0.7,
    marginTop: 40,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
});
