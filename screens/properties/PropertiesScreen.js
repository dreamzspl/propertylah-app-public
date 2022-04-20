import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { styles, textStyles } from "../../styles/common";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/colors";
import { createStackNavigator } from "@react-navigation/stack";
import SpecificPropertiesScreen from "./SpecificPropertyScreen";
import { useNavigation } from '@react-navigation/native';
import API from './API.js'
import {useState, useEffect, useContext, useLayoutEffect} from 'react'
import customStyles from "./propertyStyles.js";
import Filter from "./Filter.js";
import { Button } from 'react-native-paper';


//todo searchbar
//todo refresh button

const PropertyHome = ({navigation, route})=>{
  const [content, setContent]=useState([]);
  const [refresh, setRefresh]=useState(true);

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerTitle: (props)=><View style={customStyles.headerButtonsContainer}>
          <Button style={customStyles.headerButtons} mode={"contained"} onPress={()=>{navigation.navigate('Home', {path:'Home'})}}>Filter</Button>
          <Button style={customStyles.headerButtons} mode={"contained"} onPress={()=>{setRefresh(!refresh)}}>Refresh</Button>
        </View>,
    })
  })

  if(route.params === undefined){
    // do nothing
  } else {
    // console.log('filter render')
    setContent(route.params.filtered)
    route.params = undefined; //* have to do this otherwise route.params always defined from filter and get infinite loop
  }

  useEffect(async()=>{
    const incoming = await API.get('/properties');
    const properties = incoming.data.data;
    setContent(properties);
  },[refresh]);

  return(
    <ScrollView >
      <View style={styles.container}>
        <Text style={customStyles.textContainer}>{content.length} properties found</Text>
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
                    {obj.saleType === 'Rent'? 
                      <Text style={[textStyles.bodyText, customStyles.textPadding,customStyles.textContainer,]}>S$ {obj.price} /mo</Text>
                      :<Text style={[textStyles.bodyText, customStyles.textPadding, customStyles.textContainer ]}>S$ {obj.price}</Text>}
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
                    <Text style={[textStyles.bodyText, customStyles.fontSmall]}>Agent memo describing property</Text>
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

function PropertiesScreen(){

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Home' 
        component={PropertyHome}
        options={({ navigation, route})=>({
        })}
        ></Stack.Screen>
      <Stack.Screen
        name='SpecificProperty'
        component={SpecificPropertiesScreen}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name='Filter'
        component={Filter}
        options={({ navigation, route})=>({
          title: 'Filter',
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default PropertiesScreen;

