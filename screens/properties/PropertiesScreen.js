import { View, Text, StyleSheet } from "react-native";

import { styles, textStyles } from "../../styles/common";
import Colors from "../../constants/colors";

function PropertiesScreen() {
  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Properties Screen</Text>
      <Text style={textStyles.bodyText}>Lorem ipsum</Text>
      <Text style={[textStyles.bodyText, customStyles.customText]}>Test</Text>
    </View>
  );
}

export default PropertiesScreen;

const customStyles = StyleSheet.create({
  customText: {
    color: "blue",
  },
});
