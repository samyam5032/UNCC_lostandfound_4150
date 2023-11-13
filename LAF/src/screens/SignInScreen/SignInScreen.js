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

const onCreateAccountPressed = () =>{
    console.warn("Create Account");
}

const onForgotPasswordPressed = () =>{
    console.warn("Go to Forgot Password Page");
}

const SignInScreen = ({navigation}) => {
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
            <Text style={styles.spaceStyle}/>
            <Text style={styles.textStyle}>Forgot Password</Text>
            <Text style={styles.spaceStyle}/>
            <CustomButton text="Sign In" onPress={onSignInPressed}/>
            <CustomButton text="Create Account" onPress={onCreateAccountPressed}/>
            <CustomButton text="FAQ" onPress={onFAQPressed}/>
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


export default SignInScreen;
