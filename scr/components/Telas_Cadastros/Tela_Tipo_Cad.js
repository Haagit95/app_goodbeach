import * as React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Button, TextInput, TouchableOpacity, placeholder } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Input, Text, secureTextEntry } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';

export default function Tipo_Cadastro({ navigation }) {
    ////////////////////////////////////// Rotas onPress /////////////////////////////////////////////////////
    const Tela_Login = ()=>{ //function criada para resetar o navigation ao deslogar.
        navigation.reset({
          index:0,
          routes:[{name: "Login"}]
        })
      }

  ////////////////////////////////////// Rederização //////////////////////////////////////////////////////

return (
    //Tela opção de tipo de cadastro
    <View style={styles.container}>
     
      <View style={{flex:8,justifyContent:'center', alignItems:'center'}}>
              
        <View style={styles.ViewBt}> 

        <View style={{ justifyContent:'flex-start', alignItems:'center', width:'100%'}}>
              <Text style={{fontWeight:'bold', fontSize:30}}>Escolha sua opção de Cadastro!</Text>
          </View>
                <TouchableOpacity 
                style={styles.button}  
                onPress={() => navigation.navigate('Cadastro Praiano')}            
                >
                <Text style={{fontWeight:'bold', color:'white', fontSize:18}}>Praiano</Text>
                </TouchableOpacity>
              
                <TouchableOpacity style={styles.button}  
                onPress={() => navigation.navigate('Cadastro Estabelecimento')}
                >
                <Text style={{fontWeight:'bold', color:'white', fontSize:18}}>Estabelecimento</Text>
                </TouchableOpacity>          
          </View>
        </View>

        <View style={{flex:1,backgroundColor:'#00FA9A', width:'100%',justifyContent:'center', alignItems:'center'}}>
           <TouchableOpacity style={styles.button2} 
           onPress={()=> Tela_Login()}
           >
                <Text style={{ color:'black'}}>Sair</Text>
           </TouchableOpacity>
        </View>

    </View>

);
}

////////////////////////// Estilos /////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

      },
      button: {
        padding: 30,
        borderRadius: 10,
        marginTop: 50,
        width:300,
        height:50,
        flexDirection: "row",
        justifyContent:'center',
        alignItems: "center",
        backgroundColor: "#1E90FF",
        
        
      },
     button2: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
        margin: 20,
        width:120,
        height: 30,
        flexDirection: "row",
        justifyContent:'center',    
        alignItems: 'center'
     },

     ViewBt:{
            flex:1,
            justifyContent: 'center',
            alignItems:'center',        
          },
    
  })

  