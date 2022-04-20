import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from "../../constants/colors";

const Input = ({
  onChangeText,
  iconPosition,
  icon, 
  style,
  value,
  label,
  error,
  placeholder,
  numberOfLines,
  ...props
}) => {
  const [focused, setFocused ] = useState(false);

  return (
    <View>
      {label && <Text style={styles.labelText}>{label}</Text>}

      <TextInput 
        onChangeText={onChangeText} 
        value={value} 
        style={styles.inputContainer} 
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        placeholder={placeholder} 
        {...props}
        multiline={true}
        numberOfLines={numberOfLines}
      />
      { error && ( 
        <Text style={{ color: "red", alignSelf: 'stretch' }}>{error.message || "Error"}</Text>
      )}
    </View>
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

export default Input;