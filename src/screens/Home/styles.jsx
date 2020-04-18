
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

let style = StyleSheet.create({
  dropdownContainer: {
    flexDirection: "row",
    marginTop: wp(responsive('50')),
    justifyContent: "center"

  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: 'yellow'
  },
  pickerText: {
    fontSize: wp(responsive('18')),
    color: "#FFFFFF",
  },
  pickerDropdown: {
    height: wp(responsive('19')),
    width: wp(responsive('150')),
    color: "#FFFFFF",
    borderColor: '#FFFFFF',
    borderBottomWidth: 1,
  }
});

function responsive(para) {
  let value = "0";
  value = (100 / 414) * para;
  return value
}

export default style;