import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  styles,
  textStyles,
  stackNavigatorScreenOptions,
  stackInitialScreenOptions,
} from "../../styles/common";
import QnAHome from "./QnAHome";
import ListTopicQns from "./QnAListTopicQns";
import QnAQnsAnswer from "./QnAQnsAnswer";
import ListTopicAns from "./QnAListTopicAns";
const Stack = createNativeStackNavigator();

const QnAScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={stackNavigatorScreenOptions}
    >
      {/* insert this within <Stack.Navigator> above to hide the header ---> screenOptions={{ headerShown: false }} */}
      <Stack.Screen name="AskGuru" component={QnAHome} options={stackInitialScreenOptions} />
      <Stack.Screen name="List of Questions" component={ListTopicQns} />
      <Stack.Screen name="QnAQnsAnswer" component={QnAQnsAnswer}  />
      <Stack.Screen name="List of Answers" component={ListTopicAns} />
    </Stack.Navigator> 
  )
}

export default QnAScreen;
