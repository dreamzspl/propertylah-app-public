import API from './API.js'
import * as React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { Button, List } from 'react-native-paper';
import { styles, textStyles } from "../../styles/common";
import customStyles from './propertyStyles'
import DropdownList from '../../components/UI/DropdownList.js';

const DropdownListMinMax = (props) => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Section >
      <List.Accordion style={customStyles.list} title={`${props.variableMin} - ${props.variableMax}`} >
        <TextInput 
          keyboardType='numeric'
          value={props.variableMin==='Any'? '':props.variableMin.toString()} 
          style={customStyles.ListTextInput} placeholder='Minimum' 
          onChangeText={price => props.setVariableMin(price === ''? 'Any':parseInt(price))}
        ></TextInput>
        <TextInput 
          keyboardType='numeric'
          value={props.variableMax==='Any'? '':props.variableMax.toString()} 
          style={customStyles.ListTextInput} placeholder='Maximum' 
          onChangeText={price => props.setVariableMax(price === ''? 'Any':parseInt(price))}
        ></TextInput>
        <List.Item title="Clear" onPress={()=>{
          props.setVariableMin('Any')
          props.setVariableMax('Any')
          }}/>
      </List.Accordion>
    </List.Section>
  );
};

const Filter = ({navigation, route})=>{
  const [minPrice, setMinPrice] = React.useState('Any')
  const [maxPrice, setMaxPrice] = React.useState('Any')
  const [minYear, setMinYear] = React.useState('Any')
  const [maxYear, setMaxYear] = React.useState('Any')
  const [minNoOfBaths, setMinNoOfBaths] = React.useState('Any')
  const [maxNoOfBaths, setMaxNoOfBaths] = React.useState('Any')
  const [minNoOfBedrooms, setMinNoOfBedrooms] = React.useState('Any')
  const [maxNoOfBedrooms, setMaxNoOfBedrooms] = React.useState('Any')
  const [minFloorsize, setMinFloorsize] = React.useState('Any')
  const [maxFloorsize, setMaxFloorsize] = React.useState('Any')
  const [propertyType, setPropertyType] = React.useState('All');    
  const [saleType, setSaleType] = React.useState('All');
  const [tenure, setTenure] = React.useState('All');
  const [propertyName, setPropertyName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [postcode, setPostcode] = React.useState('');
  console.log(route.params.path)
  const initialState = ()=>{
    setMinPrice('Any')
    setMaxPrice('Any')
    setMinYear('Any')
    setMaxYear('Any')
    setMinNoOfBaths('Any')
    setMaxNoOfBaths('Any')
    setMinNoOfBedrooms('Any')
    setMaxNoOfBedrooms('Any')
    setMinFloorsize('Any')
    setMaxFloorsize('Any')
    setPropertyType('All')
    setSaleType('All')
    setTenure('All')
  }

  React.useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: ()=>(
        <Button onPress={()=>{initialState()}}>Clear</Button>
      )
    })
  })

    return(
        <ScrollView>
            <View style={[styles.container,customStyles.backgroundColor]}>
                <View>
                  <View style={customStyles.filterHorizontalContainer}>
                    <Text style={[customStyles.filterPageFont, customStyles.bold]}>Sale/Rent</Text>
                    <DropdownList variable={saleType} setVariable={setSaleType} options={['All', 'Rent', 'Sale']}/>
                  </View>
                  <View style={customStyles.filterHorizontalContainer}>
                    <Text style={[customStyles.filterPageFont, customStyles.bold]}>Price (S$)</Text>
                    <DropdownListMinMax variableMin={minPrice} setVariableMin={setMinPrice} variableMax={maxPrice} setVariableMax={setMaxPrice}/>
                  </View>
                  <View style={customStyles.filterHorizontalContainer}>
                    <Text style={[customStyles.filterPageFont, customStyles.bold]}>Tenure</Text>
                    <DropdownList variable={tenure} setVariable={setTenure} options={['All', 'Freehold', 'Leasehold']}/>
                  </View>
                  <View style={customStyles.filterHorizontalContainer}>
                    <Text style={[customStyles.filterPageFont, customStyles.bold]}>Property Type</Text>
                    <DropdownList variable={propertyType} setVariable={setPropertyType} options={['All', 'HDB', 'Apartment', 'Condominium']}/>
                  </View>
                  <View style={customStyles.filterHorizontalContainer}>
                    <Text style={[customStyles.filterPageFont, customStyles.bold]}>Build Year</Text>
                    <DropdownListMinMax variableMin={minYear} setVariableMin={setMinYear} variableMax={maxYear} setVariableMax={setMaxYear}/>
                  </View>
                  <View style={customStyles.filterHorizontalContainer}>
                    <Text style={[customStyles.filterPageFont, customStyles.bold]}>Bedrooms</Text>
                    <DropdownListMinMax variableMin={minNoOfBedrooms} setVariableMin={setMinNoOfBedrooms} variableMax={maxNoOfBedrooms} setVariableMax={setMaxNoOfBedrooms}/>
                  </View>
                  <View style={customStyles.filterHorizontalContainer}>
                    <Text style={[customStyles.filterPageFont, customStyles.bold]}>Bathrooms</Text>
                    <DropdownListMinMax variableMin={minNoOfBaths} setVariableMin={setMinNoOfBaths} variableMax={maxNoOfBaths} setVariableMax={setMaxNoOfBaths}/>
                  </View>
                  <View style={customStyles.filterHorizontalContainer}>
                    <Text style={[customStyles.filterPageFont, customStyles.bold]}>Floorsize (sqft)</Text>
                    <DropdownListMinMax variableMin={minFloorsize} setVariableMin={setMinFloorsize} variableMax={maxFloorsize} setVariableMax={setMaxFloorsize}/>
                  </View>
                </View>
                <Button style={[customStyles.resultButton]} mode="contained" color='red' onPress={async ()=>{
                    const incoming = await API.get('/properties');
                    const properties = incoming.data.data;

                    //! This chunk for front-end filtering
                    //* Property Type
                    let filtered = properties.filter(propertyObject=>{
                      if(propertyType === 'All'){
                        return propertyObject
                      } else if (propertyType === propertyObject.propertyType){
                        return propertyObject
                      }
                    })
                    //* Sale/Rent
                    filtered = filtered.filter(propertyObject=>{
                      if(saleType === 'All'){
                        return propertyObject
                      } else if (saleType === propertyObject.saleType){
                        return propertyObject
                      }
                    })
                    //* Tenure
                    filtered = filtered.filter(propertyObject=>{
                      if(tenure === 'All'){
                        return propertyObject
                      } else if (tenure === propertyObject.tenure){
                        return propertyObject
                      }
                    })
                    //* Price
                    filtered = filtered.filter(propertyObject=>{
                      if(minPrice === 'Any' && maxPrice === 'Any'){
                        return propertyObject
                      } else if (minPrice === 'Any' && propertyObject.price <= maxPrice){
                        return propertyObject
                      } else if (maxPrice === 'Any' && propertyObject.price >= minPrice){
                        return propertyObject
                      }
                    })
                    //* TOPYear
                    filtered = filtered.filter(propertyObject=>{
                      if(minYear === 'Any' && maxYear === 'Any'){
                        return propertyObject
                      } else if (minYear === 'Any' && propertyObject.TOPYear <= maxYear){
                        return propertyObject
                      } else if (maxYear === 'Any' && propertyObject.TOPYear >= minYear){
                        return propertyObject
                      }
                    })
                    //* Bedrooms
                    filtered = filtered.filter(propertyObject=>{
                      if(minNoOfBedrooms === 'Any' && maxNoOfBedrooms === 'Any'){
                        return propertyObject
                      } else if (minNoOfBedrooms === 'Any' && propertyObject.noOfBedrooms <= maxNoOfBedrooms){
                        return propertyObject
                      } else if (maxNoOfBedrooms === 'Any' && propertyObject.noOfBedrooms >= minNoOfBedrooms){
                        return propertyObject
                      }
                    })
                    //* Bathrooms
                    filtered = filtered.filter(propertyObject=>{
                      if(minNoOfBaths === 'Any' && maxNoOfBaths === 'Any'){
                        return propertyObject
                      } else if (minNoOfBaths === 'Any' && propertyObject.noOfBaths <= maxNoOfBaths){
                        return propertyObject
                      } else if (maxNoOfBaths === 'Any' && propertyObject.noOfBaths >= minNoOfBaths){
                        return propertyObject
                      }
                    })
                    //* Floorsize
                    filtered = filtered.filter(propertyObject=>{
                      if(minFloorsize === 'Any' && maxFloorsize === 'Any'){
                        return propertyObject
                      } else if (minFloorsize === 'Any' && propertyObject.floorsize <= maxFloorsize){
                        return propertyObject
                      } else if (maxFloorsize === 'Any' && propertyObject.floorsize >= minFloorsize){
                        return propertyObject
                      }
                    })
                    // console.log(filtered)
                    //! navigate to respective page depending on where filter button was pressed
                    if(route.params.path === 'ViewProperty'){
                      navigation.navigate('ViewProperty', {filtered: filtered});
                      navigation.navigate('Content');
                      initialState();
                    } else {
                      // console.log(route.params.path)
                      navigation.navigate('Home', {filtered: filtered})
                      initialState();
                    }
                    route.params.path = undefined
                    }}>Show Results</Button>
            </View>
        </ScrollView>
    )
}

export default Filter