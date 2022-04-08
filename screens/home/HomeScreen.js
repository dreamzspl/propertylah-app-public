import { View, Text, StyleSheet } from "react-native";

import { styles, textStyles } from "../../styles/common";
import Colors from "../../constants/colors";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Home Screen</Text>
      <Text style={textStyles.bodyText}>Lorem ipsum</Text>
    </View>
  );
}

export default HomeScreen;

const customStyles = StyleSheet.create({});
