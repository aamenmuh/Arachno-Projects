import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import {
    RobotoCondensed_300Light,
    RobotoCondensed_300Light_Italic,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold_Italic
} from '@expo-google-fonts/roboto-condensed';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
export default function gradTest({ navigation }) {
    let [fontsLoaded, error] = useFonts({
        RobotoCondensed_300Light,
        RobotoCondensed_300Light_Italic,
        RobotoCondensed_400Regular,
        RobotoCondensed_400Regular_Italic,
        RobotoCondensed_700Bold,
        RobotoCondensed_700Bold_Italic
    });
    return (
        <LinearGradient colors={['#000000', '#ffffff']} style={styles.grad}>
            <Text style={styles.buttonText}>
                Sign in with Facebook
            </Text>
        </LinearGradient>
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
    },
    text: {
        fontFamily: 'RobotoCondensed_400Regular'
    },
    mainTexts: {
        fontSize: 30, alignSelf: 'center', paddingTop: 10, color: "#ffffff"
    },
    backMain:
        { backgroundColor: "#002132", height: 300, justifyContent: 'center' },
    grad: {
        flex: 1,
        width: 200,
        height: 200
    },
});