import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryFilter from '../CategoryFilter'; // Import the CategoryFilter component
import SearchBar from '../SearchBar'; // Import the SearchBar component
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
      name: 'HydroFlask',
      status: 'Pending',
      category: 'Bottle',
      image: BlackFlask,
    },
    {
      name: 'Product 2',
      status: 'Lost',
      category: 'Clothing',
      image: Wallet,
    },
    {
      name: 'Product 3',
      status: 'Lost',
      category: 'Accessories',
      image: Airpods,
    },
    {
      name: 'Product 4',
      status: 'Lost',
      category: 'Electronics',
      image: iPhone,
    },
    {
      name: 'Product 5',
      status: 'Claimed',
      category: 'Electronics',
      image: Mac,
    },
  ];

  // Use Navigation
  const navigation = useNavigation();

  //Search Bar
  const [searchText, setSearchText] = useState(''); // State to store the search term
  const handleSearch = (text) => {
    setSearchText(text); // Update the search input state
  };

  const ProductDetail = (item) => {
    // Navigate to the product detail screen 
    navigation.navigate('ProductDetail', { product: item });
  };
//Product  Category Filter 
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterProductsByCategory = (category) => {
    if (category === 'All') {
      return products;
    }
    return products.filter((product) => product.category === category);
  };

  const categories = ['All', 'Electronics', 'Bottle', 'Clothing', 'Accessories'];

  const renderProduct = ({ item }) => (
    <View style={styles.productBox}>
      <TouchableOpacity onPress={() => ProductDetail(item)}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.status}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
   
        <SearchBar onSearch={handleSearch} />     
     <FlatList
        data={filterProductsByCategory(selectedCategory).filter((product)=>
            product.name.toLowerCase().includes(searchText.toLowerCase()) 
             )}
        renderItem={renderProduct}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
    justifyContent: 'space-between',
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
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    borderRadius: 8,
    marginBottom: 8,
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
