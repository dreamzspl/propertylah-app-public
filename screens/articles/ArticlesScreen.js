import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import axios from "axios";

import pic from "../../assets/images/articles/TAP-commontown-singapore-co-living-1.jpg";

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


function ArticlesScreen1({ navigation }) {

  const [data, setData]=useState([]);

  useEffect(() => {
    const API_URL = "http://68.183.183.118:4088/api/v1/articles";
    
    async function getArticles(){
      const res = await axios.get(API_URL);
      console.log(res.data.data);
      setData(res.data.data)//saving data into array useState
    }

    getArticles();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Latest News</Text>
      
      <Text style={textStyles.bodyText}>Article 1</Text> 
      {data.length > 0 && 
        data.map((item)=> (
          <>
          <Text>Content: {item.content} </Text>
          
          <Text>Review: {item.review}</Text>
          
          </>
          
        ))}
      <Text
        style={[textStyles.bodyText, customStyles.customText]}
        onPress={() => navigation.navigate("Special Editions")}
      >
        Go to Special Editions
      </Text>
    </View>
  );
}

function ArticlesScreen2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Special Editions</Text>
      <Text style={textStyles.bodyText}>Lorem ipsum</Text>
      <Text
        style={[textStyles.bodyText, customStyles.customText]}
        onPress={() => navigation.navigate("Home and Living Article")}
      >
        Go to Home and Living
      </Text>
    </View>
  );
}

function ArticlesScreen3() {
  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Home and Living</Text>
      <Text style={textStyles.bodyText}>Lorem ipsum</Text>
      <Text style={[textStyles.bodyText, customStyles.customText]}>Test</Text>
    </View>
  );
}

function ArticlesScreen() {
 

  return (
    <Stack.Navigator screenOptions={stackNavigatorScreenOptions}>
      <Stack.Screen name="Latest News" component={ArticlesScreen1}
       options={stackInitialScreenOptions}
      />
      <Stack.Screen name="Special Editions" component={ArticlesScreen2} />
      <Stack.Screen name="Home and Living Article" component={ArticlesScreen3} />
    </Stack.Navigator>
  );
}

export default ArticlesScreen;


const customStyles = StyleSheet.create({
  customText: {
    color: "blue",
  },
});
