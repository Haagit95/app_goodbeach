import * as React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Button, TextInput, TouchableOpacity, placeholder } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Input, Text, secureTextEntry } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

export default function Conta({ navigation }) {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirm, setConfirm] = useState(null)
    const Entrar = () =>{
        console.log("entrou no APP")
        console.log(email)
        console.log(password)
    }

    const Tela_Login = ()=>{
      navigation.reset({
        index:0,
        routes:[{name: "Login"}]
      })
    }


return (
    <View style={styles.container}>

      <View style={{flex:8, justifyContent:'center', alignItems:'center'}}>
      <Text h4>Registro da Conta</Text>
        <View style={{paddingBottom:30}}>
            <TextInput
                placeholder="Digite seu Nome"
                onChangeText={value=> setName(value)}
                style={styles.input}
                keyboardType="text"
            />
            <TextInput
                placeholder="Digite seu E-mail"
                leftIcon={{type:'font-awesome', name:'envelope' }}
                onChangeText={value=> setEmail(value)}
                style={styles.input}
                keyboardType="email-address"
            />
            <TextInput
                placeholder="Digite sua Senha"
                leftIcon={{type:'font-awesome', name:'lock' }}
                onChangeText={value=> setPassword(value)}
                style={styles.input}
                keyboardType="password"
                secureTextEntry={true}
            />
            <TextInput
                placeholder="Confirme sua Senha"
                leftIcon={{type:'font-awesome', name:'lock' }}
                onChangeText={value=> setConfirm(value)}
                style={styles.input}
                keyboardType="password"
                secureTextEntry={true}
            />
          </View>

            <View style={styles.ViewBt}>
                <TouchableOpacity style={styles.button1}>
                <Text style={{ color:'white'}}>Registrar</Text>
                </TouchableOpacity>
    
            </View>
       

      </View>

        <View style={{flex:1,backgroundColor:'#00FA9A', width:'100%',justifyContent:'center', alignItems:'center'}}>
           <TouchableOpacity style={styles.button2} 
           onPress={()=> Tela_Login()}
           >
                <Text style={{ color:'black'}}>Voltar Login</Text>
           </TouchableOpacity>
        </View>


    </View>

);
}
const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
       input:{
         marginTop: 30,
         backgroundColor: '#fff',
         padding:10,
         width: 300,
         fontSize: 16,
         fontWeight: 'bold',
         borderRadius: 3, 
         backgroundColor:'#7FFFD4'
       },

     button: {
        backgroundColor: "#A9A9A9",
        padding: 10,
        borderRadius: 10,
        margin: 20,
        width:120,
        height: 30,
        justifyContent:'center',
        alignItems: 'center'
     },
      ViewBt:{
       
        flexDirection: "row",
        justifyContent: 'center',
        
    },
    button1: {
      backgroundColor: "#1E90FF",
      padding: 5,
      borderRadius: 10,
      margin: 20,
      width:120,
      height: 30,
      
      justifyContent:'center',
      alignItems: 'center',
      color:'white'
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
  })