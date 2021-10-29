import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function homepage({navigation}) {
    return (
    <View>
        
        <View>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>Hello Russy</Text>
            <Text style={{fontSize: 18, fontWeight: "100"}}>Let's get somethings?</Text>
        </View>
        
        <View style={{flexDirection: "row"}}>
        
            <View style={{backgroundColor: "#FF5733", width: 300, paddingBottom: 20, paddingTop: 30,paddingLeft: 20, paddingRight: 80, borderRadius: 20, marginLeft: 20}}>
                <Text style={{fontSize: 20, fontWeight: "bold", color: "#ffffff"}}>30% OFF DURING COVID-19</Text>

                <View style={{flexDirection: "row"}}>
                <TouchableOpacity style={{backgroundColor: "#ffffff", paddingLeft: 15, borderRadius: 30, width: 100, marginTop: 20}}>
                    <Text style={{
                        fontSize: 15, fontWeight: "100", color: "#ee7600", justifyContent: 'center', paddingTop: 14, paddingLeft: 7, paddingBottom: 13, fontWeight: 'bold'
                        }}>Get Now</Text>
                </TouchableOpacity>
                <Image
                style={{
                    height: 50,
                    width: 200,
                    resizeMode: 'contain',
                    paddingBottom: 50
                }}
                
                source={require('../assets/shopping-bags-500x500_adobespark.png')}
                
                />
                </View>
            </View>

                <View style={{backgroundColor: "#215fc2", width: 300, paddingBottom: 20, paddingTop: 30,paddingLeft: 20, paddingRight: 80, borderRadius: 20, marginLeft: 20}}>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "#ffffff"}}>30% OFF DURING COVID-19</Text>

                    <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={{backgroundColor: "#ffffff", paddingLeft: 15, borderRadius: 30, width: 100, marginTop: 20}}>
                        <Text style={{fontSize: 15, fontWeight: "100", color: "#ee7600", justifyContent: 'center', paddingTop: 14, paddingLeft: 7, paddingBottom: 13}}>Get Now</Text>
                    </TouchableOpacity>
                    <Image
                    style={{
                        height: 50,
                        width: 200,
                        resizeMode: 'contain',
                        paddingBottom: 50
                    }}
                    
                    source={require('../assets/shopping-bags-500x500_adobespark.png')}
                    
                    />
                    </View>
                </View>
                
            </View>

        <View style={{marginTop: 20, }}>
            <Text>Top categories</Text>
            <Text style={{textAlign: "right", marginBottom: 90}}>See all</Text>
        </View>
            
    </View>
    );
}