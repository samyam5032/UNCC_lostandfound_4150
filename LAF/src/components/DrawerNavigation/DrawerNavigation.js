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
import CreateAccountScreen from '../../screens/CreateAccountScreen';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import SignInScreenNew from '../../screens/SignInScreenNew';
import UploadScreen from '../../screens/UploadScreen';


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
        <Drawer.Screen name="Sign In" component={SignInScreen}/>
        <Drawer.Screen name="Create Account" component={CreateAccountScreen}/>
        <Drawer.Screen name="Forgot Password" component={ForgotPasswordScreen}/>
        <Drawer.Screen name="Register" component={RegisterScreen}/>
        <Drawer.Screen name="Sign In New" component={SignInScreenNew}/>
        <Drawer.Screen name="Upload Item" component={UploadScreen}/>
      </Drawer.Navigator>
      </NavigationContainer>
  );
};

export default DrawerNavigation;