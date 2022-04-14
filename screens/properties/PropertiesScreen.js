import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { styles, textStyles } from "../../styles/common";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/colors";
import { createStackNavigator } from "@react-navigation/stack";
import SpecificPropertiesScreen from "./SpecificPropertyScreen";
import data from './data.js';


const PropertyHome = ({navigation})=>{
  const content = data.map(obj=>{
    return(
      <View key={obj.id}> 
        <Pressable onPress={()=>navigation.navigate(`SpecificProperty`, {props: obj})}> 
        <Image style={customStyles.image} source={require('../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-1.jpg')}></Image>
          <View style={customStyles.borderNoTop}>
          <Text style={[textStyles.bodyText, customStyles.textPadding]}>{obj.propertyName}</Text>
          <Text style={[textStyles.bodyText, customStyles.smallFont]}>{obj.address}</Text>
          <View style={customStyles.horizontal}>
            {obj.saleType === 'rent'? <Text style={[textStyles.bodyText, customStyles.textPadding ]}>{obj.price} /mo</Text>:<Text style={[textStyles.bodyText, customStyles.textPadding ]}>{obj.price}</Text>}
            <Text style={[textStyles.bodyText, customStyles.smallFont]}>Availability</Text>
          </View>
          <View style={customStyles.horizontal}>
            <Text style={[textStyles.bodyText, customStyles.smallFont]}>{obj.noOfBedrooms} <FontAwesome name='bed' /></Text>
            <Text style={[textStyles.bodyText, customStyles.smallFont]}>{obj.noOfBaths} <FontAwesome name='bathtub' /></Text>
            <Text style={[textStyles.bodyText, customStyles.smallFont]}>{obj.floorsize} sqft</Text>
            <Text style={[textStyles.bodyText, customStyles.smallFont]}>S$ {obj.pricePSF} psf</Text>
          </View>
            <Text style={[textStyles.bodyText, customStyles.smallFont]}>distance to MRT</Text>
          </View>
          <View style={[customStyles.borderNoTop,]}>
            <Text style={[textStyles.bodyText, customStyles.smallFont]}>Agent memo</Text>
            <Text style={[textStyles.bodyText, customStyles.smallFont]}>{obj.User.firstName}{obj.User.lastName}</Text>
            <View style={[customStyles.justifyContainerMid]}>
              <Pressable style={[customStyles.widthHalf]}><Text style={[textStyles.bodyText, customStyles.contactButton]}>Whatsapp</Text></Pressable>
              <Pressable style={[customStyles.widthHalf]}><Text style={[textStyles.bodyText, customStyles.contactButton]}>Call</Text></Pressable>
            </View>
          </View>
        </Pressable>
      </View>
    ) 
  })
  return (
    <ScrollView >
      <View style={styles.container}>
        <Text>{data.length} residential properties for rent</Text>
          {content}
      </View>
    </ScrollView>
  )
};

const FilterButtons = ()=>{
  return(
    <Text>filter buttons</Text>
  )
}


function PropertiesScreen() {
  //todo API call by default, need add API call to fill in all the texts below
  //todo image scrolling
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Home' 
        component={PropertyHome} 
        options={{
          headerTitle: (props)=><FilterButtons {...props}></FilterButtons>,
          headerTitleAlign: 'center'
        }}></Stack.Screen>
      <Stack.Screen
        name='SpecificProperty'
        component={SpecificPropertiesScreen}
        options={({ route }) => ({ title: null, headerTitleAlign: 'center'})}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default PropertiesScreen;

const customStyles = StyleSheet.create({
  image:{
    width: '100%',
    height: undefined,
    aspectRatio: 1.3,
    marginTop: 10,
  },
  horizontal:{
    display: 'flex',
    flexDirection: "row",
    alignItems: 'flex-end',
  },
  textPadding:{
    paddingHorizontal: 10,
  },
  smallFont:{
    fontSize: 14,
    paddingHorizontal: 10,
  },
  borderNoTop:{
    borderBottomWidth: 1,
    paddingVertical: 10,
    width: '100%'
  },
  justifyContainerMid:{
    display: 'flex',
    flexDirection: "row",
    width: '100%',
    padding: 10,
  },
  contactButton:{
    width: '90%',
    alignSelf: 'center',
    fontSize: 15,
    paddingVertical: 5,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  widthHalf:{
    width: '50%',
    justifyContent: 'center',
  },
});
