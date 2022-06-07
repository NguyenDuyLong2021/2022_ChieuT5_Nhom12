import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import CartScreen from '../components/CartScreen';

const Stack = createNativeStackNavigator();


export default function MainStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false}} name="Home" component={Home} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  )
}