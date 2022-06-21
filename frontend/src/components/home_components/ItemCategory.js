import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import available from "../../theme/_availables";
import index from "../../theme/index";
import React from "react";
const ItemCategory = (props) => {
  return (
    <TouchableOpacity key={props.id}>
      <View style={style.item_category}>
        <Image
          style={style.img_category}
          source={props.ic_source}
        />
      </View>
      <Text style={style.name_category}>{props.name_ic}</Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  item_category: {
    width: undefined,
    height: undefined,
    backgroundColor: available.blue,
    margin: 10,
    padding: 10,
    borderRadius: available.b_radius,
  },
  img_category: {
    width: 70,
    height: 70,
  },
  name_category: {
    textAlign: "center",
    color: available.blue,
    fontWeight: available.fw_1
  },
});
export default ItemCategory;
