import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";


const PrimaryButton = ({ onPress, text, type, disabled }) => {
  return (
    <View>
    <Pressable title="Ask Your Question" onPress={onPress} 
      style={({ pressed }) => [
      { 
        backgroundColor: pressed ? Colors.accent500 : Colors.primary500
      },       
      styles.buttonContainer,
      ]}>
      <Text style={styles.textPrimary}>
        {text}
      </Text> 
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    maxWidth: 250,
    padding: 15,
    marginVertical: 5,
    // marginHorizontal: 20,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonPrimary: {
    backgroundColor: Colors.primary500,
  },
  buttonSecondary: {
    backgroundColor: Colors.accent500,
  },
  textPrimary: {
    fontWeight: 'bold',
    color: 'white',
  },
  textSecondary: {
    color: '#f1f1f1',
  },
})

export default PrimaryButton;