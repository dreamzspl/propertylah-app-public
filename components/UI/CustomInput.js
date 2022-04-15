import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import Colors from "../../constants/colors";


const CustomInput = ({ label, control, name, numberOfLines, rules={}, placeholder, secureTextEntry }) => {
  return (
    <>
    <Controller 
      control={control}
      name={name}
      rules={rules}
      render={({ field : { onChange, onBlur, value }, fieldState: { error } }) => (
        <>
        <View>
          <Text style={styles.labelText}>{label}</Text>
          <TextInput 
            style={styles.inputContainer}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value} 
            placeholder={placeholder}
            multiline={true}
            numberOfLines={numberOfLines}
          />
        </View>
        { error && (
          <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error' }</Text>
        )}
        </>
      )}
    />
    </>
  )
}

const styles = StyleSheet.create({
  labelText: {
    color: "#333",
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.grey500,
    paddingTop: 10,
  },
  inputContainer: {
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    borderColor: "#f1f1f1",
    borderWidth: 1,
    width: 350,
    maxWidth: "100%",
    padding: 10,
    marginVertical: 5,
    textAlignVertical: 'top',    
  },  
})

export default CustomInput;