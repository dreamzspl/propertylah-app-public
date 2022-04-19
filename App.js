import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import AuthContextProvider, { AuthContext } from "./store/auth-context";

// Screens
import AuthScreen from "./screens/auth/AuthScreen";
import HomeScreen from "./screens/home/HomeScreen";
import ArticlesScreen from "./screens/articles/ArticlesScreen";
import PropertiesScreen from "./screens/properties/PropertiesScreen";
import QnAScreen from "./screens/qna/QnAScreen";

import { styles, textStyles, drawerScreenOptions } from "./styles/common";
import Colors from "./constants/colors";

const Drawer = createDrawerNavigator();

function GuestStack() {
  // stack navigator
  // first screen - drawer - just a different drawer?
}
function MemberStack() {}
function AgentStack() {}

function Navigation() {
  return <NavigationContainer></NavigationContainer>;
}

export default function App() {
  const [fontsLoaded] = useFonts({
    inter: require("./assets/fonts/Inter-Regular.ttf"),
    "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
    rubik: require("./assets/fonts/Rubik-Regular.ttf"),
    "rubik-bold": require("./assets/fonts/Rubik-Bold.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={drawerScreenOptions}
            initialRouteName="Home"
          >
            <Drawer.Screen
              name="Auth"
              component={AuthScreen}
              options={{
                title: "Sign up or Log in",
                drawerIcon: ({ color, size }) => (
                  <Ionicons color={color} size={size} name="key-outline" />
                ),
              }}
            />
            <Drawer.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Home",
                drawerIcon: ({ color, size }) => (
                  <Ionicons color={color} size={size} name="list" />
                ),
              }}
            />
            <Drawer.Screen
              name="Properties"
              component={PropertiesScreen}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Ionicons color={color} size={size} name="home-outline" />
                ),
              }}
            />
            <Drawer.Screen
              name="Q & A"
              component={QnAScreen}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Ionicons color={color} size={size} name="people" />
                ),
              }}
            />
            <Drawer.Screen
              name="Articles"
              component={ArticlesScreen}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Ionicons
                    color={color}
                    size={size}
                    name="md-newspaper-outline"
                  />
                ),
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </AuthContextProvider>
    </>
  );
}

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
