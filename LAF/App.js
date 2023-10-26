import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';




const App=()=>{
  return(
    <SafeAreaView style={styles.root}>
    
    <SignInScreen/>
    <Text>Hello World !!!!</Text>
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
    backgroundColor: '#003822',
    alignItems: 'center',
  
  },
});
 export default App;
