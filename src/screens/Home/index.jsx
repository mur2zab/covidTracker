import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Picker, Text } from "react-native";
import Card from '../../components/Card';
import Banner from '../../components/Banner'
import style from './styles'

export default function Home() {

  const [data, setData] = useState(null);
  const [stateData, setStateDetails] = useState(null);
  const [fetched, setFetched] = useState(false);
  const [stateDataFetched, setFetchedForStateData] = useState(false);
  const [selectedState, setStateSelectedValue] = useState(null);

  useEffect(() => {
    if(fetched === false)
      getData();
  },[fetched])

  const getData = () => {
    fetch("https://api.covid19india.org/data.json", { method: "GET" }).then(res => res.json())
      .then(response => {
        setData(response.statewise);
        setFetched(true);
      })
  }

  const setSelectedValue = (itemValue) => {
    itemValue = itemValue || "TT"
    let stateData = data.filter((eachRow)=>{
      return eachRow.state == itemValue;
    })
    setStateDetails(stateData[0])
    setStateSelectedValue(stateData[0].state)
    setFetchedForStateData(true);
  }

  // render() {
  return (
    <SafeAreaView style={styles.screenStyles}>
      <ScrollView>
        <Banner />
        <View style={style.dropdownContainer}>
          <Text style={style.pickerText}> Select state : </Text>
          <View style={style.pickerContainer}>
            <Picker
              selectedValue={selectedState}
              style={style.pickerDropdown}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              mode="dropdown"
            >
              {fetched && data.map(eachRow => {
                return (
                  <Picker.Item label={eachRow.state} value={eachRow.state} key={eachRow.statecode} />
                )
              })}
            </Picker>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
          <Card textColor="#FF002E" title={stateDataFetched && stateData.confirmed} subText="Confirmed" />
          <Card textColor="#494CFF" title={stateDataFetched && stateData.active} subText="Active" />
          <Card textColor="#00B73E" title={stateDataFetched &&  stateData.recovered} subText="Recovered" />
          <Card textColor="#6C747E" title={stateDataFetched &&  stateData.deaths} subText="Deceased" />
        </View>
        <View style={style.updateTimeContainer}>
          <Text style={style.updateTimeText}>{ stateDataFetched && `Last Update at : ${stateData.lastupdatedtime}`} </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  // }
}

const styles = StyleSheet.create({
  screenStyles: {
    flex: 1,
    backgroundColor: "#121212",
  }
});
