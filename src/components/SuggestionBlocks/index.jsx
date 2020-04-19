import React from 'react';
import { Image, Dimensions, TouchableOpacity, View, Text } from 'react-native';
import styles from './styles'

export default class SuggestionBlocks extends React.Component {

  onSuggestionBLockPress = (text) => {
    this.props.onSuggestionBlockPress(text);
  }

  render() {

    //These spacers make the message bubble stay to the left or the right, depending on who is speaking, even if the message is multiple lines.
    var rightSpacer = this.props.direction === 'left' ? <View style={styles.rightSpacing} /> : null;

    return (
      <View style={{ backgroundColor: "#FFF", padding: 10, marginTop: 15, marginLeft: 10, alignSelf: 'flex-start'}}>
        <TouchableOpacity onPress={() => this.onSuggestionBLockPress(this.props.text)}>
          <Text style={{ color: "blue", fontWeight: "bold" }}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    )


    // return (
    //   <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
    //     {leftSpacer}
    //     <View style={bubbleStyles}>
    //       <Text style={bubbleTextStyle}>
    //         {this.props.text || "Murtuza chat bubble"}
    //       </Text>
    //     </View>
    //     {rightSpacer}
    //   </View>
    // );
  }
}

