import { List } from 'react-native-paper';
import * as React from 'react';
import { TextInput } from 'react-native';
import customStyles from '../../screens/properties/propertyStyles'


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

export default DropdownListMinMax