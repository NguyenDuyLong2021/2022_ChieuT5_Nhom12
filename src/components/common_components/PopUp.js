import { View, Text, Image } from "react-native";
import React from "react";
import available from "../../theme/_availables";
import index from "../../theme";

export default function PopUp() {
  return (
    <View
      style={{
        width: available.width,
        padding: 30,
        backgroundColor: available.white,
        position: "absolute",
        top: "50%",
        paddingHorizontal: 30,
        borderColor: available.blue,
        borderWidth: 1,
        borderRadius: available.b_radius,
      }}
    >
      <Image
      resizeMode="center"
        style={{ width: 181, height: 181 }}
        source={require("../../assets/img/checked.png")}
      />
      <Text style={[index.style.al_text_center, index.style.heading_1]}>
        Đặt hàng thành công
      </Text>
    </View>
  );
}
