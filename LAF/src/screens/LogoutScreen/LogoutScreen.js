import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { COLORS, FONTS } from "../../../constants/Theme";

import { getAuth, onAuthStateChanged,signOut } from 'firebase/auth';
import Profile from '../../../assets/images/Claudia.jpg';
import { useNavigation } from '@react-navigation/native';

const LogoutScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const auth = getAuth();
  const [userDetails, setUserDetails] = useState({
    name: '',
    profileImage: '', 
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, update the state with user details
        setUserDetails({
          name: user.displayName || '',
          profileImage: user.photoURL || '', // Set the profile image here
        });
      } else {
        // No user is signed in.
        setUserDetails({
          name: '',
          profileImage: '',
        });
      }
    });
     // Cleanup the subscription on unmount
     return () => unsubscribe();
    }, [auth]);
  
    const handleLogout = async () => {
      try {
        await signOut(auth);
        navigation.navigate('LandingScreen'); 
      } catch (error) {
        console.error('Error logging out:', error.message);
      }
    };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.alert}>
          <View style={styles.alertContent}>
            <Image
              alt=""
              style={styles.alertAvatar}
              source={{ uri: userDetails.profileImage }}
            />

            <Text style={styles.alertTitle}>
              Log out of
              {'\n'}
              @{userDetails.name}
            </Text>

            <Text style={styles.alertMessage}>
              Are you sure you would like to log out of this account? You will
              need your password to log back in.
            </Text>
          </View>

          <TouchableOpacity
            onPress={handleLogout}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Yes, log me out</Text>
            </View>
          </TouchableOpacity>

          <View style={{ marginTop: 8 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Setting');
              }}>
              <View style={styles.btnSecondary}>
                <Text style={styles.btnSecondaryText}>Cancel</Text>
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
  alert: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingTop: 80,
  },
  alertContent: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  alertAvatar: {
    width: 160,
    height: 160,
    borderRadius: 9999,
    alignSelf: 'center',
    marginBottom: 24,
  },
  alertTitle: {
    marginBottom: 16,
    fontSize: 34,
    lineHeight: 44,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  alertMessage: {
    marginBottom: 24,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
    color: '#9a9a9a',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  btnSecondaryText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: COLORS.primary,
  },
});
export default LogoutScreen;
