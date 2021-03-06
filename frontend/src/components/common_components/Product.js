import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import available from "../../theme/_availables";
import index from "../../theme/index";
import React, { useState } from "react";
import productsAPI from "../../api/productsAPI";
import * as productAction from "../../action/productAction";
import {useDispatch} from "react-redux" 
import cartApi from "../../api/cartApi";


const Product = (props) => {
  const dispacth = useDispatch();
  //bước 2
  const getDetailProduct = () => {
    props.navigation.navigate("ProductDetail");
    dispacth(productAction.loadProductDetail(props.mykey))
  };
 
  const quantity = 1 ;
  const addToCart= ()=>{    
    // navigation.navigate("CartScreen");  
    if (cartApi.booleanProduct(props.mykey)){
       cartApi.updateCart({id_product: props.mykey,quantity});
      //  Alert.alert("Update success");
       console.log("Update success"); 
    }else {
      cartApi.addToCart(1, {id_product: props.mykey,quantity});
      // Alert.alert("Add success")
      console.log("Add success"); 
    } 
  }  

  return (
    <TouchableOpacity key={props.mykey}
      style={style.product}
      // Do chỗ này là component con nền cần truyền navigatio từ  màn hình cha vào thông qua props
      // ở đây chúng ta truyền từ màn hình cha là home
      onPress={getDetailProduct} 
    >
      <View style={style.item_category}>
        <Image
          resizeMode="contain"
          style={style.img_product}
          source={{ uri: props.thumbnail }}
        />
        
      </View>  
      <Text style={style.name_category}>{props.name_product}</Text>
      <Text style={style.price}>{props.price} VNĐ</Text>
      <TouchableOpacity 
        style={style.button} 
        // onPress={() => props.navigation.navigate("CartScreen")}
        onPress={addToCart}
        >
        <Text style={index.style.heading_3}
         >Thêm vào giỏ hàng
        </Text>
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
    backgroundColor:available.white
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
