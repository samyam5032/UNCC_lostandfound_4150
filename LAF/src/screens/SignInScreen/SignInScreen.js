import React, {useState} from 'react';
import {View,Text, Image,StyleSheet} from 'react-native'
import Logo from '../../../assets/images/laf_logo.png'

const SignInScreen = () => {
    return(
        <View>
            <Text>
                Sign In Screeeeen !!
               
            </Text>
            <Image source={Logo} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    logo:{
        width:400,
        height:200,
    },
});


export default SignInScreen
