import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Colors from "../../constants/colors";

const FlatButton=({text , onPress})=>{
    return (
        <TouchableOpacity onPress={onPress}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? Colors.accent500 : Colors.primary500
                }]}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})
export default FlatButton;