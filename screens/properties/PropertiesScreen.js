import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { styles, textStyles } from "../../styles/common";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/colors";
import { createStackNavigator } from "@react-navigation/stack";
import SpecificPropertiesScreen from "./SpecificPropertyScreen";
import { useNavigation } from '@react-navigation/native';
import API from './API.js'
import {useState, useEffect} from 'react'
import customStyles from "./propertyStyles.js";
import Filter from "./Filter.js";
import { Button } from 'react-native-paper';
import PropertyCRUD from "./PropertyCRUD.js";

//todo agent details
//todo filter
//todo searchbar

const PropertyHome = ({navigation, route})=>{
  const [content, setContent]=useState([]);

  if(route.params === undefined){
    
  } else {
    // console.log('filter render')
    setContent(route.params.filtered)
    route.params = undefined; //* have to do this otherwise route.params always defined from filter and get infinite loop
  }

  useEffect(async()=>{
    const incoming = await API.get('/properties');
    const properties = incoming.data.data;
    // console.log('1st render')
    setContent(properties);
  },[]);

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
                    <Text style={[textStyles.bodyText, customStyles.fontSmall]}>{obj.User.firstName} {obj.User.lastName}</Text>
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

function FilterButton(){
  const navigation = useNavigation();
  return(
    <Button mode="outlined" color='grey' onPress={()=>navigation.navigate('Filter')}>Filter</Button>
  )
}

function PropertyCRUDButton(){
  const navigation = useNavigation();
  return(
    <Button mode="outlined" color='grey' onPress={()=>navigation.navigate('PropertyCRUD')}>Add Property</Button>
  )
}

function PropertiesScreen(){
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Home' 
        component={PropertyHome}
        options={{
          headerTitle: (props)=><View style={customStyles.horizontal}><FilterButton {...props}></FilterButton><PropertyCRUDButton {...props}></PropertyCRUDButton></View>,
          headerTitleAlign: 'center',
          headerTitleStyle: 'true',
        }}></Stack.Screen>
      <Stack.Screen
        name='SpecificProperty'
        component={SpecificPropertiesScreen}
        options={{headerShown: true}}
      ></Stack.Screen>
      <Stack.Screen
        name='Filter'
        component={Filter}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name='PropertyCRUD'
        component={PropertyCRUD}
        options={{headerShown: false}}
        // options={({ route }) => ({ title: null, headerTitleAlign: 'center'})} //* keep in case need to adjust header
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default PropertiesScreen;

