import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import available from "./_availables";
const height_status_bar = StatusBar.currentHeight;
const layout = {
  style: StyleSheet.create({
    margin_status_bar: {
      marginTop: height_status_bar,
      paddingLeft: 10,
      paddingRight: 10,
    },
    flex_row: {
      flexDirection: "row",
    },
  }),
};
export default layout;
