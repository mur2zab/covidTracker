import React from 'react';
import { Image, Dimensions, TouchableOpacity, View, Text } from 'react-native';
import style from './styles'
import Swiper from 'react-native-swiper';
import Corona from '../../assets/images/Corona.svg'
import HandWashing from '../../assets/images/HandWashing.svg'
import HighFever from '../../assets/images/HighFever.svg'
import Quarantine from '../../assets/images/Quarantine.svg'


export default class Banner extends React.Component {
  render() {
    return (
      <View style={style.banner}>
        <View style={style.textContainer}>
          <Text style={style.headText} >Stay Home</Text>
          <Text style={style.headText} >Stay Safe</Text>
        </View>
        <View style={style.imgContainer}>
          <Swiper autoplay dot={<View />} activeDot={<View />} >
            <Corona />
            <HandWashing />
            <HighFever />
            <Quarantine />
          </Swiper>
        </View>
      </View>
    );
  }
}