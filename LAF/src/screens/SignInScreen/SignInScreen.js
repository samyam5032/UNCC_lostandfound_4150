import React, {useState} from 'react';
import {View,Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/laf_logo.png';

const SignInScreen = () => {
    const{height}= useWindowDimensions();
    
    return(
        <View style={styles.root}>
           
            <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"  />
        </View>
    );
};

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:20,
    },
    logo:{
        width:500,
        maxWidth:700,
        maxHeight:400,
    },
});


export default SignInScreen;
