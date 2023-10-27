import React from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  

function Header({ onMenuPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onMenuPress} style={styles.menuIcon}>
                <Ionicons name="menu" size={30} color="white" />
            </TouchableOpacity>
            <ImageBackground 
                source={require('../../assets/images/logo.png')} 
                style={styles.header}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,   
        backgroundColor: '#333', 
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 90, 
    },
    header: {
        flex: 1,
        height: 60, 
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,  
    },
    menuIcon: {
        marginHorizontal: 25,  
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Header;
