import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Item from '../components/Item';
import Footer from '../components/Footer';



function Homepage() {
  return (
    <View style={styles.homepage}>
      <Header />
      <SearchBar />
      <View style={styles.items}>
        <Item imageUrl={require('../../assets/images/blackflask.png')} itemName="Black Flask" status="PENDING" />
        <Item imageUrl={require('../../assets/images/wallet.png')} itemName="Wallet" status="FOUND" />
        <Item imageUrl={require('../../assets/images/airpods.png')} itemName="Airpods" status="LOST" />
        <Item imageUrl={require('../../assets/images/iphone.png')} itemName="iPhone" status="PENDING" />
        <Item imageUrl={require('../../assets/images/goldmac.png')} itemName="Mac" status="LOST" />
      </View>
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
});

export default Homepage;
