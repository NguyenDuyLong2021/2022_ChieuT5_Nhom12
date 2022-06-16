import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import React, { useState, useRef } from "react";
import layout from "../theme/layout";
import available from "../theme/_availables";
import index from "../theme";
import { Modal } from "react-native-web";
const ConfirmOrderScreen = () => {
  //state of modal edit address
  const [showEditAddress, setShowEditAddress] = useState(false);
  return (
    <View style={style.confirm_order_screen}>
      <View style={style.row}>
        <Text style={index.style.heading_1}>Thông tin khách hàng</Text>
        <Text style={index.style.color_text_2}>Thông tin khách hàng</Text>
      </View>
      <View style={style.row}>
        <Text style={index.style.heading_1}>Số điện thoại</Text>
        <Text style={index.style.color_text_2}>033333333</Text>
      </View>
      <View style={style.row}>
        <Text style={index.style.heading_1}>Địa chỉ</Text>
        <View style={layout.style.flex_row}>
          <Text style={index.style.color_text_2}>
            Đường , phường 2, quận 3, tỉnh 4
          </Text>
          <TouchableOpacity
            onPress={() => setShowEditAddress(!showEditAddress)}
          >
            <Image
              style={index.style.icon}
              source={require("../assets/img/pencil.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={true}>
        <View style={style.modal}>
          <Text>Đặt hàng thành công</Text>

          <Text>Đặt hàng thành công</Text>
          <Text>Đặt hàng thành công</Text>
          
          <Text>Đặt hàng thành công</Text>
          <Text>Đặt hàng thành công</Text>
          
          <Text>Đặt hàng thành công</Text>
          <Text>Đặt hàng thành công</Text>
          <Text>Đặt hàng thành công</Text>
          <Text>Đặt hàng thành công</Text>
        </View>
      </Modal>
    </View>
  );
};
const style = StyleSheet.create({
  confirm_order_screen: {
    margin: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
  },
  modal:{
    width: available.width,
    height: 200
  }
});

export default ConfirmOrderScreen;
