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
                  <View style={styles.imageContainer}>
                      <Image
                  style={styles.imageStyle}
                    source={require('../assets/2-removebg-preview.png')}
                  />
                </View>
              <View style={{marginTop: 30, marginLeft: 40}}>
                <Text style={{fontWeight: "bold", fontSize: 20}}>Nike AirForce</Text>
                <Text style={{fontWeight: "400", fontSize: 15}}>$140.00</Text>
              </View>
              
              <View style={styles.addRemove}>
                <Text style={{marginLeft: "6%", color: "#eda155"}}>-</Text>
                <Text style={{marginLeft: 30}}>1</Text>
                <Text style={{marginLeft: 30, color: "#c97a2a"}}>+</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: "row",
               backgroundColor: "#ebebeb", borderRadius: 40, marginTop: 20}}>
                  <View style={styles.imageContainer}>
                      <Image
                  style={styles.imageStyle}
                    source={require('../assets/2-removebg-preview.png')}
                  />
                </View>
              <View style={{marginTop: 30, marginLeft: 40}}>
                <Text style={{fontWeight: "bold", fontSize: 20}}>Nike AirForce</Text>
                <Text style={{fontWeight: "400", fontSize: 15}}>$140.00</Text>
              </View>
              
              <View style={styles.addRemove}>
                <Text style={{marginLeft: "6%", color: "#eda155"}}>-</Text>
                <Text style={{marginLeft: 30}}>1</Text>
                <Text style={{marginLeft: 30, color: "#c97a2a"}}>+</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: "row",
               backgroundColor: "#ebebeb", borderRadius: 40, marginTop: 20}}>
                  <View style={styles.imageContainer}>
                      <Image
                  style={styles.imageStyle}
                    source={require('../assets/2-removebg-preview.png')}
                  />
                </View>
              <View style={{marginTop: 30, marginLeft: 40}}>
                <Text style={{fontWeight: "bold", fontSize: 20}}>Nike AirForce</Text>
                <Text style={{fontWeight: "400", fontSize: 15}}>$140.00</Text>
              </View>
              
              <View style={styles.addRemove}>
                <Text style={{marginLeft: "6%", color: "#eda155"}}>-</Text>
                <Text style={{marginLeft: 30}}>1</Text>
                <Text style={{marginLeft: 30, color: "#c97a2a"}}>+</Text>
              </View>

            </TouchableOpacity>


            <View style={{flexDirection: "row", marginTop: 70}}>
              <Text style={{marginLeft: "4%", fontSize: 20, fontWeight: "200"}}>Total</Text>
              <Text  style={{marginLeft: "70%", fontSize: 20, fontWeight: "bold"}}>$300</Text>
            </View>

              <TouchableOpacity style={{backgroundColor: "#000000", marginTop: 30, paddingTop: 10, paddingBottom: 10, paddingLeft: 0,
               paddingRight: 40, borderRadius: 20, width: 190, marginLeft: 90}}
                onPress={() => navigation.navigate('checkout')}>
                  <Text style={{fontWeight: "bold", fontSize: 20, color: "#ffffff", marginLeft: 30, paddingLeft: 20}}>Checkout </Text>
              </TouchableOpacity>
          </ScrollView>
        </View>
    );
  }
  
const styles = StyleSheet.create({
  imageContainer: {
      backgroundColor: '#edc2be',
      height: 100,
      margin: 10,
      borderRadius: 20,
  },
  imageStyle: {
      borderRadius: 20,
      marginBottom: 60,
      width: 100,
      height: 100,
      resizeMode: 'contain',
},
addRemove: {
  flexDirection: "row",
  marginTop: 80,
  marginBottom: 30,
  backgroundColor: "#ffffff",
  borderRadius: 20,
  width: 100,
  padding: 5
}
});