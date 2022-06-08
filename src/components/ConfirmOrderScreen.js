import {
    View,
    TextInput,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    Animated,
  } from "react-native";
  import React, { useState, useRef } from "react";
  import CartItem from "./cart_components/CartItem";
  import available from "../theme/_availables";
  import index from "../theme";
  const ConfirmOrderScreen = () => {
    
    return (
      <View style={style.cart_screen}>
        
      </View>
    );
  };
  const style = StyleSheet.create({
    cart_screen: {
      position: "relative",
    },
    view_scroll: {
      paddingBottom: 400,
    },
    pop: {
      width: available.width,
      position: "absolute",
      bottom: 0,
      height: null,
      backgroundColor: available.white,
      borderTopLeftRadius: available.b_radius * 2,
      borderTopRightRadius: available.b_radius * 2,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    text_input: {
      width: null,
      fontSize: 16,
      color: available.blue,
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: available.blue,
      borderRadius: available.b_radius,
      padding: 10,
      marginTop: 20,
    },
  });
  
  export default ConfirmOrderScreen;
  