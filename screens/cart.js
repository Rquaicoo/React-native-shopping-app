import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function cart({navigation}){
    return(
        <View>
          <ScrollView>
              <TouchableOpacity style={{flexDirection: "row",
               backgroundColor: "#ebebeb", borderRadius: 40, marginTop: 20}}>
              <Image
          style={{
            borderRadius: 20,
            marginBottom: 60,
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
            source={require('../assets/2-removebg-preview.png')}
         />
        <View style={{marginTop: 30, marginLeft: 40}}>
         <Text style={{fontWeight: "bold", fontSize: 20}}>Nike AirForce</Text>
         <Text style={{fontWeight: "400", fontSize: 15}}>$140.00</Text>
         </View>
              </TouchableOpacity>

              <TouchableOpacity style={{flexDirection: "row",
               backgroundColor: "#ebebeb", borderRadius: 40, marginTop: 20}}>
              <Image
          style={{
            borderRadius: 20,
            marginBottom: 60,
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
            source={require('../assets/2-removebg-preview.png')}
         />
        <View style={{marginTop: 30, marginLeft: 40}}>
         <Text style={{fontWeight: "bold", fontSize: 20}}>Nike AirForce</Text>
         <Text style={{fontWeight: "400", fontSize: 15}}>$140.00</Text>
         </View>
              </TouchableOpacity>

              <TouchableOpacity style={{flexDirection: "row",
               backgroundColor: "#ebebeb", borderRadius: 40, marginTop: 20}}>
              <Image
          style={{
            borderRadius: 20,
            marginBottom: 60,
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
            source={require('../assets/2-removebg-preview.png')}
         />
        <View style={{marginTop: 30, marginLeft: 40}}>
         <Text style={{fontWeight: "bold", fontSize: 20}}>Nike AirForce</Text>
         <Text style={{fontWeight: "400", fontSize: 15}}>$140.00</Text>
         </View>
              </TouchableOpacity>

              <TouchableOpacity style={{backgroundColor: "#000000", marginTop: 30, paddingTop: 10, paddingBottom: 10, paddingLeft: 0,
           paddingRight: 40, borderRadius: 30, width: 190, marginLeft: 90}}
      onPress={() => navigation.navigate('checkout')}>
        <Text style={{fontWeight: "bold", fontSize: 20, color: "#ffffff", marginLeft: 30, paddingLeft: 20}}>Checkout </Text>
       
      </TouchableOpacity>
          </ScrollView>
        </View>
    );
  }