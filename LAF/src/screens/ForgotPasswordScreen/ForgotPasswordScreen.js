import React, {useState} from 'react';
import {View,Text,TextInput, Image,TouchableOpacity, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/laf_logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {app} from "../../../database/firebase";
import { sendPasswordResetEmail, getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { COLORS, FONTS } from "../../../constants/Theme";


const INPUT_OFFSET = 110;
const ForgotPasswordScreen = () => {
    const navigation = useNavigation(); 

    const[email, setEmail] = useState('');

    const{height}= useWindowDimensions();

    const sendForgotPassword = () =>{
        const auth = getAuth();

        sendPasswordResetEmail(auth,email)     
        .then(() =>{
            alert("Check email for password reset link!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
          });
    }
    
    return(
        <View style={styles.root}>
            <TouchableOpacity style={styles.backButton}
             onPress={() => {
               navigation.navigate('SignIn');
             }}>
             <FeatherIcon color="#fff" name="chevron-left" size={30} />
           </TouchableOpacity>
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
            <CustomButton text="Send me an verification code" onPress={sendForgotPassword}/>
        </View>
    );
};

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:20,
        backgroundColor:COLORS.primary,
        height: "100%"
    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 30,
        zIndex: 1,
        
      },
      inputLabel: {
        position: 'absolute',
        width: INPUT_OFFSET,
        lineHeight: 44,
        top: 0,
        left: 0,
        bottom: 0,
        marginHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: '500',
        color: COLORS.primary,
        zIndex: 9,
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