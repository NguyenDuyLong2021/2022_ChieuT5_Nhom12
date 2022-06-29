import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./src/navigators/BottomNav";
import store from './store'
import {Provider} from "react-redux"

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNav /> 
      </NavigationContainer>
    </Provider>
  );
}
