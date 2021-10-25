import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import signUp from "./screens/signUp";
import logIn from './screens/login';
import welcome from './screens/welcome';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={signUp} options={{title: "Sign Up"}} />
        <Stack.Screen name="Login" component={logIn} options={{title: "Login"}} />
        <Stack.Screen name="" component={welcome} options={{title: "Welcome"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
