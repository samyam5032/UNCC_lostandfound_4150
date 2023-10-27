import React, {useState} from 'react';
import {View,Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/laf_logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const onSignInPressed = () => {
    console.warn('Sign In');
};

const onFAQPressed = () => {
    console.warn('onFAQPressed');
};

const SignInScreen = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const{height}= useWindowDimensions();
    
    return(
        <View style={styles.root}>
           
            <Image 
                source={Logo} 
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode="contain"  
            />
            <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername} 
            />
            <CustomInput  
            placeholder="Password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry={true}
            />

            <CustomButton text="Sign In" onPress={onSignInPressed}/>
            <CustomButton text="FAQ" onPress={onFAQPressed}/>
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
