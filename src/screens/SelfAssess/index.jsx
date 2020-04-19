import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import MessageBubble from '../../components/MessageBubble';
import SuggestionBlocks from '../../components/SuggestionBlocks'

export default function SelfAssess() {

  const [answered1, setAnswered1] = useState(false);
  const [answered2, setAnswered2] = useState(false);
  const [answered3, setAnswered3] = useState(false);
  const [answered4, setAnswered4] = useState(false);
  const [validate, setValidate] = useState([])
  const avoidingResponses = ["None of the above", "No"]

  const onSuggestionBlockPress = (dataObj) => {
    dataObj.functionToCall(dataObj.text)
    if (!avoidingResponses.includes(dataObj.text)) {
      setValidate([...validate, dataObj.text])
    }
  }


  let initialTExt = "Please note that the information from this chat will be only for your self assessment and will not be tracked/monitored";
  return (
    <SafeAreaView style={styles.screenStyles}>
      <ScrollView>
        <MessageBubble direction="left" text={initialTExt} />
        <MessageBubble direction="left" text="Are you experiencing any of the following symptoms?" />
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <SuggestionBlocks text="Cough" onSuggestionBlockPress={(text) => onSuggestionBlockPress({ text, functionToCall: setAnswered1 })} />
          <SuggestionBlocks text="Fever" onSuggestionBlockPress={(text) => onSuggestionBlockPress({ text, functionToCall: setAnswered1 })} />
          <SuggestionBlocks text="Difficult in breathing" onSuggestionBlockPress={(text) => onSuggestionBlockPress({ text, functionToCall: setAnswered1 })} />
          <SuggestionBlocks text="None of the above" onSuggestionBlockPress={(text) => onSuggestionBlockPress({ text, functionToCall: setAnswered1 })} />
        </View>
        {answered1 &&
          <View>
            <MessageBubble direction="right" text={answered1} />
            <MessageBubble direction="left" text="Have you ever had any of the following?" />
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <SuggestionBlocks text="Diabetes" onSuggestionBlockPress={(text) => onSuggestionBlockPress({ text, functionToCall: setAnswered2 })} />
              <SuggestionBlocks text="Hypertension" onSuggestionBlockPress={(text) => onSuggestionBlockPress({ text, functionToCall: setAnswered2 })} />
              <SuggestionBlocks text="Lung disease" onSuggestionBlockPress={(text) => onSuggestionBlockPress({ text, functionToCall: setAnswered2 })} />
              <SuggestionBlocks text="None of the above" onSuggestionBlockPress={(text) => onSuggestionBlockPress({ text, functionToCall: setAnswered2 })} />
            </View>
          </View>
        }
        {answered2 &&
          <View>
            <MessageBubble direction="right" text={answered2} />
            <MessageBubble direction="left" text="Have you travelled anywhere internationally in the last 14 days?" />
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <SuggestionBlocks text="Yes" onSuggestionBlockPress={(text) => onSuggestionBlockPress({ text, functionToCall: setAnswered3 })} />
              <SuggestionBlocks text="No" onSuggestionBlockPress={(text) => onSuggestionBlockPress({ text, functionToCall: setAnswered3 })} />
            </View>
          </View>
        }
        {answered3 &&
          <View>
            <MessageBubble direction="right" text={answered3} />
            <MessageBubble direction="left" text="Have you been in contact or stayed with to any person who has been infected to COVID-19?" />
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <SuggestionBlocks text="Yes" onSuggestionBlockPress={(text) => onSuggestionBlockPress({ text, functionToCall: setAnswered4 })} />
              <SuggestionBlocks text="No" onSuggestionBlockPress={(text) => onSuggestionBlockPress({ text, functionToCall: setAnswered4 })} />
            </View>
          </View>
        }
        {answered4 &&
          <View>
            <MessageBubble direction="right" text={answered4} />
            <MessageBubble direction="left" text={validate.length >= 2 ? "You should visit your nearest healthcare. Click here for helpline numbers" : "Your infection risk is Low. You should still follow social distancing and avoid any chance of exposure to the deadly virus"}  backgroundColor={validate.length >= 2 ? "red" : "green"}/>
          </View>
        }



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
