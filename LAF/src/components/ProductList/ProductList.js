import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryFilter from '../CategoryFilter'; // Import the CategoryFilter component
import SearchBar from '../SearchBar'; // Import the SearchBar component
import { FontAwesome} from '@expo/vector-icons';
import { BookmarkContext, BookmarkProvider } from '../contexts/BookmarkContext';

// Import Images section

import BlackFlask from '../../../assets/images/blackflask.png';
import Wallet from '../../../assets/images/wallet.png';
import Airpods from '../../../assets/images/airpods.png';
import iPhone from '../../../assets/images/iphone.png';
import Mac from '../../../assets/images/goldmac.png';

const ProductList = () => {
  // Dummy product data
  const [products, setProducts] = useState([
    {
      name: 'HydroFlask',
      status: 'Pending',
      category: 'Bottle',
      image: BlackFlask,
      isBookmarked: false
    },
    {
      name: 'Brown Wallet',
      status: 'Lost',
      category: 'Clothing',
      image: Wallet,
      isBookmarked: false
    },
    {
      name: 'Airpods Pro',
      status: 'Lost',
      category: 'Accessories',
      image: Airpods,
      isBookmarked: false
    },
    {
      name: 'iphone 12',
      status: 'Lost',
      category: 'Electronics',
      image: iPhone,
      isBookmarked: false
    },
    {
      name: 'macBook Air',
      status: 'Claimed',
      category: 'Electronics',
      image: Mac,
      isBookmarked: false
    },
  ]);

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

  const { bookmarks, addBookmark, removeBookmark } = useContext(BookmarkContext);

  const toggleBookmark = (index) => {
    const product = products[index];
    const isBookmarked = bookmarks.some((bookmark) => bookmark.name === product.name);

    if (isBookmarked) {
      removeBookmark(product.name);
    } else {
      addBookmark(product);
    }

    // Update the local state to reflect the change
    setProducts((currentProducts) => {
      const newProducts = [...currentProducts];
      newProducts[index].isBookmarked = !newProducts[index].isBookmarked;
      return newProducts;
    });
  };

  const categories = ['All', 'Electronics', 'Bottle', 'Clothing', 'Accessories'];

  const renderProduct = ({ item, index }) => (
    <View style={styles.productBox}>
      <TouchableOpacity onPress={() => ProductDetail(item)}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.status}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleBookmark(index)} style={styles.bookmarkButton}>
        <FontAwesome name={item.isBookmarked ? "bookmark" : "bookmark-o"} size={24} color="black" />
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
        renderItem={({ item, index }) => renderProduct({ item, index })} 
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
  bookmarkButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default ProductList;
