import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  
// Import Images section 
import logo from '../../assets/images/logo.png';




function Header({ onMenuPress }) {
    return (
    <View >
         <View style={styles.header}>
           <Image 
               style={{marginTop:-170,width: 420,height :120}}
               source={logo} 
            />
            </View>
            <View style={styles.menuIcon}>
            <TouchableOpacity onPress={onMenuPress}>
                <Ionicons  name="menu" size={30} color="white" />
            </TouchableOpacity>
          
        </View>
        </View>
    );
}

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
