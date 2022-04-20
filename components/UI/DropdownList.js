import { List } from 'react-native-paper';
import * as React from 'react';
import customStyles from '../../screens/properties/propertyStyles';


const DropdownList = (props) => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    const content = props.options.map(option=>{
        return(
            <List.Item key={option} title={option} onPress={()=>{props.setVariable(`${option}`)}}/>
        )
    })
    return (
      <List.Section >
        <List.Accordion style={customStyles.list} title={props.variable} >
            {content}
        </List.Accordion>
      </List.Section>
    );
};

export default DropdownList

// How to use:
// 1. Setup a useState 
// 2. Call Dropdown List and change the parts in the curly brackets
// const [saleType, setSaleType] = React.useState('Select One');
// <DropdownList variable={saleType} setVariable={setSaleType} options={['Rent', 'Sale']}/>