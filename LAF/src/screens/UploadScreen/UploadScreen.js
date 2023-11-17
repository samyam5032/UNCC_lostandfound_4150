import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, PermissionsAndroid } from 'react-native';
import Logo from '../../../assets/images/laf_logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import Item from '../../components/Item';
import setProducts from '../../components/ProductList';
import { useNavigation } from '@react-navigation/native'; 


const UploadScreen = ({ navigation }) => {
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                   {
                        title: '49er Finder Camera Permission',
                        message: '49er Finder would like to use your camera for uploading images',
                        buttonPositive: 'Ok',
                        buttonNegative: 'No',
                   },
            );
            if(granted === PermissionsAndroid.RESULTS.GRANTED){
                openGallery();
            }
            else{
                console.log('Camera Permission Denied')
            }
        }
            catch (err) {
                console.warn(err);
            }
    };
    const openGallery = async () => {
        const result = await launchImageLibrary({mediaType: 'photo'});
        if (result.didCancel){

        }
        else{
            console.log(result);
            setImageData(result);
        }
    };

    return (
        <View style={styles.root}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />

            <CustomInput
                placeholder="Name"
                value={itemName}
            />

            <CustomInput
                placeholder="Description"
                value= {itemDes}
            />

            <CustomInput
                placeholder="Category"
                value={category}
            />
            <CustomInput
                placeholder="Location"
                value={location}
            />
            <CustomButton text="Upload Image"
                onPress={() => {
                    <script>
                        requestCameraPermission();
                        imageURL = result;
                    </script>
                }}
            />
            <Image
                source={imageURL}
                style={[styles.logo, { height: height * 0.1 }]}
                resizeMode="contain"
            />


            <CustomButton text="Upload Item"
                onPress={() => {
                    <script>
                        setProducts.unshift(Item(name, itemDes, category, location, imageURL));
                    </script>
                    navigation.navigate('UploadScreen')
                }}
            />
        </View>
    )

};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#005035",
        height: "100%"
    },
    logo: {
        width: 500,
        maxWidth: 700,
        maxHeight: 400,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        margin: 10,
    },
    spaceStyle: {
        height: "1px",
    },
    textStyle: {
        color: "white"
    }
});

export default UploadScreen;