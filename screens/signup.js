import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function signUp({navigation}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    return(
        <View style={styles.login_container}>
          <Text style={{fontWeight: "bold", color: "#000000", marginTop: 50, fontSize: 30}}>Howdy Mate!</Text>
          <Text style={{fontWeight: "100", color: "#000000", fontSize: 20, marginTop: 10}}>    Welcome to Russify {"\n"}please enter your details</Text>
         
          <View style={{flex: 10}}>
          <View style={{flex: 1, flexDirection: "row", justifyContent: "center", marginTop: 20}}>
        <TouchableOpacity style={{flex: 1, marginLeft: 70}}>
        <Image
          style={{
            borderRadius: 20,
            width: 25,
            height: 25,
          }}
            source={require('../assets/Illustration-of-Google-icon-on-transparent-background-PNG.png')}
         />
          </TouchableOpacity>
  <TouchableOpacity style={{flex: 1}}> 
  <Image
          style={{
            borderRadius: 20,
            width: 25,
            height: 25,
          }}
            source={require('../assets/apple.png')}
         />
         </TouchableOpacity>
  <TouchableOpacity style={{flex: 1}}>
  <Image
          style={{
            borderRadius: 20,
            width: 25,
            height: 25,
          }}
            source={require('../assets/facebook.png')}
         />
        </TouchableOpacity>
        </View>
  
          <View style={{flex: 8}}>
              <TextInput style={{height: 50, borderColor: "#000000", borderWidth: 1, width: 300, borderRadius: 15, paddingLeft: 10, marginTop: 20}}
                placeholder="Enter username        ex. rquaicoo" 
                onChangeText={name => setName(name)}
                defaultValue={name}/>
              
              <TextInput style={{height: 50, borderColor: "#000000", borderWidth: 1, width: 300, borderRadius: 15, paddingLeft: 10, marginTop: 20}}
                placeholder="Enter email" 
                onChangeText={email => setEmail(name)}
                defaultValue={email}/>
               
               <TextInput style={{height: 50, borderColor: "#000000", borderWidth: 1, width: 300, borderRadius: 15, paddingLeft: 10, marginTop: 20}}
                placeholder="Enter password" 
                onChangeText={password1 => setPassword1(name)}
                defaultValue={password1}/>
  
                <TextInput style={{height: 50, borderColor: "#000000", borderWidth: 1, width: 300, borderRadius: 15, paddingLeft: 10, marginTop: 20}}
                placeholder="Confirm password" 
                onChangeText={password2 => setPassword2(name)}
                defaultValue={password2}/>
              
                    <TouchableOpacity style={{backgroundColor: "#000000", marginTop: 30, paddingTop: 20, paddingBottom: 20, paddingLeft: 120, paddingRight: 120, borderRadius: 30}}>
                <Text style={{fontWeight: "bold", fontSize: 20, color: "#ffffff"}}>Register</Text>
              </TouchableOpacity>
                </View>
          </View>
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