import React,{ useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Chart from '../../components/Chart';

export default function Dashboard (){

  const [fetched, setFetched] = useState(false);
  const [confirmedDayWise, setConfirmedDayWise] = useState([])
  const [recoveredDayWise, setRecoveredDayWise] = useState([])
  const [deceasedDayWise, setDeceasedDayWise] = useState([])
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    if (fetched === false)
      getData();
  }, [fetched])


  const getData = async () => {
    let response = await fetch("https://api.covid19india.org/states_daily.json", { method: "GET" })
    response = await response.json();
    response = response.states_daily;
    let confirmed = [], recovered = [], deceased = [], labels = [];
    for (let i = response.length - 21; i < response.length; i += 3) {
      confirmed.push(Number(response[i].tt))
      recovered.push(Number(response[i + 1].tt))
      deceased.push(Number(response[i + 2].tt))
      let dateFormatArr = response[i].date.split('-')
      labels.push(dateFormatArr[0]+ '-'+ dateFormatArr[1] )
    }
    setConfirmedDayWise(confirmed);
    setRecoveredDayWise(recovered);
    setDeceasedDayWise(deceased);
    setLabels(labels);
    setFetched(true);
  }
    return (
      <SafeAreaView style={styles.screenStyles}>
        <ScrollView>
          {fetched && <Chart title="Confirmed" labels={labels} dataArr={confirmedDayWise} color="#0000FF"/>}
          {fetched && <Chart title="Recovered" labels={labels} dataArr={recoveredDayWise} color="#00FF30"/>}
          {fetched && <Chart title="Deceased" labels={labels} dataArr={deceasedDayWise}  color="#FF0000"/>}
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  screenStyles: {
    flex: 1,
    backgroundColor: "#121212",
  }
});
