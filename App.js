import React from "react";
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

export default function App() {

  return (
    <WelcomeScreen />
    // <MainScreen />
  );
}


