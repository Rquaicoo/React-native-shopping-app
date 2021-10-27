import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function welcome({navigation}){
    return(
        <View style = {styles.container}>
          <Image
          style={{
            borderRadius: 20,
            marginBottom: 60,
            width: 300,
            height: 190,
          }}
            source={require('../assets/sneaker-guide-6-784x441_adobespark.png')}
         />
          
          <Text style={{fontWeight: "bold", color: "#ffffff", marginTop: 50, fontSize: 30}}>Let's improve your {"\n"}       appearance</Text>
          <Text style={{color:"#ffffff", marginTop: 10}}>find cool shoes to improve your appearance</Text>
          <TouchableOpacity
           style={{backgroundColor: "#ffffff", paddingTop: 20, paddingBottom: 20, paddingLeft: 70, paddingRight: 70, borderRadius: 30, margin: 50}}
           onPress={() => navigation.navigate('logIn')}>
            <Text style={{fontWeight: "bold", fontSize: 20}}>Get Started</Text>
          </TouchableOpacity>
        </View>
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