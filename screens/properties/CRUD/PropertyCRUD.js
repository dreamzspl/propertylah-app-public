import * as React from 'react';
import customStyles from '../propertyStyles';
import { styles, textStyles } from "../../../styles/common";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddProperty from './AddProperty';
import ViewProperty from './ViewProperty';

//todo tab navigators

const Tab = createMaterialTopTabNavigator();

const PropertyCRUD = ()=>{
    return(
        <Tab.Navigator screenOptions={{swipeEnabled:false}}>
            <Tab.Screen options={{tabBarLabel: 'View/Modify Property'}} name='ViewProperty' lazy={true} component={ViewProperty}></Tab.Screen>
            <Tab.Screen options={{tabBarLabel: 'Add Property'}} lazy={true} name='AddProperty' component={AddProperty}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default PropertyCRUD