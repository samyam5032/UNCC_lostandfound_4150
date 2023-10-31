import React, { useState } from 'react';
import { View, Text, StyleSheet ,Button} from 'react-native';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Item from '../../components/Item';
import Footer from '../../components/Footer';


// Import Images section 
import BlackFlask from '../../../assets/images/blackflask.png';
import Wallet from '../../../assets/images/wallet.png';
import Airpods from '../../../assets/images/airpods.png';
import iPhone from '../../../assets/images/iphone.png';
import Mac from '../../../assets/images/goldmac.png';



const HomePageScreen = ({navigation})  => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <View style={styles.homepage}>
              <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
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
                <Item source={BlackFlask} itemName="Black Flask" status="PENDING" />
                <Item source={Wallet} itemName="Wallet" status="FOUND" />
                <Item source={Airpods} itemName="Airpods" status="LOST" />
                <Item source={iPhone} itemName="iPhone" status="PENDING" />
                <Item source={Mac} itemName="Mac" status="LOST" />
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

export default HomePageScreen;
