import { StyleSheet, Platform } from "react-native";

import Colors from "../constants/colors";

// General Styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 32,
  },
});

// Text Styles
export const textStyles = StyleSheet.create({
  headerText: {
    fontFamily: "rubik-bold",
    fontSize: 28,
    marginBottom: 20,
    color: Colors.primary500,
  },
  bodyText: {
    fontSize: 18,
    fontFamily: "rubik",
    color: Colors.grey500,
  },
  linkText: {
    fontSize: 18,
    fontFamily: "rubik",
    color: Colors.primary500,
    textDecorationStyle: "dashed",
  },
});

// Helper Styles
export const helperStyles = StyleSheet.create({
  shadow: {
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  mb20: {
    marginBottom: 20,
  },
});

// Navigation Styles
export const drawerScreenOptions1 = {
  headerShown: false,
  sceneContainerStyle: { backgroundColor: "white" },
  drawerContentStyle: { backgroundColor: "white" },
  drawerInactiveTintColor: Colors.primary500,
  drawerActiveTintColor: "white",
  drawerActiveBackgroundColor: Colors.primary500,
};

export const drawerScreenOptions = {
  headerStyle: { backgroundColor: Colors.primary500 },
  headerTitleStyle: { fontFamily: "rubik-bold" },
  headerTintColor: "white",
  sceneContainerStyle: { backgroundColor: "white" },
  drawerContentStyle: { backgroundColor: "white" },
  drawerInactiveTintColor: Colors.primary500,
  drawerActiveTintColor: "white",
  drawerActiveBackgroundColor: Colors.primary500,
};
