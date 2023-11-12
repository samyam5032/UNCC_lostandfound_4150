import React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomePageScreen from '../../screens/HomePageScreen';
import SignInScreen from '../../screens/SignInScreen';
import FAQScreen from '../../screens/FAQScreen';
import LocationScreen from '../../screens/LocationScreen';
import ProfileScreen from '../../screens/ProfileScreen';     
import SettingScreen from '../../screens/SettingScreen';
import LandingScreen from '../../screens/LandingScreen';
import LogoutScreen from '../../screens/LogoutScreen';
import EditProfileScreen from '../../screens/EditProfileScreen';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomePageScreen} />
        <Drawer.Screen name="My Profile" component={ProfileScreen} />
        <Drawer.Screen name="Location" component={LocationScreen} />
        <Drawer.Screen name="FAQ" component={FAQScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
        <Drawer.Screen name="Landing Page" component={LandingScreen} />
        <Drawer.Screen name="Logout" component={LogoutScreen} />
        <Drawer.Screen name="Edit Profile" component={EditProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;