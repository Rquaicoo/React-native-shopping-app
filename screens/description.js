import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Searchbar } from 'react-native-paper';


function description({naviage}) {
  return (
      <View>
          <View style={{borderBottomLeftRadius: 200, backgroundColor: "#000000", borderBottomRightRadius: 200,}}>
          <Image
                  style={{
                      height: 300,
                      width: 300,
                      resizeMode: 'contain',
                      paddingBottom: 1,
                      marginLeft: 40,
                     
                  }}
                  
                  source={require('../assets/1-removebg.png')}
                  />
          </View>

          <TouchableOpacity style={{backgroundColor: "#000000", marginTop: 30, paddingTop: 10, paddingBottom: 10, paddingLeft: 80, paddingRight: 80, borderRadius: 30}}
      onPress={() => navigation.navigate('homepage')}>
        <Text style={{fontWeight: "bold", fontSize: 20, color: "#ffffff", marginLeft: 30}}>Add to cart </Text>
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

export default description;