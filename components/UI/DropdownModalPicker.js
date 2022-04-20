import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import Colors from "../../constants/colors";


const CATEGORIES = [ "🏢 Condo Questions", "👪 Home Buying", "🏙️ HDB", "🛏️ Renting", "💬 General", "💰 Home Selling", "💲 Home Financing", "👩🏻‍💼 Property Agents"]
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const ModalPicker = (props, { onPress, value }) => {

  const onPressItem = (option) => {
    props.changeModalVisibility(false);
    props.setData(option);
  }

  const option = CATEGORIES.map(( item, index ) => {
    return (
      <TouchableOpacity
        // style={styles.option}
        style={({ pressed }) => [
          { 
            backgroundColor: pressed ? Colors.accent500 : Colors.primary500
          },       
          styles.option,
        ]}
        key={index}
        onPress={() => onPressItem(item)}
      >
        <Text style={styles.text}>
          {item}
        </Text>
      </TouchableOpacity>
    )
  })

  return (
    <TouchableOpacity 
      onPress={() => props.changeModalVisibility(false)}
      style={styles.container}
    > 
      <View style={[{ width: WIDTH - 20, height: HEIGHT / 2 }, styles.modal ]}>
        <ScrollView>
          {option}
        </ScrollView>
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: Colors.primary500,
    borderRadius: 10,
  },
  option: {
    alignItems: "flex-start",

  },
  text: {
    color: "white",
    margin: 15,
    fontSize: 20,
  },
});

export { ModalPicker };