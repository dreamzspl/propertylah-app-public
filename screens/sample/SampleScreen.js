import { View, Text, StyleSheet, Button } from "react-native";
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

function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Sample Screen 1</Text>
      <Text style={textStyles.bodyText}>Lorem ipsum</Text>
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
