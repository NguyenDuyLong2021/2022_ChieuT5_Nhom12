import { View, StyleSheet, TouchableOpacity, Text, ToastAndroid } from "react-native";
import React, { useState, useRef } from "react";
import layout from "../theme/layout";
import available from "../theme/_availables";
import index from "../theme";
import { useSelector } from "react-redux";
import { Modal, TextInput } from "react-native-web";
import InputComponent from "../components/common_components/InputComponent";
import { Calendar } from "react-native-calendars";
import RadioForm from "react-native-simple-radio-button";
import PopUp from "./common_components/PopUp";
import TimePickerC from "./common_components/TimePickerC";
import cartApi from "../api/cartApi";
var radio_props = [
  { label: "Thanh toán tiền mặt", value: 0 },
  { label: "Thanh toán online", value: 1 },
];
const ConfirmOrderScreen = () => {
  //state of modal edit address
  const [statePayment, setStatePayment] = useState(0);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);
  const [showEditAddress, setShowEditAddress] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const voucher = useSelector((state) => state.cartReducer.voucher);
  const user = useSelector((state) => state.userReducer.user);
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);
  const listCartItem = useSelector((state) => state.cartReducer.listCartItem);
  const showCalendarF = () => {
    setShowCalendar(!showCalendar);
  };
  const showTimeF = () => {
    setShowTime(!showTime);
  };
  const costToPay = () => {
    let cost = totalPrice;
    cost += totalPrice * voucher.discount + 20000;
    return cost;
  };
  const order = () => {
    cartApi.order(user.id_user, {
      id_voucher: voucher.id_voucher === undefined ? -1 : voucher.id_voucher,
      id_type_payment: 0,
      date_shipping: date.day+"/"+date.month+"/"+date.year,
      time_shipping: time,
      fee_shipping: 20000,
      orderItems: listCartItem,
    }).then(()=>ToastAndroid.show("Đặt hàng thành công !", ToastAndroid.SHORT));
  };
  return (
    <View style={style.confirm_order_screen}>
      <View style={style.row}>
        <Text style={index.style.heading_1}>Thông tin khách hàng</Text>
        <Text style={index.style.color_text_2}>
          {user.last_name} {user.first_name}
        </Text>
      </View>
      <View style={style.row}>
        <Text style={index.style.heading_1}>Số điện thoại</Text>
        <Text style={index.style.color_text_2}>{user.phone_number}</Text>
      </View>
      <View style={style.row}>
        <Text style={index.style.heading_1}>Địa chỉ</Text>
        <View style={layout.style.flex_row}>
          <Text style={index.style.color_text_2}>{user.address}</Text>
          <TouchableOpacity
            onPress={() => setShowEditAddress(!showEditAddress)}
          >
            {/* <Image
              style={index.style.icon}
              source={require("../assets/img/pencil.png")}
            /> */}
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
        <InputComponent
          showSoftInputOnFocus={false}
          showCalendar={showCalendarF}
          value={date.dateString}
        />
        <InputComponent
          showSoftInputOnFocus={false}
          showCalendar={showTimeF}
          value={time}
        />
      </View>
      {showCalendar ? (
        <Calendar
          onDayPress={(day) => {
            setDate(day);
            setShowCalendar(!setShowCalendar);
          }}
          style={{ position: "absolute", zIndex: 100, width: available.width }}
          // Collection of dates that have to be marked. Default = {}
        />
      ) : null}
      {showTime ? (
        <TimePickerC
          value={(value) => {
            setTime(value);
            setShowTime(!showTime);
          }}
        />
      ) : null}
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
        <Text style={index.style.heading_1}>Tổng tiền: {totalPrice} VNĐ</Text>
        <Text style={index.style.heading_1}>
          Mã giám giá: {voucher.codeVoucher}
        </Text>
        <Text style={index.style.heading_1}>Tiền ship: 20000 VNĐ</Text>
        <Text style={index.style.heading_1}>
          Số tiền cần thanh toán: {costToPay()} VNĐ
        </Text>
      </View>
      <TouchableOpacity style={index.style.button_solid} onPress={order}>
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
    paddingHorizontal: 10,
    position: "relative",
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
