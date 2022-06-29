import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollViewBase,
  ScrollView,
  TouchableOpacity,
} from "react-native";
 
import Constants from "expo-constants";
import { Image, TextInput } from "react-native";
import { Button, SafeAreaView, Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import available from "../theme/_availables";
import SearchComponent from "./common_components/SearchComponent";
import Product1 from "./common_components/Product1";
import { useDispatch, useSelector } from "react-redux";
import * as productAction from "../action/productAction";
import cartApi from "../api/cartApi";
// import Product from "./common_components/Product";

const ProductDetails = ({ navigation },{ props }) => {

  // const [l, sl] = useState(null);
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   productsAPI.getProducts().then((q) => {
  //     sl(q.data);
  //     setLoading(false)
  //   });
  // }, []);
   

  const dispacth = useDispatch();

  const [quantity, setQuantity] = useState(1); 

  //change number product cart item 
  const quantityst = quantity +"";
  const changeNumberProduct = (quantity) => {
    setQuantity(quantity);
  };

  const product = useSelector((state) => state.productReducer.product); 
  // console.log("chi tiết sản phẩm - ProductDetails", product);

  const addToCart= ()=>{    
    // navigation.navigate("CartScreen");  
    cartApi.addToCart(1, {id_product: product.id_product,quantity}) 
  }   

   
  // export default function productDetails() {
  const array = [
    {
      name_product: "Cam",
      price: "40000",
      priceOld: "45000",
      img: require("../assets/img_ProductDetails/orange.png"),
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
      name_product: "Đào",
      price: "40000",
      priceOld: "45000",
      img: require("../assets/img_ProductDetails/dig.png"),
    },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("../assets/img/logo.png")}
          />
          <View style={styles.left_header}>
            <TouchableOpacity>
              <Image
                style={styles.icon_header}
                source={require("../assets/img/bell.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cart}
              onPress={() => navigation.navigate("CartScreen")}
            >
              <Image
                style={styles.icon_header}
                source={require("../assets/img/cart.png")}
              />
              <Text style={styles.quantity_item_cart}>1</Text>
            </TouchableOpacity>
          </View>
        </View>
        <SearchComponent />

        <Image
          style={{ height: 100, with: "100%" }}
          source={require("../assets/img_ProductDetails/img.png")}
        />

        {/* <Text style={styles.american}>Đào đỏ Mỹ</Text> */}
        <Text style={styles.american}>{product.name_product}</Text>
        <Text style={styles.red}>
          Trang chủ / Sản phẩm nổi bật /{" "}
          {/* <Text style={{ fontWeight: "bold" }}>Đào đỏ Mỹ</Text> */}
          <Text style={{ fontWeight: "bold" }}>{product.name_product}</Text>
        </Text>

        <ScrollView horizontal={true}>
          {product !== null
            ?product.listImages.map((image) => (
                <Image
                  source={{ uri: "http://192.168.1.9:8080/foodfresh" + image.image }}
                  // source={require(product)}
                  style={styles.img_dig}
                />
              ))
            : null}
        </ScrollView>

        <Image
          source={require("../assets/img_ProductDetails/favourite.png")}
          style={styles.imgFavourite}
          onPress={() => Alert.alert("You have added the product to favorites")}
        />
        <View style={{ flex: 0.7, flexDirection: "row", marginTop: 250 }}>
          {/* Di chuyển sang trang giỏ hàng */}
          {/* <TouchableOpacity  onPress={() => navigation.navigate('CartScreen')}> */}

          <ScrollView horizontal={true}>
          {/* <View style={{ borderColor: "black" }}> */}
          {product !== null
            ?product.listImages.map((image) => (
                <Image
                  source={{ uri: "http://192.168.1.9:8080/foodfresh" + image.image }}
                  // source={require(product)}
                  style={styles.imgIcon_dig}
                />
              ))
            : null} 
          </ScrollView>

          {/* </TouchableOpacity> */}
          {/* <Image
            source={require("../assets/img_ProductDetails/Dig_1.png")}
            style={styles.imgIcon_dig1}
          />
          <Image
            source={require("../assets/img_ProductDetails/Dig_2.png")}
            style={styles.imgIcon_dig1}
          /> */}
        </View>

        {/* <Text style={styles.name}>Đào đỏ Mỹ</Text> */}
        <Text style={styles.name}>{product.name_product}</Text>

        <Text style={styles.price}>
          {/* 40.000<Text style={{ textDecorationLine:"underline"}}>đ</Text> <Text style={styles.priceOld}>68.000<Text style={{ textDecorationLine:"underline"}}>đ</Text></Text> */}
          {product.price}
          <Text style={{ textDecorationLine: "underline" }}>đ</Text>{" "}
          <Text style={styles.priceOld}>
            {" "}
            {product.price * 0.15}
            <Text style={{ textDecorationLine: "underline" }}>đ</Text>
          </Text>
        </Text>
        <Text style={styles.savings}>
          Tiết kiệm: <Text style={{ fontWeight: "bold" }}>{ (product.price )- (product.price * 0.15)}</Text> VNĐ  
        </Text>
        <Text style={styles.peach}>
          {/* {/* Đào (danh pháp khoa học: Prunus persica) là một loài cây được trồng để
          lấy quả hay hoa. Nó là một loài cây sớm rụng lá, thân gỗ nhỏ, có thể
          cao tới 5–10 m. */}
           
          {product.decripstion} 

        </Text>
        <Text style={styles.weight}>Trọng lượng</Text>

        <ScrollView style={{ flex: 1, marginLeft: 20 }} horizontal={true}>
          <View style={styles.buttonWeight}>
            <Button
              fontWeight="bold"
              title="1Kg"
              onPress={() => Alert.alert("1Kg")}
            />
          </View>

          <View style={styles.buttonWeight}>
            <Button
              fontWeight="bold"
              title="2Kg"
              onPress={() => Alert.alert("2Kg")}
            />
          </View>

          <View style={styles.buttonWeight}>
            <Button
              fontWeight="bold"
              title="3Kg"
              onPress={() => Alert.alert("3Kg")}
            />
          </View>
        </ScrollView>

        <Text style={styles.weight}>Số lượng: :</Text>
        <View
          style={{
            flex: 0.03, flexDirection: "row",  marginLeft: 20,  marginRight: 20,
          }}
        >

          <View
            style={{ height: 40, width: 40, fontSize: 100, fontWeight: "bold" }}
          >
            <Button title="-" 
            // onPress={() => Alert.alert("-")}
            onPress={() => setQuantity(quantity - 1)}
             />
          </View>
 
          <TextInput
            style={{ height: 35, width: 75, borderColor: "gray", borderWidth: 2,  marginLeft: 0,
              marginRight: 20, fontWeight: "bold", textAlign: "center", 
            }} 
            value={quantityst}   
            // returnKeyLabel = {"next"}
            onChangeText={(text) => setQuantity(parseInt(text))}

          ></TextInput>

          <View
            style={{ height: 40, width: 40,  fontSize: 100, marginLeft: -20, fontWeight: "bold",  marginRight: 25,
            }}
          >
            <Button title="+" 
            // onPress={() => Alert.alert("+")} 
            onPress={()=>changeNumberProduct(quantity + 1)}
            />
          </View>
 
          <View
            style={{ borderRadius: 100, fontSize: 20, fontWeight: "bold", height: 50,
            }}
          >
             <TouchableOpacity
              style={styles.cart} 
              // onPress={() => navigation.navigate("CartScreen")}
              onPress={addToCart}
            > 
            <Button 
              color={"orange"} title="Thêm vào giỏ hàng" fontWeight="bold" 
                // onPress={() => navigation.navigate("CartScreen" ) } 
                onPress={addToCart}
            />
            </TouchableOpacity>
          </View>

          <View
            style={{  borderRadius: 100,  fontSize: 20, fontWeight: "bold",  height: 50,  marginLeft: 10,
            }}
          >
            <Button
              backgroundColor="green" color={"green"} borderRadius="50" title="Mua ngay" fontSize={17} fontWeight="bold"
              // onPress={() => Alert.alert("Buy Now")}
              // onPress={() => Alert.alert(this.state.username)}
            />
          </View>
        </View>

        <ScrollView style={{ flex: 1, marginLeft: 20 }} horizontal={true}>
          <View style={styles.buttonWeight}>
            <Button
              fontWeight="bold" color={"green"} title="Thông tin sản phẩm"
              onPress={() => Alert.alert("Thông tin sản phẩm")}
            />
          </View>

          <View style={styles.buttonWeight}>
            <Button
              fontWeight="bold" style={styles.buttonInfo} title="Chính sách đổi trả"
              onPress={() => Alert.alert("Sản phẩm được giao đến tay khách hàng luôn đúng cam kết,"+
              "đúng chất lượng niệm yết, luôn được bảo quản trong môi trường lý tưởng,"+
              "đảm bảo vệ sinh an toàn thực phẩm.")}
            />
          </View>

          <View style={styles.buttonWeight}>
            <Button
              fontWeight="bold"  title="Hướng dẫn bảo quản"
              onPress={() => Alert.alert("Sản phẩm được giao đến tay khách hàng luôn đúng cam kết, đúng "+
              "chất lượng niệm yết, luôn được bảo quản trong môi trường lý tưởng, đảm bảo "+
              "vệ sinh an toàn thực phẩm.")}
            />
          </View>
        </ScrollView>

        <Text style={styles.product_info}>
          {/* <Text style={{ fontWeight: "bold" }}>Đào </Text>  */}
          <Text style={{ fontWeight: "bold" }}>Tên sản phẩm : </Text> {product.name_product} {"\n"}
          <Text style={{ fontWeight: "bold" }}>Loại : </Text> {product.name_unit} {"\n"}
          <Text style={{ fontWeight: "bold" }}>Giá sản phẩm : </Text> {product.price} {"\n"}  
          <Text style={{ fontWeight: "bold" }}>Mô tả : </Text> {product.decripstion} {"\n"}
  
        </Text> 
     

        <View style={styles.related_product}>
          <Text style={styles.related}>Sản phẩm liên quan</Text>

          <ScrollView horizontal={true}>
            {array.map((product, id) => (
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
        {/* <View style={styles.related_product}>
      <Text style={styles.related}>Viewed Products</Text>
      <ScrollView  horizontal={true}>
        {array.map((product, id) => (
          // navigation ={naviagation}  
          //khi vao trong chúng ta chỉ cần props.navigatin là lấy được navigation 
          <Product1 key={id}
            name_product={product.name_product}
            price={product.price}
            priceOld ={product.priceOld}
            thumbnail={product.img}
          />
        ))}
      </ScrollView>
</View>   */}

        <Text ref={null}></Text>
        <Text ref={null}></Text>
      </View>
    </ScrollView>
  );


};

 

const styles = StyleSheet.create({
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
  icon_tab: {
    width: 35,
    height: 35,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
  american: {
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
    marginTop: -80,
    fontWeight: "bold",
    color: "#008080",
  },
  imgFavourite: {
    width: 30,
    height: 30,
    marginTop: -320,
    marginLeft: 550,
    borderRadius: 10,
    borderColor: "black",
  },
  red: {
    fontSize: 15,
    justifyContent: "center",
    textAlign: "center",
    marginTop: 5,
    color: "#008080",
  },
  img_dig: {
    justifyContent: "center",
    width: 450,
    height: 320,
    marginTop: 55,
    marginLeft: 75,
  },
  imgIcon_dig: {
    width: 100,
    height: 75,
    marginTop: 50,
    marginLeft: 25,
    borderRadius: 5,
    borderColor: "green",
    borderWidth: 1.5,
  },
  imgIcon_dig1: {
    width: 100,
    height: 75,
    marginTop: 50,
    marginLeft: 25,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 0.5,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#ff6347",
  },
  priceOld: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#a9a9a9",
    TextDecoder: "bold",
    textDecorationLine: "line-through",
    textDecorationColor: "red",
  },
  savings: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 5,
  },
  peach: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 5,
  },
  weight: {
    marginLeft: 20,
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 25,
    marginTop: 20,
    marginBottom: 0,
  },
  buttonWeight: {
    width: 50,
    height: 50,
    backgroundColor: "#87ceeb",
    marginLeft: 20,
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 20,
  },

  buy: {
    flex: 1,
    width: 25,
    height: 25,
    backgroundColor: "green",
    marginLeft: 50,
  },
  product_info: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 5,
    borderColor: "#db7093",
  },
  related: {
    fontSize: 25,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "#008080",
  },
  related_product: {
    // backgroundColor: "orange",
    marginTop: 20,
    height: 270,
    borderTopWidth: 0.5,
    borderRadius: 10,
    // borderColor: "red",
    width: "95%",
    marginLeft: "3%",
  },
  scroll_view: {
    width: "100%",
  },
  buttonInfo: {
    color: "while",
  },
  buttonWeight: {
    flex: 2,
    flexDirection: "row",
    marginRight: 10,
  },
  border: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: available.blue,
    justifyContent: "center",
  },
  quantity_area: {
    flexDirection: "row",
    paddingHorizontal: 10,
    color: available.blue,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  icon: {
    width: null,
    height: 19,
  },
});

export default ProductDetails;
