import { View, Text, StyleSheet } from "react-native";

import { styles, textStyles } from "../../styles/common";
import Colors from "../../constants/colors";

function ArticlesScreen() {
  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Articles Screen</Text>
      <Text style={textStyles.bodyText}>Lorem ipsum</Text>
    </View>
  );
}

export default ArticlesScreen;

const customStyles = StyleSheet.create({});
