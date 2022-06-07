import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import available from "./_availables";
const height_status_bar = StatusBar.currentHeight;
const layout_non_header = {
  layout_non_header: StyleSheet.create({
    margin_status_bar: {
      marginTop: height_status_bar,
      paddingLeft: 10,
      paddingRight: 10,
    },
  }),
};
export default layout_non_header;
