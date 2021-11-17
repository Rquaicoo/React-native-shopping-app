import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Switch, ScrollView, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const showAlert = () =>
  Alert.alert(
    "Payment submitted",
    "You will recieve your order soon",
    [
      {
        text: "Close",
        onPress: () => Alert.alert("Thanks for shopping"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "Thanks for shopping"
        ),
    }
  );


export default function checkout({navigation}){
const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View style={{backgroundColor: "#ebebeb"}}>
          <ScrollView>
        <View style={{margin: 20, backgroundColor: "#ffffff", borderRadius: 20}}>
            <Text style={{marginTop: 20, marginBottom: 20, marginLeft:37,fontSize: 15, fontWeight: "bold"}}>Credit Card</Text>

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

            <View style={{borderRadius: 50, marginTop: 30}}>
            <Image
          style={{
            marginBottom: 60,
            width: 350,
            height: 180,
          }}
            source={require('../assets/card.png')}

           
         />
          <Text style={{color: "blue", fontSize: 16, marginLeft: "35%", marginTop: -50}}>add new card</Text>
         </View>
        </View>

        <TouchableOpacity style={styles.payStyle}>
            <Text style={{fontWeight: "bold", fontSize: 17}}>Google Pay</Text>
            <View style={{marginLeft: "60%"}}><AntDesign name="right" size={24} color="blue" /></View>
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.payStyle}>
            <Text style={{fontWeight: "bold", fontSize: 17}}>Debit Card</Text>
            <View style={{marginLeft: "60%"}}><AntDesign name="right" size={24} color="blue" /></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.payStyle}>
            <Text style={{fontWeight: "bold", fontSize: 17}}>Mobile Money</Text>
            <View style={{marginLeft: "52%"}}><AntDesign name="right" size={24} color="blue" /></View>
        </TouchableOpacity>

        <View style={{flexDirection: "row"}}>
        <Text style={{marginLeft: "10%", marginTop: "4%", fontWeight: "bold"}}>Send reciept to your email </Text>
        
        <View style={{marginLeft: "25%"}}><Switch
        trackColor={{ false: "#ffffff", true: "#000000" }}
        thumbColor={isEnabled ? "#ffffff" : "#000000"}
        ios_backgroundColor="#000000"
        onValueChange={toggleSwitch}
        value={isEnabled}/></View>
        </View>

        <TouchableOpacity style={{backgroundColor: "#000000", marginTop: 30, paddingTop: 10, paddingBottom: 10, paddingLeft: 60,
           paddingRight: 40, borderRadius: 30, width: 300, marginLeft: 50}}  onPress={showAlert}>
        <Text style={{fontWeight: "bold", fontSize: 20, color: "#ffffff", marginLeft: 30, paddingLeft: 20}}>Pay Now </Text>
       
      </TouchableOpacity>

        </ScrollView>
        </View>
    );
  }
  const styles = StyleSheet.create({
    payStyle: {
      flexDirection: "row",
      marginTop: 20,
      backgroundColor: "white",
      marginLeft: 30,
      width: 345,
      height: 50,
      paddingTop: 15, 
      paddingLeft: 15,
      borderRadius: 15
    },
  });