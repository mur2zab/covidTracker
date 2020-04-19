import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';


let styles = StyleSheet.create({

  messageBubbleContainer:{
    justifyContent: 'space-between', 
    flexDirection: 'row',
  },
  messageBubble: {
    borderRadius: wp(responsive('7')),
    marginTop: wp(responsive('15')),
    marginRight: wp(responsive('10')),
    marginLeft: wp(responsive('10')),
    paddingHorizontal: wp(responsive('10')),
    paddingVertical: wp(responsive('10')),
    flexDirection: 'row',
    flex: 1
  },

  messageBubbleLeft: {
    backgroundColor: '#5000B4',
  },

  messageBubbleTextLeft: {
    color: '#FFFFFF'
  },

  messageBubbleRight: {
    backgroundColor: '#00ADC9'
  },

  messageBubbleTextRight: {
    color: 'white'
  },
  
  leftSpacing: {
    width: wp(responsive('100'))
  },

  rightSpacing: {
    width: wp(responsive('100'))
  }

});

function responsive(para) {
  let value = "0";
  value = (100 / 414) * para;
  return value
}

export default styles;