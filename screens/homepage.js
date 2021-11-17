import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Feather, Entypo, Ionicons, AntDesign } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Searchbar } from 'react-native-paper';





export default function homepage({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
    return (
      
    <View style={styles.container}>
      <Searchbar
      placeholder="What are you looking for?"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{borderRadius: 15, width: 350, marginLeft: 20, marginTop: 20}}
    />
        <ScrollView>

            <View style={{marginTop: 20, backgroundColor: "#2e2d2d", width: '90%', height: 150, paddingBottom: 20, paddingTop: 30,paddingLeft: 20, paddingRight: 80, borderRadius: 20, marginLeft: 20}}>
            
              <View style={{flexDirection: "row"}}>
                  <View style={{marginTop: 20, marginLeft: 10}}>
                    <Text style={{color: "#ffffff"}}>Nike. Just Do It</Text>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "#ffffff", marginTop: 5}}>A HERITAGE{"\n"} OF SPEED</Text>
                  </View>
                <View>
                  <Image
                  style={{
                      marginTop: -45,
                      height: 200,
                      width: 280,
                      resizeMode: 'contain',
                      paddingBottom: 1,
                     
                  }}
                  
                  source={require('../assets/running_adobespark.png')}
                  />
                </View>
                </View>
              
            </View>
  
        
        <View style={{flexDirection: "row", marginLeft: 30, marginTop: 40}}>
        <View>
        <TouchableOpacity style={{borderRadius: 30, backgroundColor: "#ebebeb", padding: 7}}>
            <Image
        style={{
          borderRadius: 20,
          width: 50,
          height: 50,
          resizeMode: 'contain',
        }}
          source={require('../assets/adidas.png')}
       />
        </TouchableOpacity>
        <Text style={{marginLeft: 10}}>Adidas</Text>
        </View>
        
        <View>
        <TouchableOpacity style={{marginLeft: 30, borderRadius: 30, padding: 7, backgroundColor: "#ebebeb"}}>
        <Image
        style={{
          borderRadius: 20,
          width: 50,
          height: 50,
          resizeMode: 'contain',
        }}
          source={require('../assets/versace.png')}
       />
        </TouchableOpacity>
        <Text style={{marginLeft: 35}}>Versace</Text>
        </View>

        <View>
        <TouchableOpacity style={{marginLeft: 30, borderRadius: 30, padding: 7, backgroundColor: "#ebebeb"}}>
        <Image
        style={{
          borderRadius: 20,
          width: 50,
          height: 50,
          resizeMode: 'contain',
        }}
          source={require('../assets/nike.png')}
       />
        </TouchableOpacity>
        <Text style={{marginLeft: 45}}>Nike</Text>
        </View>
        
        <View>
        <TouchableOpacity style={{marginLeft: 30, borderRadius: 30, padding: 7, backgroundColor: "#ebebeb"}}>
        <Image
        style={{
          borderRadius: 20,
          width: 50,
          height: 50,
          resizeMode: 'contain',
        }}
          source={require('../assets/puma.png')}
       />
        </TouchableOpacity>
        <Text style={{marginLeft: 40}}>Puma</Text>
        </View>
        </View>

          <Text style={{marginLeft: 30, fontWeight: "bold", marginTop: 20}}>Selected for you</Text>
        <View style={{flexDirection: "row"}}>
        <TouchableOpacity style={{borderRadius: 30, marginLeft: 25, marginTop: 20, borderColor: "#f0eeeb"}}
            onPress={() => navigation.navigate('description')}>
                <TouchableOpacity style={{backgroundColor: "#ebebeb",  borderRadius: 20,}}>
                      <Image
                  style={{
                    borderRadius: 20,
                    width: "100%",
                    height: 150,
                    resizeMode: 'contain',
                  }}
                    source={require('../assets/2-removebg-preview.png')}
                />

                <Image
                  style={{
                    borderRadius: 20,
                    width: "20%",
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

            <TouchableOpacity style={{borderRadius: 30, marginLeft: "15%", marginTop: 40, borderColor: "#f0eeeb"}}
            onPress={() => navigation.navigate('description')}>
                <TouchableOpacity style={{backgroundColor: "#ebebeb",  borderRadius: 20,}}>
                      <Image
                  style={{
                    borderRadius: 20,
                    width: "100%",
                    height: 150,
                    resizeMode: 'contain',
                  }}
                    source={require('../assets/airjordans_on_Twitter-removebg-preview.png')}
                />

                <Image
                  style={{
                    borderRadius: 20,
                    width: "20%",
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


    <View style={{flexDirection: "row"}}>
        <TouchableOpacity style={{borderRadius: 30, marginLeft: 25, marginTop: 20, borderColor: "#f0eeeb"}}
            onPress={() => navigation.navigate('description')}>
                <TouchableOpacity style={{backgroundColor: "#ebebeb",  borderRadius: 20,}}>
                      <Image
                  style={{
                    borderRadius: 20,
                    width: "100%",
                    height: 150,
                    resizeMode: 'contain',
                  }}
                    source={require('../assets/Originals_EQT_adidas_Brasil-removebg-preview.png')}
                />

                <Image
                  style={{
                    borderRadius: 20,
                    width: "20%",
                    height: 30,
                    resizeMode: 'contain',
                    marginLeft: 100
                  }}
                    source={require('../assets/adidas.png')}
                />
                </TouchableOpacity>
                <View style={{flexDirection: "row"}}>
                  <View style={{marginLeft: 10, }}>
                      <Text style={{fontWeight: "bold", fontSize: 17}}>$140</Text> 
                      <Text style={{fontWeight: "bold"}}>Adidas sneaker</Text>
                      
                  </View>
                  <View style={{marginLeft: 20, marginTop: 7}}>
                  <Feather name="heart" size={20} color="black"/>
                  </View>
                  </View>
            </TouchableOpacity>

            <TouchableOpacity style={{borderRadius: 30, marginLeft: "15%", marginTop: 40, borderColor: "#f0eeeb"}}
            onPress={() => navigation.navigate('description')}>
                <TouchableOpacity style={{backgroundColor: "#ebebeb",  borderRadius: 20,}}>
                      <Image
                  style={{
                    borderRadius: 20,
                    width: "100%",
                    height: 150,
                    resizeMode: 'contain',
                  }}
                    source={require('../assets/Where_To_Buy_Daniel_Arsham_adidas_Futurecraft_4D_SneakerNews_com-removebg-preview.png')}
                />

                <Image
                  style={{
                    borderRadius: 20,
                    width: "20%",
                    height: 30,
                    resizeMode: 'contain',
                    marginLeft: 100
                  }}
                    source={require('../assets/adidas.png')}
                />
                </TouchableOpacity>
                <View style={{flexDirection: "row"}}>
                  <View style={{marginLeft: 10, }}>
                      <Text style={{fontWeight: "bold", fontSize: 17}}>$140</Text> 
                      <Text style={{fontWeight: "bold"}}>Adidas sneaker</Text>
                      
                  </View>
                  <View style={{marginLeft: 20, marginTop: 7}}>
                  <Feather name="heart" size={20} color="black"/>
                  </View>
                  </View>
            </TouchableOpacity>
    </View >
        <TouchableOpacity style={{marginBottom:200, backgroundColor: "#000000", width: "10%", padding: 6, marginLeft:"85%", borderRadius: 20, marginTop: -150, position: "relative"}}
         onPress={() => navigation.navigate('cart')}>
        <AntDesign name="shoppingcart" size={24} color="white" />
          </TouchableOpacity>
      </ScrollView>
    </View>
    );
}



const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ffffff",
      paddingTop: 40
    },
  });