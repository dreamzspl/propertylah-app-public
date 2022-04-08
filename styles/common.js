import { StyleSheet, Platform } from "react-native";

import Colors from "../constants/colors";

// General Styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 32,
  },
});

// Text Styles
export const textStyles = StyleSheet.create({
  headerText: {
    fontFamily: "rubik-bold",
    fontSize: 24,
    marginBottom: 10,
    color: Colors.primary500,
  },
  bodyText: {
    fontSize: 18,
    fontFamily: "rubik",
    color: Colors.grey500,
  },
});

// Helper Styles
export const helper = StyleSheet.create({
  shadow: {
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
});

// Navigation Styles
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
