import * as React from "react";
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

const ProductDetails = () => {
  // export default function productDetails() {
    const array = [
      {
        name_product: "Orange",
        price: "40000",
        priceOld: "45000",
        img: require("../assets/img_ProductDetails/orange.png")
      },
      {
        name_product: "Lemon",
        price: "35000",
        priceOld: "45000",
        img: require("../assets/img_ProductDetails/lemon.png")
      },
      {
        name_product: "Strawberry",
        price: "100000",
        priceOld: "200000",
        img: require("../assets/img_ProductDetails/strawberry.png")
      },
      {
        name_product: "Guava",
        price: "40000",
        priceOld: "67000",
        img: require("../assets/img_ProductDetails/guava.png")
      },
      {
        name_product: "Tomato",
        price: "67000",
        priceOld: "80000",
        img: require("../assets/img_ProductDetails/tomato.png")
      },
      {
        name_product: "BellPepper",
        price: "90000",
        priceOld: "115000",
        img: require("../assets/img_ProductDetails/bellPepper.png")
      },
      {
        name_product: "Dig",
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

    <Text style={styles.american}>American Red Peach</Text>
    <Text style={styles.red}>
    Home / Product Details /{" "}
     <Text style={{ fontWeight: "bold" }}>American Red Peach</Text>
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


     <Text style={styles.name}>American Red Peach</Text>
     <Text style={styles.price}>
        40.000<Text style={{ textDecorationLine:"underline"}}>đ</Text> <Text style={styles.priceOld}>68.000<Text style={{ textDecorationLine:"underline"}}>đ</Text></Text>
     </Text>
     <Text style={styles.savings}>
     Savings: <Text style={{ fontWeight: "bold" }}>28,000</Text> VND compared
     to the market price
     </Text>
     <Text style={styles.peach}>
     Peach (scientific name: Prunus persica) is a tree grown for its fruit or
     flowers. It is a deciduous, small tree, growing to 5–10 m tall.
     </Text>
     <Text style={styles.weight}>Weight</Text>

     <View
      style={{
        flex: 0.04,
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 5,
        marginTop: 10,
      }}
      >
      <View
      style={{
        flex: 1,
        flexDirection: "row",
        marginLeft: 0,
        marginRight: 5,
        marginTop: 10,
      }}
      >
      <Button 
      fontWeight= "bold" 
      title="1Kg" onPress={() => Alert.alert("1Kg")} />
      </View>
      <View
       style={{
        flex: 1,
        flexDirection: "row",
        marginLeft: -420,
        marginRight: 5,
        marginTop: 10,
      }}
      >
      <Button 
      fontWeight= "bold" 
      title="2Kg" onPress={() => Alert.alert("2Kg")} />
      </View>
      <View
      style={{
      flex: 1,
      flexDirection: "row",
      marginLeft: -420,
      marginRight: 5,
      marginTop: 10,
    }}
    >
       <Button 
       fontWeight= "bold" 
       title="3Kg" onPress={() => Alert.alert("3Kg")} />
       </View>
       </View>

       <Text style={styles.weight}>Amount :</Text>
       <View
       style={{
        flex: 0.03,
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
         }}
      >
<View  style={{ height: 40,width:40, fontSize: 100, fontWeight:"bold"}}>
<Button 
title="-" onPress={() => Alert.alert("-")} />
</View>

        <TextInput
          style={{ height: 35, width: 75, borderColor: "gray",
          borderWidth: 2, marginLeft: 0, marginRight: 20,
          fontWeight: "bold"
        }}
        value={1} 
        // keyboardType="numeric"
       />
 <View  style={{ height: 40,width:40, fontSize: 100,marginLeft: -20 , fontWeight:"bold", marginRight : 25}}>
<Button 
title="+" onPress={() => Alert.alert("+")} />
</View>

<View style={{ borderRadius: 100, fontSize : 20, fontWeight: "bold", height: 50}}>
 <Button 
      color={"orange"}
      title="Add to cart"
      fontWeight= "bold" 
      onPress={() => Alert.alert("Add to cart")}
/>
</View>
<View  style={{ borderRadius: 100, fontSize : 20, fontWeight: "bold", height: 50, marginLeft: 10,
         }}>
      <Button
        backgroundColor="green"
        color={"green"}
        borderRadius="50"
        title="Buy Now" 
        fontSize= {17}
        fontWeight= "bold" 
        onPress={() => Alert.alert("Buy Now")}
      />
         </View>
     
     
     </View>
 

     <View
     style={{
     flex: 0.03,
      flexDirection: "row",
      marginTop: 20,
      borderRadius: 50,
      marginLeft: 20,
      marginRight: 20,
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
            title="Product Information"
             onPress={() => Alert.alert("Product Information")}
        />
      </View>
      <View
      style={{ flex: 1, flexDirection: "row", marginLeft: -60,
      marginRight: 5, marginTop: 10,
       }}
      >
      <Button title="Return Policy" onPress={() => Alert.alert("Return Policy")
      
    } />
      </View>
      <View
          style={{ flex: 1, flexDirection: "row",
           marginLeft: -115,  marginRight: 5, marginTop: 10,
           }}
             >
        <Button
         title="Storage Instructions"
          onPress={() => Alert.alert("Storage Instructions")}
        />
        </View>
      </View>
      <Text style={styles.product_info}>
      <Text style={{fontWeight: "bold"}}>Peach</Text> (scientific name: Prunus persica) is a tree grown for its fruit or
         flowers. It is a deciduous, small tree, growing to 5–10 m tall. Its
         leaves are lanceolate, <Text style={{fontWeight: "bold"}}>7–15</Text> cm long and 
         <Text style={{fontWeight: "bold"}}> 2–3</Text> cm wide. Flowers bloom in
         early spring, before leafing; flowers single or paired, <Text style={{fontWeight: "bold"}}>2.5–3</Text> cm in
         diameter, pink with 5 petals. Peach fruit, along with cherries, plums,
         and apricots are nuts. Its fruit has a large seed enclosed in a hard
         wood shell (called the "seed"), with a yellow or white flesh. , has a
         delicious flavor and a velvety, fluffy skin.
     </Text>
     {/* <Text style={styles.product_info}>
     <Text style={{fontWeight: "bold"}}>ND Fresh</Text> is the most prestigious clean food store system in Vietnam, 
     specializing in providing clean food to each kitchen of your family.

     <Text style={{fontWeight: "bold"}}>{"\n"}Vision:</Text> Grown, processed according to Bio (bio), Organic (organic), 
     Eco (ecological); pledge not to sell fake, imitation and poor quality 
     goods. Products delivered to customers are always on schedule, with the 
     right quality, always preserved in an ideal environment, ensuring food 
    hygiene and safety.

    <Text style={{fontWeight: "bold"}}>{"\n"}Objectives:</Text> Products are delivered to customers in accordance with their 
    commitments, with the right quality, and are always preserved in an ideal 
    environment, ensuring food hygiene and safety.
     </Text>
     <Text style={styles.product_info}>
         Peach (scientific name: Prunus persica) is a tree grown for its fruit or
         flowers. It is a deciduous, small tree, growing to 5–10 m tall. Its
         leaves are lanceolate, 7–15 cm long and 2–3 cm wide. Flowers bloom in
         early spring, before leafing; flowers single or paired, 2.5–3 cm in
         diameter, pink with 5 petals. Peach fruit, along with cherries, plums,
         and apricots are nuts. Its fruit has a large seed enclosed in a hard
         wood shell (called the "seed"), with a yellow or white flesh. , has a
         delicious flavor and a velvety, fluffy skin.
     </Text> */}

<View style={styles.related_product}>
      <Text style={styles.related}>Related Products</Text>
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



 
<ScrollView styles={{ flex: 1, flexDirection: "row", marginTop: 250}} horizontal={true}>
      <ScrollView styles={styles.natural} horizontal={true}>
      <View styles={{flex: 1, flexDirection: "row", borderWidth: 2, borderColor: "black"}}> 
             <Image 
              styles={{marginLeft : 50}}
                source={require("../assets/img_ProductDetails/img_1.png")}
               style={styles.imgIcon_natural}
             />
             <Text style={{textAlign: "center", fontSize: 10,}}>100% natural</Text>
    
               <Image

                 source={require("../assets/img_ProductDetails/img_2.png")}
                 style={styles.imgIcon_natural}
               />
              <Text style={{textAlign: "center" , fontSize: 10,}}>Safety certification</Text>
      </View>
          <Image
                source={require("../assets/img_ProductDetails/img_3.png")}
                style={styles.imgIcon_natural}
           />
              <Text style={{textAlign: "center" , fontSize: 10,}}>Always fresh</Text>
         
         <Image
               source={require("../assets/img_ProductDetails/img_4.png")}
               style={styles.imgIcon_natural}
        />
         <Text style={{textAlign: "center" , fontSize: 10,}}>Safe for health</Text>
 
         </ScrollView> 
         </ScrollView> 

      </View>

      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>màn hình chi tiết san phẩm</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>màn hình chi tiết san phẩm</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
      <Text ref={null}>1</Text>
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
    backgroundColor: "while",
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
    color: "#c0c0c0",
    TextDecoder: "bold",
    textDecorationLine:"line-through"

    
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
    marginTop: 15,
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
  natural: {
    flex: 0.7,
    width: 100,
    height: 5,
    backgroundColor: "green",
    marginLeft: 50,
    marginTop: 100,
    textAlign: "center",
    
  },
  imgIcon_natural: {
    width: 45,
    height: 40,
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 5,
    borderColor: "green", 
    textAlign: "center",
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
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: 'Avenir Next Condensed', 
    fontWeight: "bold",
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
