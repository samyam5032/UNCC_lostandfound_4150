import React, { useState } from 'react';
import {
 StyleSheet,
 SafeAreaView,
 View,
 Image,
 Text,
 TouchableOpacity,
 TextInput,
} from 'react-native';
import {app} from '../../../database/firebase';
import { createUserWithEmailAndPassword , getAuth, sendEmailVerification, updateProfile} from 'firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS } from "../../../constants/Theme";
import Logo from '../../../assets/images/laf_logo.png';
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = () => {
 const [form, setForm] = useState({
   name: '',
   email: '',
   password: '',
   confirmPassword:'',
 });
 const navigation = useNavigation(); // Initialize navigation


 const [passwordRequirements, setPasswordRequirements] = useState({
   length: true,
   lowercase: false,
   uppercase: false,
   number: false,
   symbol: false,
 });


 const validatePassword = (password) => {
   const hasLength = password.length >= 8;
   const hasLowercase = /[a-z]/.test(password);
   const hasUppercase = /[A-Z]/.test(password);
   const hasNumber = /\d/.test(password);
   const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);


   setPasswordRequirements({
       length: hasLength,
       lowercase: hasLowercase,
       uppercase: hasUppercase,
       number: hasNumber,
       symbol: hasSymbol,
     });
      return hasLength && hasLowercase && hasUppercase && hasNumber && hasSymbol;
   };


  
   const handleSignUp = () => {
       if (validatePassword(form.password)) {
         // Add your sign-up logic here
        
         const auth = getAuth();
        
         createUserWithEmailAndPassword(auth, form.email, form.password)
         .then((userCredential)=>{
           console.log("Account created Successfully");

           //Giving a user the display name 
           updateProfile(auth.currentUser, {
            displayName: form.name, 
          }).then(() => {
            console.warn("Set display name: "+ auth.currentUser.displayName);
          })
         })

         //Sending Email verifications
         sendEmailVerification(auth.currentUser)
         .then(() =>{
            alert("Check your Email");
         })

         //Catch for error 
         .catch((error)=>{
           const errorCode = error.code;
           const errorMessage = error.message;
           console.log("Error code: " + errorCode + " Error Message: " + errorMessage);
         })
         console.log('Sign up successful!');
       } else {
         console.log('Password does not meet requirements');
       }
     };






 return (
   <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
     <View style={styles.container}>
       <View style={styles.header}>
         <View style={styles.headerAction}>
           <TouchableOpacity
             onPress={() => {
               navigation.navigate('Sign In New');
             }}>
             <FeatherIcon color="#fff" name="x" size={24} />
           </TouchableOpacity>
         </View>


         <Text style={styles.headerTitle}>Create an Account</Text>


         <View style={[styles.headerAction, { alignItems: 'flex-end' }]}>
         
         </View>
       </View>


       <KeyboardAwareScrollView>
       <Image
               source={Logo}
               style={[styles.logo]}
               resizeMode="contain" 
           />
         <View style={styles.form}>
           <View style={styles.input}>
             <Text style={styles.inputLabel}>Enter your name</Text>


             <TextInput
               onChangeText={name => setForm({ ...form, name })}
               placeholder="Name"
               placeholderTextColor="#878E9A"
               style={styles.inputControl}
               value={form.name}
             />
           </View>


           <View style={styles.input}>
             <Text style={styles.inputLabel}>Enter your email</Text>


             <TextInput
               autoCapitalize="none"
               autoCorrect={false}
               keyboardType="email-address"
               onChangeText={email => setForm({ ...form, email })}
               placeholder="Email address"
               placeholderTextColor="#878E9A"
               style={styles.inputControl}
               value={form.email}
             />
           </View>


           <View style={styles.input}>
             <Text style={styles.inputLabel}>Enter your password</Text>


             <TextInput
               autoCorrect={false}
               onChangeText={password => setForm({ ...form, password })}
               placeholder="********"
               placeholderTextColor="#878E9A"
               style={styles.inputControl}
               secureTextEntry={true}
               value={form.password}
             />
           </View>


           <View style={styles.inputValidation}>


               {/* //For 8 characters */}
           <View
               style={[
                 styles.inputValidationRow,
                 passwordRequirements.length
                   ? styles.inputValidationRowValid
                   : styles.inputValidationRowInvalid,
               ]}>
                    <FeatherIcon
                 color={
                   passwordRequirements.length
                     ? COLORS.success
                     : COLORS.error
                 }
                 name={
                   passwordRequirements.length
                     ? 'check-circle'
                     : 'alert-circle'
                 }
                 size={14}
               />
              
               <Text
                 style={[
                   styles.inputValidationRowText,
                   passwordRequirements.length
                     ? styles.inputValidationRowValidText
                     : styles.inputValidationRowInvalidText,
                 ]}>
                 Minimum of 8 characters
               </Text>
             </View>




                 {/* For 1 lower Case */}
            




               <View
               style={[
                 styles.inputValidationRow,
                 passwordRequirements.lowercase
                   ? styles.inputValidationRowValid
                   : styles.inputValidationRowInvalid,
               ]}>
               <FeatherIcon
                 color={
                   passwordRequirements.lowercase
                     ? COLORS.success
                     : COLORS.error
                 }
                 name={
                   passwordRequirements.lowercase
                     ? 'check-circle'
                     : 'alert-circle'
                 }
                 size={14}
               />
               <Text
                 style={[
                   styles.inputValidationRowText,
                   passwordRequirements.lowercase
                     ? styles.inputValidationRowValidText
                     : styles.inputValidationRowInvalidText,
                 ]}>
                 At least 1 lower case (a-z)
               </Text>
             </View>


                 {/* For 1 upper case */}
           


               <View
               style={[
                 styles.inputValidationRow,
                 passwordRequirements.uppercase
                   ? styles.inputValidationRowValid
                   : styles.inputValidationRowInvalid,
               ]}>
               <FeatherIcon
                 color={
                   passwordRequirements.uppercase
                     ? COLORS.success
                     : COLORS.error
                 }
                 name={
                   passwordRequirements.uppercase
                     ? 'check-circle'
                     : 'alert-circle'
                 }
                 size={14}
               />
               <Text
                 style={[
                   styles.inputValidationRowText,
                   passwordRequirements.uppercase
                     ? styles.inputValidationRowValidText
                     : styles.inputValidationRowInvalidText,
                 ]}>
                  At least 1 upper case (A-Z)
               </Text>
             </View>




               {/* For 1 number */}
            
                <View
               style={[
                 styles.inputValidationRow,
                 passwordRequirements.number
                   ? styles.inputValidationRowValid
                   : styles.inputValidationRowInvalid,
               ]}>
               <FeatherIcon
                 color={
                   passwordRequirements.number
                     ? COLORS.success
                     : COLORS.error
                 }
                 name={
                   passwordRequirements.number
                     ? 'check-circle'
                     : 'alert-circle'
                 }
                 size={14}
               />
               <Text
                 style={[
                   styles.inputValidationRowText,
                   passwordRequirements.number
                     ? styles.inputValidationRowValidText
                     : styles.inputValidationRowInvalidText,
                 ]}>
                 At least 1 number (0-9)
               </Text>
             </View>
               {/* For 1 symbol */}
           


<View
               style={[
                 styles.inputValidationRow,
                 passwordRequirements.symbol
                   ? styles.inputValidationRowValid
                   : styles.inputValidationRowInvalid,
               ]}>
               <FeatherIcon
                 color={
                   passwordRequirements.symbol
                     ? COLORS.success
                     : COLORS.error
                 }
                 name={
                   passwordRequirements.symbol
                     ? 'check-circle'
                     : 'alert-circle'
                 }
                 size={14}
               />
               <Text
                 style={[
                   styles.inputValidationRowText,
                   passwordRequirements.symbol
                     ? styles.inputValidationRowValidText
                     : styles.inputValidationRowInvalidText,
                 ]}>
                 At least 1 symbol (%&,!#)
               </Text>
             </View>
           </View>


           <View style={styles.input}>
             <Text style={styles.inputLabel}>Confirm your password</Text>


             <TextInput
               autoCorrect={false}
               onChangeText={confirmPassword =>
                 setForm({ ...form, confirmPassword })
               }
               placeholder="********"
               placeholderTextColor="#878E9A"
               style={styles.inputControl}
               secureTextEntry={true}
               value={form.confirmPassword}
             />
           </View>


           <TouchableOpacity
             onPress={handleSignUp}>
             <View style={styles.btn}>
               <Text style={styles.btnText}>Sign Up</Text>
             </View>
           </TouchableOpacity>
         </View>
       </KeyboardAwareScrollView>
     </View>
   </SafeAreaView>
 );
}


const styles = StyleSheet.create({
 container: {
   padding: 0,
   flexGrow: 1,
   flexShrink: 1,
   flexBasis: 0,
 },
 header: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   paddingVertical: 12,
   paddingHorizontal: 16,
 },
 headerTitle: {
   fontSize: 21,
   fontWeight: '600',
   color: COLORS.white,
 },
 logo:{
   width:500,
   height:'60%',
   maxWidth:700,
   maxHeight:400,
   marginLeft:-40,
   top:-110,
  
},
 form: {
   top:-190,
   paddingHorizontal: 24,
 },
 inputLabel: {
   fontSize: 14,
   fontWeight: '700',
   color: COLORS.accent,
   marginBottom: 8,
 },
 inputControl: {
   height: 44,
   backgroundColor: '#f0f4f6',
   paddingHorizontal: 16,
   borderRadius: 12,
   fontSize: 15,
   fontWeight: '500',
   color: '#222',
   borderColor: '#d7dbdd',
   borderWidth: 1,
 },
 inputValidation: {
   marginBottom: 12,
 },
 inputValidationRow: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'flex-start',
   marginBottom: 6,
 },
 inputValidationRowInvalid: {
   opacity: 0.35,
 },
 inputValidationRowText: {
   fontSize: 13,
   fontWeight: '500',
   color: COLORS.accent,
   marginLeft: 5,
 },
 btn: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 24,
   paddingVertical: 10,
   paddingHorizontal: 20,
   borderWidth: 1,
   backgroundColor: COLORS.accent,
   borderColor: '#292B32',
   marginTop: 16,
 },
 btnText: {
   fontSize: 16,
   lineHeight: 26,
   fontWeight: '600',
   color: '#fff',
   letterSpacing: 0.133,
 },
 headerAction: {
   width: 40,
   height: 40,
   alignItems: 'flex-start',
   justifyContent: 'center',
 },
 input: {
   marginBottom: 16,
 },
 inputValidationRowValid: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'flex-start',
   marginBottom: 6,
   opacity: 0.6,
 },
 inputValidationRowValidText: {
   fontSize: 13,
   fontWeight: '500',
   color: COLORS.success,
   marginLeft: 5,
 },
 inputValidationRowInvalid: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'flex-start',
   marginBottom: 6,
   opacity: 0.35,
 },
 inputValidationRowInvalidText: {
   fontSize: 13,
   fontWeight: '500',
   color: COLORS.error,
   marginLeft: 5,
 },
});


export default RegisterScreen;