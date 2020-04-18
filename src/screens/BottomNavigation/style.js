import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

let style = StyleSheet.create({
    appBackground: {
      backgroundColor: "#aae",
      flex: 1
    },
    icon: {
      width: wp(responsive('25')),
      height: wp(responsive('25'))
    },
    tabBar: {
        paddingVertical: wp(responsive('10')),
        borderLeftColor: '#121212',
        borderLeftWidth: wp(responsive('1')),
        borderRightColor: '#121212',
        borderRightWidth: wp(responsive('1')),
        borderTopColor:'#121212',
        borderTopWidth: wp(responsive('1')),
        height: wp(responsive('60')),
        paddingTop: wp(responsive('10')),
        paddingBottom: wp(responsive('5')),
        backgroundColor: "#1E1E1E",
    },
    tabLabel: {
      fontSize: wp(responsive('17')),
      textAlign: "center",
    }
  });

  function responsive (para) {
    let value = "0";
    value = (100/414)*para;
    return value
  }
  
  export default style;