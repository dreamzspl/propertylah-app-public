import { View, Text, StyleSheet } from "react-native";

import { styles, textStyles } from "../../styles/common";
import Colors from "../../constants/colors";

function QnAScreen() {
  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Q & A Screen</Text>
      <Text style={textStyles.bodyText}>Lorem ipsum</Text>
    </View>
  );
}

export default QnAScreen;

const customStyles = StyleSheet.create({});
