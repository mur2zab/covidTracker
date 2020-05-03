import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import * as _ from "lodash";
import MessageBubble from '../MessageBubble';


export default class Chart extends React.Component {
  
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={{ color: "white", fontSize: 20, alignSelf: "center" }}> {this.props.title} </Text>
        <LineChart
          data={{
            labels: this.props.labels,
            datasets: [
              {
                data: this.props.dataArr
              }
            ]
          }}
          width={Dimensions.get("screen").width} 
          height={180}
          chartConfig={{
            backgroundColor: "#000000",
            backgroundGradientFrom: "#28313B",
            backgroundGradientTo: "#485461",
            decimalPlaces: 0,
            color: (opacity = 1) => this.props.color,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 10
            },
            propsForDots: {
                r: "4",
                strokeWidth: "0",
                stroke: this.props.color
              },
            propsForLabels:{
              fontSize: 12
            },
            propsForBackgroundLines:{
              strokeWidth: 0
            }
          }} 
          style={{
            margin: 8,
            borderRadius: 10
          }}
        />
      </View>
    )
  }
}