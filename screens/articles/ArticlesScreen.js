import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";

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
  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Latest News</Text>
      <Text style={textStyles.bodyText}>Text body for article 1</Text>
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
      <Stack.Screen
        name="Articles1"
        component={ArticlesScreen1}
        options={stackInitialScreenOptions}
      />
      <Stack.Screen name="ArticlesScreen2" component={ArticlesScreen2} />
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
