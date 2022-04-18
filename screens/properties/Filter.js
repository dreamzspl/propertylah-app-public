import API from './API.js'
import * as React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { Button, List } from 'react-native-paper';
import { styles, textStyles } from "../../styles/common";
import customStyles from './propertyStyles'

// todo clean up dropdown list format
// todo add all the other selector first
// todo add all filter methods if possible

const DropdownListPropertyType = (props) => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Section >
      <List.Accordion style={customStyles.list} title={props.propertyType} >
        <List.Item title="HDB" onPress={()=>{props.setPropertyType('HDB')}}/>
        <List.Item title="Apartment" onPress={()=>{props.setPropertyType('Apartment')}}/>
        <List.Item title="Condominium" onPress={()=>{props.setPropertyType('Condominium')}}/>
        <List.Item title="All" onPress={()=>{props.setPropertyType('All')}}/>
      </List.Accordion>
    </List.Section>
  );
};
const DropdownListPrice = (props) => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Section >
      <List.Accordion style={customStyles.list} title={`${props.minPrice} - ${props.maxPrice}`} >
        <List.Item title="S$ Minimum" />
        <TextInput onChangeText={price => props.setMinPrice(price)}></TextInput>
        <List.Item title="S$ Maximum" />
        <TextInput onChangeText={price => props.setMaxPrice(price)}></TextInput>
        <List.Item title="Any" onPress={()=>{
          props.setMinPrice('Any')
          props.setMaxPrice('Any')
          }}/>
          {/* //todo figure out price section, need alot of if checks*/}
      </List.Accordion>
    </List.Section>
  );
};

const Filter = ({navigation})=>{
  const [minPrice, setMinPrice] = React.useState('Any')
  const [maxPrice, setMaxPrice] = React.useState('Any')
  const [propertyType, setPropertyType] = React.useState('All');

    return(
        <ScrollView>
            <View style={[styles.container,customStyles.backgroundColor]}>
                <View>
                  <View style={customStyles.filterHorizontalContainer}>
                    <Text style={[customStyles.filterPageFont, customStyles.bold]}>Property Type</Text>
                    <DropdownListPropertyType propertyType={propertyType} setPropertyType={setPropertyType}/>
                  </View>
                  <View style={customStyles.filterHorizontalContainer}>
                    <Text style={[customStyles.filterPageFont, customStyles.bold]}>Price</Text>
                    <DropdownListPrice minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice}/>
                  </View>
                        {/* <Text style={[customStyles.filterPageFont, customStyles.bold, customStyles.borderBottomWidth]}>Price</Text>
                        <Text style={[customStyles.filterPageFont, customStyles.bold, customStyles.borderBottomWidth]}>Rental Type</Text>
                        <Text style={[customStyles.filterPageFont, customStyles.bold, customStyles.borderBottomWidth]}>Bedroom</Text>
                        <Text style={[customStyles.filterPageFont, customStyles.bold, customStyles.borderBottomWidth]}>Floorsize</Text>
                        <Text style={[customStyles.filterPageFont, customStyles.bold, customStyles.borderBottomWidth]}>Bathroom</Text>
                        <Text style={[customStyles.filterPageFont, customStyles.bold, customStyles.borderBottomWidth]}>Lease Term</Text>
                        <Text style={[customStyles.filterPageFont, customStyles.bold, customStyles.borderBottomWidth]}>Build Year</Text>
                        <Text style={[customStyles.filterPageFont, customStyles.bold, customStyles.borderBottomWidth]}>Floor Level</Text>
                        <Text style={[customStyles.filterPageFont, customStyles.bold, customStyles.borderBottomWidth]}>Furnishing</Text> */}
                </View>
                <Button style={[customStyles.resultButton]} mode="contained" color='red' onPress={async ()=>{
                    const incoming = await API.get('/properties');
                    const properties = incoming.data.data;
                    // console.log(properties)
                    const test = properties.filter(propertyObject=>{
                      if(propertyType === 'All'){
                        return propertyObject
                      } else if (propertyType === propertyObject.propertyType){
                        return propertyObject
                      }
                      })
                    console.log(test)
                    navigation.navigate('Home', {filtered: test})
                    }}>Show Results</Button>
            </View>
        </ScrollView>
    )
}

export default Filter