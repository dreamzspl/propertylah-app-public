import { View, Text, StyleSheet } from "react-native";

import { styles, textStyles } from "../../styles/common";
import Colors from "../../constants/colors";

function SampleScreen() {
  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Sample Screen</Text>
      <Text style={textStyles.bodyText}>Lorem ipsum</Text>
      <Text style={[textStyles.bodyText, customStyles.customText]}>Test</Text>
    </View>
  );
}

export default SampleScreen;

const customStyles = StyleSheet.create({
  customText: {
    color: "blue",
  },
});
