import { StyleSheet } from 'react-native';
import {Dimensions} from "react-native";
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

let deviceWidth =  Dimensions.get('window').width;

let styles = StyleSheet.create({
    container:{
      width: (deviceWidth - 40) / 2,
      height: wp(responsive('100')), 
      flexGrow: 0.5,
      flexDirection: 'row',
      marginLeft: 11,
      marginTop: 16
    },
    innerContainer: { 
      flex: 1, 
      backgroundColor: '#FFFFFF', 
      borderRadius:10 ,
      elevation:5, 
      padding: 10
    },
    headerText: { 
      paddingTop: wp(responsive('11')), 
      color: '#FF002E', 
      fontSize: wp(responsive('25')),
      textAlign: "center",
      // margin: 6, 
      fontWeight: "bold" 
    },
    subText: { 
      color: '#FF002E', 
      textAlign: "center",
      margin: 6,
      fontSize: wp(responsive('15')) 
    }
});

function responsive (para) {
  let value = "0";
  value = (100/414)*para;
  return value
}

export default styles;