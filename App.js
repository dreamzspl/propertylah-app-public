import { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import AuthContextProvider, { AuthContext } from "./store/auth-context";

// Screens
import AuthScreen from "./screens/auth/AuthScreen";
import SignupScreen from "./screens/auth/SignupScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import HomeScreen from "./screens/home/HomeScreen";
import ArticlesScreen from "./screens/articles/ArticlesScreen";
import PropertiesScreen from "./screens/properties/PropertiesScreen";
import QnAScreen from "./screens/qna/QnAScreen";

import ProfileScreen from "./screens/auth/ProfileScreen";

import { styles, textStyles, drawerScreenOptions } from "./styles/common";
import Colors from "./constants/colors";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function GuestStack() {}

function GuestDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={drawerScreenOptions}
      initialRouteName="Home"
    >
      {/* <Drawer.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          title: "Sign up or Log in",
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="key-outline" />
          ),
        }}
      /> */}
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
            <Ionicons color={color} size={size} name="md-newspaper-outline" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// isAuthenticated === true && role === "member"
function MemberDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={drawerScreenOptions}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="person-circle-outline" />
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
            <Ionicons color={color} size={size} name="md-newspaper-outline" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// isAuthenticated === true && role === "agent"
function AgentDrawer() {}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <GuestDrawer />}
      {authCtx.isAuthenticated && <MemberDrawer />}
      {/* {authCtx.isAuthenticated && authCtx.role === "agent" && <AgentDrawer />} */}
    </NavigationContainer>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    rubik: require("./assets/fonts/Rubik-Regular.ttf"),
    "rubik-bold": require("./assets/fonts/Rubik-Bold.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
