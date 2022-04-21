import { useState, useEffect, useLayoutEffect } from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import API from './API.js'

//* Components
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { Button } from 'react-native-paper';
import Filter from "./Filter.js";
import DrawerMenu from "../../components/nav/DrawerMenu";
import SpecificPropertiesScreen from "./SpecificPropertyScreen";

//* Styles and Icons
import customStyles from "./propertyStyles.js";
import { styles, textStyles, stackNavigatorScreenOptions } from "../../styles/common";
import { FontAwesome } from "@expo/vector-icons";

//todo searchbar

const PropertyHome = ({navigation, route})=>{
  const [content, setContent]=useState([]);
  const [refresh, setRefresh]=useState(true);

  //! This section for creating custom header, refer to documentation on exact method.
  //! 2 Buttons in header (Filter and Refresh both as part of headerTitle), and 1 icon for BurgerNavigator(headerLeft)
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerLeft: () => <DrawerMenu />,
      headerTitleAlign: 'center',
      headerTitle: (props)=><View {...props} style={customStyles.headerButtonsContainer}>
          <Button style={customStyles.headerButtons} mode={"contained"} onPress={()=>{
              navigation.navigate('Filter', {path:'Home'})
          }}>Filter</Button>
          <Button style={customStyles.headerButtons} mode={"contained"} onPress={()=>{setRefresh(!refresh)}}>Refresh</Button>
        </View>,
    })
  })

  //! this section for data coming from Filter, getting params called filtered from Filter
  if(route.params === undefined){
    // do nothing
  } else {
    setContent(route.params.filtered)
    route.params = undefined; //* have to do this otherwise route.params always defined and get infinite loop
  }

  //! This section for filling in data during initial render and also whenever refresh button is pressed
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
                {/* //! horizontal scrollview for images, fix container size and image sizes in styling so that 1 page is 1 image */}
                <ScrollView pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false} style={customStyles.imageContainer}>
                  <Image style={customStyles.image} source={require('../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-1.jpg')}></Image>
                  <Image style={customStyles.image} source={require('../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-2.jpg')}></Image>
                  <Image style={customStyles.image} source={require('../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-3.jpg')}></Image>
                </ScrollView>
                {/* //! pressing any section other than images will navigate to SpecificProperty, passing property object through route.params.props*/}
                <Pressable onPress={()=>navigation.navigate(`SpecificProperty`, {props: obj})}> 
                  <View style={customStyles.borderNoTop}>
                  <Text style={[textStyles.bodyText, customStyles.textPadding,customStyles.textContainer]}>{obj.propertyName}</Text>
                  <Text style={[textStyles.bodyText, customStyles.fontSmall,customStyles.textContainer]}>{obj.address}</Text>
                  {/* //* ternary to display based on rent/sale */}
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
    <Stack.Navigator screenOptions={stackNavigatorScreenOptions}>
      <Stack.Screen 
        name='Home' 
        component={PropertyHome}
        title='Properties'
        //! Have to use this options method to pass navigation and route to buttons in the header
        options={({ navigation, route})=>({
        })}
        ></Stack.Screen>
      <Stack.Screen
        name='SpecificProperty'
        component={SpecificPropertiesScreen}
        //! Same as above
        options={({ route }) => ({ title: route.params.props.propertyName })}
      ></Stack.Screen>
      <Stack.Screen
        name='Filter'
        component={Filter}
        //! Same as above
        options={({ navigation, route})=>({
          title: 'Filter',
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default PropertiesScreen;

