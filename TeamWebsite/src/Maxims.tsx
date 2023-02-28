import * as React from 'react';
import { Dimensions, View, useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import AnimatedStroke from "../src/StrokeAnim"
const Margin = 10
import "../src/scale.html";
const paths = [
    "M 14.4375,9.1953125 H 37.039062 V 38.671875 H 14.4375 Z",
    "m 17.273436,12.460938 h 16.757812 v 1.289063 H 17.273436 Z",
    "m 17.359373,16.500002 h 16.757813 v 1.289062 H 17.359373 Z",
    "m 17.273436,20.453127 h 16.757812 v 1.289062 H 17.273436 Z",
    "m 17.273436,24.492189 h 16.757812 v 1.289063 H 17.273436 Z",
    "m 17.187498,28.273439 h 16.757813 v 1.289063 H 17.187498 Z",
    "m 17.273436,32.656254 h 16.757812 v 1.289062 H 17.273436 Z",
];
const Maxim = () => {
    const myWidth = useWindowDimensions().width;
    const myHeight = useWindowDimensions().height;
    const fac = (1520 / myWidth);
    const vWidth =  200 + Margin;
    const vheight =  100 + Margin;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Svg width={myWidth} height={myHeight} viewBox={[-Margin / 2, -Margin / 2, vWidth + Margin / 2, vheight + Margin / 2].join(" ")}>
                {paths.map((d, key) => (
                    <AnimatedStroke d={d} key={key} col="#49433a" stWidth={0.5} />))}
            </Svg>
        </View>
    );
};
export default Maxim;