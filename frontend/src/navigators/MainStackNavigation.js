import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../components/HomeScreen";
import CartScreen from "../components/CartScreen";
import ConfirmOrderScreen from "../components/ConfirmOrderScreen";
import ProductDetails from "../components/ProductDetails"; //import màn hình
import available from "../theme/_availables";

const Stack = createNativeStackNavigator();

export default function MainStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
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
      {/* hoa thêm nè */}
{/* thêm một stack screen vào đây nhớ import màn hình vào nha */}
      <Stack.Screen
        options={{ headerShown: false }}
        name="ProductDetail" // tên màn hình
        component={ProductDetails} // truyền cái màn hình vào đây
      />   
       </Stack.Navigator>
  );
}
