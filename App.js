import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./src/navigators/BottomNav";
import Details from "./src/components/Details";
import ProductDetails from "./src/components/ProductDetails";

const Context = React.createContext();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Context.Provider value={{ color: "red" }}>
      <NavigationContainer>
        {/* <BottomNav /> */}
        {/* <Details /> */}
        <ProductDetails/>
      </NavigationContainer>
    </Context.Provider>
  );
}
