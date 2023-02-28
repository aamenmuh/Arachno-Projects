"use-strict";
import * as React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, useWindowDimensions, TextInput,ScrollView,Button } from 'react-native';
import {
    RobotoCondensed_300Light,
    RobotoCondensed_300Light_Italic,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold_Italic
} from '@expo-google-fonts/roboto-condensed';
import { useFonts } from 'expo-font';
export default function Contact({ navigation }) {
    const myHeight = useWindowDimensions().height;
    const myWidth = useWindowDimensions().width;
    let [fontsLoaded, error] = useFonts({
        RobotoCondensed_300Light,
        RobotoCondensed_300Light_Italic,
        RobotoCondensed_400Regular,
        RobotoCondensed_400Regular_Italic,
        RobotoCondensed_700Bold,
        RobotoCondensed_700Bold_Italic
    });
    function scaling(min, sizee) {
        return myWidth / (1520 / sizee) < min ? min : myWidth / (1520 / sizee);
    };
    return (
        <View style={{ backgroundColor: "#09070D", height: myHeight, }}>
            <ScrollView>

            <View style={[styles.backMain, { height: scaling(10, 400), }]}>
                <Image
                    style={[styles.image, {
                        width: scaling(10, 335),
                        height: scaling(10, 226), position: 'absolute', left: "30%"
                    }]}
                    source={require('@../../../assets/pureLogo.png')}
                    resizeMode='stretch'
                />
                <View style={{ width: myWidth / (1520 / 5), height: myWidth / (1520 / 240), backgroundColor: '#999999', position: 'absolute', left: myWidth / (1520 / 805), opacity: 0.25 }}></View>
                <View style={{ position: 'absolute', left: myWidth / (1520 / 850) }}>
                    <Text style={{ color: '#ffffff', alignSelf: 'center', fontSize: myWidth / (1520 / 50) }}>Arachno</Text>
                    <Text style={{ fontStyle: 'italic', color: '#ffffff', alignSelf: 'center', fontSize: myWidth / (1520 / 20), paddingTop: 10 }}>"Towards freedom of information"</Text>
                </View>
            </View>
            <View style={{ height: scaling(10, 550) }}>
                <View style={{padding:scaling(10,20)}}>
                <TextInput style={[styles.text, {
                    fontSize: scaling(10, 20),
                    borderStyle: 'solid', borderWidth: 2, paddingVertical:scaling(10,20),
                    }]} placeholder='subject' />
                    </View>
                <View style={{ padding: scaling(10, 20), height: scaling(10, 600), width:myWidth }}>
                        <TextInput style={[styles.text, {
                            fontSize: scaling(10, 20),
                            borderStyle: 'solid', borderWidth: 2, height: scaling(10, 400),
                        }]} placeholder='Message' multiline={true}/>
                    </View>
                </View>
                <View style={{
                    width: scaling(10, 200), height: scaling(10, 25),
                    position: 'relative', right: scaling(10, 50), backgroundColor: '#fff', alignSelf:'flex-end'
                }}>
                    <Button title='Submit' color='#540505' />
                </View>
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
    },
    backMain:
        { backgroundColor: "#0B0709", justifyContent: 'center' },
});