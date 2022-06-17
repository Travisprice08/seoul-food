import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { 
  Dimensions,
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  ImageBackground, 
  Button, 
  Platform, 
  StatusBar 
} from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MainScreen from "./app/screens/MainScreen";

// export default function App() {

//   return (
//     // <WelcomeScreen />
//     <MainScreen />
//   );
// }

const App = () => {
  return (
    <NavigationContainer>
      <WelcomeScreen />
      <MainScreen />
    </NavigationContainer>
  )
}

export default App;