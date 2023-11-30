import { initializeApp,} from "firebase/app";
import { initializeAuth, getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// firebase config key setup

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBua0HipuA5nvJA-lbj7MxJJoozyRfaPQU",
  authDomain: "lostandfound-1eb11.firebaseapp.com",
  projectId: "lostandfound-1eb11",
  storageBucket: "lostandfound-1eb11.appspot.com",
  messagingSenderId: "408733032962",
  appId: "1:408733032962:web:7326e83c1e018857ff3d1b",
  measurementId: "G-FYVX7WLNZT"
}

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default { app, auth };