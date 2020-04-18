import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

let style = StyleSheet.create({
    banner: {
        width: wp(responsive('414')),
        height: wp(responsive('219')),
        flexDirection: "row",
        backgroundColor: "#1E1E1E"
    },
    textContainer: {
        flex: 0.5,
        justifyContent: "center",
        flexWrap: "wrap",
        // backgroundColor: 'red'
    },
    headText: {
        fontSize: wp(responsive('19')),
        color: "white",
        width: wp(responsive('168')),
        textAlign:"center"
    },
    imgContainer: {
        flex: 0.5,
        justifyContent: "center",
        // backgroundColor: 'black'
    }
});

function responsive(para) {
    let value = "0";
    value = (100 / 414) * para;
    return value
}

export default style;
