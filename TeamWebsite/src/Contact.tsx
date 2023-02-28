import * as React from 'react';
import { Dimensions, View ,useWindowDimensions} from "react-native";
import Animated from "react-native-reanimated";
import "../src/scale.html";
import Svg, { Path } from "react-native-svg";
import AnimatedStroke from "../src/StrokeAnim"
const Margin = 10;
const paths = [
    "M 2.368713,16.398653 C 1.970098,16.304233 1.67935,16.092345 1.477684,15.749292 L 1.294704,15.438025 V 8.92437 2.410715 L 1.495559,2.08584 C 1.638231,1.855073 1.792409,1.711564 2.027801,1.590427 L 2.359189,1.419889 h 9.048599 9.048599 l 0.331388,0.170538 c 0.235392,0.121137 0.38957,0.264646 0.532242,0.495413 l 0.200855,0.324875 v 6.51889 6.518889 l -0.200855,0.324875 c -0.14266,0.230748 -0.296862,0.374286 -0.532215,0.495413 l -0.33136,0.170538 -8.913339,0.01058 C 6.265254,16.4562 2.52329,16.43526 2.368713,16.39865 Z M 19.44819,15.347057 c -0.03488,-0.03168 -0.709251,-0.536959 -1.498605,-1.122851 -0.789355,-0.585893 -2.261259,-1.680332 -3.270899,-2.432086 -1.009639,-0.751755 -1.871735,-1.38878 -1.915766,-1.415613 -0.04403,-0.02683 -0.260867,0.01212 -0.481854,0.08657 -0.253124,0.08527 -0.576253,0.135355 -0.873278,0.135355 -0.297025,0 -0.620154,-0.05008 -0.873278,-0.135355 -0.220987,-0.07445 -0.437822,-0.113385 -0.481854,-0.08653 -0.04403,0.02685 -0.846049,0.619059 -1.78226,1.316016 -0.936212,0.696956 -2.408116,1.791097 -3.270899,2.431424 -0.862783,0.640327 -1.597233,1.190429 -1.632111,1.222448 -0.03611,0.03315 3.42598,0.05822 8.040402,0.05822 4.547603,0 8.075989,-0.02527 8.040402,-0.05759 z M 5.566898,12.401174 C 7.25575,11.143679 8.764274,10.02087 8.919174,9.906042 9.074073,9.791215 9.201739,9.679304 9.202874,9.657351 9.204774,9.619631 8.803166,9.282745 5.672472,6.696249 4.95954,6.107243 3.915689,5.243486 3.352804,4.77679 L 2.329376,3.928249 v 5.445985 c 0,4.347669 0.01683,5.432604 0.08344,5.37964 0.04589,-0.03649 1.465228,-1.095205 3.15408,-2.3527 z M 20.4862,9.364385 V 3.9249 l -0.784348,0.65338 c -0.431392,0.359359 -1.475242,1.224188 -2.319668,1.921841 -0.844426,0.697654 -2.038471,1.684454 -2.653433,2.19289 -0.614962,0.508435 -1.117807,0.942389 -1.117432,0.96434 4e-4,0.02195 0.173098,0.165958 0.38383,0.320014 0.210732,0.154055 1.749917,1.301946 3.420411,2.550868 1.670495,1.248922 3.044773,2.271864 3.053952,2.273203 0.0092,0.0013 0.01669,-2.445334 0.01669,-5.437051 z m -8.365255,0.04327 C 12.265552,9.333885 13.029492,8.738048 13.818589,8.08358 14.607687,7.429112 16.415413,5.935137 17.835759,4.763635 19.884066,3.07419 20.402838,2.615112 20.3439,2.544096 20.233562,2.411147 2.582318,2.41078 2.471984,2.543722 c -0.05847,0.07046 0.314406,0.409758 1.77747,1.617389 2.466517,2.035896 3.895531,3.217111 5.184034,4.285095 1.192756,0.988623 1.528041,1.169547 2.0826,1.123791 0.188064,-0.01552 0.46025,-0.08857 0.604857,-0.162345 z"
];
const Contact = () => {
    const myWidth = useWindowDimensions().width;
    const myHeight = useWindowDimensions().height;
    const fac = (1520 / myWidth);
    const vWidth = fac*(myWidth / (1520 / 170)) + Margin;
    const vheight = fac*(myWidth / (1520 / 60)) + Margin;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Svg width={myWidth} height={myHeight} viewBox={[-Margin / 2, -Margin / 2, vWidth + Margin / 2, vheight + Margin / 2].join(" ")}>
                {paths.map((d, key) => (
                    <AnimatedStroke d={d} key={key} col="#513f00" stWidth={0.5} />))}
            </Svg>
        </View>
    );
};
export default Contact;