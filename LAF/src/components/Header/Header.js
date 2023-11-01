import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
// Import Images section 
import logo from '../../../assets/images/logo.png';




const Header = () => {
    return (
    <View >
         <View style={styles.header}>
           <Image 
               style={{marginTop:-40,width: 420,height :120}}
               source={logo} 
            />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    header: { 
       
        alignItems: 'center',
    },
    
    menuIcon: {
      
        marginTop:-85,
        position:'absolute',
        marginHorizontal:200,
        flexDirection:'column',
        flex:1,
        
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Header;
