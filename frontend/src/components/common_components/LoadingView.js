import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import available from "../../theme/_availables";

export default function LoadingView() {
  return (
    <View style={style.loadingView}>
      <ActivityIndicator
        style={style.loading}
        size="large"
        color={available.blue}
      />
    </View>
  );
}
const style = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    top: available.height/2,
    left: available.width/2,
  },
  loading: {
    //    marginTop: available.width
  },
});
