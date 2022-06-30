import {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  ToastAndroid,
} from "react-native";
import { useDispatch } from "react-redux";
import React, { useState, useRef, useEffect, useMemo } from "react";
import CartItem from "./cart_components/CartItem";
import available from "../theme/_availables";
import index from "../theme";
import LoadingView from "./common_components/LoadingView";
import cartAPI from "../api/cartApi";
import InputComponent from "./common_components/InputComponent";
import * as cartActions from "../action/cartAction";
const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const max = 200;
  const min = 0;
  const distance = max - min;
  const [cart, setCart] = useState(null); //state save data cart
  const [voucher, setVoucher] = useState("");
  const [statusCheck, setStatusCheck] = useState("loading");
  const [pointY, setPointY] = useState(new Animated.Value(200)); // point y of pop up, init is 0
  const [sizeContentScroll, setSizeContentScroll] = useState(0);
  const transformY = pointY.interpolate({
    inputRange: [0, distance],
    outputRange: [min, max],
    extrapolate: "clamp",
  });
  useEffect(() => {
    cartAPI.getCartDetail(1).then((q) => {
      setCart(q.data.model);
    });
  }, []);
  //
  useEffect(() => {
    setStatusCheck("");
    const timeOutValidateVoucher = setTimeout(addVoucher, 1000);
    return () => clearTimeout(timeOutValidateVoucher);
  }, [voucher]);
  //get cart by id cart
  const rendeListCartItem = () => {};
  //delete cart item
  const deleteCartItem = (index) => {
    var arrayCartItem = cart.listCartItem;
    cartAPI
      .deleteCartItem(arrayCartItem[index].id_cart_item)
      .then((q) => {
        if (q.data.message === "Delete success") {
          arrayCartItem.splice(index, 1);
          setCart({ ...cart, listCartItem: arrayCartItem });
          ToastAndroid.show("Đã xóa sản phẩm thành công !", ToastAndroid.SHORT);
        } else {
          ToastAndroid.show("Xóa sản phẩm thành công !", ToastAndroid.SHORT);
        }
      })
      .catch((err) => console.log(err.reponse));
  };
  //computed total price of cart
  const totalPrice = (products) => {
    let total = 0;
    if (products !== undefined) {
      products.forEach((element) => {
        total += element.quantity * element.price;
      });
    }
    return total;
  };
  // const computedTotalPrice = useMemo(
  //   () => {
  //     console.log("tt")
  //     if(cart.listCartItem!==null){
  //       totalPrice(cart.listCartItem)
  //     }
  //   },
  //   [cart]
  // );
  //render cart item
  const displayCartDetail = () => {
    if (cart === null) {
      return (
        <View style={style.cart_screen}>
          <LoadingView />
        </View>
      );
    } else {
      return (
        <View style={style.cart_screen}>
          <ScrollView
            style={[index.style.background_color, style.view_scroll]}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: pointY } } }],
              { useNativeDriver: false }
            )}
            onContentSizeChange={(height) => setSizeContentScroll(height)}
          >
            {cart.listCartItem.map((i, id) => (
              <CartItem
                id={id}
                id_cart_item={i.id_cart_item}
                deleteCart={deleteCartItem}
                img={"http://172.16.2.207:8080/foodfresh" + i.thumnail}
                price={i.price}
                name_product={i.name_product}
                quantity={i.quantity}
              />
            ))}
          </ScrollView>
          <Animated.View
            style={[
              style.pop,
              {
                transform: [
                  {
                    translateY:
                      sizeContentScroll < available.height - 100
                        ? 0
                        : transformY,
                  },
                ],
              },
            ]}
          >
            <InputComponent
              status={statusCheck}
              search={voucher === "" || voucher === null ? false : true}
              onChangeText={setVoucher}
              placeholderTextColor={available.blue}
              placeholder="Nhập voucher tại đây"
              showSoftInputOnFocus={true}
            />
            <Text style={[index.style.color_text_2, index.style.al_text_right]}>
              Tổng tiền tạm tính: {totalPrice(cart.listCartItem)} VNĐ
            </Text>
            <TouchableOpacity
              style={index.style.button_solid}
              onPress={() => saveStepOrder()}
            >
              <Text
                style={[index.style.color_text_1, index.style.al_text_center]}
              >
                XÁC NHẬN ĐƠN HÀNG
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      );
    }
  };
  //addvoucher and check that voucher
  const addVoucher = () => {
    if (voucher !== "") {
      cartAPI.checkVoucher({ id_user: 1, codeVoucher: voucher }).then((q) => {
        console.log(q.data.result.available);
        if (q.data.result.available) {
          setStatusCheck("success");
          dispatch(
            cartActions.dispatchIdVoucher({
              id_voucher: q.data.result.id_voucher,
              codeVoucher: voucher,
              discount: q.data.result.discount,
            })
          );
        } else setStatusCheck("failed");
      });
    }
  };
  //save step order
  const saveStepOrder = () => {
    navigation.navigate("CofirmOrderScreen");
    dispatch(cartActions.dispatchTotalPrice(totalPrice(cart.listCartItem)));
    dispatch(
      cartActions.dispatchListCartItem(
        cart.listCartItem.map((item) => ({
          id_product: item.id_product,
          quantity: item.quantity,
        }))
      )
    );
    //code save step order here
  };
  return displayCartDetail();
};
const style = StyleSheet.create({
  cart_screen: {
    position: "relative",
    flex: 1,
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
