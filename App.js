import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./src/navigators/BottomNav"; 
import ProductDetails from "./src/components/ProductDetails";
import CartScreen from "./src/components/CartScreen";

const Context = React.createContext();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Context.Provider value={{ color: "red" }}>
      <NavigationContainer>
        <BottomNav /> 
         {/* <CartScreen /> */}
        {/* <ProductDetails/> */}
      </NavigationContainer>
    </Context.Provider>
  );
}
