import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import available from "../../theme/_availables";
import index from "../../theme/index";
import React from "react";
const ItemCategory = (props) => {
  return (
    <TouchableOpacity key={props.key} style={style.product}>
      <View style={style.item_category}>
        <Image
          resizeMode="contain"
          style={style.img_product}
          source={props.thumbnail}
        />
      </View>
      <Text style={style.name_category}>{props.price}</Text>
      <Text style={style.name_category}>{props.name_product}</Text>
      <TouchableOpacity style={style.button}>
        <Text style={index.style.heading_3}>Thêm vào giỏ</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  product: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: available.blue,
    borderRadius: available.b_radius,
    width: available.width/2-20,
    margin:5
  },
  img_product: {
    width: null,
    height: 105,
    borderTopLeftRadius: available.b_radius,
    borderTopRightRadius: available.b_radius,
  },
  name_category: {
    textAlign: "center",
    color: available.blue,
    fontWeight: available.fw_1,
  },
  button: {
    width: null,
    height: 38,
    backgroundColor: available.blue,
    borderBottomLeftRadius: available.b_radius,
    borderBottomRightRadius: available.b_radius,
    justifyContent: "center",
  }
});
export default ItemCategory;
