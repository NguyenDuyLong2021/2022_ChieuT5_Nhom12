import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./src/components/common_components/BottomNav";
import CartScreen from "./src/components/CartScreen";
const Context = React.createContext();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Context.Provider value={{ color: "red" }}>
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
    </Context.Provider>
  );
}
