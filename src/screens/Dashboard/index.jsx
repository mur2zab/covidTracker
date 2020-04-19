import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
// import Chart from '../../components/Chart';

export default class Dashboard extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.screenStyles}>
        <ScrollView>
          {/* <Chart /> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screenStyles: {
    flex: 1,
    backgroundColor: "#121212",
  }
});
