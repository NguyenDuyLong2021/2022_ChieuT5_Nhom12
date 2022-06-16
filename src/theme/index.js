import { StyleSheet } from "react-native";
import available from "./_availables";
const index = {
  style: StyleSheet.create({
    heading_1: {
      color: "#ff6347",
      fontWeight: "bold",
      fontSize: 16,
      marginLeft: 5, 
      marginBottom: 10,
    },
    heading_name: {
      color: available.blue,
      fontWeight: "bold",
      fontSize: 20,
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
    heading3: {
      color: available.white,
      fontWeight: "bold",
      fontSize: 16,
      marginRight: 5,
      textAlign: "center",
      backgroundColor: "orange",
      width: 200,
      borderRadius: 20,
      borderColor: "red",
      borderWidth: 2,
      textAlign: "center",
      marginLeft: "33%",


    },
    space_between: {
      marginTop: 15,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    flex_wrap: {
      height: 415,
      flex: 1,
      flexWrap: "wrap",
      flexDirection: "column",
      marginTop: 20,
    },
    background_color: {
      backgroundColor: available.white,
    },
    button_solid: {
      backgroundColor: available.blue,
      padding: 10,
      // width: available.width / 2,
      borderRadius: available.b_radius,
    },
    al_text_center: {
      textAlign: "center",
    },
    al_text_right: {
      textAlign: "right",
    },
    color_text_1: {
      color: available.white,
    },
    color_text_2: {
      color: available.blue,
    },
    icon: {
      width: 20,
      height: 20,
      marginLeft: 5,
      marginRight: 5,
    },
  }),
};

export default index;
