import React, { useRef, useState } from "react";
import {Animated} from 'react-native'
import { Easing, useAnimatedProps } from "react-native-reanimated";
import { Path } from "react-native-svg";
import "../src/scale.html";
interface AnimatedStrokeProps {
    d: string;
    col: string;
    stWidth: number;
}
const AnimatedPath = Animated.createAnimatedComponent(Path);
const colors = ["#f9b500", "#ff0c00", "#00c51d", "#009E94"];
const stroke = colors[3];
const AnimatedStroke = ({ d,col,stWidth }: AnimatedStrokeProps) => {
    const offVal = useRef(new Animated.Value(328)).current;
    const offVal2 = useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        Animated.loop(
            Animated.sequence([
        Animated.timing(offVal, {
            toValue: 148,
            duration: 1800,
            useNativeDriver: true,
            easing: Easing.linear,
            delay: 1000,
        }),
                Animated.timing(offVal, {
                    toValue: 328,
                    duration: 1800,
                    useNativeDriver: true,
                    easing: Easing.linear,
                    delay: 1000,
                }),
            ])
        ).start();
    }, []);
    const [length, setLength] = useState(0);
    const ref = useRef < typeof AnimatedPath > (null);
    return (
        <AnimatedPath
            d={d}
            stroke={col}
            fill="none"
            strokeWidth={stWidth}
            strokeDasharray={328}
            strokeDashoffset={offVal}
        />
    );
};
export default AnimatedStroke;