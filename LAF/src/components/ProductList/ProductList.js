// ProductList.js
import React from 'react';
import { View, Text, TouchableOpacity ,StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// Import Images section 
import BlackFlask from '../../../assets/images/blackflask.png';
import Wallet from '../../../assets/images/wallet.png';
import Airpods from '../../../assets/images/airpods.png';
import iPhone from '../../../assets/images/iphone.png';
import Mac from '../../../assets/images/goldmac.png';
const ProductList = () => {
  // Dummy product data
  const products = [
    {
      name: 'Product 1',
      status: 'Pending',
      image: BlackFlask, // Replace with actual image paths
    },
    {
      name: 'Product 2',
      status: 'Lost',
      image: Wallet,
    },
    {
      name: 'Product 3',
      status: 'Lost',
      image: Airpods,
    },
    {
      name: 'Product 4',
      status: 'Lost',
      image: iPhone,
    },
    {
      name: 'Product 5',
      status: 'Claimed',
      image: Mac,
    },
  ];
  //Use Navigation
  const navigation = useNavigation();

  const ProductDetail = () => {
    // Navigate to the product detail screen (you'll need to define it in App.js)
    navigation.navigate('ProductDetail', { product: item }); // You can pass data to the next screen
  };

  const renderProduct = ({ item }) => (
   
    <View style={styles.productBox}>
        <TouchableOpacity onPress={ProductDetail}> 
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.status}</Text>
      </TouchableOpacity>
    </View>
   
  );

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%', // Make the container 100% wide
    justifyContent: 'space-between', // Add space between product boxes
    
   
  },
  productBox: {
  
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    margin: 8,
    width: '45%', 
  },
  productImage: {
    width: '100%', // Make the image take the full width of the container
    height:100, // Adjust the height as needed
    resizeMode: 'contain', // Maintain aspect ratio and cover the entire space
    borderRadius: 8, // Add rounded corners to the image
    marginBottom: 8, // Margin below the image
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
  },
});

export default ProductList;
