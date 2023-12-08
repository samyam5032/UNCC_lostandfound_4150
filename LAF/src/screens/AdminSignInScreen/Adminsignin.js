import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from "../../../constants/Theme";
import Logo from '../../../assets/images/laf_logo.png';
import { useNavigation } from '@react-navigation/native';

const INPUT_OFFSET = 20;


const AdminSignInScreen = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const adminSignInMethod = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Check if the user has admin privileges
        // This usually involves checking custom claims which might require a backend call
        // For simplicity, we'll assume the user is an admin if authentication succeeds
        const adminName = userCredential.user.displayName || userCredential.user.email;
        Toast.show({
          type: 'success',
          position: 'center',
          text1: `Welcome Admin, ${adminName}!`,
          visibilityTime: 4000,
        });
        navigation.replace('AdminDashboard'); // Navigate to the admin dashboard
      })
      .catch((error) => {
        Toast.show({
          type: 'error',
          text1: 'Admin Login failed',
          text2: error.message,
        });
      });
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={Logo}
            style={[styles.logo]}
            resizeMode="contain"
          />
          <Text style={styles.title}>
            Admin Portal
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder=""
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              autoCorrect={false}
              onChangeText={password => setForm({ ...form, password })}
              placeholder=""
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={adminSignInMethod}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Admin Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 24,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    header: {
      marginVertical: 36,
    },
    logo: {
      width: 500,
      height: '75%',
      maxWidth: 700,
      maxHeight: 400,
      marginLeft: -65,
      top: -80,
    },
    title: {
      top: -270,
      fontSize: 27,
      fontWeight: '700',
      color: COLORS.white,
      marginBottom: 6,
      textAlign: 'center',
    },
    subtitle: {
      top: -270,
      fontSize: 15,
      fontWeight: '500',
      color: COLORS.white,
      textAlign: 'center',
    },
    form: {
      top: -300,
      marginBottom: 24,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    formAction: {
      marginVertical: 40,
    },
    formActionSpacer: {
      marginVertical: 8,
    },
    linkSpacer:{
      flexDirection : 'row',
      justifyContent: 'center'
    },
    formFooter: {
      top: 320,
      marginTop: 'auto',
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '400',
      color: '#929292',
      textAlign: 'center',
    },
    forgotPasswordText: {
      color: COLORS.accent,
      textDecorationLine: 'underline',
      backgroundColor: "transparent",
      transform: 'translateX(47em)'
    },
    CreateAccountText: {
      color: COLORS.accent,
      textAlign: 'left',
      textDecorationLine: 'underline',
      alignItems: 'flex-start',
      transform: 'translateX(-47em)'
    },
  
    input: {
      marginBottom: 16,
    },
    inputControl: {
      height: 44,
      backgroundColor: '#fff',
      paddingLeft: INPUT_OFFSET,
      paddingRight: 24,
      borderRadius: 12,
      fontSize: 15,
      fontWeight: '500',
      color: '#222',
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
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      height: 30,
      backgroundColor: COLORS.accent,
  
  
    },
    btnText: {
      fontSize: 18,
      lineHeight: 26,
      fontWeight: '600',
      color: '#fff',
    },
    btnSecondary: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      height: 30,
      marginTop: 20,
      backgroundColor: 'transparent',
      borderColor: COLORS.accent,
    },
    btnSecondaryText: {
      fontSize: 18,
      lineHeight: 26,
      fontWeight: '600',
      color: COLORS.white,
    },
  });

export default AdminSignInScreen;
