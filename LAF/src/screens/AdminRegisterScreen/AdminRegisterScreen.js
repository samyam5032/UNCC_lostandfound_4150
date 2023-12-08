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
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS } from "../../../constants/Theme";
import Logo from '../../../assets/images/laf_logo.png';
import { useNavigation } from '@react-navigation/native';

const AdminRegisterScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigation = useNavigation();

  const handleAdminSignUp = () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Admin registered successfully
        console.log("Admin account created successfully");
             })
      .catch((error) => {
        console.error("Error creating admin account: ", error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FeatherIcon name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Admin Registration</Text>
          <View style={styles.headerAction}></View>
        </View>

        <KeyboardAwareScrollView>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />
          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.inputControl}
                placeholder="Enter your name"
                placeholderTextColor="#878E9A"
                value={form.name}
                onChangeText={(name) => setForm({ ...form, name })}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.inputControl}
                placeholder="Enter your email"
                placeholderTextColor="#878E9A"
                keyboardType="email-address"
                value={form.email}
                onChangeText={(email) => setForm({ ...form, email })}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.inputControl}
                placeholder="Enter your password"
                placeholderTextColor="#878E9A"
                secureTextEntry
                value={form.password}
                onChangeText={(password) => setForm({ ...form, password })}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <TextInput
                style={styles.inputControl}
                placeholder="Confirm your password"
                placeholderTextColor="#878E9A"
                secureTextEntry
                value={form.confirmPassword}
                onChangeText={(confirmPassword) => setForm({ ...form, confirmPassword })}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleAdminSignUp}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  form: {
    marginVertical: 10,
  },
  input: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  inputControl: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: COLORS.accent,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AdminRegisterScreen;
