import React, {useState} from 'react';
import {View,Text, Image, StyleSheet,TouchableOpacity, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/laf_logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const onCreateAccount = () =>{
    console.warn("Created Account");
}

const CreateAccountScreen = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[fname, setFname] = useState('');
    const[lname, setLname] = useState('');
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
            placeholder="First Name"
            value={fname}
            setValue={setFname}
            />
            <CustomInput
            placeholder="Last Name"
            value={lname}
            setValue={setLname}
            />
            <CustomInput
            placeholder="Email"
            value={email}
            setValue={setEmail}
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
            <TouchableOpacity
            onPress={() => {
              navigation.navigate('Edit Profile'); // Navigate to the EditProfileScreen
            }}>
            <CustomButton text="Create Account" onPress={onCreateAccount}/>

            </TouchableOpacity>
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


export default CreateAccountScreen;
