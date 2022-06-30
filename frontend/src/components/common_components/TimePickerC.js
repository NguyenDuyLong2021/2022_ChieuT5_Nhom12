import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import available from "../../theme/_availables";
import index from "../../theme";

export default function TimePickerC(props) {
  const choseTime = (time) => {
    props.value(time)
  };
  return (
    <ScrollView
      style={{
        width: available.width - 100,
        height: 200,
        backgroundColor: available.blue,
        position: "absolute",
        top: "50%",
        left: "12.5%",
        borderColor: available.blue,
        borderWidth: 1,
        borderRadius: available.b_radius,
        zIndex: 100,
      }}
    >
      <Text
        onPress={() => choseTime("8:30")}
        style={{ color: available.white, padding: 10, textAlign: "center" }}
      >
        8h30
      </Text>
      <Text
        onPress={() => choseTime("9:0")}
        style={{ color: available.white, padding: 10, textAlign: "center" }}
      >
        9h0
      </Text>
      <Text
        onPress={() => choseTime("9:30")}
        style={{ color: available.white, padding: 10, textAlign: "center" }}
      >
        9h30
      </Text>
      <Text
        onPress={() => choseTime("10:30")}
        style={{ color: available.white, padding: 10, textAlign: "center" }}
      >
        10h30
      </Text>
      <Text
        onPress={() => choseTime("11:30")}
        style={{ color: available.white, padding: 10, textAlign: "center" }}
      >
        11h30
      </Text>
      <Text
        onPress={() => choseTime("12:30")}
        style={{ color: available.white, padding: 10, textAlign: "center" }}
      >
        12h30
      </Text>
      <Text
        onPress={() => choseTime("13:30")}
        style={{ color: available.white, padding: 10, textAlign: "center" }}
      >
        13h30
      </Text>
      <Text
        onPress={() => choseTime("14:30")}
        style={{ color: available.white, padding: 10, textAlign: "center" }}
      >
        14h30
      </Text>
      <Text
        onPress={() => choseTime("14:30")}
        style={{ color: available.white, padding: 10, textAlign: "center" }}
      >
        14h30
      </Text>
      <Text
        onPress={() => choseTime("15:30")}
        style={{ color: available.white, padding: 10, textAlign: "center" }}
      >
        15h30
      </Text>
      <Text
        onPress={() => choseTime("16:30")}
        style={{ color: available.white, padding: 10, textAlign: "center" }}
      >
        16h30
      </Text>
      <Text
        onPress={() => choseTime("17:30")}
        style={{ color: available.white, padding: 10, textAlign: "center" }}
      >
        17h30
      </Text>
    </ScrollView>
  );
}
