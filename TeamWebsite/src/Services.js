import React, { useRef, useState,useEffect, } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, useWindowDimensions,Animated, FlatList,Dimensions } from 'react-native';
import {
    RobotoCondensed_300Light,
    RobotoCondensed_300Light_Italic,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold_Italic
} from '@expo-google-fonts/roboto-condensed';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import "../src/Zobr.css";
import "../src/scale.html"
const scaling = (min, sizee) => {

    const myWidth = Dimensions.get('window').width;
    return myWidth / (1536 / sizee) < min ? min : myWidth / (1536/ sizee);

}
export default function Services({ navigation }) {
    const myHeight = Dimensions.get('window').height;
    const myWidth = Dimensions.get('window').width;
    let [fontsLoaded, error] = useFonts({
        RobotoCondensed_300Light,
        RobotoCondensed_300Light_Italic,
        RobotoCondensed_400Regular,
        RobotoCondensed_400Regular_Italic,
        RobotoCondensed_700Bold,
        RobotoCondensed_700Bold_Italic
    });
    return (
        <View style={{ backgroundColor: "#09070D",height:myHeight}}>
            <ScrollView>
            <View style={[styles.backMain, { height: scaling(10, 400), /*backgroundColor:"#282333"*/}]}>
                <Image
                    style={[styles.image, {
                        width: scaling(10,210),
                        height: scaling(10, 226), position: 'absolute', left: scaling(10,580),}]}
                    source={require('@../../../assets/tlog.png')}
                    resizeMode='stretch'
                />
                <View style={{ width: scaling(1,5), height: scaling(10, 240), 
                    backgroundColor: '#999999', position: 'absolute', left: scaling(10, 805), 
                    opacity: 0.25 }}></View>
                <View style={{position:'absolute',left: scaling(10,850)}}>
                    <Text style={{color:'#ffffff',alignSelf:'center',fontSize:scaling(7,50)}}>Arachno</Text>
                        <Text style={{
                            fontStyle: 'italic', color: '#ffffff', alignSelf: 'center',
                            fontSize: scaling(7, 20), paddingTop: scaling(10, 10)
                        }}>"Towards freedom of information"</Text>
                </View>
                </View>
                    <View>
                        
                        <Text style={[styles.text, styles.Titles]}>Financial Policy</Text>
                        <View style={[styles.TitleView,{backgroundColor: "#524b64",width:scaling(10,245)}]}></View>
                        <Text style={[styles.text,styles.bodyText,{paddingLeft:scaling(10,40),paddingRight:scaling(10,40)}]}>
                            For all non-profit organizations,
                         or individuals who present ideas beneficial to the community that generate no profit,
                        Arachno is commited towards bringing those ideas to life for little to no payment. 
                        All non-profit ideas therefore should be communicated directly to Arachno Members
                         as all the prices listed below do not apply :{' )'} {'\n'}{'\n'}If you
                          aim to generate profit through our services, scroll down!
                          {'\n'}{'\n'}For ALA Students: All prices below are negotiable based on the financial stability of the SE or IE.
                           If the prices are high for your enterprise, reach out to one of the members{'\n'}{'\n'}
                           For other tech services not mentioned here, please contact us driectly via the emails in the about page
                          </Text>
                        </View>

                        <View style={{height:scaling(10,400)}}>
                            <View>
                        <Text style={[styles.text, styles.Titles]}>Pricing</Text>
                        <View style={[styles.TitleView,{backgroundColor: "#270243",width:scaling(10,120)}]}></View>
                        <View>
                            <View style={{position:'absolute',alignSelf:'flex-start'}}>
                        <Text style={[styles.text,styles.miniTitles]}>Websites</Text>
                        <View style={[styles.TitleView,{backgroundColor: "#00a7fc",width:scaling(42,114),top:0}]}></View>
                        <Text style={[styles.text,styles.bodyText,{textAlign:'center',width:scaling(10,768)}]}>
                            Price per page: 200 zar{'\n'}{'\n'}
                            Maintenance: 400 zar per month{'\n'}{'\n'}
                            Basic Animations: 200 zar per page{'\n'}{'\n'}
                            Advanced animations: 400 zar per page{'\n'}{'\n'}
                            Login/data management: 400 zar per 150 users{'\n'}{'\n'}
                            Special Management: Decided with the customer{'\n'}{'\n'}{'\n'}{'\n'}
                        </Text>
                        </View>

                        <View style={{position:'absolute',alignSelf:'flex-end'}}>
                        <Text style={[styles.text,styles.miniTitles,{alignSelf:'flex-end'}]}>Applications</Text>
                        <View style={[styles.TitleView,{backgroundColor: "#0c674c",width:scaling(55,160),top:0}]}></View>
                        <Text style={[styles.text,styles.bodyText,{textAlign:'center',width:scaling(10,768),}]}>
                            Price per screen: 150 zar{'\n'}{'\n'}
                            Maintenance: 400 zar per month{'\n'}{'\n'}
                            Updates: 400 zar per update{'\n'}{'\n'}
                            extra features: 300 zar per feature{'\n'}{'\n'}
                            Login/data management: 400 zar per 150 users{'\n'}{'\n'}
                            Special Management: Decided with the customer{'\n'}{'\n'}{'\n'}{'\n'}
                        </Text>
                        </View>
                        </View>
                        </View>
                        </View>
{/*
                        <View style={{height:scaling(200,400)}}></View>      Distance breaker 

                        <View style={{height:scaling(10,300)}}>
                        <Text style={[styles.text, styles.Titles]}>Addtional Services</Text>
                        <View style={[styles.TitleView,{backgroundColor: "#ff0c00",width:scaling(80,300),}]}></View>
                        <Text style={[styles.text,styles.bodyText]}>For any additional Tech-realted services,
                         contact us on one of the emails in the about page
                          or on our master email in the home page</Text>
                        </View>*/}
                </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    text: {
        fontFamily: 'RobotoCondensed_400Regular',
        color: "#fff",
        fontSize:scaling(10,24),
        paddingTop:scaling(15,60),
        lineHeight:scaling(13,40)
    },
    Titles:{
        fontSize: scaling(10, 40),
        position: 'relative', top: scaling(10, 25), textAlign: 'center',
    },
    TitleView:
    {
        height:scaling(1,3), position: 'relative', top:scaling(10,27),alignSelf:'center'
},
bodyText:{
    width:scaling(0,1536), paddingLeft:scaling(5,40),paddingRight:scaling(5,40),
},
miniTitles:{
    fontSize:scaling(10,30),
    width:scaling(10,768),
    textAlign:'center'
},
    backMain:
        { backgroundColor: "#0B0709", justifyContent: 'center' },
});