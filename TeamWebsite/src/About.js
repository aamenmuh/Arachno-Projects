import React, { useRef, useState,useEffect } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, useWindowDimensions,Animated, FlatList } from 'react-native';
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
import AnimatedLogo from './LogoSvg.tsx';
import Hor from './Hor.tsx';
import Mission from './Mission.tsx';
import Contact from './Contact.tsx';
import Maxim from './Maxims.tsx';
import Carousel from 'react-native-reanimated-carousel';
export default function About({ navigation }) {
    const images = [
        [require('@../../../assets/Ela/Ela1.webp'),
            require('@../../../assets/Ela/Ela2.webp'),
            require('@../../../assets/Ela/Ela3.webp'),
            require('@../../../assets/Ela/Ela5.webp'),        ],
        [require('@../../../assets/Brahem/brahem1.webp'),
            require('@../../../assets/Brahem/brahem6.webp'),
            require('@../../../assets/Brahem/brahem3.webp'),
            require('@../../../assets/Brahem/brahem5.webp'),        ],
        ["Nope","Absolutely Not"],
        [require('@../../../assets/atef/atef1.webp'),
            require('@../../../assets/atef/atef2.webp'),
            require('@../../../assets/atef/atef3.webp'),
            require('@../../../assets/atef/atef4.webp'),],
        [require('@../../../assets/Youssef/youssef1.webp'),
            require('@../../../assets/Youssef/youssef2.webp'),
            require('@../../../assets/Youssef/youssef3.webp'),
            require('@../../../assets/Youssef/youssef4.webp')],
        [require('@../../../assets/Amine/amine1.webp'),
            require('@../../../assets/Amine/amine2.webp'),
            require('@../../../assets/Amine/amine3.webp'),
            require('@../../../assets/Amine/amine4.webp')],
    ]
    const bios = [
        "My name is Ela Ben Saad, 18 years old from Tunisia, a year 2 two student at the African Leadership Academy. Since a young age, I have developed a deep passion for problem-solving and dedicated my time and education to gain and develop skills to help me with this journey. I am passionate about technology and programming and self-development. Currently pursuing a rigorous research program with pioneer in the field of cyber security. Interested in pursuing an education in software engineering.",
        "Hi, I am Ahmed Ben Brahem.I am currently a student at the african leadership academy, I also graduated from le lycee Louis Pasteur_ with honors in Math,Physics & Economics.Besides the scientific academic pursuit, my  internships at PwC and my PMP courses attended, helped develop a sense of appreciation towards project management. I like it when someone teaches something that I don't know and I am committed to a long life of learning.",
        `I am Aamen Muharram. I am interested in philosophy and sciences and I am very passionate about programming. I also am in love with classical music and play Piano and Violin. My goal is to apply all that I learn to the improvement of educational systems in hopes of turning science to a wholeworld view rather than a collection of facts. PS: I hate Capitalism`,
        "I am Mohammed Atef, I'm an Egyptian student passionate about tech and design related fields. I'm experienced in graphic design, building and designing brand identities, project management, and marketing. I worked before on several projects in the fields of social entrepreneurship, tech, environment, and education. Aside from the busy part of my life, I like playing and practicing basketball.It's a sport that I'm passionate about and helps me release my negative thoughts. I like working on innovative and impactful projects, and that's one of the reasons why I'm part of ARACHNO. In ARACHNO and with my team, I seek making a positive impact through our digital skills, and  developing and building tech solutions.",
        "Beep beep, I am Youssef Ali, from Sharkia. I am very passionate about programming, data analysis, web development and machine learning. I have a long experience in coding with python. I also love mathematics, but not stat 2. Fun fact: I really really really love milk!",
        "I am Amine Oueslati, a competitive programmer and a mathematics enthusiast. I have years of experience in the field of computational problem-solving, most notably in the area of Algorithms & Data Structures. My life goal is to utilize engineering and technology to solve global challenges. If you love Rock music, One Piece, Agatha Christie / Arthur Conan Doyle, 80s / 90s movies, or discrete mathematics, let's be friends!",
    ]
    const myWidth = useWindowDimensions().width;
    const myHeight = useWindowDimensions().height;
    let [fontsLoaded, error] = useFonts({
        RobotoCondensed_300Light,
        RobotoCondensed_300Light_Italic,
        RobotoCondensed_400Regular,
        RobotoCondensed_400Regular_Italic,
        RobotoCondensed_700Bold,
        RobotoCondensed_700Bold_Italic
    });
    const fac = (1520 / myWidth);
    function scaling(min,sizee) {
        return myWidth / (1520 / sizee) < min ? min : myWidth / (1520 / sizee);
    };
    return (
        <View style={{ backgroundColor: "#09070D",height:myHeight}}>
            <ScrollView>
            <View style={[styles.backMain, { height: scaling(10, 400), /*backgroundColor:"#282333"*/}]}>
                <Image
                    style={[styles.image, {
                        width: scaling(10,210),
                        height: scaling(10, 226), position: 'absolute', left: "36%",}]}
                    source={require('@../../../assets/tlog.png')}
                    resizeMode='stretch'
                />
                <View style={{ width: 5, height: scaling(10, 240), backgroundColor: '#999999', position: 'absolute', left: scaling(10, 805), opacity: 0.25 }}></View>
                <View style={{position:'absolute',left: scaling(10,850)}}>
                    <Text style={{color:'#ffffff',alignSelf:'center',fontSize:scaling(10,50)}}>Arachno</Text>
                        <Text style={{
                            fontStyle: 'italic', color: '#ffffff', alignSelf: 'center',
                            fontSize: scaling(10, 20), paddingTop: scaling(10, 10)
                        }}>"Towards freedom of information"</Text>
                </View>
                </View>
                <View style={{width: myWidth }}>
                    <View style={{ height: scaling(10,500),flexDirection:"row"}}>
                        <View style={{ position: 'relative', top:scaling(10,130), left: scaling(10,60)}}>
                        <AnimatedLogo />
                    </View>
                        <View style={{
                            width: scaling(10, 1000),
                            alignItems: 'center', top: scaling(10, 60), position: 'absolute'
                        }}>
                    <Text style={[styles.text, {
                        fontSize: scaling(10, 40),
                        position: 'absolute', top: scaling(10, 25),textAlign:'center',
                    }]}>Who Are we?</Text>
                    <View style={{
                        backgroundColor: "#00a7fc", width: scaling(10, 200),
                                height:scaling(1,3), position: 'absolute', top: scaling(22,75),
                    }}></View>
                    <Text style={[styles.text, {
                        fontSize: scaling(10, 20),
                        position: 'absolute', top: scaling(10, 100), height: scaling(10, 200),
                        textAlign: 'center', lineHeight: scaling(10,30)
                    }]}>This team was created to bring tech services to those who want it,
                        {'\n'}To share our passion of programming and computer science,
                        {'\n'}To bring the virtual world to a wider audience.
                        {'\n'}We own our labour and enjoy every part of it.
                        {'\n'}We work, we joke, and we produce
                            {'\n'}We aim for perfection: We are Arachno.</Text>
                        </View>
                    </View>
                    <View style={{ height: scaling(10, 500), flexDirection: "row-reverse" }}>
                    <View style={{
                        width: scaling(10, 1000), alignItems: 'center',
                        top: scaling(10, 60), height: scaling(10,500), alignSelf: 'flex-end',
                    }}>
                        <Text style={[styles.text, {
                            fontSize: scaling(10, 40),
                            position: 'absolute', top: scaling(10, 25), textAlign: 'center',
                        }]}>Vision</Text>
                        <View style={{
                            backgroundColor: "#f9b500", width: scaling(10, 100),
                            height:scaling(1,3), position: 'absolute', top: scaling(22,75),
                        }}></View>
                        <Text style={[styles.text, {
                            fontSize: scaling(10, 20),
                            position: 'absolute', top: scaling(10, 100), height: scaling(10, 200),
                            textAlign: 'center', lineHeight: scaling(10,30)
                        }]}>To develop our society and lead the world
                            {'\n'}with efficient and Reliable Tech services.
                            {'\n'}To spread knowledge of software systems,
                            {'\n'}and help citizens develop software skills.
                            {'\n'}To make information accessible to all.</Text>
                        </View>
                        <View style={{ left: scaling(10, 750), top: scaling(10,120),position:'relative'} }>
                            <Hor />
                            </View>
                    </View>
                    <View style={{ height: scaling(10, 500), flexDirection: "row" }}>
                        <View style={{ position: 'relative', top: scaling(10, 120), left: scaling(10,850)}}>
                            <Mission />
                        </View>
                        <View style={{
                            width: scaling(10, 1000), alignItems: 'center',
                            top: scaling(10, 60), position: 'absolute'
                        }}>
                            <Text style={[styles.text, {
                                fontSize: scaling(10, 40),
                                position: 'absolute', top: scaling(10, 25), textAlign: 'center',
                            }]}>Mission</Text>
                            <View style={{
                                backgroundColor: "#0c674c", width: scaling(10, 130),
                                height:scaling(1,3), position: 'absolute', top: scaling(22,75),
                            }}></View>
                            <Text style={[styles.text, {
                                fontSize: scaling(10, 20),
                                position: 'absolute', top: scaling(10, 100),
                                height: scaling(10, 200), textAlign: 'center', lineHeight: scaling(10,30)
                            }]}>We are commited to develop efficient software systems
                                {'\n'}with high artistic and practial standards.
                                {'\n'}We are commited to help you with all you may need:
                                {'\n'}websites, mobile applications, or coding courses.</Text>
                        </View>
                    </View>
                    <View style={{ height: scaling(10, 500), flexDirection: "row-reverse",paddingBottom:scaling(10,20) }}>
                    <View style={{
                        width: scaling(10, 1000), alignItems: 'center',
                        top: scaling(10, 60), height: scaling(10, 500), alignSelf: 'flex-end'
                    }}>
                        <Text style={[styles.text, {
                            fontSize: scaling(10, 40),
                            position: 'absolute', top: scaling(10, 25), textAlign: 'center',
                        }]}>Contacts</Text>
                        <View style={{
                            backgroundColor: "#ff0c00", width: scaling(10, 140),
                            height:scaling(1,3), position: 'absolute', top: scaling(22,75),
                        }}></View>
                        <Text style={[styles.text, {
                            fontSize: scaling(10, 20),
                            position: 'absolute', top: scaling(10, 100), height: scaling(10, 200), textAlign: 'center', lineHeight: scaling(10,30)
                        }]}>Master email: arachno@ALAStudents.org
                            {'\n'}Aamen: amuharram21@alastudents.org
                            {'\n'}Amnine: aoueslati21@alastudents.org
                            {'\n'}Ahmed: abenbrahem21@alastudents.org
                            {'\n'}Ela: ebensaad21@alastudents.org
                            {'\n'}Atef: mmohamed21@alastudents.org
                                {'\n'}Youssef: yabdelkader21@alastudents.org</Text>
                        </View>
                        <View style={{ left: scaling(10, 900), top: scaling(10,180),position:'relative' }}>
                            <Contact />
                            </View>
                    </View>
                    <View style={{paddingTop:scaling(2,30)}}>
                    <View style={{ width: myWidth,alignItems:'center',}}>
                        <Text style={[styles.text, {
                            fontSize: scaling(10, 40),
                            position: 'absolute', top: scaling(15, 25), textAlign: 'center',
                        }]}>Our Maxims</Text>
                        <View style={{
                            backgroundColor: "#CD2AB5", width: scaling(10, 200),
                            height:scaling(1,3), position: 'absolute', top: scaling(26, 75),
                        }}></View>
                    </View>
                    <View style={{ width: myWidth, flexDirection: 'row', height: scaling(10, 500) }}>
                        <Text style={[styles.text, {
                            alignSelf: 'flex-start', fontSize: scaling(10, 20),
                            position: 'absolute', top: scaling(10, 100),
                            height: scaling(10, 200), textAlign: 'left', lineHeight: scaling(10, 40),
                            left:scaling(10,50),
                        }]}>1- Commitment towards perfection is a top priority: It is never enough to be "good enough".
                            {'\n'}2- Design is as important as Efficiency: An ugly program is as good as no program.
                            {'\n'}3- Transparency in progress is a moral must: The customer should be kept up-to-date.
                            {'\n'}4- Principle of uniquness: If it can be done by someone else, it is not perfect.
                            {'\n'}5- No Convention: We do not obey habitual rules: we challenge them.
                            {'\n'}6- Having fun: Why would you do it, if you don't enjoy it?
                        </Text>
                        <View style={{ left: scaling(10, 900), top: scaling(10, 160), position: 'relative' }}>
                            <Maxim />
                        </View>
                        </View>
                        </View>
                    <View style={{ width: myWidth, alignItems: 'center', }}>
                        <Text style={[styles.text, {
                            fontSize: scaling(10, 40),
                            position: 'absolute', top: scaling(10, 25), textAlign: 'center',
                        }]}>Members</Text>
                        <View style={{
                            backgroundColor: "#524b64", width: scaling(10, 160),
                            height:scaling(1,3), position: 'absolute', top: scaling(22, 75),
                        }}></View>
                        <View style={{ top: scaling(10, 100), height: scaling(10,500), width: myWidth, }}>
                            <View style={{ paddingTop:scaling(20,50),paddingBottom: scaling(20, 300),position:'relative' }}>
                                <View style={{
                                    width: scaling(10, 1400 - (100 + 1.5 * 400)), alignSelf: 'flex-start',
                                    position: 'absolute', left: scaling(1, 75), height: scaling(10, 400),
                                }}>
                                    <Text style={[styles.text, {
                                        fontSize: scaling(10, 35),
                                        position: 'relative',
                                        textAlign: 'center', alignSelf: 'center',
                                    }]}>Ela Ben Saad</Text>
                                    <ScrollView showsVerticalScrollIndicator={true}>
                                        <Text style={[styles.text, {
                                            fontSize: scaling(10, 20),
                                            position: 'relative',
                                            textAlign: 'left', alignSelf: 'flex-start', width: scaling(10, 1400 - (100 + 1.5 * 400))
                                        }]}>{bios[0]} </Text>
                                    </ScrollView>
                                </View>
                                <View style={{
                                    alignSelf: 'flex-end', right: scaling(10, 100),
                                    position: 'absolute'
                                }}>
                                    <Carousel
                                        loop
                                        height={scaling(10, 500)}
                                        width={scaling(10, 1.5 * 400)}
                                        autoPlay={true}
                                        data={images[0]}
                                        scrollAnimationDuration={3000}
                                        renderItem={({ index }) => (
                                            <Image
                                                source={images[0][index]}
                                                style={{ width: scaling(10, 1.5 * 400), height: scaling(10, 500) }}
                                            />
                                        )}
                                    />
                                </View>
                            </View>
                            <View style={{paddingVertical:scaling(20,300),position:'relative',}}>
                                <View style={{
                                    width: scaling(10, 1400 - (100 + 1.5 * 400)), alignSelf: 'flex-end',
                                    position: 'absolute', right: scaling(1, 75), height: scaling(10, 400),
                                }}>
                                <Text style={[styles.text, {
                                    fontSize: scaling(10, 35),
                                    position: 'relative',
                                    textAlign: 'center', alignSelf: 'center',
                                    }]}>Ahmed Ben Brahem</Text>
                                    <ScrollView showsVerticalScrollIndicator= {true}>
                                        <Text style={[styles.text, {
                                            fontSize: scaling(10, 20),
                                            position: 'relative',
                                            textAlign: 'left', alignSelf: 'flex-start', width: scaling(10, 1400 - (100 + 1.5 * 400))
                                            }]}>{ bios[1]} </Text>
                                        </ScrollView>
                            </View>
                            <View style={{ alignSelf: 'flex-start', left: scaling(10, 100),
                                position: 'absolute' }}>
                                <Carousel
                                    loop
                                    height={scaling(10, 500)}
                                    width={scaling(10, 1.5 * 400)}
                                    autoPlay={true}
                                    data={images[1]}
                                    scrollAnimationDuration={3000}
                                    renderItem={({ index }) => (
                                        <Image
                                            source={images[1][index]}
                                            style={{ width: scaling(10, 1.5 * 400), height: scaling(10, 500) }}
                                            resizeMode="stretch"
                                        />
                                    )}
                                />
                                </View>
                            </View>
                            <View style={{ paddingVertical: scaling(20, 300), position: 'relative' }}>
                                <View style={{
                                    width: scaling(10, 1400 - (100 + 1.5 * 400)), alignSelf: 'flex-start',
                                    position: 'absolute', left: scaling(1, 75), height: scaling(10, 400),
                                }}>
                                    <Text style={[styles.text, {
                                        fontSize: scaling(10, 35),
                                        position: 'relative',
                                        textAlign: 'center', alignSelf: 'center',
                                    }]}>Aamen Muharram</Text>
                                    <ScrollView showsVerticalScrollIndicator={true}>
                                        <Text style={[styles.text, {
                                            fontSize: scaling(10, 20),
                                            position: 'relative',
                                            textAlign: 'left', alignSelf: 'flex-start', width: scaling(10, 1400 - (100 + 1.5 * 400))
                                        }]}>{bios[2]} </Text>
                                    </ScrollView>
                                </View>
                                <View style={{
                                    alignSelf: 'flex-end', right: scaling(10, 100),
                                    position: 'absolute'
                                }}>
                                    <Carousel
                                        loop
                                        height={scaling(10, 500)}
                                        width={scaling(10, 1.5 * 400)}
                                        autoPlay={true}
                                        data={images[2]}
                                        scrollAnimationDuration={3000}
                                        renderItem={({ index}) => (
                                            <View
                                                style={{
                                                    flex: 1,
                                                    borderWidth: 1,
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Text style={{ textAlign: 'center', fontSize: scaling(10,50),color:'#fff' }}>
                                                    {images[2][index]}
                                                </Text>
                                            </View>
                                        )}
                                    />
                                </View>
                            </View>
                            <View style={{ paddingVertical: scaling(20, 300), position: 'relative',}}>
                                <View style={{
                                    width: scaling(10, 1400 - (100 + 1.5 * 400)), alignSelf: 'flex-end',
                                    position: 'absolute', right: scaling(1, 75), height: scaling(10, 500),
                                }}>
                                    <Text style={[styles.text, {
                                        fontSize: scaling(10, 35),
                                        position: 'relative',
                                        textAlign: 'center', alignSelf: 'center',
                                    }]}>Mohammed Atef</Text>
                                    <ScrollView showsVerticalScrollIndicator={true}>
                                        <Text style={[styles.text, {
                                            fontSize: scaling(10, 20),
                                            position: 'relative',
                                            textAlign: 'left', alignSelf: 'flex-start', width: scaling(10, 1400 - (100 + 1.5 * 400))
                                        }]}>{bios[3]} </Text>
                                    </ScrollView>
                                </View>
                                <View style={{
                                    alignSelf: 'flex-start', left: scaling(10, 100),
                                    position: 'absolute', height:scaling(10,500)
                                }}>
                                    <Carousel
                                        loop
                                        height={scaling(10, 500)}
                                        width={scaling(10, 1.5 * 400)}
                                        autoPlay={true}
                                        data={images[3]}
                                        scrollAnimationDuration={3000}
                                        renderItem={({ index }) => (
                                            <Image
                                                source={images[3][index]}
                                                style={{ width: scaling(10, 1.5 * 400), height: scaling(10, 500) }}
                                                resizeMode='stretch'
                                            />
                                        )}
                                    />
                                </View>
                            </View>
                            <View style={{ paddingVertical: scaling(20, 300), position: 'relative' }}>
                                <View style={{
                                    width: scaling(10, 1400 - (100 + 1.5 * 400)), alignSelf: 'flex-start',
                                    position: 'absolute', left: scaling(1, 75), height: scaling(10, 500),
                                }}>
                                    <Text style={[styles.text, {
                                        fontSize: scaling(10, 35),
                                        position: 'relative',
                                        textAlign: 'center', alignSelf: 'center',
                                    }]}>Youssef Ali</Text>
                                    <ScrollView showsVerticalScrollIndicator={true}>
                                        <Text style={[styles.text, {
                                            fontSize: scaling(10, 20),
                                            position: 'relative',
                                            textAlign: 'left', alignSelf: 'flex-start', width: scaling(10, 1400 - (100 + 1.5 * 400))
                                        }]}>{bios[4]} </Text>
                                    </ScrollView>
                                </View>
                                <View style={{
                                    alignSelf: 'flex-end', right: scaling(10, 100),
                                    position: 'absolute',
                                }}>
                                    <Carousel
                                        loop
                                        height={scaling(10, 500)}
                                        width={scaling(10, 1.5 * 400)}
                                        autoPlay={true}
                                        data={images[4]}
                                        scrollAnimationDuration={3000}
                                        renderItem={({ index }) => (
                                            <View
                                                style={{
                                                    flex: 1,
                                                    borderWidth: 1,
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Image style={{ textAlign: 'center', fontSize: scaling(10, 50), color: '#fff' }}
                                                    source={images[4][index]}
                                                    resizeMode="stretch"
                                                    style={{ width: scaling(10, 1.5 * 400), height: scaling(10, 500) }}
                                                />
                                            </View>
                                        )}
                                    />
                                </View>
                            </View>
                            <View style={{ paddingVertical: scaling(20, 300), position: 'relative', }}>
                                <View style={{
                                    width: scaling(10, 1400 - (100 + 1.5 * 400)), alignSelf: 'flex-end',
                                    position: 'absolute', right: scaling(1, 75), height: scaling(10, 500),
                                }}>
                                    <Text style={[styles.text, {
                                        fontSize: scaling(10, 35),
                                        position: 'relative',
                                        textAlign: 'center', alignSelf: 'center',
                                    }]}>Amine Oueslati</Text>
                                    <ScrollView showsVerticalScrollIndicator={true}>
                                        <Text style={[styles.text, {
                                            fontSize: scaling(10, 20),
                                            position: 'relative',
                                            textAlign: 'left', alignSelf: 'flex-start', width: scaling(10, 1400 - (100 + 1.5 * 400))
                                        }]}>{bios[5]} </Text>
                                    </ScrollView>
                                </View>
                                <View style={{
                                    alignSelf: 'flex-start', left: scaling(10, 100),
                                    position: 'absolute', height: scaling(10, 700)
                                }}>
                                    <Carousel
                                        loop
                                        height={scaling(10, 500)}
                                        width={scaling(10, 1.5 * 400)}
                                        autoPlay={true}
                                        data={images[5]}
                                        scrollAnimationDuration={3000}
                                        renderItem={({ index }) => (
                                            <Image
                                                source={images[5][index]}
                                                style={{ width: scaling(10, 1.5 * 400), height: scaling(10, 500) }}
                                                resizeMode='stretch'
                                            />
                                        )}
                                    />
                                </View>
                            </View>
                        </View>

                    </View>
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
        color: "#fff"
    },
    backMain:
        { backgroundColor: "#0B0709", justifyContent: 'center' },
});