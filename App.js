import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          />
          <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
      {/* <WelcomeScreen />
      <MainScreen /> */}
    </NavigationContainer>
  )
}

export default App;