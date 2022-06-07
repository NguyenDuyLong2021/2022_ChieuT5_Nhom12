import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import available from "../../theme/_availables";
import { StyleSheet, Image } from "react-native";
import React from "react";
import Home from "../Home";
import MainStackNavigation from "../MainStackNavigation";
const Tab = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 60, backgroundColor: available.blue },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={style.icon_tab}
              source={require("../../assets/img/home.png")}
            />
          ),
          tabBarBadgeStyle: {
            color: available.white,
            backgroundColor: available.orange,
          },
          tabBarActiveTintColor: available.orange,
        }}
        name="Trang chủ"
        component={MainStackNavigation}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarBadge: 3,
          tabBarIcon: () => (
            <Image
              style={style.icon_tab}
              source={require("../../assets/img/coupon.png")}
            />
          ),
          tabBarBadgeStyle: {
            color: available.white,
            backgroundColor: available.orange,
          },
          tabBarActiveTintColor: available.orange,
        }}
        name="Voucher"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={style.icon_tab}
              source={require("../../assets/img/heart.png")}
            />
          ),
          tabBarBadgeStyle: {
            color: available.white,
            backgroundColor: available.orange,
          },
          tabBarActiveTintColor: available.orange,
        }}
        name="Yêu thích"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={style.icon_tab}
              source={require("../../assets/img/user.png")}
            />
          ),
          tabBarActiveTintColor: available.orange,
        }}
        name="Cá nhân"
        component={Home}
      />
    </Tab.Navigator>
  );
};
const style = StyleSheet.create({
  icon_tab: {
    width: 35,
    height: 35
  },
});
export default BottomNav;
