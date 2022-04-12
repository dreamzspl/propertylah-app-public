import React, { useState } from "react";
import { ImageBackground, Image, View, Text, Button, Pressable, StyleSheet, ScrollView } from "react-native";

import { styles, textStyles } from "../../styles/common";
import Colors from "../../constants/colors";

import { SafeAreaProvider } from "react-native-safe-area-context";
import TopicCard from "../../components/UI/TopicCard";
import PrimaryButton from "../../components/UI/PrimaryButton";


function QnAScreen() { 
  const [loading, setLoading] = useState(false);

  const onTopicPressed = () => {
    console.warn("Topic pressed.");
  }

  const onAskQnPressed = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    console.warn("'Ask Your Question' button pressed");
    setLoading(false);
  }
  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.container}>
          <Text style={textStyles.headerText}>Q & A Screen</Text>
          <Text style={textStyles.bodyText}>Lorem ipsum</Text>
        </View>
        <ImageBackground source={require("../../assets/images/askguru-hero.jpg")} style={customStyles.bgImage} resizeMode="contain">
          <View style={customStyles.ctaContainer}>
            <Text style={[textStyles.headerText, { flexWrap: "wrap", paddingHorizontal: 20 }]}>AskGuru Community</Text>
            <Text style={[textStyles.bodyText, { flexWrap: "wrap", width: "60%", paddingHorizontal: 20 }]}>Get answers from PropertyLah experts in 24 hours</Text>
            {/* <Pressable title="Ask Your Question" style={[customStyles.buttonContainer, customStyles.buttonPrimary]}>
              <Text>Ask Your Question</Text>
            </Pressable> */}
            <PrimaryButton text={loading ? "Loading..." : "Ask Your Question"} onPress={onAskQnPressed} type="Primary" />
          </View>
        </ImageBackground>

        <View style={customStyles.container}>
          <TopicCard topic="Condo Questions" noOfQuestions="18856 Questions" onPress={onTopicPressed}/>
          <TopicCard topic="Home Buying Schemes" noOfQuestions="13860 Questions" onPress={onTopicPressed} />
          <TopicCard topic="HDB Questions" noOfQuestions="11245 Questions" />
          <TopicCard topic="Renting Property" noOfQuestions="7286 Questions" />
          <TopicCard topic="General Questions" noOfQuestions="6195 Questions" />
          <TopicCard topic="Home Selling" noOfQuestions="3947 Questions" />
          <TopicCard topic="Home Financing" noOfQuestions="3016 Questions" />
          <TopicCard topic="Property Agents" noOfQuestions="2386 Questions" />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default QnAScreen;

const customStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  bgImage: {
    justifyContent: "center",
    width: "100%",
    height: 400,
  },
  ctaContainer: {
    paddingBottom: 150,
  },
  buttonContainer: {
    width: 200,
    maxWidth: 250,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 20,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonPrimary: {
    backgroundColor: "#ff4040",
  },
});
