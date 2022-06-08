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
      name_product: "Cá chim",
      price: "40000",
      img: require("../assets/img/cachim.jpg"),
      quantity: 2,
    },
    {
      name_product: "Cá chim",
      price: "40000",
      img: require("../assets/img/cachim.jpg"),
      quantity: 2,
    },
    {
      name_product: "Cá chim",
      price: "40000",
      img: require("../assets/img/cachim.jpg"),
      quantity: 2,
    },
    {
      name_product: "Cá chim",
      price: "40000",
      img: require("../assets/img/cachim.jpg"),
      quantity: 2,
    },
    {
      name_product: "Cá chim",
      price: "40000",
      img: require("../assets/img/cachim.jpg"),
      quantity: 2,
    },
    {
      name_product: "Cá chim",
      price: "40000",
      img: require("../assets/img/cachim.jpg"),
      quantity: 2,
    },
    {
      name_product: "Cá chim",
      price: "40000",
      img: require("../assets/img/cachim.jpg"),
      quantity: 2,
    },
  ];
  const [cart, setCart] = useState(array);
  const [pointY, setPointY] = useState(new Animated.Value(200)); // point y of pop up, init is 0
  const transformY = pointY.interpolate({
    inputRange: [0, distance],
    outputRange: [min, max],
    extrapolate: "clamp",
  });
  return (
    <View style={style.cart_screen}>
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
      <Animated.View
        style={[style.pop, { transform: [{ translateY: transformY  }] }]}
      >
        <TextInput
          autoFocus={false}
          placeholderTextColor={available.blue}
          style={style.text_input}
          placeholder="Nhập voucher tại đây"
          keyboardType="web-search"
        />
        <Text style={[index.style.color_text_2, index.style.al_text_right]}>
          Tổng tiền tạm tính: 40000 VNĐ
        </Text>
        <TouchableOpacity
          style={index.style.button_solid}
          onPress={() => navigation.navigate("CofirmOrderScreen")}
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
