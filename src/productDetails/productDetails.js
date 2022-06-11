import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Image ,TextInput} from 'react-native'
import { Button,SafeAreaView, Alert } from 'react-native'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
}

export default function App() {
  return (
    <View style={styles.container}>
    <Image source={require('./img_ProductDetails/img.png')} 
            style={{ width: 390, height: 90 }}/>
    <Text style={styles.american}>American red peach</Text>
    <Text style={styles.red}>Home / Product Details /  <Text style={{fontWeight: "bold"}}> American Red Peach</Text></Text>
    <Image source={require('./img_ProductDetails/dig.png')} 
            style={styles.img_dig}/>
            
    <Image source={require('./img_ProductDetails/favourite.png')} 
            style={styles.imgFavourite}
            onPress={() => Alert.alert('You have added the product to favorites')}
            />

      <View style={{flex: 0.7, flexDirection: 'row', marginTop : 250}}> 
        <Image source={require('./img_ProductDetails/dig.png')} 
            style={styles.imgIcon_dig}/> 
        <Image source={require('./img_ProductDetails/Dig_1.png')} 
            style={styles.imgIcon_dig}/>
        <Image source={require('./img_ProductDetails/Dig_2.png')} 
            style={styles.imgIcon_dig}/>
      </View>
    <Text style={styles.name} >American red peach</Text>
    <Text style={styles.price} >40.000đ  <Text style={styles.priceOld} >68.000đ</Text></Text>
    <Text style={styles.savings} >Savings: <Text style={{fontWeight : "bold"}} >28,000</Text> VND compared to the market price</Text>
    <Text style={styles.peach} >Peach (scientific name: Prunus persica) is a tree grown for its fruit or flowers. It is a deciduous, small tree, growing to 5–10 m tall.</Text>
    <Text style={styles.weight} >Weight</Text>
       
     <View style={{flex: 0.7, flexDirection: 'row'}}> 
        <Button 
            style = {styles.buttonWeight} 
            title="1Kg"  
            onPress ={() => Alert.alert('Simple Button pressed')}
        />
        <Button
            title="2Kg"
            onPress={() => Alert.alert('Simple Button pressed')}
        />
         <Button
            title="3Kg"
            onPress={() => Alert.alert('Simple Button pressed')}
        />
    </View>

    <Text style={styles.weight} >Amount :</Text>
 
      <TextInput 
        style={{weight: 50 , height: 40, borderColor: 'gray', borderWidth: 2}}
        onChangeText={(text) => this.setState({text})}
        value={1} 
        keyboardType="numeric"
      />

  </View>

 )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  american: { 
    justifyContent: 'center', 
    textAlign : "center",
    marginTop : -70,
    fontWeight: "bold"
  },
  imgFavourite: { 
    width: 30, 
    height: 30, 
    marginTop : -270 , 
    marginLeft : 10,
    borderRadius : 55,
    borderColor : "black"
  },
  red: { 
    justifyContent: 'center', 
    textAlign : "center",
    marginTop : 5
  },
  img_dig: { 
    width: 390, 
    height: 280,
    marginTop : 55
  },
  imgIcon_dig: { 
    width: 80, 
    height: 75,
    marginTop : 10,
    marginLeft : 10 ,
    borderRadius : 5,
    borderColor : "black" 
  },
   name: { 
    fontSize : 20,
    fontWeight: "bold", 
    marginLeft : 10 , 
  },
   price: { 
    fontSize : 25,
    fontWeight: "bold", 
    marginLeft : 10 , 
    color : "#ff6347"
  },
  priceOld: { 
    fontSize : 15,
    fontWeight: "bold", 
    marginLeft : 10 , 
    color : "#c0c0c0",
    TextDecoder : 'bold'
  },
   savings: { 
    fontSize : 15, 
    marginLeft : 10 ,  
    marginTop : 5 
  },
  peach: {  
    marginLeft : 10 ,  
    marginTop : 5 
  },
   weight: {  
    marginLeft : 10 ,  
    fontWeight: "bold",
    marginTop : 5,
    fontSize : 20
  },
   buttonWeight: {  
    width: 50, 
    height: 50,
    backgroundColor : "#87ceeb",
    marginLeft : 10 ,  
    fontWeight: "bold",
    marginTop : 5,
    fontSize : 20
  },
});
