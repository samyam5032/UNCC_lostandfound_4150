import React, {useState} from 'react';
import {View,Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/laf_logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const onSendEmailVerification = () =>{
    console.warn("Sent Email verification");
}

const ForgotPasswordScreen = () => {
    const[email, setEmail] = useState('');

    const{height}= useWindowDimensions();
    
    return(
        <View style={styles.root}>
           
            <Image 
                source={Logo} 
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode="contain"  
            />
            <CustomInput 
            placeholder="Email" 
            value={email} 
            setValue={setEmail} 
            />
            <Text style={styles.spaceStyle}/>
            <CustomButton text="Send me an verification code" onPress={onSendEmailVerification}/>
        </View>
    );
};

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:20,
        backgroundColor:"#005035",
        height: "100%"
    },
    logo:{
        width:500,
        maxWidth:700,
        maxHeight:400,
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        color:'#fff',
        margin:10,
    },
    spaceStyle:{
        height: "1px",
    },
    textStyle:{
        color: "white"
    }
});


export default ForgotPasswordScreen;
