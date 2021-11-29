import * as React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Button, TextInput, TouchableOpacity, placeholder } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Input, Text, secureTextEntry } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

export default function Manu({ navigation }) {
   

return (
    <View style={styles.container}>
      <Text h4>Menu</Text>

        <View style={styles.ViewBt}>
           <TouchableOpacity style={styles.button} 
              onPress={() => navigation.navigate('Msgm')}
           >
                <Text>Feedback</Text>
           </TouchableOpacity>
        </View>

        <View style={styles.ViewBt}>
           <TouchableOpacity style={styles.button} 
              onPress={() => navigation.navigate('Relatorio_Avaliação')}
           >
                <Text>Relatório</Text>
           </TouchableOpacity>
        </View>

        <View style={styles.ViewBt}>
           <TouchableOpacity style={styles.button} 
              onPress={() => navigation.navigate('Nota')}
           >
                <Text>Nota</Text>
           </TouchableOpacity>
        </View>
        
        <View style={styles.ViewBt}>
           <TouchableOpacity style={styles.button} 
              onPress={() => navigation.navigate('Ranking_praiano')}
           >
                <Text>Ranking</Text>
           </TouchableOpacity>
        </View>

        <View style={styles.ViewBt}>
           <TouchableOpacity style={styles.button} 
              onPress={() => navigation.navigate('Avaliação_Praiano')}
           >
                <Text>Avaliação</Text>
           </TouchableOpacity>
        </View>
        

    </View>

);
}
/////////////////// Estilos Menu //////////////////////////////////////
const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: '#00FA9A',
        justifyContent: 'center',
      },

     button: {
        backgroundColor: "#A9A9A9",
        padding: 10,
        borderRadius: 10,
        marginTop: 16,
        width:300,
        height: 30,
        flexDirection: "row",
        justifyContent:'center',
        alignItems: 'center'
      },
          
      ViewBt:{
            flexDirection: "row",
            justifyContent: 'center'
      }
  })