import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import { AntDesign} from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Searchbar } from 'react-native-paper';


function description({navigation}) {
  return (
      <View style={{backgroundColor: "#ffffff"}}>
        <ScrollView>
          <View style={{borderBottomLeftRadius: 200, backgroundColor: "#ebebeb", borderBottomRightRadius: 200,}}>
          <Image
                  style={{
                      height: 300,
                      width: "85%",
                      resizeMode: 'contain',
                      paddingBottom: 1,
                      marginLeft: 40,
                     
                  }}
                  
                  source={require('../assets/2-removebg-preview.png')}
                  />
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                  <View style={{backgroundColor: "orange", height: 10, width:10, borderRadius:30, marginLeft: 180}}>
                  </View>
                  <View style={{backgroundColor: "#ffffff", height: 10, width:10, borderRadius:30, marginLeft: 10}}>
                  </View>
                  </View>
          </View>




          <View style={{marginTop: 50, marginLeft: 20}}>
            <Text style={{fontWeight: "bold", fontSize: 20, }}>Nike Pergasus</Text>
            
            <View style={{flexDirection: "row", marginTop: 20}}>
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />

              <Text style={{fontWeight: "bold", marginLeft: "45%"}}>(4500 reviews)</Text>
            </View>

            <Text style={{fontWeight: "bold", fontSize: 20, marginTop: 20}}>$140.00</Text>
            <Text>Available in stock</Text>

            <Text style={{fontWeight: "bold", fontSize: 15, marginTop:25}}>About</Text>
            <Text style={{fontSize: 15, marginTop: 5}}>Fast Shipping. An Icon On The Streets, The Air Force 1 Is Among The Most Popular Designs Of All Time. 
              New Sneakers. Air Jordans. Shop All Yeezy 350 Styles. 
              Rare and Exclusive. In Stock, Ready To Ship. Jordans.</Text>

              <View style={{flexDirection: "row", marginTop: 20}}>
                <TouchableOpacity 
                style={{borderColor: "gray", 
                borderRadius: 10,
                 height: 40, width: 40, 
                 borderWidth: 0.4, paddingLeft: 10, 
                 paddingTop: 10}}><Text>35</Text></TouchableOpacity>

              <TouchableOpacity 
                style={{borderColor: "#000000", marginLeft: 20,
                borderRadius: 10,
                 height: 40, width: 40, 
                 borderWidth: 0.4, paddingLeft: 10, 
                 paddingTop: 10}}><Text>36</Text></TouchableOpacity>

                <TouchableOpacity 
                style={{borderColor: "#000000", marginLeft: 20,
                borderRadius: 10,
                 height: 40, width: 40, 
                 borderWidth: 0.4, paddingLeft: 10, 
                 paddingTop: 10}}><Text>37</Text></TouchableOpacity>

                <TouchableOpacity 
                style={{borderColor: "#000000", marginLeft: 20,
                borderRadius: 10,
                 height: 40, width: 40, 
                 borderWidth: 0.4, paddingLeft: 10, 
                 paddingTop: 10}}><Text>38</Text></TouchableOpacity>

                <TouchableOpacity 
                style={{borderColor: "#000000", marginLeft: 20,
                borderRadius: 10,
                 height: 40, width: 40, 
                 borderWidth: 0.4, paddingLeft: 10, 
                 paddingTop: 10}}><Text>39</Text></TouchableOpacity>
              </View>
          </View>
          
          <TouchableOpacity style={{backgroundColor: "#000000", marginTop: 20, paddingTop: 20, paddingBottom: 20, paddingLeft: 0,
           paddingRight: 40, borderRadius: 30, width: 190, marginLeft: "25%"}}
      onPress={() => navigation.navigate('cart')}>
        <Text style={{fontWeight: "bold", fontSize: 20, color: "#ffffff", marginLeft: 30, paddingLeft: 20}}>Add to cart </Text>
       
      </TouchableOpacity>
      
      </ScrollView>
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