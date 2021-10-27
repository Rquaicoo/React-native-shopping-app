import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function login({navigation}){
  const [text, setText] = useState('')
  const [password, setPassword] = useState('')
  return(
      <View style={styles.login_container}>
        <Text style={{fontWeight: "bold", color: "#000000", marginTop: 50, fontSize: 30}}>Hello Again!</Text>
        <Text style={{fontWeight: "100", color: "#000000", fontSize: 20, marginTop: 10}}>Welcome back, you've {"\n"}       been missed</Text>

      
        <TextInput style={{height: 50, borderColor: "#000000", borderWidth: 1, width: 300, borderRadius: 15, paddingLeft: 10, marginTop: 40}}
        placeholder="Enter username" 
        onChangeText={text => setText(text)}
        defaultValue={text}/>

      <TextInput style={{height: 50, borderColor: "#000000", borderWidth: 1, width: 300, borderRadius: 15, paddingLeft: 10, marginTop: 20}}
        placeholder="Enter password" 
        onChangeText={password => setPassword(password)}
        defaultValue={password}/>
      
      
      <TouchableOpacity style={{backgroundColor: "#000000", marginTop: 30, paddingTop: 20, paddingBottom: 20, paddingLeft: 120, paddingRight: 120, borderRadius: 30}}
      onPress={() => navigation.navigate('homepage')}>
        <Text style={{fontWeight: "bold", fontSize: 20, color: "#ffffff"}}>Sign In</Text>
      </TouchableOpacity>

      <Text style={{marginTop: 20}}>_______ or connect with _______</Text>


      <View style={{flex: 4}}>
      <View style={{flex: 1, flexDirection: "row", justifyContent: "center", marginTop: 20}}>
      <TouchableOpacity style={{flex: 1, marginLeft: 20}}>
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


      
        <Text style={{flex: 2}}>Not a memeber? <Text style={{color:"blue"}} 
        onPress={() => navigation.navigate('signUp')}>Register now</Text></Text>
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