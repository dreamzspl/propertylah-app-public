import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { styles, textStyles } from "../../styles/common";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/colors";
import { createStackNavigator } from "@react-navigation/stack";
import SpecificPropertiesScreen from "./SpecificPropertyScreen";
import API from './API.js'
import {useState} from 'react'
import customStyles from "./propertyStyles.js";
//todo agent details

const PropertyHome = ({navigation})=>{

  const [content, setContent]=useState([]);

  (async()=>{
    const incoming = await API.get('/properties');
    const properties = incoming.data.data;
    setContent(properties);
  })();

  return(
    <ScrollView >
      <View style={styles.container}>
        <Text style={customStyles.textContainer}>{content.length} residential properties for rent</Text>
          {content.map(obj=>{
            return(
              <View key={obj.id}> 
                <ScrollView pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false} style={customStyles.imageContainer}>
                  <Image style={customStyles.image} source={require('../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-1.jpg')}></Image>
                  <Image style={customStyles.image} source={require('../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-2.jpg')}></Image>
                  <Image style={customStyles.image} source={require('../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-3.jpg')}></Image>
                </ScrollView>
                <Pressable onPress={()=>navigation.navigate(`SpecificProperty`, {props: obj})}> 
                  <View style={customStyles.borderNoTop}>
                  <Text style={[textStyles.bodyText, customStyles.textPadding,customStyles.textContainer]}>{obj.propertyName}</Text>
                  <Text style={[textStyles.bodyText, customStyles.fontSmall,customStyles.textContainer]}>{obj.address}</Text>
                  <View style={customStyles.horizontal}>
                    {obj.saleType === 'rent'? 
                      <Text style={[textStyles.bodyText, customStyles.textPadding,customStyles.textContainer,]}>{obj.price} /mo</Text>
                      :<Text style={[textStyles.bodyText, customStyles.textPadding, customStyles.textContainer ]}>{obj.price}</Text>}
                    <Text style={[textStyles.bodyText, customStyles.fontSmall]}>Availability</Text>
                  </View>
                  <View style={[customStyles.horizontal,customStyles.textContainer]}>
                    <Text style={[textStyles.bodyText, customStyles.fontSmall]}>{obj.noOfBedrooms} <FontAwesome name='bed' /></Text>
                    <Text style={[textStyles.bodyText, customStyles.fontSmall]}>{obj.noOfBaths} <FontAwesome name='bathtub' /></Text>
                    <Text style={[textStyles.bodyText, customStyles.fontSmall]}>{obj.floorsize} sqft</Text>
                    <Text style={[textStyles.bodyText, customStyles.fontSmall]}>S$ {obj.pricePSF} psf</Text>
                  </View>
                    <Text style={[textStyles.bodyText, customStyles.fontSmall, customStyles.textContainer]}>distance to MRT</Text>
                  </View>
                  <View style={[customStyles.borderNoTop, customStyles.textContainer]}>
                    <Text style={[textStyles.bodyText, customStyles.fontSmall]}>Agent memo</Text>
                    <Text style={[textStyles.bodyText, customStyles.fontSmall]}>{obj.User.firstName}{obj.User.lastName}</Text>
                    <View style={[customStyles.justifyContainerMid]}>
                      <Pressable style={[customStyles.widthHalf]}><Text style={[textStyles.bodyText, customStyles.contactButton]}>Whatsapp</Text></Pressable>
                      <Pressable style={[customStyles.widthHalf]}><Text style={[textStyles.bodyText, customStyles.contactButton]}>Call</Text></Pressable>
                    </View>
                  </View>
                </Pressable>
              </View>
            )})}
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

