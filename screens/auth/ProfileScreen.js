import { View, Text, StyleSheet } from "react-native";
import { useState, useContext } from "react";

import { styles, textStyles } from "../../styles/common";
import Colors from "../../constants/colors";
import FormButton from "../../components/UI/FormButton";
import { AuthContext } from "../../store/auth-context";

function ProfileScreen() {
  const authCtx = useContext(AuthContext);

  // TODO: load user data

  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>My Profile</Text>
      <Text style={textStyles.bodyText}>Welcome, {authCtx.firstName}!</Text>
      <Text style={textStyles.bodyText}>id: {authCtx.id}</Text>
      <Text style={textStyles.bodyText}>firstName: {authCtx.firstName}</Text>
      <Text style={textStyles.bodyText}>role: {authCtx.role}</Text>
    </View>
  );
}

export default ProfileScreen;

const customStyles = StyleSheet.create({});
