import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  
// Import Images section 
import logo from '../../assets/images/logo.png';

function Header({ onMenuPress }) {
    return (
    
         <View style={styles.container}>
            <View style={styles.header}>
             <Image 
                source={logo} 
            />
            </View>
            <View style={styles.menuIcon}>
            <TouchableOpacity onPress={onMenuPress}>
                <Ionicons name="menu" size={30} color="white" />
            </TouchableOpacity>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#333', 
        
        
    },
    header: {
        width:50,
        height:50,
        backgroundColor: '#333', 
         alignItems: 'center',
        marginTop:'-50%',
       

        flex: 1,
        

    },
    menuIcon: {
        marginRight:'10%',
        alignItems: 'right'
        
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Header;
