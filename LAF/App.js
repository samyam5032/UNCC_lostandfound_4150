import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';




const App=()=>{
  return(
    <SafeAreaView style={styles.root}>
       <Text>Hello World !!!!</Text>
    <SignInScreen/>
    </SafeAreaView>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 export default App;
