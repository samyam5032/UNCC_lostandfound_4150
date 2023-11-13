import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../screens/SignInScreen';
import CreateAccountScreen from '../../screens/CreateAccountScreen';
import FAQScreen from '../../screens/FAQScreen';
import HomePageScreen from '../../screens/HomePageScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () =>{
    return(
        <Stack.Navigator initialRouteName="HomePageScreen">
            <Stack.Screen name="HomePageScreen" component={HomePageScreen}/>
            <Stack.Screen name="SignInScreen" component={SignInScreen}/>
            <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen}/>
            <Stack.Screen name="FAQScreen" component={FAQScreen}/>
        </Stack.Navigator>
    );
};
export default StackNavigation;