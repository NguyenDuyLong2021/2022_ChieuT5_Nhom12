import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import layout from "../theme/layout";
import available from "../theme/_availables";
import SearchComponent from "./common_components/SearchComponent";
import ItemSlide from "./home_components/ItemSlide";
import ItemCategory from "./home_components/ItemCategory";
import index from "../theme/index";
import Product from "./common_components/Product";
import Product1 from "./common_components/Product1";
import productsAPI from "../api/productsAPI";

const HomeScreen = ({ navigation }) => {
  // 2
  const [l, sl] = useState(null);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    productsAPI.getProducts().then((q) => {
      sl(q.data);
      setLoading(false)
    });
  }, []);
  
  
  const array = [
    { img: require("../assets/img/img.png") },
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
  const array4 = [
    { img: require("../assets/img/SummerFruit.png") },
    { img: require("../assets/img/DriedDrinkFruits.png") },
  ];
  const array5 = [
    {
      name_product: "Đào",
      price: "40000",
      priceOld: "45000",
      img: require("../assets/img_ProductDetails/dig.png"),
    },

    {
      name_product: "Chanh",
      price: "35000",
      priceOld: "45000",
      img: require("../assets/img_ProductDetails/lemon.png"),
    },
    {
      name_product: "Dâu tây",
      price: "100000",
      priceOld: "200000",
      img: require("../assets/img_ProductDetails/strawberry.png"),
    },
    {
      name_product: "Ổi",
      price: "40000",
      priceOld: "67000",
      img: require("../assets/img_ProductDetails/guava.png"),
    },
    {
      name_product: "Cà chua",
      price: "67000",
      priceOld: "80000",
      img: require("../assets/img_ProductDetails/tomato.png"),
    },
    {
      name_product: "Ớt chuông",
      price: "90000",
      priceOld: "115000",
      img: require("../assets/img_ProductDetails/bellPepper.png"),
    },
    {
      name_product: "Táo",
      price: "75000",
      img: require("../assets/img/GraeconNominati.png"),
    },
  ];
  //get product
  const getProducts = () => {
    if (loading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView
          style={[layout.style.margin_status_bar, index.style.background_color]}
        >
          <View style={style.header}>
            <Image
              style={style.logo}
              source={require("../assets/img/logo.png")}
            />
            <View style={style.left_header}>
              <TouchableOpacity>
                <Image
                  style={style.icon_header}
                  source={require("../assets/img/bell.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity style={style.cart} onPress={clickCart}>
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
            {array.map((i, id) => (
              <ItemSlide myKey={id} img={i.img} />
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
          <Text style={style.relatedNew}>Sản phẩm mới</Text>
          <ScrollView horizontal={true}>
        
            <View style={index.style.flex_wrap}>
              
              {l.datas.map((product, id) => (
                // navigation ={naviagation}
                //khi vao trong chúng ta chỉ cần props.navigatin là lấy được navigation
                // 3
                <Product
                  navigation={navigation}
                  mykey={product.id_product}s
                  name_product={product.name_product}
                  price={product.price} 
                  thumbnail={
                    "http://192.168.1.7:8080/foodfresh" + product.thumnail
                  }
                />
                
              ))}
            </View>
          </ScrollView>

          <ScrollView
            horizontal
            style={style.scroll_view_fruit}
            showsHorizontalScrollIndicator={false}
          >
            {array4.map((i, id) => (
              <ItemSlide id={id} img={i.img} />
            ))}
          </ScrollView>

          <ScrollView horizontal={false}>
            <View>
              <Text style={style.name_category}>Trái cây mùa hè</Text>
              <Text style={style.price}>
                100% nước ép trái cây tự nhiên nguyên chất
              </Text>
              <TouchableOpacity style={style.button}>
                <Text style={index.style.heading3}>Mua sắm ngay bây giờ</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View style={style.related_product}>
            <Text style={style.related}>Sản phẩm phổ biến</Text>
            <ScrollView horizontal={true}>
              {array5.map((product, id) => (
                // navigation ={naviagation}
                //khi vao trong chúng ta chỉ cần props.navigatin là lấy được navigation
                <Product1
                  navigation={navigation}
                  key={id}
                  name_product={product.name_product}
                  price={product.price}
                  priceOld={product.priceOld}
                  thumbnail={product.img}
                />
              ))}
            </ScrollView>
          </View>

          <Text ref={null}></Text>
          <Text ref={null}></Text>
        </ScrollView>
      );
    }
  };
  //click cart
  const clickCart = () => navigation.navigate("CartScreen");
  return getProducts();
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
  scroll_view_fruit: {
    width: "100%",
    height: 200,
  },
  name_category: {
    textAlign: "center",
    color: "black",
    fontWeight: available.fw_1,
    fontSize: 25,
    backgroundColor: "while",
  },
  price: {
    textAlign: "center",
    color: "#a9a9a9",
    fontWeight: available.fw_1,
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    width: null,
    height: 38,
    justifyContent: "center",
  },
  relatedNew: {
    fontSize: 28,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "#008080",
    marginTop: 15,
  },
  related: {
    fontSize: 28,
    justifyContent: "center",
    textAlign: "center",

    fontWeight: "bold",
    color: "#008080",
  },
  related_product: {
    marginTop: 20,
    height: 270,
    borderTopWidth: 0.5,
    borderRadius: 10,
    borderColor: "red",
    width: "96%",
    marginLeft: "2%",
  },
});
export default HomeScreen;
