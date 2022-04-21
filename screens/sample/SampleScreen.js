import React from "react";
import { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  DrawerActions,
  useFocusEffect,
} from "@react-navigation/native";
import axios from "axios";

import IconButton from "../../components/UI/IconButton";
import {
  styles,
  textStyles,
  stackNavigatorScreenOptions,
  stackInitialScreenOptions,
} from "../../styles/common";
import DrawerMenu from "../../components/nav/DrawerMenu";
import Colors from "../../constants/colors";

const Stack = createNativeStackNavigator();
const API_URL = "http://68.183.183.118:4088/api/v1/articles/";

function Screen1({ navigation }) {
  const [data, setData] = useState([]);

  // useFocusEffect(() => {
  //   React.useCallback(() => {
  //     async function getArticles() {
  //       console.log("loading articles");
  //       const res = await axios.get(API_URL);
  //       setData(res.data.data);
  //     }

  //     getArticles();
  //   }, []);
  // });

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("Refreshed!");

      async function getArticles() {
        console.log("loading articles");
        const res = await axios.get(API_URL);
        setData(res.data.data);
      }

      getArticles();
    });

    return unsubscribe;
  }, [navigation]);

  // useEffect(() => {
  //   const API_URL = "http://68.183.183.118:4088/api/v1/articles/";

  //   async function getArticles() {
  //     console.log("loading articles");
  //     const res = await axios.get(API_URL);
  //     setData(res.data.data);
  //   }

  //   getArticles();
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Sample Screen 1</Text>
      <Text style={textStyles.bodyText}>Lorem ipsum</Text>
      {data.length > 0 &&
        data.map((item) => (
          <View key={item.id}>
            <Text>Content: {item.content}</Text>
            <Text>Review: {item.review}</Text>
          </View>
        ))}
      <Text
        style={[textStyles.bodyText, customStyles.customText]}
        onPress={() => navigation.navigate("Sample2")}
      >
        Go to 2
      </Text>
    </View>
  );
}

function Screen2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Sample Screen 2</Text>
      <Text style={textStyles.bodyText}>Lorem ipsum</Text>
      <Text
        style={[textStyles.bodyText, customStyles.customText]}
        onPress={() => navigation.navigate("Sample3")}
      >
        Go to 3
      </Text>
    </View>
  );
}

function Screen3() {
  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Sample Screen 3</Text>
      <Text style={textStyles.bodyText}>Lorem ipsum</Text>
      <Text style={[textStyles.bodyText, customStyles.customText]}>Test</Text>
    </View>
  );
}

function SampleScreen() {
  return (
    <Stack.Navigator screenOptions={stackNavigatorScreenOptions}>
      <Stack.Screen
        name="Sample1"
        component={Screen1}
        options={stackInitialScreenOptions}
      />
      <Stack.Screen name="Sample2" component={Screen2} />
      <Stack.Screen name="Sample3" component={Screen3} />
    </Stack.Navigator>
  );
}

export default SampleScreen;

const customStyles = StyleSheet.create({
  customText: {
    color: "blue",
  },
});
