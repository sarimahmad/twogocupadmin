import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { BROWN, GREEN ,WHITE} from '../../helper/Color'
import { SCREEN, FONT } from '../../helper/Constant'


export default class MainScreen extends Component {
    render() {
        return (
            <View style={styles.wrapperView}>
                <Image
                    style={{ height: SCREEN.height, width: SCREEN.width, resizeMode: 'cover', position: 'absolute' }}
                    source={require('../../Images/blurCover.png')}
                />
            
                <SafeAreaView style={styles.wrapperView}>
       
                    <View style={styles.logoView}>
                        <View style={styles.ImgaeView} >
                            <Image
                               style={{height: (SCREEN.width - 70) * 0.247, width: SCREEN.width - 70, resizeMode : 'contain',}}
                                source={require('../../Images/Logo.png')} />
                        </View>
                        <Text style={styles.logoText}>ONLINE BUSINESS DIRECTORY</Text>
                        <Text style={[styles.logoText, { fontFamily: FONT.Roboto.Medium,fontSize:16 }]}>KNOW EVERY BUSINESS EASILY</Text>


                    </View>
                    <View style={[styles.logoView, {justifyContent: "flex-end"}]}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home")} style={[styles.btn1,{marginBottom:SCREEN.height*0.018}]}>
                            <Text style={styles.btntext1}>Find Members</Text>
                        </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("signIn")} style={[styles.btn1,{backgroundColor:BROWN.btn}]}>
                            <Text style={[styles.btntext1,{color:WHITE.btn}]}>LOG IN</Text>
                        </TouchableOpacity>
                        <Text style={styles.lastText}>Powered by IvylabTechnologies@2021</Text>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wrapperView: {
        flex: 1
    },
    logoView: {
        flex: 1,
        width: SCREEN.width,
        alignItems: 'center',

    },
    ImgaeView: {
        marginTop: SCREEN.height * 0.178,
    },
    logoText: {
        color: BROWN.Textcolor,
        fontFamily: FONT.Roboto.black,
        fontSize: 20,
        marginTop: SCREEN.height * 0.022
    },
    btn1: {
        borderRadius: 11,
        height: 50,
        backgroundColor: GREEN.btn,
        width: SCREEN.width - 72,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btntext1: {
        color: BROWN.Textcolor,
        fontFamily: FONT.Roboto.bold,
        fontSize: 16,
    },
    lastText:{
        color: WHITE.btn,
        fontFamily:FONT.Roboto.bold,
        fontSize: 14,
        marginTop:SCREEN.height * 0.110,
        marginBottom:SCREEN.height * 0.029,
    }
})
