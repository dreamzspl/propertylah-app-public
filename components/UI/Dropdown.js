import React, { useState } from "react";
import { Text, View, Modal, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { List } from "react-native-paper";
import Colors from "../../constants/colors";

import { ModalPicker } from "./DropdownModalPicker";

const Dropdown = (props) => {
  
  const choice = props.options.map((option) => {
    return (
      <List.Item key={option} title={option} onPress={() =>
        {props.setVariable(`${option}`)}} 
      />
    )
    // setChooseCat(option)
  })

  return (
    
    <SafeAreaView >
      <List.Section style={styles.container}>
      <List.Accordion title={props.variable} >
        {choice}
      </List.Accordion>
      </List.Section>
    </SafeAreaView>
  )
}
  
  

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    borderColor: "#f1f1f1",
    borderRadius: 5,
    borderWidth: 1,
  },
  labelText: {
    color: "#333",
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.grey500,
    paddingTop: 10,
  },
  touchableOpacity: {
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    borderColor: "#f1f1f1",
    borderWidth: 1,
    width: 350,
    maxWidth: "100%",
    padding: 10,
    marginVertical: 5,
    textAlignVertical: 'top', 
    alignSelf: "stretch",   
  },  
});

export default Dropdown;