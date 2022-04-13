import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { styles, textStyles } from "../../styles/common";
import Colors from "../../constants/colors";

function SpecificPropertiesScreen({navigation, route}) {
    console.log(route.params.props)
    //todo API call by default, need add API call to fill in all the texts below
    //todo image scrolling
    return (
        <ScrollView style={styles.container}>
            <Text>test</Text>
        </ScrollView>
    );
}

export default SpecificPropertiesScreen;                                  

