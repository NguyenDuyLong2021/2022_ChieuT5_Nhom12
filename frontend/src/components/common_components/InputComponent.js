import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { Component } from "react";
import available from "../../theme/_availables";
import { Dimensions } from "react-native";
const InputComponent = (props) => {
  const statusLoading = (status) => {
    if (status === "success") {
      return <Image style={style.icon_header} source={require("../../assets/img/success.png")} />;
    } else if (status === "failed") {
      return <Image style={style.icon_header} source={require("../../assets/img/failed.png")} />;
    } else {
      return <ActivityIndicator size={"large"} color={available.blue} />;
    }
  };
  const changeText=(text)=>{
    props.onChangeText(text)
  }
  return (
    <View style={style.input}>
      <TextInput
        autoFocus={false}
        placeholderTextColor={available.blue}
        style={style.text}
        placeholder={props.placeholder}
        keyboardType="web-search"
        onChangeText={(text)=>changeText(text)} 
             />
      {props.search ? (
        statusLoading(props.status)
      ) : null}
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
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: available.blue,
    padding: 10,
    flex: 1,
  },
  icon_header: {
    width: 35,
    height: 35,
    margin: 5,
  },
});
export default InputComponent;
