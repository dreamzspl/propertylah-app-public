import { View, Text, ScrollView, TextInput } from 'react-native';
import { Button, List } from 'react-native-paper';
import * as React from 'react';
import customStyles from '../propertyStyles';
import { styles, textStyles } from "../../../styles/common";
import API from '../API.js'
import DropdownList from '../../../components/UI/DropdownList';

//todo add seller ID

const validateAndSubmit = (saleType, tenure, propertyName, address, postcode, price, noOfBedrooms, noOfBaths, floorsize, propertyType, TOPYear, sellerId)=>{ //todo add sellerid
    if(saleType === 'Select One' || tenure === 'Select One' || propertyType === 'Select One'){
        window.alert('All Fields are required')
        return
    }
    if(propertyName.length === 0 || address.length === 0 || postcode === 0 || price === 0 || noOfBedrooms === 0 || noOfBaths === 0){
        window.alert('All Fields are required')
        return
    }
    if(floorsize < 70){
        window.alert('Minimum floorsize is 70 sqft')
        return
    }
    if(TOPYear < 1900 || TOPYear > 9999){
        window.alert('TOPYear must be in the format of YYYY')
        return
    }
    let status = (async ()=>{
        try{
            const result = await API.post('/properties', {
            "saleType" : saleType,
            "tenure" : tenure,
            "propertyName" : propertyName,
            "address" : address,
            "postcode" : postcode,
            "price" : price,
            "noOfBedrooms" : noOfBedrooms,
            "noOfBaths" : noOfBaths,
            "floorsize" : floorsize,
            "propertyType" : propertyType,
            "TOPYear" : TOPYear,
            "sellerId": 1, // todo need to add seller id based on login
            })
            if(result.status === 200){
                window.alert(`Property created`)
                return 200;
            }
        }catch(error){
            window.alert('There was an error processing your request')
            return error
        }
    })();

    return status
}

const AddProperty = ()=>{
    const [saleType, setSaleType] = React.useState('Select One');
    const [tenure, setTenure] = React.useState('Select One');
    const [propertyName, setPropertyName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [postcode, setPostcode] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [noOfBedrooms, setNoOfBedrooms] = React.useState('');
    const [noOfBaths, setNoOfBaths] = React.useState('');
    const [floorsize, setFloorsize] = React.useState('');
    const [propertyType, setPropertyType] = React.useState('Select One');
    const [TOPYear, setTOPYear] = React.useState('');
    // const sellerId = //todo add this
    
    const setInitial = ()=>{
        setSaleType('Select One');
        setTenure('Select One');
        setPropertyName('');
        setAddress('');
        setPostcode('');
        setPrice('');
        setNoOfBedrooms('');
        setNoOfBaths('');
        setFloorsize('');
        setPropertyType('Select One');
        setTOPYear('');
    }
    return(
        <ScrollView>
            <View style={[styles.container,customStyles.backgroundColor]}>
                <View style={customStyles.filterHorizontalContainer}>
                    <Text>Sale Type</Text>
                    <DropdownList variable={saleType} setVariable={setSaleType} options={['Rent', 'Sale']}/>
                </View>
                <View style={customStyles.filterHorizontalContainer}>
                    <Text>Tenure</Text>
                    <DropdownList variable={tenure} setVariable={setTenure} options={['Freehold', 'Leasehold']}/>
                </View>
                <View style={customStyles.filterHorizontalContainer}>
                    <Text>Property Name</Text>
                    <TextInput value={propertyName} placeholder='Property Name' style={customStyles.inputText} onChangeText={text=>setPropertyName(text)}></TextInput>
                </View>
                <View style={customStyles.filterHorizontalContainer}>
                    <Text>Property Address</Text>
                    <TextInput value={address} placeholder='Property Address' style={customStyles.inputText} onChangeText={text=>setAddress(text)}></TextInput>
                </View>
                <View style={customStyles.filterHorizontalContainer}>
                    <Text>Postcode</Text>
                    <TextInput 
                    value={postcode.toString()} 
                    placeholder='Postcode' keyboardType='numeric' style={customStyles.inputText} 
                    onChangeText={number=>setPostcode(number===""? "":parseInt(number))}></TextInput>
                </View>
                <View style={customStyles.filterHorizontalContainer}>
                    <Text>Price (S$)</Text>
                    <TextInput 
                    value={price.toString()} 
                    placeholder='Price' keyboardType='numeric' style={customStyles.inputText} 
                    onChangeText={number=>setPrice(number===""? "":parseInt(number))}></TextInput>
                </View>
                <View style={customStyles.filterHorizontalContainer}>
                    <Text>Number of Bedrooms</Text>
                    <TextInput 
                    value={noOfBedrooms.toString()}
                    placeholder='No of Bedrooms' keyboardType='numeric' style={customStyles.inputText} 
                    onChangeText={number=>setNoOfBedrooms(number===""? "":parseInt(number))}></TextInput>
                </View>
                <View style={customStyles.filterHorizontalContainer}>
                    <Text>Number of Bathrooms</Text>
                    <TextInput 
                    value={noOfBaths.toString()}
                    placeholder='No of Bathrooms' keyboardType='numeric' style={customStyles.inputText} 
                    onChangeText={number=>setNoOfBaths(number===""? "":parseInt(number))}></TextInput>
                </View>
                <View style={customStyles.filterHorizontalContainer}>
                    <Text>Floorsize (sqft)</Text>
                    <TextInput 
                    value={floorsize.toString()} 
                    placeholder='Floorsize' keyboardType='numeric' style={customStyles.inputText} 
                    onChangeText={number=>setFloorsize(number===""? "":parseInt(number))}></TextInput>
                </View>
                <View style={customStyles.filterHorizontalContainer}>
                    <Text>Property Type</Text>
                    <DropdownList variable={propertyType} setVariable={setPropertyType} options={['HDB', 'Condominium', 'Apartment']}/>
                </View>
                <View style={customStyles.filterHorizontalContainer}>
                    <Text>TOP Year</Text>
                    <TextInput 
                    value={TOPYear.toString()} 
                    placeholder='YYYY' keyboardType='numeric' style={customStyles.inputText} 
                    onChangeText={number=>setTOPYear(number===""? "":parseInt(number))}></TextInput>
                </View>
                <Button style={[customStyles.resultButton]} mode="contained" color='red' onPress={async ()=>{
                    let status = await validateAndSubmit(saleType, tenure, propertyName, address, postcode, price, noOfBedrooms, noOfBaths, floorsize, propertyType, TOPYear); //todo add sellerid
                    if(status === 200){
                        setInitial();
                    }
                }}>Add Property</Button>
            </View>
        </ScrollView>
    )
}

export default AddProperty