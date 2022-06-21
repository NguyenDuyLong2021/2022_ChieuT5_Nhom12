import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import available from "../../theme/_availables";
import index from "../../theme/index";
import React from "react";
const Product = (props) => {
  return (
    <TouchableOpacity
      style={style.product}
      // Do chỗ này là component con nền cần truyền navigatio từ  màn hình cha vào thông qua props
      // ở đây chúng ta truyền từ màn hình cha là home
      onPress={() => props.navigation.navigate("ProductDetail")}
    >
      <View style={style.item_category}>
        <Image
          resizeMode="contain"
          style={style.img_product}
          source={props.thumbnail}
        />
      </View>
      <Text style={style.name_category}>{props.name_product}</Text>
      <Text style={style.price}>{props.price} VNĐ</Text>
      <TouchableOpacity style={style.button}>
        <Text style={index.style.heading_3}>Thêm vào giỏ hàng</Text>
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
    width: available.width / 2 - 20,
    margin: 5,
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
    fontSize: 20,
    backgroundColor:"while"
  },
  price: {
    textAlign: "center",
    color: "#ff6347",
    fontWeight: available.fw_1,
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    width: null,
    height: 38,
    backgroundColor: available.blue,
    borderBottomLeftRadius: available.b_radius,
    borderBottomRightRadius: available.b_radius,
    justifyContent: "center",
  },
});
export default Product;
