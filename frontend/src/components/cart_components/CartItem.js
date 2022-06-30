import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import available from "../../theme/_availables";
import React, { useEffect, useState } from "react";
import index from "../../theme";
import cartAPIs from "../../api/cartAPI";
const CartItem = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);
  useEffect(() => {
    const updateQuatity = setTimeout(changeNumberProduct, 1000);
    return () => clearTimeout(updateQuatity);
  }, [quantity]);
  //change number product cart item
  const changeNumberProduct = () => {
    cartAPIs
      .updateQuatityCartItem({ id_product: props.id_product, quantity })
      .then((q) => {
        // setQuantity(quantity);
        ToastAndroid.show("Đã cập nhật số lượng sản phẩm", ToastAndroid.SHORT);
      });
  };
  //Delete cart item
  const deleteCart = () => {
    props.deleteCart(props.id);
  };
  return (
    <View key={props.id} style={style.cart_item}>
      <Image resizeMode="cover" style={style.img} source={{ uri: props.img }} />
      <View style={style.info}>
        {/* <Text style={index.style.heading_name}>{props.name_product}</Text> */}
        <Text style={index.style.heading_name}>{props.name_product}</Text>
        <Text style={index.style.heading_1}>{props.price} VNĐ</Text>

        <View style={style.quantity_area}>
          <TouchableOpacity
            style={style.border}
            onPress={() => setQuantity(quantity - 1)}
          >
            <Image
              style={style.icon}
              source={require("../../assets/img/minus.png")}
            ></Image>
          </TouchableOpacity>
          <Text style={[style.quantity_area]}>{quantity}</Text>
          <TouchableOpacity
            style={style.border}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Image
              style={style.icon}
              source={require("../../assets/img/plus.png")}
            ></Image>
          </TouchableOpacity>
        </View>

      </View>
      <View style={style.options}>
        <Image
          style={style.icon_view}
          source={require("../../assets/img/view.png")}
        ></Image>
        <TouchableOpacity style={style.border} onPress={deleteCart}>
          <Image
            style={style.icon}
            source={require("../../assets/img/close.png")}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  cart_item: {
    flexDirection: "row",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: available.blue,
    borderRadius: available.b_radius,
    margin: 10,
    height: null,
    marginLeft: "3%",
    marginRight: "2%",
  },
  img: {
    flex: 1,
    width: "35%",
    height: 110,
    // height: 50,
    marginLeft: "7%",
    borderTopLeftRadius: available.b_radius,
    borderBottomLeftRadius: available.b_radius,
  },
  info: {
    flex: 2,
    justifyContent: "center",
    // marginLeft: "10%",
    marginLeft: "10%",
  },
  options: {
    flex: 1,
    justifyContent: "space-evenly",
    marginRight: "-10%",
  },
  border: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: available.blue,
    justifyContent: "center",
  },
  quantity_area: {
    flexDirection: "row",
    paddingHorizontal: 10,
    color: available.blue,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  icon: {
    width: null,
    height: 19,
  },
  icon_view: {
    width: 25,
    height: 25,
  },
});

export default CartItem;
