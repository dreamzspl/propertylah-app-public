import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { styles, textStyles } from "../../styles/common";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/colors";
import customStyles from "./propertyStyles.js";
//todo agent details

function SpecificPropertiesScreen({route}) {
    let data = route.params.props;
    let tempDate = new Date(route.params.props.createdAt).toDateString();
    let date = `${tempDate.slice(4,10)}, ${tempDate.slice(11)}`
    return (
        <ScrollView >
            <View style={[styles.container, {width:'100%'}]}>
                <View style={[customStyles.borderBottomWidth, {width:'100%'}]}>
                    <Text style={[customStyles.fontBig, customStyles.textContainer]}>{data.propertyName}</Text>
                    <ScrollView pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false} style={customStyles.imageContainer}>
                        <Image style={customStyles.image} source={require('../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-1.jpg')}></Image>
                        <Image style={customStyles.image} source={require('../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-2.jpg')}></Image>
                        <Image style={customStyles.image} source={require('../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-3.jpg')}></Image>
                    </ScrollView>
                    <Text style={[customStyles.fontBig, customStyles.textContainer]}>{data.price} /mo</Text>
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
                        <Text style={customStyles.detailsFont}>{data.saleType}</Text>
                        <Text style={customStyles.detailsFont}>Furnishing</Text>
                        <Text style={customStyles.detailsFont}>{data.tenure}</Text>
                        <Text style={customStyles.detailsFont}>Developer</Text>
                        <Text style={customStyles.detailsFont}>{data.propertyType}</Text>
                        <Text style={customStyles.detailsFont}>{data.id}</Text>
                        <Text style={customStyles.detailsFont}>{date}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={[textStyles.bodyText, customStyles.textPadding, customStyles.fontSize]}>{data.User.firstName}{data.User.lastName}</Text>
                <View style={[customStyles.justifyContainerMid]}>
                    <Pressable style={[customStyles.width13]}><Text style={[textStyles.bodyText, customStyles.contactButtonSpecificProperty]}>Whatsapp</Text></Pressable>
                    <Pressable style={[customStyles.width13]}><Text style={[textStyles.bodyText, customStyles.contactButtonSpecificProperty]}>SMS</Text></Pressable>
                    <Pressable style={[customStyles.width13]}><Text style={[textStyles.bodyText, customStyles.contactButtonSpecificProperty]}>Call</Text></Pressable>
                </View>
            </View>
        </ScrollView>
    );
}

export default SpecificPropertiesScreen;                                  
