import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import available from "../../theme/_availables";
import index from "../../theme/index";
import React from "react";
const Product1 = (props) => {
  return (
    <ScrollView  horizontal={true}>
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
      <View >
      {/* <View style={{ flex: 0.7, flexDirection: "row" }}> */}
      <Text style={{textAlign: "center", marginBottom: 15}}>
      <Text style={style.price}>{props.price}<Text style={{ textDecorationLine:"underline"}}>đ</Text> </Text>
       <Text style={style.priceOld}>{props.priceOld}<Text style={{ textDecorationLine:"underline"}}>đ</Text></Text>
      </Text>
      </View>
      <TouchableOpacity style={style.button}>
        <Text style={index.style.heading_3}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </TouchableOpacity>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  product: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: available.blue,
    borderRadius: available.b_radius,
    width: available.width / 3 - 20,
    margin: 5,
    marginTop: 15,
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
  },
  price: {
    textAlign: "center",
    color: "#ff6347",
    fontWeight: available.fw_1,
    fontSize: 15,
    fontWeight: "bold", 
  },
  priceOld: {
    textAlign: "center", 
    fontWeight: available.fw_1,
    textDecorationLine:"line-through",
    color: "#a9a9a9",
    fontSize: 15, 
  },
  button: {
    width: null,
    height: 42,
    backgroundColor: available.blue,
    borderBottomLeftRadius: available.b_radius,
    borderBottomRightRadius: available.b_radius,
    justifyContent: "center",
    fontSize: 20,
  },
});
export default Product1;
