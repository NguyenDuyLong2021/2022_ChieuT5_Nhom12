import { Text, TextInput, View, StyleSheet, Image } from "react-native";
import React, { Component } from "react";
import available from "../../theme/_availables";
import { Dimensions } from "react-native";

export default class SearchComponent extends Component {
  render() {
    return (
      <View style={style.input}>
        <Image
          style={style.icon_header}
          source={require("../../assets/img/search.png")}
        />
        <TextInput
          autoFocus={false}
          placeholderTextColor={available.blue}
          style={style.text}
          placeholder="Tìm kiếm ngay"
          keyboardType="web-search"
        />
        <View>
            
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  input: {
    flexDirection: "row",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: available.blue,
    borderRadius: available.b_radius,
    margin: 10,
  },
  text: {
    width: Dimensions.get("window").width,
    fontSize: 16,
    fontWeight: "bold",
    color:available.blue
  },
  icon_header: {
    width: 35,
    height: 35,
    margin: 5,
  },
});
