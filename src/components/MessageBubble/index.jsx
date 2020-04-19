import React from 'react';
import { Image, Dimensions, TouchableOpacity, View, Text } from 'react-native';
import styles from './styles'

export default class MessageBubble extends React.Component {
  render() {

    //These spacers make the message bubble stay to the left or the right, depending on who is speaking, even if the message is multiple lines.
    var leftSpacer = this.props.direction === 'left' ? null : <View style={styles.leftSpacing} />;
    var rightSpacer = this.props.direction === 'left' ? <View style={styles.rightSpacing} /> : null;
    var bubbleStyles = this.props.direction === 'left' ? [styles.messageBubble, styles.messageBubbleLeft] : [styles.messageBubble, styles.messageBubbleRight];

    var bubbleTextStyle = this.props.direction === 'left' ? styles.messageBubbleTextLeft : styles.messageBubbleTextRight;
    
    bubbleStyles = this.props.backgroundColor ? [...bubbleStyles,{backgroundColor: this.props.backgroundColor}] : bubbleStyles

    return (
      <View style={styles.messageBubbleContainer}>
         {leftSpacer}
        <View style={bubbleStyles}>
          <Text style={bubbleTextStyle}>
            {this.props.text || "..."}
          </Text>
        </View>
        {rightSpacer} 
      </View>
    )
  }
}

