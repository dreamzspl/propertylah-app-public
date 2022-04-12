import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const TopicCard = ({ onPress, topic, noOfQuestions }) => {
  return (
    <Pressable onPress={onPress} style={styles.topicCard}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.textContainer}>
          <Text style={styles.topicTitle}>{topic}</Text>
          <Text style={styles.counter}>{noOfQuestions}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons style={styles.icon} name="arrow-forward-circle-outline" />
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  topicCard: {
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    borderColor: "#f1f1f1",
    borderWidth: 1,
    marginHorizontal: "2%",
    marginBottom: "4%",
    width: "44%",
    maxWidth: "44%",
    textAlign: "center",
    // flexDirection: "row",
  },
  textContainer: {
    maxWidth: "90%",
    flexDirection: "column",
  },  
  topicTitle: {
    color: "#000",
    fontWeight: "bold",
    maxWidth: "100%",
    fontSize: 13,
  },
  counter: { 
    color: "#bbb",
    fontSize: 12,
  },
  iconContainer: {
    alignSelf: "center",
    // position: "absolute",
    // right: 10,
    marginLeft: "auto",
    marginBottom: "auto",
},
  icon: {
    color: "red",
    fontSize: 20,
    paddingLeft: 5,
  }
});

export default TopicCard;