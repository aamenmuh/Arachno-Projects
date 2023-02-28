import * as React from 'react';
import { Dimensions, View,useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import AnimatedStroke from "../src/StrokeAnim"
const Margin = 10

const paths = [
    "m 183.8756,7.9396049 -0.0535,5.2179601 12.64696,25.05551 2.62023,-0.64077 z",
    "m 183.79233,32.927705 0.049,-2.67738 c 0.67758,0.49794 1.32734,0.83097 2.13864,1.42032 1.21435,0.95023 2.29132,1.94625 3.37937,2.93858 l 1.9917,1.64887 c 0.71401,0.50027 1.54066,0.963 2.38352,1.42032 l 1.61622,0.47344 1.12646,0.049 0.66934,2.4774 c -1.52241,-0.23232 -3.84428,-1.07004 -4.76703,-1.6448 0.005,0.003 -1.73867,-0.79994 -4.24462,-2.72635 -1.44753,-1.12647 -2.89505,-2.303 -4.34258,-3.3794 z",
    "m 183.87612,7.9471549 -0.0242,5.2093201 -12.58958,25.0535 -2.62023,-0.64077 z",
    "m 183.93813,32.927705 -0.0821,-2.67738 c -0.65419,0.50963 -1.35273,0.86605 -2.10557,1.42032 -1.21435,0.95023 -2.29132,1.94625 -3.37937,2.93858 l -1.9917,1.64887 c -0.71401,0.50027 -1.54066,0.963 -2.38352,1.42032 l -1.61622,0.47344 -1.12646,0.049 -0.66934,2.4774 c 1.52241,-0.23232 3.84428,-1.07004 4.76703,-1.6448 -0.91422,0.58771 1.73867,-0.79994 4.24462,-2.72635 1.44753,-1.12647 2.89505,-2.303 4.34258,-3.3794 z",
    "m 196.46699,38.183785 2.61632,-0.61597 c -0.19197,1.36345 -0.75478,2.48802 -1.9427,3.1045 z",
    "m 171.26899,38.183785 -2.61632,-0.61597 c 0.19197,1.36345 0.75478,2.48802 1.9427,3.1045 z",
];
const AnimatedLogo = () => {
    const myWidth = useWindowDimensions().width;
    const myHeight = useWindowDimensions().height;
    const fac = (1520 / myWidth);
    const vWidth = fac * (myWidth / (1520 / 150)) + Margin;
    const vheight = fac * (myWidth / (1520 / 100)) + Margin;
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'} }>
            <Svg width={myWidth} height={myHeight} viewBox={[-Margin / 2, -Margin / 2, vWidth + Margin / 2, vheight + Margin / 2].join(" ")}>
                {paths.map((d, key) => (
                    <AnimatedStroke d={d} key={key} col="#009E94" stWidth={0.5} />))}
            </Svg>
            </View>
    );
};
export default AnimatedLogo;