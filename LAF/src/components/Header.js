import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

function Header() {
    return (
        <ImageBackground 
            source={require('../../assets/images/logo.png')} 
            style={styles.header}>
            <Text style={styles.headerText}>LOST & FOUND</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Header;
