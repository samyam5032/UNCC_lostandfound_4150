import React, { Component } from 'react';
import { View, Text ,TextInput,StyleSheet} from 'react-native';

const CustomInput =({value,setValue , placeholder,secureTextEntry})=> {
    return (
      <View style={styles.container}>
        <TextInput 
            value={value}
            onChangeText= {setValue}
            placeholder={placeholder}
            style={styles.input} 
            secureTextEntry={secureTextEntry}
        />
      </View>
    );
  };
  const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        width: 350 ,

        borderColor:"#967603",//#gold
        borderWidth:1,
        borderRadius:5,
        padding:15,

        paddingHorizontal:10,
        marginVertical :5,
    },
    input:{},
  })


export default CustomInput;
