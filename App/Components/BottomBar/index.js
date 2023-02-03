import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import { BROWN, GREEN, MIX, WHITE, BLACK, BLUE } from '../../helper/Color'
import { SCREEN, FONT } from '../../helper/Constant'

export default class index extends Component {
    render() {
        return (
            <View style={styles.bottom}>
            <View style={styles.bottomView}>
                <View style={[styles.bottomIcon, { marginLeft: 23 }]}>
                    <Image
                        style={{ width: 23, height: 23 }}
                        source={require('../../assets/Icons/profile_icon.png')} />
                    <Text style={styles.bottomBartext}>Profile</Text>

                </View>
                <View style={styles.bottomIcon}>
                    <Image
                        style={{ width: 27, height: 25 }}
                        source={require('../../assets/Icons/favouties.png')} />
                    <Text style={styles.bottomBartext}>Favorities</Text>

                </View>

                <View style={styles.bottomIcon}>
                    <Image
                        style={{ width: 26, height: 28 }}
                        source={require('../../assets/Icons/profile_home.png')} />
                    <Text style={[styles.bottomBartext, { color: MIX.dark }]}>Home</Text>


                </View>

                <View style={styles.bottomIcon}>
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={require('../../assets/Icons/message.png')} />
                    <Text style={styles.bottomBartext}>Message</Text>

                </View>

                <View style={[styles.bottomIcon, { marginRight: 25 }]}>
                    <Image
                        style={{ width: 22, height: 25, }}
                        source={require('../../assets/Icons/notification.png')} />
                    <Text style={styles.bottomBartext}>Notification</Text>
                </View>
            </View>
        </View>
    )
    }}
const styles = StyleSheet.create({
    bottom: {
        flex:1,
        justifyContent: 'flex-end',
    },
    bottomView: {
        width: SCREEN.width,
        // shadowColor: 'black',
        // shadowOffset: {width:2, height:2},
        // shadowOpacity: 0.5,
        // shadowRadius: 10,
        height: 62,
        borderTopWidth: 0.2,
        borderEndWidth: 0.2,
        borderStartWidth: 0.2,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        borderColor: MIX.dark,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomIcon: {
        alignItems: 'center',
    },
    bottomBartext: {
        fontFamily: FONT.Roboto.regular,
        fontSize: 10,
        color: BROWN.bottombarColor,
        marginTop: 5
    }
    
})
