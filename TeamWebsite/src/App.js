import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Image, useWindowDimensions, ActivityIndicatorBase } from 'react-native';
import About from '../src/About';
import Home from '../src/Home';
import Contact from '../src/ContactUs';
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
import Learn from "../src/Learn"
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import "../src/scale.html";
import "../src/Zobr.css";
import Services from "./Services"
import { TabBarIndicator } from 'react-native-tab-view';
import {useRoute,useNavigation} from '@react-navigation/native'
export default function App() {
    return (
        <View style={{overflow:'hidden'}}>
        <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: { backgroundColor: "#09070D" },
                        tabBarItemStyle: { width: 100 },
                        tabBarLabelStyle: { color: "#ffffff" },
                    }}
                    style={{ overflow: 'hidden' }}
                    swipeEnabled={false}
                    initialRouteName="Home"
            >
              <Tab.Screen
                  name="Home"
                  component={Home}
                />
                <Tab.Screen
                    name="About"
                    component={About}
                />
                <Tab.Screen
                    name="Learn"
                    component={Learn}
                    />
                    <Tab.Screen
                    name="Services"
                    component={Services}
                    />
            </Tab.Navigator>
            </NavigationContainer>
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
    },
    text: {

    },
    backMain:
        { backgroundColor: "#002132", height:100, justifyContent: 'center' },
});