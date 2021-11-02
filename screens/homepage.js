import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Searchbar } from 'react-native-paper';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};



export default function homepage({navigation}) {
    return (
      
    <View style={styles.container}>

        <View style={{marginLeft: 20, marginTop: 20}}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>Hello Russy</Text>
            <Text style={{fontSize: 15, fontWeight: "100", color: "gray"}}>Let's get somethings?</Text>
        </View>

            <View style={{marginTop: 20, backgroundColor: "#2e2d2d", width: 300, height: 150, paddingBottom: 20, paddingTop: 30,paddingLeft: 20, paddingRight: 80, borderRadius: 20, marginLeft: 20}}>
            
              <View style={{flexDirection: "row"}}>
                  <View>
                    <Text style={{color: "#ffffff"}}>Nike. Just Do It</Text>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "#ffffff"}}>A Heritage of {"\n"}Speed</Text>
                  </View>
                <View>
                  <Image
                  style={{
                      height: 200,
                      width: 200,
                      resizeMode: 'contain',
                      paddingBottom: 1,
                     
                  }}
                  
                  source={require('../assets/running_adobespark.png')}
                  />
                </View>
                </View>
              
            </View>
  
        
        <View style={{flexDirection: "row", marginLeft: 15, marginTop: 40}}>
        <TouchableOpacity style={{borderRadius: 30, backgroundColor: "#ffffff", padding: 7}}>
            <Image
        style={{
          borderRadius: 20,
          width: 30,
          height: 30,
          resizeMode: 'contain',
        }}
          source={require('../assets/adidas.png')}
       />
        </TouchableOpacity>
        
        <TouchableOpacity style={{marginLeft: 30, borderRadius: 30, padding: 7, backgroundColor: "#f0eeeb"}}>
        <Image
        style={{
          borderRadius: 20,
          width: 30,
          height: 30,
          resizeMode: 'contain',
        }}
          source={require('../assets/versace.png')}
       />
        </TouchableOpacity>

        <TouchableOpacity style={{marginLeft: 30, borderRadius: 30, padding: 7, backgroundColor: "#f0eeeb"}}>
        <Image
        style={{
          borderRadius: 20,
          width: 30,
          height: 30,
          resizeMode: 'contain',
        }}
          source={require('../assets/nike.png')}
       />
        </TouchableOpacity>

        <TouchableOpacity style={{marginLeft: 30, borderRadius: 30, padding: 7, backgroundColor: "#f0eeeb"}}>
        <Image
        style={{
          borderRadius: 20,
          width: 30,
          height: 30,
          resizeMode: 'contain',
        }}
          source={require('../assets/puma.png')}
       />
        </TouchableOpacity>
        </View>

          <Text style={{marginLeft: 30, fontWeight: "bold", marginTop: 20}}>Selected for you</Text>
        <View style={{flexDirection: "row"}}>
        <TouchableOpacity style={{borderRadius: 30, marginLeft: 20, marginTop: 20, borderColor: "#f0eeeb"}}>
                <TouchableOpacity style={{backgroundColor: "#f0eeeb",  borderRadius: 20,}}>
                      <Image
                  style={{
                    borderRadius: 20,
                    width: 150,
                    height: 150,
                    resizeMode: 'contain',
                  }}
                    source={require('../assets/1-removebg.png')}
                />

                <Image
                  style={{
                    borderRadius: 20,
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                    marginLeft: 100
                  }}
                    source={require('../assets/nike.png')}
                />
                </TouchableOpacity>
                  <View style={{marginLeft: 10}}>
                      <Text style={{fontWeight: "bold", fontSize: 17}}>$140</Text> 
                      <Text style={{fontWeight: "bold"}}>Nike Pergasus</Text>
                      
                  </View>
            </TouchableOpacity>

            <TouchableOpacity style={{borderRadius: 30, marginLeft: 50, marginTop: 40, borderColor: "#f0eeeb"}}
            onPress={() => navigation.navigate('description')}>
                <TouchableOpacity style={{backgroundColor: "#f0eeeb",  borderRadius: 20,}}>
                      <Image
                  style={{
                    borderRadius: 20,
                    width: 150,
                    height: 150,
                    resizeMode: 'contain',
                  }}
                    source={require('../assets/1-removebg.png')}
                />

                <Image
                  style={{
                    borderRadius: 20,
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                    marginLeft: 100
                  }}
                    source={require('../assets/nike.png')}
                />
                </TouchableOpacity>
                <View style={{flexDirection: "row"}}>
                  <View style={{marginLeft: 10, }}>
                      <Text style={{fontWeight: "bold", fontSize: 17}}>$140</Text> 
                      <Text style={{fontWeight: "bold"}}>Nike Pergasus</Text>
                      
                  </View>
                  <View style={{marginLeft: 20, marginTop: 7}}>
                  <Feather name="heart" size={20} color="black"/>
                  </View>
                  </View>
            </TouchableOpacity>
    </View>
            
    </View>
    );
}


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={homepage}/>
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ffffff"
    },
  });