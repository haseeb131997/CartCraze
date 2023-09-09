
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screen/HomeScreen';
import SmartPhoneScreen from './Screen/SmartphoneScreen';
import GroomingScreen from './Screen/GroomingScreen';
import GroceryScreen from './Screen/GroceryScreen';
import ShowZoomImage from './Screen/ShowZoomImage';


const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:true, statusBarColor:"#000",title: 'CartCraze',
          headerStyle: {backgroundColor: '#0e1c1c'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: "400",fontSize: 20,
          }}} />
            <Stack.Screen name='SmartphoneScreen' component={SmartPhoneScreen} options={{headerShown:true, title: 'Popular Phones', headerStyle: {backgroundColor: '#0e1c1c'},
          headerTintColor: '#fff', headerTitleStyle: {fontWeight: "400",fontSize: 20,
          }}} />
            <Stack.Screen name='GroomingScreen' component={GroomingScreen} options={{headerShown:false}} />
            <Stack.Screen name='GroceryScreen' component={GroceryScreen} options={{headerShown:false}} />
            <Stack.Screen name='ShowZoomImage' component={ShowZoomImage} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;