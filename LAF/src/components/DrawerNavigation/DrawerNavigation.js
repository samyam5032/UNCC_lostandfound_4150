import React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomePageScreen from '../../screens/HomePageScreen';
import SignInScreen from '../../screens/SignInScreen';
import FAQScreen from '../../screens/FAQScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomePageScreen} />
        <Drawer.Screen name="FAQ" component={FAQScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;