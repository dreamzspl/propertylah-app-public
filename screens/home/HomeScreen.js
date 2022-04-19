import { View, Text, StyleSheet } from "react-native";
import { useState, useContext } from "react";

import { styles, textStyles } from "../../styles/common";
import Colors from "../../constants/colors";

import { AuthContext } from "../../store/auth-context";

function HomeScreen() {
  const authCtx = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Home Screen</Text>
      <Text style={textStyles.bodyText}>Lorem ipsum</Text>
      <Text style={textStyles.bodyText}>id: {authCtx.id}</Text>
      <Text style={textStyles.bodyText}>firstName: {authCtx.firstName}</Text>
      <Text style={textStyles.bodyText}>role: {authCtx.role}</Text>
      <Text style={textStyles.bodyText}>token: {authCtx.token}</Text>
    </View>
  );
}

export default HomeScreen;

const customStyles = StyleSheet.create({});
