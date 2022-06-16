import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./src/navigators/BottomNav";
const Context = React.createContext();

export default function App() {
  return (
    <Context.Provider value={{ color: "red" }}>
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
    </Context.Provider>
  );
}
