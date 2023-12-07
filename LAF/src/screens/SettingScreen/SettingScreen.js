import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Profile from '../../../assets/images/Claudia.jpg';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { COLORS, FONTS } from "../../../constants/Theme";
import { getAuth, signOut } from "firebase/auth";

import profile from '../../../assets/images/Claudia.jpg';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS } from "../../../constants/Theme";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const SECTIONS = [
  {
    header: 'Preferences',
    items: [
      { id: 'language', icon: 'globe', label: 'Language', type: 'select' },
      { id: 'darkMode', icon: 'moon', label: 'Dark Mode', type: 'toggle' },

    ],
  },
  {
    header: 'Help',
    items: [
      { id: 'bug', icon: 'flag', label: 'Report Bug', type: 'link' },
      { id: 'contact', icon: 'mail', label: 'Contact Us', type: 'link' },
    ],
  },

];
const SettingScreen = () => {
  var auth = getAuth();
  var user = auth.currentUser;                  //Initializing user
  const navigation = useNavigation(); // Initialize navigation

  const auth = getAuth();
  const [form, setForm] = useState({
    language: 'English',
    darkMode: false,

  });
  const [userDetails, setUserDetails] = useState({ name: '', email: '' ,profileImage:'',});
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, update the state with user details
        setUserDetails({ name: user.displayName, email: user.email , profileImage: user.photoURL,});
      } else {
        // No user is signed in.
        setUserDetails({ name: '', email: '' });
      }
    });
    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  return (
    <SafeAreaView style={{ backgroundColor: '#f6f6f6' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>

          <Text style={styles.subtitle}>
            Personalize your App
          </Text>
        </View>

        <View style={styles.profile}>
        <Image
             
              source={{ uri: userDetails.profileImage|| profile }}
              style={styles.profileAvatar}
            />

          <Text style={styles.profileName}>{userDetails.name}</Text>

          <Text style={styles.profileEmail}>{userDetails.email}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Edit Profile'); // Navigate to the EditProfileScreen
            }}>
            <View style={styles.profileAction}>
           
              <Text style={styles.profileActionText}>Edit Profile</Text>

              <FeatherIcon color="#fff" name="edit" size={16} />
            </View>
          </TouchableOpacity>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{header}</Text>
            </View>
            <View style={styles.sectionBody}>
              {items.map(({ id, label, icon, type, value }, index) => {
                return (
                  <View
                    key={id}
                    style={[
                      styles.rowWrapper,
                      index === 0 && { borderTopWidth: 0 },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {
                        // handle onPress
                      }}>
                      <View style={styles.row}>
                        <FeatherIcon
                          color="#616161"
                          name={icon}
                          style={styles.rowIcon}
                          size={22}
                        />

                        <Text style={styles.rowLabel}>{label}</Text>

                        <View style={styles.rowSpacer} />

                        {type === 'select' && (
                          <Text style={styles.rowValue}>{form[id]}</Text>
                        )}

                        {type === 'toggle' && (
                          <Switch
                            onValueChange={(val) => setForm({ ...form, [id]: val })}
                            value={form[id]}
                          />
                        )}

                        {(type === 'select' || type === 'link') && (
                          <FeatherIcon
                            color="#ababab"
                            name="chevron-right"
                            size={22}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() => {

          //This feature logs you out of the firebase 
          signOut(auth).then(() => {
            //Signout successful
            console.warn("You have succesfully been signed out");
            navigation.replace("Home");
          })
            .catch((error) => {
              //An error happened 
              console.warn("Not succesfully signed out");
              console.warn(error);
            });
        }}>
        <View style={styles.profileAction}>
          <Text style={styles.profileActionText}>Sign Out</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  section: {
    paddingTop: 12,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  sectionBody: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  profile: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909',
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '400',
    color: '#848484',
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
    height: 50,
  },
  rowWrapper: {
    paddingLeft: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowIcon: {
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  rowValue: {
    fontSize: 17,
    color: '#616161',
    marginRight: 4,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});


export default SettingScreen;
