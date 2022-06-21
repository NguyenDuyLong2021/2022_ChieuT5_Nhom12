import {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";
import React, { useState, useRef } from "react";
import CartItem from "./cart_components/CartItem";
import available from "../theme/_availables";
import index from "../theme";
const CartScreen = ({ navigation }) => {
  const max = 200;
  const min = 0;
  const distance = max - min;
  const array = [
    {
      name_product: "Đậu hà lan",
      price: "40000",
      img: require("../assets/img/TantasDetracto.png"),
      quantity: 6,
    },
    {
      name_product: "Cà chua",
      price: "67000",
      priceOld: "80000",
      img: require("../assets/img_ProductDetails/tomato.png"),
    },
    {
      name_product: "Chanh vàng",
      price: "115000",
      img: require("../assets/img/NecinEssentelo.png"),
      quantity: 3,
    },
    {
      name_product: "Gạo",
      price: "67500",
      img: require("../assets/img/VerantInterpretaris.png"),
      quantity: 1,
    },
    {
      name_product: "Bơ",
      price: "90000",
      img: require("../assets/img/ZalorumAliquam.png"),
      quantity: 8,
    },
    {
      name_product: "Cam",
      price: "40000",
      img: require("../assets/img_ProductDetails/orange.png"),
      quantity: 8,
    },
    {
      name_product: "Đào",
      price: "40000",
      img: require("../assets/img_ProductDetails/dig.png"),
      quantity: 7,
    },
  ];
  const [cart, setCart] = useState(array);
  const [pointY, setPointY] = useState(new Animated.Value(200)); // point y of pop up, init is 0
  const transformY = pointY.interpolate({
    inputRange: [0, distance],
    outputRange: [min, max],
    extrapolate: "clamp",
  });
  //render cart item
  const displayCartDetail = () => {
    return (
      <ScrollView
        style={[index.style.background_color, style.view_scroll]}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: pointY } } }],
          { useNativeDriver: false }
        )}
      >
        {cart.map((i) => (
          <CartItem
            img={i.img}
            price={i.price}
            name_product={i.name_product}
            quantity={i.quantity}
          />
        ))}
      </ScrollView>
    );
  };
  //addvoucher and check that voucher
  const addVoucher = () => {
    //call api check vaildate api here
  };
  //save step order
  const saveStepOrder = () => {
    navigation.navigate("CofirmOrderScreen");
    //code save step order here
  };
  return (
    <View style={style.cart_screen}>
      {displayCartDetail()}
      <Animated.View
        style={[style.pop, { transform: [{ translateY: transformY }] }]}
      >
        <TextInput
          autoFocus={false}
          placeholderTextColor={available.blue}
          style={style.text_input}
          placeholder="Nhập voucher tại đây"
          keyboardType="web-search"
          onChange={() => addVoucher(event)}
        />
        <Text style={[index.style.color_text_2, index.style.al_text_right]}>
          Tổng tiền tạm tính: 40000 VNĐ
        </Text>
        <TouchableOpacity
          style={index.style.button_solid}
          onPress={() => saveStepOrder()}
        >
          <Text style={[index.style.color_text_1, index.style.al_text_center]}>
            XÁC NHẬN ĐƠN HÀNG
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
const style = StyleSheet.create({
  cart_screen: {
    position: "relative",
  },
  view_scroll: {
    paddingBottom: 400,
  },
  pop: {
    width: available.width,
    position: "absolute",
    bottom: 0,
    height: null,
    backgroundColor: available.white,
    borderTopLeftRadius: available.b_radius * 2,
    borderTopRightRadius: available.b_radius * 2,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text_input: {
    width: null,
    fontSize: 16,
    color: available.blue,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: available.blue,
    borderRadius: available.b_radius,
    padding: 10,
    marginTop: 20,
  },
});

export default CartScreen;
