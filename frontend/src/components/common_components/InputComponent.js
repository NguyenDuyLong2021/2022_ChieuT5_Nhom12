import { Text, TextInput, View, StyleSheet, Image } from "react-native";
import React, { Component } from "react";
import available from "../../theme/_availables";
import { Dimensions } from "react-native";
const InputComponent = (props) => {
  return (
    <View style={style.input}>
      <TextInput
        autoFocus={false}
        placeholderTextColor={available.blue}
        style={style.text}
        placeholder={props.placeholder}
        keyboardType="web-search"
      />
      <View></View>
    </View>
  );
};
const style = StyleSheet.create({
  input: {
    flexDirection: "row",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: available.blue,
    borderRadius: available.b_radius,
    flex:1
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: available.blue,
  },
  icon_header: {
    width: 35,
    height: 35,
    margin: 5,
  },
});
export default InputComponent
