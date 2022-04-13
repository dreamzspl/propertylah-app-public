import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { styles, textStyles } from "../../styles/common";
import Colors from "../../constants/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SpecificPropertiesScreen from "./SpecificPropertyScreen";


const PropertyHome = ({navigation})=>{
  return(
    <ScrollView style={styles.container}>
      <Pressable onPress={()=>navigation.navigate('SpecificProperty', {props: 'everything'})}> 
      {/* //todo change this to go to 1 specific property */}
      {/* //todo pass everything as props to 2nd stack screen should work*/}
      <Image style={customStyles.image} source={require('../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-1.jpg')}></Image>
        <View style={customStyles.borderNoTop}>
        <Text style={textStyles.bodyText}>Property Name</Text>
        <Text style={[textStyles.bodyText, customStyles.fontSize]}>Address</Text>
        <View style={customStyles.horizontal}>
          <Text style={[textStyles.bodyText, customStyles.textPadding ]}>Price</Text>
          <Text style={[textStyles.bodyText, customStyles.textPadding, customStyles.fontSize]}>Availability</Text>
        </View>
        <View style={customStyles.horizontal}>
          <Text style={[textStyles.bodyText, customStyles.textPadding, customStyles.fontSize ]}>no beds</Text>
          <Text style={[textStyles.bodyText, customStyles.textPadding, customStyles.fontSize ]}>no baths</Text>
          <Text style={[textStyles.bodyText, customStyles.textPadding, customStyles.fontSize ]}>floorsize</Text>
          <Text style={[textStyles.bodyText, customStyles.textPadding, customStyles.fontSize]}>price psf</Text>
        </View>
          <Text style={[textStyles.bodyText, customStyles.textPadding, customStyles.fontSize]}>distance to MRT</Text>
        </View>
        <View style={[customStyles.borderNoTop,]}>
          <Text style={[textStyles.bodyText, customStyles.textPadding, customStyles.fontSize]}>Agent memo</Text>
          <Text style={[textStyles.bodyText, customStyles.textPadding, customStyles.fontSize]}>Agent details</Text>
          <Text style={[textStyles.bodyText, customStyles.textPadding, customStyles.fontSize]}>Whatsapp</Text>
          <Text style={[textStyles.bodyText, customStyles.textPadding, customStyles.fontSize]}>Call</Text>
        </View>
      </Pressable>
    </ScrollView>
  )
}


function PropertiesScreen() {
  //todo API call by default, need add API call to fill in all the texts below
  //todo image scrolling
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={PropertyHome}></Stack.Screen>
      <Stack.Screen name='SpecificProperty' component={SpecificPropertiesScreen} ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default PropertiesScreen;

const customStyles = StyleSheet.create({
  customText: {
    color: "blue",
  },
  image:{
    width: '100%',
    height: undefined,
    aspectRatio: 1.3,
  },
  horizontal:{
    display: 'flex',
    flexDirection: "row",
    alignItems: 'flex-end',
    flex: 1,
  },
  textPadding:{
    paddingRight: 10,
  },
  fontSize:{
    fontSize: 15,
  },
  borderNoTop:{
    borderBottomWidth: 1,
    borderLeftWidth:1, 
    borderRightWidth: 1,
  },
  padding:{
    
  },
});
