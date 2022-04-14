import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { styles, textStyles } from "../../styles/common";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/colors";

function SpecificPropertiesScreen({route}) {
    let data = route.params.props;
    let tempDate = new Date(route.params.props.createdAt).toDateString();
    let date = `${tempDate.slice(4,10)}, ${tempDate.slice(11)}`
    //todo API call by default, need add API call to fill in all the texts below
    //todo image scrolling
    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={customStyles.borderBottomWidth}>
                    <Text style={customStyles.fontBig}>{data.propertyName}</Text>
                    <Image style={customStyles.image} source={require('../../assets/images/property-images/Sky-Vue-Ang-Mo-Kio-Bishan-Thomson-Singapore-1.jpg')}></Image>
                    <Text style={customStyles.fontBig}>{data.price} /mo</Text>
                    <View style={customStyles.horizontal}>
                        <Text style={[textStyles.bodyText, customStyles.fontSmall]}>{data.noOfBedrooms} <FontAwesome name='bed' /></Text>
                        <Text style={[textStyles.bodyText, customStyles.fontSmall]}>{data.noOfBaths} <FontAwesome name='bathtub' /></Text>
                        <Text style={[textStyles.bodyText, customStyles.fontSmall]}>{data.floorsize} sqft</Text>
                        <Text style={[textStyles.bodyText, customStyles.fontSmall]}>S$ {data.pricePSF} psf</Text>
                    </View>
                    <Text></Text>
                    <Text style={[textStyles.bodyText, customStyles.textPadding]}>{data.propertyName}</Text>
                    <Text style={[textStyles.bodyText, customStyles.fontSmall]}>{data.address}</Text>
                    <Text style={[textStyles.bodyText, customStyles.fontSmall]}>Distance to MRT</Text>
                </View>
                <View style={[customStyles.borderBottomWidth, customStyles.horizontalDetails]}>
                    <View style={customStyles.widthHalf}>
                        <Text style={customStyles.details}>Type</Text>
                        <Text style={customStyles.details}>Size</Text>
                        <Text style={customStyles.details}>Built</Text>
                        <Text style={customStyles.details}>Move-in Date</Text>
                        <Text style={customStyles.details}>Listing Type</Text>
                        <Text style={customStyles.details}>Furnishing</Text>
                        <Text style={customStyles.details}>Tenure</Text>
                        <Text style={customStyles.details}>Developer</Text>
                        <Text style={customStyles.details}>Sub Type</Text>
                        <Text style={customStyles.details}>Listing id</Text>
                        <Text style={customStyles.details}>Listed</Text>
                    </View>
                    <View style={{width:'50%'}}> 
                        <Text style={customStyles.details}>{data.propertyType}</Text>
                        <Text style={customStyles.details}>{data.floorsize} sqft</Text>
                        <Text style={customStyles.details}>{data.TOPYear}</Text>
                        <Text style={customStyles.details}>Move-in Date</Text>
                        <Text style={customStyles.details}>{data.saleType}</Text>
                        <Text style={customStyles.details}>Furnishing</Text>
                        <Text style={customStyles.details}>{data.tenure}</Text>
                        <Text style={customStyles.details}>Developer</Text>
                        <Text style={customStyles.details}>{data.propertyType}</Text>
                        <Text style={customStyles.details}>{data.id}</Text>
                        <Text style={customStyles.details}>{date}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={[textStyles.bodyText, customStyles.textPadding, customStyles.fontSize]}>{data.User.firstName}{data.User.lastName}</Text>
                <View style={[customStyles.justifyContainerMid]}>
                    <Pressable style={[customStyles.width13]}><Text style={[textStyles.bodyText, customStyles.contactButton]}>Whatsapp</Text></Pressable>
                    <Pressable style={[customStyles.width13]}><Text style={[textStyles.bodyText, customStyles.contactButton]}>SMS</Text></Pressable>
                    <Pressable style={[customStyles.width13]}><Text style={[textStyles.bodyText, customStyles.contactButton]}>Call</Text></Pressable>
                </View>
            </View>
        </ScrollView>
    );
}

export default SpecificPropertiesScreen;                                  

const customStyles = StyleSheet.create({
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
    horizontalDetails:{
        display: 'flex',
        flexDirection: "row",
        alignItems: 'flex-end',
    },
    details:{
        fontSize: 13,
    },
    textPadding:{
        paddingRight: 10,
    },
    fontSize:{
        fontSize: 15,
    },
    fontBig:{
        fontSize: 24,
        paddingRight: 10,
    },
    fontSmall:{
        fontSize: 15,
        paddingRight: 10,
    },
    borderBottomWidth:{
        paddingVertical: 10,
        borderBottomWidth: 1,
    },
    widthHalf:{
        width: '50%',
    },  
    width13:{
        width: '33%',
    },  
    contactButton:{
        width: '90%',
        alignSelf: 'center',
        fontSize: 13,
        paddingVertical: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    justifyContainerMid:{
        display: 'flex',
        flexDirection: "row",
        width: '100%',
        padding: 10,
    },

});