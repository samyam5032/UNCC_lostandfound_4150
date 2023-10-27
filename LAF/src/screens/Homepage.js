import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Item from '../components/Item';
import Footer from '../components/Footer';

function Homepage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <View style={styles.homepage}>
            <Header onMenuPress={toggleMenu} />
            
            {isMenuOpen && 
                <View style={styles.menu}>
                    <Text style={styles.menuItem}>Past Claims</Text>
                    <Text style={styles.menuItem}>My Profile</Text>
                    <Text style={styles.menuItem}>Map</Text>
                    <Text style={styles.menuItem}>FAQs</Text>
                    {}
                </View>
            }

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
  menu: {
      position: 'absolute',  
      top: 60,  
      left: 0,
      right: 0,
      backgroundColor: '#FFF',
      borderBottomWidth: 1,
      borderBottomColor: '#d1d1d1',
  },
  menuItem: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#d1d1d1',
  }
});

export default Homepage;
