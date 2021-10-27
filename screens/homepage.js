import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function homepage({navigation}) {
    return (
    <View>
        <View>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>Hello Russy</Text>
            <Text style={{fontSize: 18, fontWeight: "100"}}>Let's get somethings?</Text>
        </View>
        
        <View style={{backgroundColor: "#000000", width: 300, paddingBottom: 20, paddingTop: 30,paddingLeft: 20, paddingRight: 80, borderRadius: 20}}>
            <Text style={{fontSize: 20, fontWeight: "bold", color: "#ffffff"}}>30% OFF DURING COVID-19</Text>

            <Image
            style={{
                height: 100,
                width: 100,
                paddingleft: 50,
            }}
            source={require('../assets/shopping-bags-500x500_adobespark.png')}
            />

            <TouchableOpacity style={{backgroundColor: "#ffffff", width: 90, paddingLeft: 15, borderRadius: 10}}>
                <Text style={{fontSize: 15, fontWeight: "100", color: "#ee7600"}}>Get Now</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}