import { View, Text, StyleSheet } from "react-native";

import { styles, textStyles } from "../../styles/common";
import Colors from "../../constants/colors";

function AuthScreen() {
  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Authentication Screen</Text>
      <Text style={textStyles.bodyText}>Lorem ipsum</Text>
    </View>
  );
}

export default AuthScreen;

const customStyles = StyleSheet.create({});
