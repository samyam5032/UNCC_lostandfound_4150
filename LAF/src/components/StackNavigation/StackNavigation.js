import React from 'react';
import {
    Text,
    TouchableOpacity,

} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FAQScreen from '../../screens/FAQScreen';
import HomePageScreen from '../../screens/HomePageScreen';
import LandingScreen from '../../screens/LandingScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import SignInScreenNew from '../../screens/SignInScreenNew';
import DrawerNavigation from '../DrawerNavigation';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';
import EditProfileScreen from '../../screens/EditProfileScreen';
import LogoutScreen from '../../screens/LogoutScreen';
import ReportBugScreen from '../../screens/ReportBugScreen';
import ContactUsScreen from '../../screens/ContactUsScreen';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="LandingScreen">
            <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={DrawerNavigation}  options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="FAQScreen" component={FAQScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="SignIn" component={SignInScreenNew}  options={{ headerShown: false }}/>
            <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Edit Profile" component={EditProfileScreen}  options={{ headerShown: false }}  />
            <Stack.Screen name="Sign Out" component={LogoutScreen}  options={{ headerShown: false }}  />
            <Stack.Screen name="Report Bug" component={ReportBugScreen}  options={{ headerShown: false }}  />
            <Stack.Screen name="Contact Us" component={ContactUsScreen}  options={{ headerShown: false }}  />

        </Stack.Navigator>
    );
};
export default StackNavigation;