import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import { BROWN, GREEN, MIX, WHITE, BLACK, BLUE } from '../../helper/Color'
import { SCREEN, FONT } from '../../helper/Constant'


export default class SelectLocation extends Component {
    headerView = ()=>{
        return (
            <View style={styles.headerView}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Location")}>
            <Image
          style={{ width: 18, height: 17,resizeMode:'contain',marginBottom:30}}
          source={require('../../assets/Icons/BackIcon.png')}
          />
          </TouchableOpacity>
            <View>
            <Image
          style={{ width: 8, height: 49}}
          source={require('../../assets/Icons/select.png')}
          />
       <Image
        
          source={require('../../assets/Icons/red.png')}
          />
          </View>
       <View>
          <TextInput
          style={styles.textInputView}
          value={"Your Location"}
      
          />
          <TextInput
          style={styles.textInputView}
          value={"Choose Destination"}
          />
        </View>
        <Image
          style={{ width: 18, height: 17,resizeMode:'contain',marginBottom:30}}
          source={require('../../assets/Icons/upperlower.png')}
          />
       </View>
  
        )
    }
    myDestinatonView = ()=>{
        return(
           
           <View style={styles.myDestinatonView}>
                       
            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
            <View style={{backgroundColor:'lightblue',height:32,width:32,borderRadius:22,marginRight:10}}>
            <Image
               style={{ alignItems: 'center',justifyContent: 'center',}}
               source={require('../../assets/Icons/home.png')}
               />
           </View>  
              <View>  
              <Text style={{fontFamily:FONT.Roboto.Medium,fontSize:14}}>Home</Text>  
             <TextInput
               style={styles.locationInputView}
               value={"125 Lincon"}
           
               />
               
               </View>
             </View>
         
             <View style={{flexDirection:'row',justifyContent: 'space-between',paddingTop:10}}>
            <View style={{backgroundColor:'lightblue',height:32,width:32,borderRadius:22,marginRight:10}}>
            <Image
               style={{ alignItems: 'center',justifyContent: 'center',}}
               source={require('../../assets/Icons/home.png')}
               />
           </View>  
              <View>  
              <Text style={{fontFamily:FONT.Roboto.Medium,fontSize:14}}>Work</Text>  
             <TextInput
               style={styles.locationInputView}
               value={"125 Lincon"}
           
               />
               
               </View>
             </View>
         
            </View>
         
        )
    }
    recentView=()=>{
        return(
       
            <View style={styles.myDestinatonView}>
             <Text style={{fontFamily:FONT.Roboto.Medium,fontSize:16,paddingVertical:10}}>Recently Searched</Text>
              
            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
            <View style={{backgroundColor:'lightblue',height:32,width:32,borderRadius:22,marginRight:10}}>
            <Image
               style={{ alignItems: 'center',justifyContent: 'center',}}
               source={require('../../assets/Icons/home.png')}
               />
           </View>  
              <View>  
              <Text style={{fontFamily:FONT.Roboto.Medium,fontSize:14}}>Home</Text>  
             <TextInput
               style={styles.locationInputView}
               value={"125 Lincon"}
           
               />
               
               </View>
             </View>
         
             <View style={{flexDirection:'row',justifyContent: 'space-between',paddingTop:10}}>
            <View style={{backgroundColor:'lightblue',height:32,width:32,borderRadius:22,marginRight:10}}>
            <Image
               style={{ alignItems: 'center',justifyContent: 'center',}}
               source={require('../../assets/Icons/home.png')}
               />
           </View>  
              <View>  
              <Text style={{fontFamily:FONT.Roboto.Medium,fontSize:14}}>Work</Text>  
             <TextInput
               style={styles.locationInputView}
               value={"125 Lincon"}
                
               />
               
               </View>
             </View>
             <View style={{flexDirection:'row',justifyContent: 'space-between',paddingTop:10}}>
            <View style={{backgroundColor:'lightblue',height:32,width:32,borderRadius:22,marginRight:10}}>
            <Image
               style={{ alignItems: 'center',justifyContent: 'center',}}
               source={require('../../assets/Icons/home.png')}
               />
           </View>  
              <View>  
              <Text style={{fontFamily:FONT.Roboto.Medium,fontSize:14}}>Work</Text>  
             <TextInput
               style={styles.locationInputView}
               value={"125 Lincon"}
           
               />
               
               </View>
             </View>
         
            </View>
   
        )
    }
    render() {
        return (
        <View style={styles.wrapperView}>
            <SafeAreaView style={styles.contentView}>
                <ScrollView>

                  {this.headerView()}
                   
                   {this.myDestinatonView()}
                  
                     <View style={{height:10,backgroundColor:'lightblue'}}>
                     </View>
                     {this.recentView()}
                    
                      </ScrollView>
            </SafeAreaView>
        </View>
            )
    }
}
const styles = StyleSheet.create({
   contentView:{
flex:1,
backgroundColor:'white'
   },
   wrapperView:{
flex:1
   },
   myDestinatonView:{
    flex:1,
    
    width: SCREEN.width,
    alignSelf:'center',
    paddingHorizontal:40,
    paddingVertical:20,
    backgroundColor: 'white',
  
   },
    headerView:{
        flexDirection: 'row',
        height: 146.5,
        width: SCREEN.width,
        paddingHorizontal:20,
        justifyContent:'space-between',
        backgroundColor: 'lightblue',
        alignItems: 'center',
        
      
    },
    textInputView:{
        paddingLeft: 20,
        // marginLeft: SCREEN.width * 0.09,
        width: SCREEN.width *0.6,
        marginTop:20,
        height: 36,
        fontFamily:FONT.Roboto.regular,
        borderRadius:10,
        backgroundColor: WHITE.btn,
    },
    locationInputView:{
        width: SCREEN.width *0.6,
        height: 36,
        fontFamily:FONT.Roboto.regular,
        borderRadius:10,
        fontSize:14,
        borderBottomColor:'lightgrey',
        borderBottomWidth:1   
    }
})