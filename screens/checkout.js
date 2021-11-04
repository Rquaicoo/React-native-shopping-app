import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function checkout({navigation}){
    return(
        <View>
          <ScrollView>
        <View style={{margin: 20, backgroundColor: "#ffffff"}}>
            <Text style={{marginTop: 20, marginBottom: 20}}>Credit Card</Text>

            <View style={{flexDirection: "row",}}>
                <TouchableOpacity style={{ borderRadius: 10, borderWidth: 1,
                      borderColor: "blue", width: 80, backgroundColor: "#ffffff",
                       paddingLeft: 7,  marginLeft: 30}}>
            <Image
          style={{
            width: 60,
            height: 40,
            resizeMode: 'contain',
          }}
            source={require('../assets/visa.png')}
         /></TouchableOpacity>

<TouchableOpacity style={{ borderRadius: 10, borderWidth: 1,
                      borderColor: "#ebebeb", width: 80, backgroundColor: "#ffffff",
                       paddingLeft: 7, marginLeft: 30}}>
            <Image
          style={{
            width: 60,
            height: 50,
            resizeMode: 'contain',
          }}
            source={require('../assets/mastercard.png')}
         /></TouchableOpacity>

<TouchableOpacity style={{ borderRadius: 10, borderWidth: 1,
                      borderColor: "#ebebeb", width: 80, backgroundColor: "#ffffff",
                       paddingLeft: 7,  marginLeft: 30}}>
            <Image
          style={{
            width: 60,
            height: 50,
            resizeMode: 'contain',
          }}
            source={require('../assets/paypal.png')}
         /></TouchableOpacity>
            </View>

            <View style={{borderRadius: 60, marginTop: 30}}>
            <Image
          style={{
            marginBottom: 60,
            width: 350,
            height: 180,
          }}
            source={require('../assets/card.png')}

           
         />
          <Text style={{color: "blue", fontSize: 16, marginLeft: 100}}>add new card</Text>
         </View>
        </View>

        <TouchableOpacity style={{backgroundColor: "white", marginLeft: 30,
         width: 345, height: 50, paddingTop: 15, paddingLeft: 15,
         borderRadius: 15}}>
            <Text style={{fontWeight: "bold", fontSize: 17}}>Google Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: "white", marginLeft: 30,
         width: 345, height: 50, paddingTop: 15, paddingLeft: 15, marginTop: 10,
         borderRadius: 15}}>
            <Text style={{fontWeight: "bold", fontSize: 17}}>Debit Card</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: "white", marginLeft: 30,
         width: 345, height: 50, paddingTop: 15, paddingLeft: 15, marginTop: 10,
         borderRadius: 15}}>
            <Text style={{fontWeight: "bold", fontSize: 17}}>Mobile Money</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: "#000000", marginTop: 30, paddingTop: 10, paddingBottom: 10, paddingLeft: 0,
           paddingRight: 40, borderRadius: 30, width: 190, marginLeft: 90}}>
        <Text style={{fontWeight: "bold", fontSize: 20, color: "#ffffff", marginLeft: 30, paddingLeft: 20}}>Pay Now </Text>
       
      </TouchableOpacity>
        </ScrollView>
        </View>
    );
  }