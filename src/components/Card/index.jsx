import React from 'react';
import { Image, Dimensions, TouchableOpacity, View, Text } from 'react-native';
import styles from './styles'

export default class ContainmentCard extends React.Component {
    render() {
      return(
        <View style={styles.container} >  
          <View style={styles.innerContainer}>
            <Text style={{...styles.headerText,color: this.props.textColor}}>{this.props.title || '14,707'}</Text>
            <Text style={{...styles.subText,color: this.props.textColor}}>{`${this.props.subText ||  'Confirmed'}`}</Text>
          </View>
        </View>
      );
    }
  }
