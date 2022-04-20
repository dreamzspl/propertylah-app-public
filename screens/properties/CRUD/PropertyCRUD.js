import * as React from 'react';
import customStyles from '../propertyStyles';
import { styles, textStyles } from "../../../styles/common";
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddProperty from './AddProperty';
import ViewProperty from './ViewProperty';
import { AuthContext } from '../../../store/auth-context';

//todo tab navigators

const Tab = createMaterialTopTabNavigator();

const Error = () =>{
    return(
        <Text style={{textAlign:'center', fontSize: 30, marginTop: 20,}}>Please login as agent to access this page</Text>
    )
}

const PropertyCRUD = ()=>{
    const authCtx = React.useContext(AuthContext);

    return(
        <Tab.Navigator screenOptions={{swipeEnabled:false, lazy:true}}>
            <Tab.Screen options={{tabBarLabel: 'View/Modify Property'}} name='ViewProperty' component={ViewProperty}></Tab.Screen>
            <Tab.Screen options={{tabBarLabel: 'Add Property'}} name='AddProperty' component={AddProperty}></Tab.Screen>
            {/* {authCtx.id? <Tab.Screen options={{tabBarLabel: 'View/Modify Property'}} name='ViewProperty' component={ViewProperty}></Tab.Screen>: <Tab.Screen name='Error' component={Error}></Tab.Screen>}
            {authCtx.id? <Tab.Screen options={{tabBarLabel: 'Add Property'}} name='AddProperty' component={AddProperty}></Tab.Screen>: null} */}
        </Tab.Navigator>
    )
}

export default PropertyCRUD