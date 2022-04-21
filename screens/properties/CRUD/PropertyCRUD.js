import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Styles and Icons
import customStyles from '../propertyStyles';
import { stackNavigatorScreenOptions, styles } from "../../../styles/common";

// Components
import AddProperty from './AddProperty';
import ViewProperty from './ViewProperty';
import DrawerMenu from '../../../components/nav/DrawerMenu';
import EditProperty from './EditProperty';
import PropertyServicesScreen from './PropertyServicesScreen';
import Filter2 from './Filter2';
import { Button } from 'react-native-paper';

const Stack = createNativeStackNavigator();

const PropertyCRUD = ({navigation})=>{

    return(
        //! screenOption in navigator to apply styling etc for the whole stack, burger button done manually(DrawerMenu using headerLeft)
        <Stack.Navigator screenOptions={stackNavigatorScreenOptions}>
            <Stack.Screen 
                options={{
                    headerLeft:()=> <DrawerMenu />,
                    headerRight:()=> <Button 
                        mode='contained' style={customStyles.clearFilterButton}
                        onPress={()=>{navigation.navigate('AddProperty')}}
                        >+Add</Button>,
                    headerTitleAlign: 'left',
                    title: 'My Properties',
                    }}
                name='ViewProperty' 
                component={ViewProperty}
            ></Stack.Screen>
            <Stack.Screen options={{title: 'Add Property'}} name='AddProperty' component={AddProperty}></Stack.Screen>
            <Stack.Screen name='EditProperty' component={EditProperty} options={{headerShown: true}}></Stack.Screen>
            <Stack.Screen name='PropertyServicesScreen' component={PropertyServicesScreen} options={{headerShown: true, title: 'Edit/Delete Property'}}></Stack.Screen>
            <Stack.Screen 
                options={{title:'Filter', headerShown: true}} 
                name='Filter2' 
                component={Filter2}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default PropertyCRUD
