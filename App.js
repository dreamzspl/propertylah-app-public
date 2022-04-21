import { useContext, useEffect, useState, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import * as React from "react";

// Screens
import AuthScreen from "./screens/auth/AuthScreen";
import SignupScreen from "./screens/auth/SignupScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import HomeScreen from "./screens/home/HomeScreen";
import ArticlesScreen from "./screens/articles/ArticlesScreen";
import PropertiesScreen from "./screens/properties/PropertiesScreen";
import QnAScreen from "./screens/qna/QnAScreen";
import PropertyCRUD from "./screens/properties/CRUD/PropertyCRUD";
import AdminScreen from "./screens/admin/AdminScreen";
import ProfileScreen from "./screens/auth/ProfileScreen";
import SampleScreen from "./screens/sample/SampleScreen";
import CustomDrawer from "./components/nav/CustomDrawer";

import AuthContextProvider, { AuthContext } from "./store/auth-context";
import {
  drawerScreenOptions,
  stackNavigatorScreenOptions,
  stackScreenOptionsHamburger,
} from "./styles/common";
import Colors from "./constants/colors";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function AuthStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={stackNavigatorScreenOptions}>
      <Stack.Screen
        name="Log In"
        component={LoginScreen}
        options={stackScreenOptionsHamburger}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignupScreen}
        options={stackScreenOptionsHamburger}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator screenOptions={stackNavigatorScreenOptions}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={stackScreenOptionsHamburger}
      />
    </Stack.Navigator>
  );
}

function Logout({ navigation }) {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    authCtx.logout();
  }, []);

  // FIXME: logout bug - screen is not unloaded
  // load a modal/actual screen here instead
  // useEffect(() => {
  //   Alert.alert("Logout", "Are you sure you want to log out?", [
  //     {
  //       text: "Cancel (bug)",
  //       onPress: () => {
  //         navigation.goBack();
  //       },
  //       style: "cancel",
  //     },
  //     { text: "Yes", onPress: () => authCtx.logout() },
  //   ]);
  // }, [navigation]);
  return null;
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={drawerScreenOptions}
        initialRouteName="Home"
      >
        {!authCtx.isAuthenticated && (
          <Drawer.Screen
            name="AuthStack"
            component={AuthStack}
            options={{
              title: "Sign up or Log in",
              drawerIcon: ({ color, size }) => (
                <Ionicons color={color} size={size} name="key-outline" />
              ),
            }}
          />
        )}
        {authCtx.isAuthenticated && (
          <Drawer.Screen
            name="Member"
            component={AuthenticatedStack}
            options={{
              title: "Profile",
              drawerIcon: ({ color, size }) => (
                <Ionicons
                  color={color}
                  size={size}
                  name="person-circle-outline"
                />
              ),
            }}
          />
        )}
        {authCtx.isAuthenticated && authCtx.role === "agent" && (
          <Drawer.Screen
            name="ManageProperty"
            component={PropertyCRUD}
            options={{
              title: "My Listed Properties",
              drawerIcon: ({ color, size }) => (
                <Ionicons color={color} size={size} name="albums-outline" />
              ),
            }}
          />
        )}
        {authCtx.isAuthenticated && authCtx.role === "admin" && (
          <Drawer.Screen
            name="ManageUsers"
            component={AdminScreen}
            options={{
              title: "User Management",
              drawerIcon: ({ color, size }) => (
                <Ionicons color={color} size={size} name="albums-outline" />
              ),
            }}
          />
        )}
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
        <Drawer.Screen
          name="Sample"
          component={SampleScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons color={color} size={size} name="leaf-outline" />
            ),
          }}
        />
        {authCtx.isAuthenticated && (
          <Drawer.Screen
            name="Logout"
            component={Logout}
            options={{
              title: "Logout",
              drawerIcon: ({ color, size }) => (
                <Ionicons color={color} size={size} name="log-out-outline" />
              ),
            }}
          />
        )}
      </Drawer.Navigator>
      {/* {!authCtx.isAuthenticated && <GuestDrawer />}
      {authCtx.isAuthenticated && <MemberDrawer />} */}
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
