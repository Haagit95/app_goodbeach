import * as React from 'react';
import { StyleSheet, Image, Text, View, Button, TouchableOpacity, Platform } from 'react-native';



export default function Ranking ({navigation}) {

  const voltar_menuP = () => {
    navigation.reset({
      index:0,
      routes:[{name:"Menu"}]
    })
   }
   return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 

     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <Text style={{fontWeight:'bold', fontSize:40}}>Nota Média:</Text>
       <Text style={{fontWeight:'bold', fontSize:40}}>8,5</Text>
      </View>


      <View style={styles.ViewBt}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => voltar_menuP()}
        >
          <Text>Menu</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
 }
  
  const styles = StyleSheet.create({
      txt: {
        fontSize: 18,
        color: "black",
        margin:12,
        alignItems:'center',
        justifyContent:'center',
       
      },
      button: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        margin: 20,
        width:100,
        height: 50,
        justifyContent:'center',
        alignItems: 'center'
      },
      ViewBt:{
        flexDirection: "row",
        justifyContent: 'center',
        backgroundColor: '#00FA9A',
        width:'100%'
      }, 
      button1: {
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 10,
        margin: 20,
        width:120,
        height: 30,
        flexDirection: "row",
        justifyContent:'center',
        alignItems: 'center'
      },
    });
