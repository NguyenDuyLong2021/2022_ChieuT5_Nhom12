import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import React, { useState, useRef } from "react";
import layout from "../theme/layout";
import available from "../theme/_availables";
import index from "../theme";
import { useSelector } from "react-redux";
import { Modal, TextInput } from "react-native-web";
import InputComponent from "../components/common_components/InputComponent";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import PopUp from "./common_components/PopUp";
var radio_props = [
  { label: "Thanh toán tiền mặt", value: 0 },
  { label: "Thanh toán online", value: 1 },
];
const ConfirmOrderScreen = () => {
  //state of modal edit address
  const [statePayment, setStatePayment] = useState(0);
  const [showEditAddress, setShowEditAddress] = useState(false);
  const voucher = useSelector(state=> state.cartReducer.voucher)
  const user = useSelector(state=> state.userReducer.user)
  console.log(voucher ,"nè")
  return (
    <View style={style.confirm_order_screen}>
      <View style={style.row}>
        <Text style={index.style.heading_1}>Thông tin khách hàng</Text>
        <Text style={index.style.color_text_2}>{user.last_name} {user.first_name}</Text>
      </View>
      <View style={style.row}>
        <Text style={index.style.heading_1}>Số điện thoại</Text>
        <Text style={index.style.color_text_2}>{user.phone_number}</Text>
      </View>
      <View style={style.row}>
        <Text style={index.style.heading_1}>Địa chỉ</Text>
        <View style={layout.style.flex_row}>
          <Text style={index.style.color_text_2}>
            {user.address}
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
      <View style={layout.style.flex_row}>
        <Text style={[index.style.heading_1, { flex: 1 }]}>Ngày giao</Text>
        <Text
          style={[index.style.heading_1, index.style.al_text_left, { flex: 1 }]}
        >
          Thời gian giao
        </Text>
      </View>
      <View style={style.row}>
        <InputComponent />
        <InputComponent />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={index.style.heading_1}>Hình thức thanh toán</Text>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          buttonColor={available.blue}
          selectedButtonColor={available.orange}
          onPress={(value) => {
            setStatePayment(value);
          }}
          labelStyle={index.style.heading_1}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={index.style.heading_1}>Tổng tiền: 60000 VNĐ</Text>
        <Text style={index.style.heading_1}>Mã giám giá: FF434</Text>
        <Text style={index.style.heading_1}>Tiền ship: 20000 VNĐ</Text>
        <Text style={index.style.heading_1}>
          Số tiền cần thanh toán: 80000 VNĐ
        </Text>
      </View>
      <TouchableOpacity style={index.style.button_solid}>
        <Text style={[index.style.color_text_1, index.style.al_text_center]}>
          XÁC NHẬN ĐẶT HÀNG
        </Text>
      </TouchableOpacity>
      {/* <PopUp /> */}
    </View>
  );
};
const style = StyleSheet.create({
  confirm_order_screen: {
    paddingHorizontal:10
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
  },
  modal: {
    width: available.width,
    height: 200,
  },
});

export default ConfirmOrderScreen;
