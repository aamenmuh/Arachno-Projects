import React, { useEffect, useRef, useState } from 'react';
import 'react-native-gesture-handler';
import { Animated, StyleSheet, Text, View, Image, useWindowDimensions, AppRegistry, ScrollView, TouchableOpacity } from 'react-native';
import {
    RobotoCondensed_300Light,
    RobotoCondensed_300Light_Italic,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold_Italic
} from '@expo-google-fonts/roboto-condensed';
import { useFonts } from 'expo-font';
import { Video } from 'expo-video';
import { LinearGradient } from 'expo-linear-gradient';
import VisibilitySensor from '../src/visibilityy.tsx';
import { and } from 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Learn from "../src/Learn";
import "../src/Zobr.css";
//import About from "../src/About";
import { Hoverable, useHover } from 'react-native-web-hooks';
import { RemoveScroll } from 'react-remove-scroll';
import Communications from 'react-native-communications';
import Services from "./Services"
import { useNavigation } from '@react-navigation/native';
export default function Home({ navigation }) {
    const onBuffer = (buffering: boolean) => {
        buffering = false;
    };
    const isHovered = useHover(useRef(null));
    var underCol;
    const scroRef = useRef();
    const video = React.useRef(null);
    const [videoStatus, setVidStatus] = React.useState({});
    const myWidth = useWindowDimensions().width;
    const myHeight = useWindowDimensions().height;
    /*************************************************************/
    const moveAnimm = useRef(new Animated.Value(0)).current;
    const moveAnim = useRef(new Animated.Value(0)).current;
    const moveText3 = useRef(new Animated.Value(0)).current;
    const moveImage3 = useRef(new Animated.Value(0)).current;
    const moveAnimm2 = useRef(new Animated.Value(0)).current;
    const moveAnim2 = useRef(new Animated.Value(0)).current;
    const moveImage4 = useRef(new Animated.Value(0)).current;
    const moveText4 = useRef(new Animated.Value(0)).current;
    /**************************************************************/
    const opacity1 = useRef(new Animated.Value(0)).current;
    const opacity2 = useRef(new Animated.Value(0)).current;
    const opacity3 = useRef(new Animated.Value(0)).current;
    const opacity4 = useRef(new Animated.Value(0)).current;
    /**************************************************************/
    const fade1 = () => {
        Animated.timing(opacity1, {
            toValue: 1,
            duration: 600,
            useNativeDriver:true,
        }).start();
    };
    const fade2 = () => {
        Animated.timing(opacity2, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const fade3 = () => {
        Animated.timing(opacity3, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const fade4 = () => {
        Animated.timing(opacity4, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const fade1R = () => {
        Animated.timing(opacity1, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const fade2R = () => {
        Animated.timing(opacity2, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const fade3R = () => {
        Animated.timing(opacity3, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const fade4R = () => {
        Animated.timing(opacity4, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    /**************************************************************/
    const moveLeft1 = () => {
        Animated.timing(moveAnim, {
            toValue: -scaling(10,734),
            duration: 1000,
            useNativeDriver: true,
        }).start();
        console.log(myHeight);
    };
    const moveRight1 = () => {
        Animated.timing(moveAnimm, {
            toValue: scaling(10,50),
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const moveLeft1R = () => {
        Animated.timing(moveAnim, {
            toValue: -scaling(10,854),
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const moveRight1R = () => {
        Animated.timing(moveAnimm, {
            toValue: scaling(10,854),
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const moveLeft3 = () => {
        Animated.timing(moveImage3, {
            toValue: - scaling(10,734),
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const moveRight3 = () => {
        Animated.timing(moveText3, {
            toValue: scaling(10,100),
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const moveLeft3R = () => {
        Animated.timing(moveImage3, {
            toValue: -scaling(10,854),
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const moveRight3R = () => {
        Animated.timing(moveText3, {
            toValue: scaling(10,854),
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    /**************************************************************/
    const moveLeft2 = () => {
        Animated.timing(moveAnim2, {
            toValue: -scaling(10,724),
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const moveRight2 = () => {
        Animated.timing(moveAnimm2, {
            toValue: scaling(10,50),
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const moveLeft2R = () => {
        Animated.timing(moveAnim2, {
            toValue: -scaling(10,854),
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const moveRight2R = () => {
        Animated.timing(moveAnimm2, {
            toValue: scaling(10,854),
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const moveLeft4 = () => {
        Animated.timing(moveText4, {
            toValue: -scaling(10,724),
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const moveRight4 = () => {
        Animated.timing(moveImage4, {
            toValue: scaling(10,20),
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const moveLeft4R = () => {
        Animated.timing(moveText4, {
            toValue: -scaling(10,854),
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const moveRight4R = () => {
        Animated.timing(moveImage4, {
            toValue: scaling(10,854),
            duration: 1000,
            useNativeDriver:true,
        }).start();
    };
    /**************************************************************/
    const movement1 = () => {
        moveLeft1();
        moveRight1();
        fade1();
    }
    const movement1Rev = () => {
        moveLeft1R();
        moveRight1R();
        fade1R();
    }

    const movement2 = () => {
        moveLeft2();
        moveRight2();
        fade2();
    }
    const movement2Rev = () => {
        moveLeft2R();
        moveRight2R();
        fade2R();
    }

    const movement3 = () => {
        moveLeft3();
        moveRight3();
        fade3();
    }
    const movement3Rev = () => {
        moveLeft3R();
        moveRight3R();
        fade3R();
    }

    const movement4 = () => {
        moveLeft4();
        moveRight4();
        fade4();
    }
    const movement4Rev = () => {
        moveLeft4R();
        moveRight4R();
        fade4R();
    }

    let [fontsLoaded, error] = useFonts({
        RobotoCondensed_300Light,
        RobotoCondensed_300Light_Italic,
        RobotoCondensed_400Regular,
        RobotoCondensed_400Regular_Italic,
        RobotoCondensed_700Bold,
        RobotoCondensed_700Bold_Italic
    });

    function changed (isVisible) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
        console.log(myWidth);
        console.log(myWidth);
        isVisible ? movement1() : movement1Rev();
    }

    function changed2(isVisible2) {
        console.log('Element is now %s', isVisible2 ? 'visible' : 'hidden');
        isVisible2 ? movement2() : movement2Rev();
    }

    function changed3(isVisible3) {
        console.log('Element is now %s', isVisible3 ? 'visible' : 'hidden');
        isVisible3 ? movement3() : movement3Rev();
    }

    function changed4(isVisible4) {
        console.log('Element is now %s', isVisible4 ? 'visible' : 'hidden');
        isVisible4 ? movement4() : movement4Rev();
    }

    function changeState() {
        videoStatus => setVidStatus(() => videoStatus);
        videoStatus.isPlaying ? Video.current.playAsync() : Video.current.playAsync();
    }
    function  Learning(){
        navigation.navigate('Learn');
        underCol ="#CD2AB5"
    }
    function MembersAndServices(){
        navigation.navigate('Services')
        underCol ="#CD2AB5"
    }
    function About(){
        navigation.navigate('About')
        underCol="#CD2AB5"
    }
    function changeCol() {
        underCol == "#CD2AB5" ? underCol = "#00a7fc" : underCol = "#CD2AB5";
        console.debug(underCol);
    }
    function scaling(min, sizee) {
        return myWidth / (1520 / sizee) < min ? min : myWidth / (1520 / sizee);
    }
    const isLarge=myWidth>763;
    return (
        <View style={{ backgroundColor: "#09070D", overflow: 'hidden' ,height:myHeight}}>
            <ScrollView>
            <Image 
            source={require('../assets/bg.png')}
            style={{width:scaling(10,1450),height:scaling(10,710),left:scaling(10,25)}}
            />
            {/*<Image
                source={require('../assets/tlog.png')}
                style={{width:scaling(10,210),height:scaling(10,226),position:'absolute',left:'42.5%',top:scaling(10,400)}}
    />*/}
            <TouchableOpacity style={{position:'absolute',right:scaling(10,200),top:scaling(10,100)}}
            onPress={About}
            >
            <Image
                source={require('../assets/3ankab.png')}
                style={{width:scaling(10,69),height:scaling(10,47),
                }}
            />
            </TouchableOpacity>
            <Image
            source={require('../assets/quote2.png')}
            style={{width:scaling(10,184),height:scaling(10,121),position:'absolute',right:scaling(10,240),top:scaling(0,0),
            opacity:isLarge?1:0
        }}
            />
            <Text style={{color:'#09070D',position:'absolute',
            right:scaling(10,260),top:scaling(10,40),justifyContent:'center',textAlign:'center',textAlignVertical:'center',
            fontSize:scaling(0,16),opacity:isLarge?1:0
            }}> Welcome to the Lab!</Text>
                <View style={{ padding: scaling(10, 100), paddingBottom: scaling(10, 230)} }>
                    <Text style={[styles.text, styles.mainTexts, { fontSize: scaling(10, 40) }]}> We believe
                    in the affirmation of your virtual identity.
                    </Text>
                <Text style={[styles.text, styles.mainTexts, { fontSize: scaling(10,40)}]}> Be it through Mobile applications or websites, </Text>
                    <Text style={[styles.text, styles.mainTexts, { fontSize: scaling(10, 40) }]}>  we are here to advocate your mission.</Text>
                    <Text style={[styles.text, styles.mainTexts, { fontSize: scaling(10, 40) }]}>  Do the impossible -- with Arachno.</Text>
            </View>

            <View style={{ backgroundColor: '#09070d', height: scaling(10,550), justifyContent: 'center', flexDirection: 'row',width:myWidth }}>
                <VisibilitySensor onChange={changed}>
                    <Animated.View style={[{ position: 'absolute', left: moveAnim, opacity: opacity1,}]}>
                            <View style={{ backgroundColor: "#00a7fc", width: scaling(10,100), height: scaling(1,3),left:10 }}></View>
                            <Text style={[styles.text, styles.mainTexts, { fontSize: scaling(10,60), }]}> Mobile Applications
                            </Text>
                            <Text style={[styles.text, styles.mainTexts, { alignSelf: 'center', fontSize: scaling(10,20),}]}> Build professional mobile applications</Text>
                        <Text style={[styles.text, styles.mainTexts, { alignSelf: 'center', fontSize: scaling(10,20), }]}> for commercial and personal use
                            </Text>
                        </Animated.View>
                    <Animated.View style={[{ position: 'absolute', left: moveAnimm, opacity: opacity1,}]}>
                <Image
                            style={{ width: scaling(10,724), height: scaling(10,520),}}
                    source={require('@../../../assets/mobileBanner.png')}
                    resizeMode='stretch'
                    />
                    </Animated.View>
                </VisibilitySensor>
                    </View>
            <View style={{ backgroundColor: '#09070d', height: scaling(10, 550), justifyContent: 'center', flexDirection: 'row' }}>
                <VisibilitySensor onChange={changed2}>
                    <Animated.View style={[styles.animation, { position:'absolute', right: moveAnimm2, opacity: opacity2,}]}>
                        <Image
                            style={{ width: scaling(10,724), height: scaling(10,500), position: 'relative', right: "10%",}}
                            source={require('@../../../assets/laptop2.png')}
                            resizeMode='stretch'
                        />
                    </Animated.View>
                        <Animated.View style={[styles.animation, { position:'absolute', right: moveAnim2, opacity: opacity2, }]}>
                            <View style={{ backgroundColor: "#f9b500", width: scaling(10, 100), height: scaling(1,3),right:-15 }}></View>
                            <Text style={[styles.text, styles.mainTexts, { alignSelf: 'center', fontSize: scaling(10,60),}]}> Websites
                            </Text>
                            <Text style={[styles.text, styles.mainTexts, { alignSelf: 'center', fontSize: scaling(10,20), }]}> Professional websites with</Text>
                            <Text style={[styles.text, styles.mainTexts, { alignSelf: 'center', fontSize: scaling(10,20), }]}> elegant desgins
                            </Text>
                        </Animated.View>
                    </VisibilitySensor>
                </View>
            <View style={{ backgroundColor: '#09070d', height: scaling(10, 550), justifyContent: 'center', flexDirection: 'row', }}>
                    <VisibilitySensor onChange={changed3}>
                    <Animated.View style={[{ position: 'absolute', left: moveImage3, opacity: opacity3, }]}>
                            <View style={{ backgroundColor: "#ff0c00", width: scaling(10, 100), height: scaling(1, 3), left: 50 }}></View>
                            <Text style={[styles.text, styles.mainTexts, { alignSelf: 'center', fontSize: scaling(10,60) }]}> Courses
                            </Text>
                            <Text style={[styles.text, styles.mainTexts, { alignSelf: 'center', fontSize: scaling(10,20), }]}> Learn with us the essentials:</Text>
                            <Text style={[styles.text, styles.mainTexts, { alignSelf: 'center', fontSize: scaling(10,20), }]}> Coding, Robotics & Machine learning!
                            </Text>
                        </Animated.View>
                    <Animated.View style={[{position:'absolute', left: moveText3, opacity: opacity3, }]}>
                        <Image
                            style={{ width: scaling(10,724), height: scaling(10, 500), position: 'relative', right: "10%" }}
                            source={require('@../../../assets/brain2.png')}
                            resizeMode='stretch'
                        />
                    </Animated.View>
                </VisibilitySensor>
                </View>
            <LinearGradient colors={['#09070d', '#08060A']} style={{ height: scaling(10, 550), justifyContent: 'center', flexDirection: 'row', }}>
                <VisibilitySensor onChange={changed4}>
                    <Animated.View style={[styles.animation, { position:'absolute', right: moveImage4, opacity: opacity4,}]}>
                        <Image
                            style={{ width: scaling(10,724), height: scaling(10,500), position: 'relative', right: "10%", }}
                            source={require('@../../../assets/Software3.png')}
                            resizeMode='stretch'
                        />
                    </Animated.View>
                        <Animated.View style={[styles.animation, { position:'absolute', right: moveText4, opacity: opacity4, }]}>
                            <View style={{ backgroundColor: "#0c674c", width: scaling(10,100), height: scaling(1,3) }}></View>
                            <Text style={[styles.text, styles.mainTexts, { alignSelf: 'center', fontSize: scaling(10,60), }]}> Software Services
                            </Text>
                            <Text style={[styles.text, styles.mainTexts, { alignSelf: 'center', fontSize: scaling(10,20), }]}> Have a software idea?</Text>
                            <Text style={[styles.text, styles.mainTexts, { alignSelf: 'center', fontSize: scaling(10,20), }]}> Leave the implementation to us!
                            </Text>
                        </Animated.View>
                    </VisibilitySensor>
                </LinearGradient>
            <View style={{ height: scaling(10,300), width: useWindowDimensions().width, backgroundColor: "#08060a", }}>
                <Text style={[styles.text, { color: '#ffffff', fontSize: scaling(10, 40), position: "absolute", right: "8%", bottom: "30%" }]}>Arachno</Text>
                <Hoverable>
                    {isHovered=>(
                        <View>
                                <Text style={[styles.text, {
                                    color: '#ffffff', fontSize: scaling(10, 20),
                                    position: "absolute", right: "5%"
                                }]} onPress={() =>Communications.email(['arachno@ALAStudents.org'],null,null,null,null)}>arachno@ALAStudents.org</Text>
                            <View style={{
                                width: scaling(108, 216), height: scaling(1,3.5), position: "absolute", right: "4.8%",
                                top: scaling(10, 27), backgroundColor: isHovered ? "#CD2AB5" : "#00a7fc"}}></View>
                            </View>
                    )}
                    </Hoverable>
                <Hoverable>
                    {isHovered => (
                        <View>
                <Text style={[styles.text, { color: '#ffffff', fontSize: scaling(10, 20), position: "absolute", left: scaling(10,70) }]}
                        onPress={Learning}>Learn with us</Text>
                    <View style={{ width: scaling(50, 104), height: scaling(1,3.5), position: "absolute", left: scaling(10,70),
                                top: scaling(10,27), backgroundColor: isHovered ? "#CD2AB5" :"#00a7fc" }}></View>
                            </View>
                    )}
                </Hoverable>
                <Hoverable>
                    {isHovered => (
                        <View>
                            <Text style={[styles.text, { color: '#ffffff', fontSize: scaling(10, 20), position: "absolute", left:scaling(80,220) }]}
                                onPress={About}>Archano?</Text>
                            <View style={{
                                width: scaling(36, 74), height: scaling(0.5,3.5), position: "absolute", left: scaling(80,220),
                                top: scaling(10, 27), backgroundColor: isHovered ? "#CD2AB5" : "#00a7fc"
                            }}></View>
                        </View>
                    )}
                </Hoverable>
                <Hoverable>
                    {isHovered => (
                        <View>
                            <Text style={[styles.text, { color: '#ffffff', fontSize: scaling(10, 20), position: "absolute", left: scaling(130,340) }]}
                                onPress={MembersAndServices}>Services</Text>
                            <View style={{
                                width: scaling(32,67), height: scaling(0.5,3.5), position: "absolute", left: scaling(130,340),
                                top: scaling(10,27), backgroundColor: isHovered ? "#CD2AB5" : "#00a7fc"
                            }}></View>
                        </View>
                    )}
                </Hoverable>
                <Text style={[styles.text, {
                    color: '#241b2d', fontSize: scaling(10, 20),
                    position: "absolute", left: "5%", bottom: "45%"
                }]}>Bring endless values to your Tech Services</Text>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        position: 'absolute',
        width: 700,
        height: 300,
        justifyContent: 'center',
        alignSelf: 'center',
        opacity:0.2,
    },
    text: {
        fontFamily: 'RobotoCondensed_400Regular'
    },
    mainTexts: {
        alignSelf: 'center', color:"#ffffff"
    },
    backMain:
        { backgroundColor: "#002132", justifyContent: 'center' },
    grad: {
        
    },
    animation:
        {},
    mainVideo: {
    }
});
AppRegistry.registerComponent('RNCommunications', () => RNCommunications);