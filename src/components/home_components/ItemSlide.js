import { Text, View, Image, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Dimensions } from "react-native";
import available from "../../theme/_availables";
const width_device = Dimensions.get("window").width;
// ../../assets/img/slide_demo_1.jpeg
const ItemSlide = (props) => {
  return (
    <View key={props.id} style={style.item_slide}>
      <Image
        style={style.img_slide}
        source={props.img}
        resizeMode="cover"
      ></Image>
    </View>
  );
};

const style = StyleSheet.create({
  item_slide: {
    flex: 1,
    width: width_device,
    // marginLeft: 10,
    // borderWidth: 2,
    // borderStyle: "solid",
    // borderColor: available.blue,
    margin:10
  },
  img_slide: {
    width: width_device-40,
    height: 250,
    borderRadius: 15,
  },
});
export default ItemSlide;
