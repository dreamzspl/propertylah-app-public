import { StyleSheet, Platform, Button } from "react-native";

import DrawerMenu from "../components/nav/DrawerMenu";
import Colors from "../constants/colors";

// General Styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 32,
  },
  roleContainer: {
    backgroundColor: "#ffe3e3",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    width: 80,
    textAlign: "center",
  },
  roleText: {
    fontFamily: "rubik-bold",
    textAlign: "center",
    color: Colors.primary500,
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
  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
});

// Navigation Styles
export const drawerScreenOptions = {
  headerShown: false,
  sceneContainerStyle: { backgroundColor: "white" },
  drawerContentStyle: { backgroundColor: "white" },
  drawerLabelStyle: { fontFamily: "rubik", fontSize: 18 },
  drawerInactiveTintColor: Colors.primary500,
  drawerActiveTintColor: "white",
  drawerActiveBackgroundColor: Colors.primary500,
};

export const drawerScreenOptionsOld = {
  headerStyle: { backgroundColor: Colors.primary500 },
  headerTitleStyle: { fontFamily: "rubik-bold" },
  headerTintColor: "white",
  sceneContainerStyle: { backgroundColor: "white" },
  drawerContentStyle: { backgroundColor: "white" },
  drawerInactiveTintColor: Colors.primary500,
  drawerActiveTintColor: "white",
  drawerActiveBackgroundColor: Colors.primary500,
};

// for main Stack.Navigator
export const stackNavigatorScreenOptions = {
  headerStyle: { backgroundColor: Colors.primary500 },
  headerTitleStyle: { fontFamily: "rubik-bold" },
  headerTintColor: "white",
  sceneContainerStyle: { backgroundColor: "white" },
  drawerContentStyle: { backgroundColor: "white" },
  drawerInactiveTintColor: Colors.primary500,
  drawerActiveTintColor: "white",
  drawerActiveBackgroundColor: Colors.primary500,
};

// for initial Stack.Screen
export const stackInitialScreenOptions = {
  headerStyle: { backgroundColor: Colors.primary500 },
  headerTitleStyle: { fontFamily: "rubik-bold" },
  headerTintColor: "white",
  sceneContainerStyle: { backgroundColor: "white" },
  drawerContentStyle: { backgroundColor: "white" },
  drawerInactiveTintColor: Colors.primary500,
  drawerActiveTintColor: "white",
  drawerActiveBackgroundColor: Colors.primary500,
  headerLeft: () => <DrawerMenu />,
};

export const stackScreenOptionsHamburger = {
  headerStyle: { backgroundColor: Colors.primary500 },
  headerTitleStyle: { fontFamily: "rubik-bold" },
  headerTintColor: "white",
  sceneContainerStyle: { backgroundColor: "white" },
  drawerContentStyle: { backgroundColor: "white" },
  drawerInactiveTintColor: Colors.primary500,
  drawerActiveTintColor: "white",
  drawerActiveBackgroundColor: Colors.primary500,
  headerLeft: () => <DrawerMenu />,
};

export const stackScreenOptionsOld = {
  headerStyle: { backgroundColor: Colors.primary500 },
  headerTitleStyle: { fontFamily: "rubik-bold" },
  headerTintColor: "white",
  sceneContainerStyle: { backgroundColor: "white" },
  drawerContentStyle: { backgroundColor: "white" },
  drawerInactiveTintColor: Colors.primary500,
  drawerActiveTintColor: "white",
  drawerActiveBackgroundColor: Colors.primary500,
  headerLeft: () => (
    <Button
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      title="Menu"
      color="#fff"
    />
  ),
};
