import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import QnAHome from "./QnAHome";
import ListTopicQns from "./QnAListTopicQns";
import QnAQnsAnswer from "./QnAQnsAnswer";

const Stack = createStackNavigator();

const QnAScreen = () => {
  return (
      <Stack.Navigator
        screenOptions={{ headerTitleAlign: 'left' }}
      >
        {/* insert this within <Stack.Navigator> above to hide the header ---> screenOptions={{ headerShown: false }} */}
        <Stack.Screen name="QnAHome" component={QnAHome} />
        <Stack.Screen name="ListTopicQns" component={ListTopicQns} />
        <Stack.Screen name="QnAQnsAnswer" component={QnAQnsAnswer} options={({ route }) => ({ title: route.params.props.question })}/>
      </Stack.Navigator> 
  )
}

export default QnAScreen;