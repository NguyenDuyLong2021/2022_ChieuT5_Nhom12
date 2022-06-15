import React from "react";
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

const ProductDetails = ({ navigation }) => {
  // export default function productDetails() {
    const array = [
      {
        name_product: "Cam",
        price: "40000",
        priceOld: "45000",
        img: require("../assets/img_ProductDetails/orange.png")
      },
      {
        name_product: "Chanh",
        price: "35000",
        priceOld: "45000",
        img: require("../assets/img_ProductDetails/lemon.png")
      },
      {
        name_product: "Dâu tây",
        price: "100000",
        priceOld: "200000",
        img: require("../assets/img_ProductDetails/strawberry.png")
      },
      {
        name_product: "Ổi",
        price: "40000",
        priceOld: "67000",
        img: require("../assets/img_ProductDetails/guava.png")
      },
      {
        name_product: "Cà chua",
        price: "67000",
        priceOld: "80000",
        img: require("../assets/img_ProductDetails/tomato.png")
      },
      {
        name_product: "Ớt chuông",
        price: "90000",
        priceOld: "115000",
        img: require("../assets/img_ProductDetails/bellPepper.png")
      },
      {
        name_product: "Đào",
        price: "40000",
        priceOld: "45000",
        img: require("../assets/img_ProductDetails/dig.png")
      },
    ];
  return (
    <ScrollView>
      <View style={styles.container}>
            <View style={styles.header}>
            <Image style={styles.logo} source={require("../assets/img/logo.png")} />
            <View style={styles.left_header}>
                  <TouchableOpacity>
                  <Image
                   style={styles.icon_header}
                   source={require("../assets/img/bell.png")}
                   />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cart} onPress={() => navigation.navigate('CartScreen')}>
                  <Image
                  style={styles.icon_header}
                  source={require("../assets/img/cart.png")}
                  />
                  <Text style={styles.quantity_item_cart}>1</Text>
                  </TouchableOpacity>
            </View>
            </View>
      <SearchComponent />   
      
     <Image style={{height: 100, with : "100%"}}
     source={require("../assets/img_ProductDetails/img.png")}
     />

    <Text style={styles.american}>Đào đỏ Mỹ</Text>
    <Text style={styles.red}>
    Trang chủ / Sản phẩm nổi bật /{" "}
     <Text style={{ fontWeight: "bold" }}>Đào đỏ Mỹ</Text>
    </Text>

    <ScrollView  horizontal={true}>
    <Image
    source={require("../assets/img_ProductDetails/dig.png")}
    style={styles.img_dig}
    />
     <Image
    source={require("../assets/img_ProductDetails/Dig_1.png")}
    style={styles.img_dig}
    />
     <Image
    source={require("../assets/img_ProductDetails/Dig_2.png")}
    style={styles.img_dig}
    />
    </ScrollView>

    <Image
    source={require("../assets/img_ProductDetails/favourite.png")}
    style={styles.imgFavourite}
    onPress={() => Alert.alert("You have added the product to favorites")}
    />
    <View style={{ flex: 0.7, flexDirection: "row", marginTop: 250 }}>
     {/* Di chuyển sang trang giỏ hàng */}
     {/* <TouchableOpacity  onPress={() => navigation.navigate('CartScreen')}> */}
     <View style={{ borderColor: "black" }}>
     <Image  
          source={require("../assets/img_ProductDetails/dig.png")}
          style={styles.imgIcon_dig}
          /> 
     </View>
     {/* </TouchableOpacity> */}
     <Image 
        source={require("../assets/img_ProductDetails/Dig_1.png")}
         style={styles.imgIcon_dig1}
         />
     <Image 
         source={require("../assets/img_ProductDetails/Dig_2.png")}
          style={styles.imgIcon_dig1}
          />
     </View>


     <Text style={styles.name}>Đào đỏ Mỹ</Text>
     <Text style={styles.price}>
        40.000<Text style={{ textDecorationLine:"underline"}}>đ</Text> <Text style={styles.priceOld}>68.000<Text style={{ textDecorationLine:"underline"}}>đ</Text></Text>
     </Text>
     <Text style={styles.savings}>
     Tiết kiệm: <Text style={{ fontWeight: "bold" }}>28,000</Text> VNĐ so với giá thị trường
     </Text>
     <Text style={styles.peach}>
     Đào (danh pháp khoa học: Prunus persica) là một loài cây được trồng để lấy 
     quả hay hoa. Nó là một loài cây sớm rụng lá, thân gỗ nhỏ, có thể cao tới 5–10 m.
     </Text>
     <Text style={styles.weight}>Trọng lượng</Text>

     <View
      style={{ flex: 0.04, flexDirection: "row", marginLeft: 20,
        marginRight: 5,  marginTop: 10,
      }}
      >
      <View
      style={{ flex: 1, flexDirection: "row",
        marginLeft: 0, marginRight: 5, marginTop: 10,
      }}
      >
      <Button 
      fontWeight= "bold" 
      title="1Kg" onPress={() => Alert.alert("1Kg")} />
      </View>
      <View
       style={{ flex: 1,  flexDirection: "row", marginLeft: -420,
        marginRight: 5, marginTop: 10,
      }}
      >
      <Button 
      fontWeight= "bold" 
      title="2Kg" onPress={() => Alert.alert("2Kg")} />
      </View>
      <View
      style={{ flex: 1, flexDirection: "row", marginLeft: -420,
      marginRight: 5, marginTop: 10,
    }}
    >
       <Button 
       fontWeight= "bold" 
       title="3Kg" onPress={() => Alert.alert("3Kg")} />


       </View>

       </View>
       

       <Text style={styles.weight}>Số lượng: :</Text>
       <View
       style={{ flex: 0.03, flexDirection: "row",
        marginLeft: 20,  marginRight: 20,
         }}
      >
<View  style={{ height: 40,width:40, fontSize: 100, fontWeight:"bold"}}>
<Button 
title="-" onPress={() => Alert.alert("-")} />
</View>

        {/* <TextInput
          style={{ height: 35, width: 75, borderColor: "gray",
          borderWidth: 2, marginLeft: 0, marginRight: 20,
          fontWeight: "bold"
        }}
        value={1} 
        // keyboardType="numeric"
       /> */}
       <TextInput
       style={{ height: 35, width: 75, borderColor: "gray",
       borderWidth: 2, marginLeft: 0, marginRight: 20,
       fontWeight: "bold", textAlign :"center",
     }}
       value='1'>
       </TextInput>

 <View  style={{ height: 40,width:40, fontSize: 100,marginLeft: -20 , fontWeight:"bold", marginRight : 25}}>
<Button 
title="+" onPress={() => Alert.alert("+")} />
</View>

<View style={{ borderRadius: 100, fontSize : 20, fontWeight: "bold", height: 50}}>
 <Button 
      color={"orange"}
      title="Thêm vào giỏ hàng"
      fontWeight= "bold" 
      onPress={() => Alert.alert("Thêm vào giỏ hàng")}
/>
</View>
<View  style={{ borderRadius: 100, fontSize : 20, fontWeight: "bold", height: 50, marginLeft: 10,
         }}>
      <Button
        backgroundColor="green"
        color={"green"}
        borderRadius="50"
        title="Mua ngay" 
        fontSize= {17}
        fontWeight= "bold" 
        onPress={() => Alert.alert("Buy Now")}
      />
         </View>
     
     
     </View>
 

     <View
     style={{
     flex: 0.03, flexDirection: "row", marginTop: 20, borderRadius: 50,
      marginLeft: 20, marginRight: 20,
      }}
     >
      {/* <Button
      color={"orange"}
      title="Add to cart"
      width
       onPress={() => Alert.alert("Add to cart")}
/> */}
     </View>
     <View
      style={{ flex: 0.04, flexDirection: "row", marginLeft: 20,
      marginRight: 5, marginTop: -20,
      }}
      >
     <View
     style={{ flex: 1, flexDirection: "row", marginLeft: 0,
     marginRight: 5, marginTop: 10,
     }}
     >
     <Button
          color={"#db7093"}
            title="Thông tin sản phẩm"
             onPress={() => Alert.alert("Thông tin sản phẩm")}
        />
      </View>
      <View
      style={{ flex: 1, flexDirection: "row", marginLeft: -60,
      marginRight: 5, marginTop: 10,
       }}
      >
      <Button title="Chính sách đổi trả" onPress={() => Alert.alert("Chính sách đổi trả")
      
    } />
      </View>
      <View
          style={{ flex: 1, flexDirection: "row",
           marginLeft: -70,  marginRight: 5, marginTop: 10,
           }}
             >
        <Button
         title="Hướng dẫn bảo quản"
          onPress={() => Alert.alert("Hướng dẫn bảo quản")}
        />
        </View>
      </View>
      <Text style={styles.product_info}>
      <Text style={{fontWeight: "bold"}}>Đào </Text> (danh pháp khoa học: Prunus 
      persica) là một loài cây được trồng để lấy quả hay hoa. Nó là một loài cây
       sớm rụng lá, thân gỗ nhỏ, có thể cao tới  <Text style={{fontWeight: "bold"}}>5–10 m</Text>. 
       Lá của nó có hình mũi mác
      , dài  <Text style={{fontWeight: "bold"}}>7–15 cm</Text> và rộng <Text style={{fontWeight: "bold"}}> 2–3 cm</Text>. 
      Hoa nở vào đầu mùa xuân, trước khi ra lá; 
       hoa đơn hay có đôi, đường kính  <Text style={{fontWeight: "bold"}}>2,5–3 cm</Text>, màu hồng với 5 cánh hoa. Quả đào
        cùng với quả của anh đào, mận, mơ là các loại quả hạch.Quả của nó có một
         hạt giống to được bao bọc trong một lớp vỏ gỗ cứng (gọi là "hột"), 
         cùi thịt màu vàng hay ánh trắng, có mùi vị thơm ngon và lớp vỏ có lông 
         tơ mềm như nhung.
     </Text>
     {/* <Text style={styles.product_info}>
    <Text style={{fontWeight: "bold"}}>ND Fresh </Text>là hệ thống cửa hàng thực phẩm sạch uy tín nhất ở Việt Nam,
     chuyên cung cấp thực phẩm sạch tới từng bếp ăn của gia đình bạn.

     <Text style={{fontWeight: "bold"}}>Tầm nhìn:</Text> Được nuôi trồng, chế biến theo phương Bio (sinh học), Organic 
     (hữu cơ), Eco (sinh thái); cam kết không bán hàng giả, hàng nhái và hàng
     kém chất lượng. Sản phẩm được giao đến tay khách hàng luôn đúng cam kết,
     đúng chất lượng niệm yết, luôn được bảo quản trong môi trường lý tưởng, 
     đảm bảo vệ sinh an toàn thực phẩm.

     <Text style={{fontWeight: "bold"}}>Mục tiêu: </Text>Sản phẩm được giao đến tay khách hàng luôn đúng cam kết, đúng 
     chất lượng niệm yết, luôn được bảo quản trong môi trường lý tưởng, đảm bảo 
     vệ sinh an toàn thực phẩm.
     </Text>
     <Text style={styles.product_info}>
       Các giống đào trồng được chia thành hai loại là "hột rời" và "hột dính", 
       phụ thuộc vào việc hột có dính với cùi thịt hay không; cả hai loại này đều
        có cùi thịt trắng hay vàng. Quả đào với cùi thịt trắng thông thường có vị
         rất ngọt và ít vị chua, trong khi loại có cùi thịt màu vàng thông thường
          có vị chua kèm theo vị ngọt, mặc dù điều này cũng có sự dao động lớn. Cả
           hai màu thông thường đều có các vệt đỏ trong lớp thịt của chúng. Loại 
           đào cùi trắng, ít chua là phổ biến nhất 
     </Text> */}

<View style={styles.related_product}>
      <Text style={styles.related}>Sản phẩm liên quan</Text>

      <ScrollView  horizontal={true}>
      
        {array.map((product, id) => (
          // navigation ={naviagation}  
          //khi vao trong chúng ta chỉ cần props.navigatin là lấy được navigation 
          <Product1 navigation={navigation} key={id}
            name_product={product.name_product}
            price={product.price}
            priceOld ={product.priceOld}
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
    color: "#008080"
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
    color: "#008080"
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
    borderWidth: 1.5
  },
  imgIcon_dig1: {
    width: 100,
    height: 75,
    marginTop: 50,
    marginLeft: 25,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 0.5
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
    textDecorationLine:"line-through",
    textDecorationColor :"red",
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
  product_info:{
    fontSize: 15,
    marginLeft: 20,
    marginTop: 5, 
    borderColor: "#db7093"
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
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "red",
    width: "96%",
    marginLeft: "2%"
  },
  scroll_view: {
    width: "100%",
  },
  
});

export default ProductDetails;
