import { StyleSheet } from "react-native";
import available from "./_availables";
const index = {
  style: StyleSheet.create({
    heading_1: {
      color: available.blue,
      fontWeight: "bold",
      fontSize: 16,
      marginLeft: 5,
    },
    heading_2: {
      color: available.orange,
      fontWeight: "bold",
      fontSize: 16,
      marginRight: 5,
    },
    heading_3: {
      color: available.white,
      fontWeight: "bold",
      fontSize: 16,
      marginRight: 5,
      textAlign: "center",
    },
    space_between: {
      marginTop: 15,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    flex_wrap: {
      flex: 1,
      flexWrap: "wrap",
      flexDirection: "row",
    },
  }),
};

export default index;
