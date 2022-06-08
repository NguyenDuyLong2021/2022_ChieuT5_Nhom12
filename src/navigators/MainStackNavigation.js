import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import CartScreen from "../components/CartScreen";
import ConfirmOrderScreen from "../components/ConfirmOrderScreen";
import available from "../theme/_availables";

const Stack = createNativeStackNavigator();

export default function MainStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerBackImageSource: require("../assets/img/back.png"),
          headerTintColor: available.blue,
          headerTitleAlign:"center", headerTitle:"Chi tiết giỏ hàng"
        }}
        name="CartScreen"
        component={CartScreen}
      />
       <Stack.Screen
        options={{
          headerBackImageSource: require("../assets/img/back.png"),
          headerTintColor: available.blue,
          headerTitleAlign:"center", headerTitle:"Xác nhận đặt hàng"
        }}
        name="CofirmOrderScreen"
        component={ConfirmOrderScreen}
      />
    </Stack.Navigator>
  );
}
