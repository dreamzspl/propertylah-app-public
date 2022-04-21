import * as React from 'react';
import API from "../API";

//Components
import { View, Text, Image, ScrollView, Pressable, Alert } from "react-native";

// Styles and Icons
import { styles, textStyles } from "../../../styles/common";
import { FontAwesome } from "@expo/vector-icons";
import customStyles from "../propertyStyles.js";

function PropertyServicesScreen({route, navigation}) {
    const [deleteStatus, setDeleteStatus] = React.useState(false)
    const [data, setData] = React.useState('');

    //! manipulate date to show in MMM DD, YYYY format
    let tempDate = new Date(route.params.props.createdAt).toDateString();
    let date = `${tempDate.slice(4,10)}, ${tempDate.slice(11)}`

    //! If coming back to page after pressing Edit in EditProperty, rerender with new data (API call is in EditProperty page)
    if(route.params.path === 'EditProperty'){
        setData(route.params.props);
        route.params.path = undefined;
    } 

    //! Initial render, data coming as route.params.props
    React.useEffect(async()=>{
        setData(route.params.props)
    },[])


    //! This section for delete function, can't use follow up function in the onPress() because this doesnt stop code from running
    const confirmDelete = ()=>{
        return Alert.alert(
            "Delete This Property?",
            "Please confirm, this cannot be undone",
            [
              {
                text: "Cancel",
                onPress: () => setDeleteStatus(false),
                style: "cancel"
              },
              { text: "OK", onPress: () => setDeleteStatus(true) }
            ]
        );
    }
    //! set a useEffect to run based on delete status, cant just use this as a function in the onPress because the alert doesn't stop code from running.
    //* deleteStatus is set by confirmation dialogue run by the Alert, if setDeleteStatus(false) state doesn't change so nothing happens
    React.useEffect(async()=>{
        if(deleteStatus === true){
            try{
                let result = await API.delete(`/properties/${data.id}`)
                if(result.status === 200){
                    window.alert('Property Deleted')
                    navigation.navigate('ViewProperty', {update:true}) //* force update of state in ViewProperty page so that it rerenders
                } 
            } catch(error) {
                window.alert(error.message)
            }
        }
    },[deleteStatus])

    //* Looks almost the same as Specific Property, agent section just changed to Edit and Delete Button
    return (
        <ScrollView >
            <View style={[styles.container, {width:'100%'}]}>
                <View style={[customStyles.borderBottomWidth, {width:'100%'}]}>
                    <Text style={[customStyles.fontBig, customStyles.textContainer]}>{data.propertyName}</Text>
                    <ScrollView pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false} style={customStyles.imageContainer}>
                        <Image style={customStyles.image} source={require('../../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-1.jpg')}></Image>
                        <Image style={customStyles.image} source={require('../../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-2.jpg')}></Image>
                        <Image style={customStyles.image} source={require('../../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-3.jpg')}></Image>
                    </ScrollView>
                    {data.saleType === 'Rent'? 
                        <Text style={[customStyles.fontBig, customStyles.textContainer]}>S$ {data.price} /mo</Text>:
                        <Text style={[customStyles.fontBig, customStyles.textContainer]}>S$ {data.price}</Text>
                    }
                    
                    <View style={[customStyles.horizontal, customStyles.textContainer]}>
                        <Text style={[textStyles.bodyText, customStyles.fontSmall]}>{data.noOfBedrooms} <FontAwesome name='bed' /></Text>
                        <Text style={[textStyles.bodyText, customStyles.fontSmall]}>{data.noOfBaths} <FontAwesome name='bathtub' /></Text>
                        <Text style={[textStyles.bodyText, customStyles.fontSmall]}>{data.floorsize} sqft</Text>
                        <Text style={[textStyles.bodyText, customStyles.fontSmall]}>S$ {data.pricePSF} psf</Text>
                    </View>
                    <Text></Text>
                    <Text style={[textStyles.bodyText, customStyles.textPadding, customStyles.textContainer]}>{data.propertyName}</Text>
                    <Text style={[textStyles.bodyText, customStyles.fontSmall,customStyles.textContainer]}>{data.address}</Text>
                    <Text style={[textStyles.bodyText, customStyles.fontSmall,customStyles.textContainer]}>Distance to MRT</Text>
                </View>
                <View style={[customStyles.borderBottomWidth, customStyles.horizontal]}>
                    <View style={[customStyles.widthHalf, customStyles.textContainer]}>
                        <Text style={customStyles.detailsFont}>Type</Text>
                        <Text style={customStyles.detailsFont}>Size</Text>
                        <Text style={customStyles.detailsFont}>Built</Text>
                        <Text style={customStyles.detailsFont}>Move-in Date</Text>
                        <Text style={customStyles.detailsFont}>Listing Type</Text>
                        <Text style={customStyles.detailsFont}>Furnishing</Text>
                        <Text style={customStyles.detailsFont}>Tenure</Text>
                        <Text style={customStyles.detailsFont}>Developer</Text>
                        <Text style={customStyles.detailsFont}>Sub Type</Text>
                        <Text style={customStyles.detailsFont}>Listing id</Text>
                        <Text style={customStyles.detailsFont}>Listed</Text>
                    </View>
                    <View style={[customStyles.widthHalf, customStyles.textContainer]}> 
                        <Text style={customStyles.detailsFont}>{data.propertyType}</Text>
                        <Text style={customStyles.detailsFont}>{data.floorsize} sqft</Text>
                        <Text style={customStyles.detailsFont}>{data.TOPYear}</Text>
                        <Text style={customStyles.detailsFont}>Move-in Date</Text>
                        <Text style={customStyles.detailsFont}>For {data.saleType}</Text>
                        <Text style={customStyles.detailsFont}>Furnishing</Text>
                        <Text style={customStyles.detailsFont}>{data.tenure}</Text>
                        <Text style={customStyles.detailsFont}>Developer</Text>
                        <Text style={customStyles.detailsFont}>{data.propertyType}</Text>
                        <Text style={customStyles.detailsFont}>{data.id}</Text>
                        <Text style={customStyles.detailsFont}>{date}</Text>
                    </View>
                </View>
                <View style={[customStyles.borderNoTop, customStyles.textContainer]}>
                    <View style={[customStyles.justifyContainerMid]}>
                        <Pressable style={[customStyles.widthHalf]} 
                            onPress={()=>{navigation.navigate('EditProperty', {property: data})}}
                        ><Text style={[textStyles.bodyText, customStyles.CRUDButton, {backgroundColor:'green'}]}>Edit</Text>
                        </Pressable>
                        <Pressable style={[customStyles.widthHalf]} onPress={()=>{confirmDelete()}}>
                            <Text style={[textStyles.bodyText, customStyles.CRUDButton, {backgroundColor:'red'}]}>Delete</Text>
                        </Pressable>
                    </View>
                  </View>
            </View>
        </ScrollView>
    );
}

export default PropertyServicesScreen;                   
