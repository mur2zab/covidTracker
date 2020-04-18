import React from 'react';
import { Image, Dimensions, TouchableOpacity, View, Text } from 'react-native';
import style from './styles'
import BannerImage from '../../assets/images/Corona.svg'

export default class Banner extends React.Component {
  render() {
    return (
      <View style={style.banner}>
        <View style={style.textContainer}>
          <Text style={style.headText} >Stay Home</Text>
          <Text style={style.headText} >Stay Safe</Text>
        </View>
        <View style={style.imgContainer}>
          <BannerImage />
        </View>
      </View>
    );
  }
}