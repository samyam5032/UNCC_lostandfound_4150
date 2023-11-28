import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BookmarkProvider } from './src/components/contexts/BookmarkContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/SignInScreen';
import FAQScreen from './src/screens/FAQScreen';
import Accordian from './src/components/Accordion';
import HomePageScreen from './src/screens/HomePageScreen';
import ProductList from './src/components/ProductList';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import DrawerNavigation from './src/components/DrawerNavigation';
import StackNavigation from './src/components/StackNavigation/StackNavigation';

//Stack navigator to facilitate switching between pages

const App = () => {
  return (
      <BookmarkProvider>
      <DrawerNavigation/>
      </BookmarkProvider>
    // <SafeAreaView style={styles.root}>

    // {/* <SignInScreen/> */}
    // {/* <FAQScreen/> */}
    // <HomePageScreen/>
    // <Text>Hello World !!!!</Text>
    // </SafeAreaView>
  );
};

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello World !!!!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#003822',
    alignItems: 'center',

  },
});
export default App;
