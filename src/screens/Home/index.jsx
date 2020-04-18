import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Card from '../../components/Card';
import Banner from '../../components/Banner'

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.screenStyles}>
        <ScrollView>
          <Banner />
          <View style={{flex: 1, flexDirection: "row", flexWrap: "wrap"}}>
            <Card textColor="#FF002E" title="14,707" subText="Confirmed" />
            <Card textColor="#494CFF" title="12,151" subText="Active" />
            <Card textColor="#00B73E" title="2,060" subText="Recovered" />
            <Card textColor="#6C747E" title="496" subText="Deceased" />
          </View>
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
