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
import FeatherIcon from 'react-native-vector-icons/Feather';
import { getAuth, signInWithEmailAndPassword, } from 'firebase/auth';
import {auth} from "../../../database/firebase";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, FONTS } from "../../../constants/Theme";
import Logo from '../../../assets/images/laf_logo.png';
import { useNavigation} from '@react-navigation/native'; // Import useNavigation hook
import DrawerNavigation from '../../components/DrawerNavigation';
import AdminSignInScreen from '../AdminSignInScreen';




const INPUT_OFFSET = 110;


const SignInScreenNew = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const navigateToAdminsignin = () => {
    navigation.navigate('AdminSignInScreen');
  };


  const signInMethod = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      const user = userCredential.user;
      const welcomeName = user.displayName || user.email;
  
      // Show toast message
      Toast.show({
        type: 'success',
        position: 'center',
        text1: `Welcome, ${welcomeName}!`,
        visibilityTime: 4000,
      });
  
      navigation.replace('Home');
    })
    .catch((error) => {
      Toast.show({
        type: 'error',
        text1: 'Login failed',
        text2: error.message,
      });
    });
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Image
              source={Logo}
              style={[styles.logo]}
              resizeMode="contain"
            />
          </View>


          <Text style={styles.title}>
            Welcome to <Text style={{ color: COLORS.accent }}>LOST & FOUND</Text>
          </Text>


          <Text style={styles.subtitle}>Turn Your Lost into Found !</Text>
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
          <View style = {styles.linkSpacer}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.CreateAccountText}>Create a new Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Adminsignin')}>
            <Text style={styles.adminLoginText}>Admin Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Forgot Password')}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={signInMethod}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>


            <View style={styles.formActionSpacer} />


            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.btnSecondary}>
                <MaterialCommunityIcons
                  color="#fff"
                  name="face-recognition"
                  size={22}
                  style={{ marginRight: 12 }}
                />


                <Text style={styles.btnSecondaryText}>Face ID</Text>


                <View style={{ width: 34 }} />
              </View>
            </TouchableOpacity>
          </View>


          <Text style={styles.formFooter}>
            By clicking "Sign in" above, you agree to LostNFound's
            <Text style={{ fontWeight: '600' }}> Terms & Conditions </Text>
            and
            <Text style={{ fontWeight: '600' }}> Privacy Policy</Text>.
          </Text>
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
    marginLeft: 5,
  },

  CreateAccountText: {
    color: COLORS.accent,
    textDecorationLine: 'underline',
    alignItems: 'flex-start',
    marginRight: 5,
  },

  adminLoginText: {
    color: COLORS.accent,
    textDecorationLine: 'underline',
    alignItems: 'flex-start',
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


export default SignInScreenNew;