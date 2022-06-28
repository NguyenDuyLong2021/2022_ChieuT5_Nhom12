import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./src/navigators/BottomNav";
import { Provider } from 'react-redux'
const Context = React.createContext();
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNav />
        {/* <CartScreen /> */}
        {/* <ProductDetails/> */}
      </NavigationContainer>
    </Provider>
  );
}
