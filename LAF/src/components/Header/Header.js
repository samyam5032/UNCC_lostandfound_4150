import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
// Import Images section 
import logo from '../../../assets/images/logo.png';




const Header = () => {
    return (
    <View >
         <View style={styles.header}>
           <Image 
               style={{width: 420,height :120}}
               source={logo} 
            />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    header: { 
       position:'fixed',
       top:140,
       alignItems: 'center',
       marginBottom:150,
       zIndex:10 ,
    },
    
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Header;
