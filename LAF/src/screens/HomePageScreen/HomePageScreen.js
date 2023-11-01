import React, { useState } from 'react';
import { View, Text, StyleSheet ,Button} from 'react-native';

import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar';
import Item from '../../components/Item';
import Footer from '../../components/Footer';
import ProductList from '../../components/ProductList';





const HomePageScreen = ({navigation})  => {
   
    return (
        <View style={styles.homepage}>
            <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
            <Header/>
            <SearchBar/>
            
           <ProductList />
   
            
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
  homepage: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  items: {},
  menu: {
      position: 'absolute',  
      top: 60,  
      left: 0,
      right: 0,
      backgroundColor: '#FFF',
      borderBottomWidth: 1,
      borderBottomColor: '#d1d1d1',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  menuItem: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#d1d1d1',
  }
});

export default HomePageScreen;
