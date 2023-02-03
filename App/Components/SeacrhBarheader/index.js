import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import { BROWN, GREEN, MIX, WHITE, BLACK, BLUE } from '../../helper/Color'
import { SCREEN, FONT } from '../../helper/Constant'


export default class index extends Component {
    render() {
        return (
        
                    <View style={styles.headerView}>
                        <TextInput
                        style={styles.textInputView}
                        value={"Cafes"}
                        
                        />
                        <Image
                        style={{position:"absolute", left: 50,}}
                        source={require('../../assets/Icons/locationBlack.png')}
                        />
                        <Image
                        style={{width: 20, height: 21, marginLeft:19}}
                        source={require('../../assets/Icons/filter2.png')}
                        />
        
            </View>
        )
    }
}
const styles = StyleSheet.create({
    headerView:{
        flexDirection: 'row',
        height: 88.5,
        width: SCREEN.width,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        
      
    },
    textInputView:{
        paddingLeft: 40,
        fontSize:14,
        
        fontFamily:FONT.Roboto.regular,
        marginLeft: SCREEN.width * 0.09,
        width: SCREEN.width * 0.73,
        height: 36,
        borderRadius:10,
        backgroundColor: WHITE.btn,
    }
})