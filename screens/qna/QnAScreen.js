import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import QnAHome from "./QnAHome";
import ListTopicQns from "./QnAListTopicQns";
import QnAQnsAnswer from "./QnAQnsAnswer";
import ListTopicAns from "./ QnAListTopicAns";
const Stack = createStackNavigator();

const QnAScreen = () => {
  return (
      <Stack.Navigator
        screenOptions={{ headerTitleAlign: 'left' }}
      >
        {/* insert this within <Stack.Navigator> above to hide the header ---> screenOptions={{ headerShown: false }} */}
        <Stack.Screen name="QnAHome" component={QnAHome} />
        <Stack.Screen name="ListTopicQns" component={ListTopicQns} />
      <Stack.Screen name="QnAQnsAnswer" component={QnAQnsAnswer} />
      <Stack.Screen name="ListTopicAns" component={ListTopicAns} />
      </Stack.Navigator> 
  )
}

export default QnAScreen;