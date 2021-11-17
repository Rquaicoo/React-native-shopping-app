import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather, Entypo, Ionicons, AntDesign } from '@expo/vector-icons'


export default function cart({navigation}){
    return(
        <View>
          <ScrollView>
              <TouchableOpacity style={{flexDirection: "row",
               backgroundColor: "#ffffff", borderRadius: 40, marginTop: 20, height: 120}}>
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
                <TouchableOpacity style={{marginLeft: "6%", color: "#eda155"}}><Ionicons name="ios-remove-circle" size={24} color="black" /></TouchableOpacity>
                <Text style={{marginLeft: 10}}>1</Text>
                <TouchableOpacity style={{marginLeft: "15%", color: "#c97a2a"}}><Ionicons name="add-circle" size={24} color="#c97a2a" /></TouchableOpacity>
              </View>

            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: "row",
               backgroundColor: "#ffffff", borderRadius: 40, marginTop: 20, height: 120}}>
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
                <TouchableOpacity style={{marginLeft: "6%", color: "#eda155"}}><Ionicons name="ios-remove-circle" size={24} color="black" /></TouchableOpacity>
                <Text style={{marginLeft: 10}}>1</Text>
                <TouchableOpacity style={{marginLeft: "15%", color: "#c97a2a"}}><Ionicons name="add-circle" size={24} color="#c97a2a" /></TouchableOpacity>
              </View>

            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: "row",
               backgroundColor: "#ffffff", borderRadius: 40, marginTop: 20, height: 120}}>
                  <View style={styles.imageContainer}>
                      <Image
                  style={styles.imageStyle}
                    source={require('../assets/Where_To_Buy_Daniel_Arsham_adidas_Futurecraft_4D_SneakerNews_com-removebg-preview.png')}
                  />
                </View>
              <View style={{marginTop: 30, marginLeft: 40}}>
                <Text style={{fontWeight: "bold", fontSize: 20}}>Nike AirForce</Text>
                <Text style={{fontWeight: "400", fontSize: 15}}>$140.00</Text>
              </View>
              
              <View style={styles.addRemove}>
                <TouchableOpacity style={{marginLeft: "6%", color: "#eda155"}}><Ionicons name="ios-remove-circle" size={24} color="black" /></TouchableOpacity>
                <Text style={{marginLeft: 10}}>1</Text>
                <TouchableOpacity style={{marginLeft: "15%", color: "#c97a2a"}}><Ionicons name="add-circle" size={24} color="#c97a2a" /></TouchableOpacity>
              </View>

            </TouchableOpacity>

            <View style={{marginLeft: "4%", marginTop: 20}}>
              <TouchableOpacity style={{flexDirection: "row", flex: 3, backgroundColor: "#ffffff", padding: 15, borderRadius: 20}}>
                <Text style={{flex: 2, fontSize: 18, fontWeight: "bold"}}>Offers</Text>
                <Text style={{flex: 1, fontSize: 18, color: "blue"}}>add a code</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{padding: 25, backgroundColor: "#ffffff", borderRadius: 20, width: "96%", marginTop: 10,  padding: 15, borderRadius: 20}}>
              <TouchableOpacity style={{flexDirection: "row", flex: 3, marginTop: -19}}>
                <Text style={{flex: 2, fontSize: 15, fontWeight: "bold"}}>Order Summary</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 15, fontWeight: "bold"}}>____________________________________</Text>


                <TouchableOpacity style={{flexDirection: "row", flex: 3, marginTop: 20}}>
                    <Text style={{flex: 2, fontSize: 15, fontWeight: "bold"}}>Subtotal</Text>
                    <Text style={{flex: 1, fontSize: 15, fontWeight: "bold", color: "blue"}}>$12345.00</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flexDirection: "row", flex: 3}}>
                    <Text style={{flex: 2, fontWeight: "bold"}}>Tax</Text>
                    <Text style={{flex: 1, color: "blue", fontWeight: "bold"}}>$50.00</Text>
                  </TouchableOpacity>

                  <View style={{flexDirection: "row", marginTop: 30,}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>Total</Text>
                <Text  style={{marginLeft: "52%", fontSize: 20, fontWeight: "bold", color: "blue"}}>$300</Text>
              </View>
            </TouchableOpacity>
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
  backgroundColor: "#ebebeb",
  borderRadius: 20,
  width: 100,
  padding: 5,
  height: "30%"
  
}
});