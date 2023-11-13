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
  });
  const navigation = useNavigation(); // Initialize navigation

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerAction}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Edit Profile');
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
              <View style={styles.inputValidationRow}>
                <FeatherIcon color="#fff" name="check-circle" size={14} />

                <Text style={styles.inputValidationRowText}>
                  Minimum of 12 characters
                </Text>
              </View>

              <View style={styles.inputValidationRow}>
                <FeatherIcon color="#fff" name="check-circle" size={14} />

                <Text style={styles.inputValidationRowText}>
                  At least 1 lower case (a-z)
                </Text>
              </View>

              <View
                style={[
                  styles.inputValidationRow,
                  styles.inputValidationRowInvalid,
                ]}>
                <FeatherIcon color="#fff" name="check-circle" size={14} />

                <Text style={styles.inputValidationRowText}>
                  At least 1 upper case (A-Z)
                </Text>
              </View>

              <View style={styles.inputValidationRow}>
                <FeatherIcon color= "#fff" name="check-circle" size={14} />

                <Text style={styles.inputValidationRowText}>
                  At least 1 number (0-9)
                </Text>
              </View>

              <View
                style={[
                  styles.inputValidationRow,
                  styles.inputValidationRowInvalid,
                ]}>
                <FeatherIcon color="#fff" name="check-circle" size={14} />

                <Text style={styles.inputValidationRowText}>
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
              onPress={() => {
                // handle onPress
              }}>
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
});

export default RegisterScreen;
