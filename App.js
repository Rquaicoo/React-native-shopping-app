import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import login from "./screens/login"
import welcome from "./screens/welcome"
import signUp from "./screens/signup"
import homepage from './screens/homepage';
import description from './screens/description';


const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" " component={welcome} 
        options={{ 
        headerStyle: {
          backgroundColor: "#121212"
        }
      }} />
        <Stack.Screen name="signUp" component={signUp} options={{title: "Sign Up"}} />
        <Stack.Screen name="logIn" component={login} options={{title: "Login"}} />
        <Stack.Screen name="homepage" component={homepage} options={{title: "homepage"}} />
        <Stack.Screen name="description" component={description} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
});

export default App;