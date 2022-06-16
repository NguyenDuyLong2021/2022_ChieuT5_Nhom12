import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import layout from "../theme/layout";
import available from "../theme/_availables";
import SearchComponent from "./common_components/SearchComponent";
import ItemSlide from "./home_components/ItemSlide";
import ItemCategory from "./home_components/ItemCategory";
import index from "../theme/index";
import Product from "./common_components/Product";
const Home = ({ navigation }) => {
  const array = [
    { img: require("../assets/img/slide_demo_1.jpeg") },
    { img: require("../assets/img/side_demo_2.jpg") },
  ];
  const array2 = [
    {
      ic: "Hải sản",
      img: require("../assets/img/fish.png"),
    },
    {
      ic: "Thịt",
      img: require("../assets/img/meat.png"),
    },
    {
      ic: "Rau",
      img: require("../assets/img/spinach.png"),
    },
    {
      ic: "Đồ uống",
      img: require("../assets/img/liquor.png"),
    },
    {
      ic: "Gia vị",
      img: require("../assets/img/spice.png"),
    },
    {
      ic: "Gạo",
      img: require("../assets/img/rice.png"),
    },
  ];
  const array3 = [
    {
      name_product: "Cá chim",
      price: "40000",
      img: require("../assets/img/cachim.jpg"),
    },
    {
      name_product: "Cá chim",
      price: "40000",
      img: require("../assets/img/cachim.jpg"),
    },
    {
      name_product: "Cá chim",
      price: "40000",
      img: require("../assets/img/cachim.jpg"),
    },
    {
      name_product: "Cá chim",
      price: "40000",
      img: require("../assets/img/cachim.jpg"),
    },
    {
      name_product: "Cá chim",
      price: "40000",
      img: require("../assets/img/cachim.jpg"),
    },
    {
      name_product: "Cá chim",
      price: "40000",
      img: require("../assets/img/cachim.jpg"),
    },
    {
      name_product: "Cá chim",
      price: "40000",
      img: require("../assets/img/cachim.jpg"),
    },
  ];
  return (
    <ScrollView
      style={[layout.style.margin_status_bar, index.style.background_color]}
    >
      <View style={style.header}>
        <Image style={style.logo} source={require("../assets/img/logo.png")} />
        <View style={style.left_header}>
          <TouchableOpacity>
            <Image
              style={style.icon_header}
              source={require("../assets/img/bell.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={style.cart} onPress={() => navigation.navigate('CartScreen')}>
            <Image
              style={style.icon_header}
              source={require("../assets/img/cart.png")}
            />
            <Text style={style.quantity_item_cart}>1</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SearchComponent />
      <ScrollView
        horizontal
        style={style.scroll_view}
        showsHorizontalScrollIndicator={false}
      >
        {array.map((i,id) => (
          <ItemSlide id={id} img={i.img} />
        ))}
      </ScrollView>
      <View style={index.style.space_between}>
        <TouchableOpacity>
          <Text style={index.style.heading_1}>Danh mục</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={index.style.heading_2}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        style={style.scroll_view}
        showsHorizontalScrollIndicator={false}
      >
        {array2.map((i, id) => (
          <ItemCategory id={id} name_ic={i.ic} ic_source={i.img} />
        ))}
      </ScrollView>
      <View style={index.style.flex_wrap}>
        {array3.map((product, id) => (
          <Product key={id}
            name_product={product.name_product}
            price={product.price}
            thumbnail={product.img}
          />
        ))}
      </View>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
  },
  logo: {
    width: 70,
    height: 70,
    marginLeft: 5,
  },
  left_header: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon_header: {
    width: 35,
    height: 33,
    margin: 5,
  },
  cart: {
    position: "relative",
    flexDirection: "row-reverse",
  },
  quantity_item_cart: {
    width: 20,
    height: 20,
    position: "absolute",
    backgroundColor: available.orange,
    borderRadius: 100,
    textAlign: "center",
    color: available.white,
  },
  scroll_view: {
    width: "100%",
  },
});
export default Home;
