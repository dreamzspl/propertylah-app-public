import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { styles, textStyles } from "../../../styles/common";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../../constants/colors";
import API from '../API.js'
import {useState, useEffect} from 'react'
import customStyles from "../propertyStyles.js";
import FilterButton from "../FilterButton";
import { createStackNavigator } from "@react-navigation/stack";
import EditProperty from "./EditProperty";

const ViewProperty = ({navigation, route})=>{
  const Stack = createStackNavigator();
  const [content, setContent]=useState([]);
  const [sellerId, setSellerId]=useState(1); 

  if(route.params === undefined){
    // do nothing
  } else if(route.params.update === true){
    (async()=>{
      // console.log('update after edit/delete')
      const incoming = await API.get('/properties');
      const updatedProperties = incoming.data.data;
      const filteredBySeller = updatedProperties.filter(property=>property.sellerId === sellerId); 
      setContent(filteredBySeller);
      route.params.update = false; //* have to do this otherwise route.params always defined and get infinite loop
    })();
  } else if(route.params.filtered){
    let filtered = route.params.filtered.filter(property=>property.sellerId === sellerId); 
    setContent(filtered);
    route.params = undefined; //* have to do this otherwise route.params always defined from filter and get infinite loop
  }

  useEffect(async()=>{
    const incoming = await API.get('/properties');
    const properties = incoming.data.data;
    const filteredBySeller = properties.filter(property=>property.sellerId === sellerId); 
    // console.log(filteredBySeller)
    // console.log('render property by seller')
    setContent(filteredBySeller);
  },[]); 

  const Content = ()=>{
    return(
    <ScrollView >
      <View style={styles.container}>
        <FilterButton path={'ViewProperty'} />
        <Text style={customStyles.textContainer}>You have {content.length} properties listed</Text>
          {content.map(obj=>{
            return(
              <View key={obj.id}> 
                <ScrollView pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false} style={customStyles.imageContainer}>
                  <Image style={customStyles.image} source={require('../../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-1.jpg')}></Image>
                  <Image style={customStyles.image} source={require('../../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-2.jpg')}></Image>
                  <Image style={customStyles.image} source={require('../../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-3.jpg')}></Image>
                </ScrollView>
                <Pressable onPress={()=>navigation.navigate(`PropertyServicesScreen`, {props: obj})}> 
                  <View style={customStyles.borderNoTop}>
                  <Text style={[textStyles.bodyText, customStyles.textPadding,customStyles.textContainer]}>{obj.propertyName}</Text>
                  <Text style={[textStyles.bodyText, customStyles.fontSmall,customStyles.textContainer]}>{obj.address}</Text>
                  <View style={customStyles.horizontal}>
                    {obj.saleType === 'rent'? 
                      <Text style={[textStyles.bodyText, customStyles.textPadding,customStyles.textContainer,]} >{obj.price} /mo</Text>
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
                </Pressable>
              </View>
            )})}
      </View>
    </ScrollView>
    )
  }

  return(
    <Stack.Navigator>
      <Stack.Screen name='Content' component={Content} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name='EditProperty' component={EditProperty} options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  )
};

export default ViewProperty