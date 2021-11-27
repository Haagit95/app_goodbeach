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
      <Text h4>GoodBeach - Registro</Text>

        <TextInput
            placeholder="Digite seu Nome"
            onChangeText={value=> setName(value)}
            style={styles.input}
            keyboardType="text"
        />

        <TextInput
            placeholder="Digite seu E-mail"
            leftIcon={{type:'font-awesome', name:'envelope' }}
            secureTextEntry={true}
            onChangeText={value=> setEmail(value)}
            style={styles.input}
            keyboardType="email-address"
        />
        <TextInput
            placeholder="Digite seu Password"
            leftIcon={{type:'font-awesome', name:'lock' }}
            onChangeText={value=> setPassword(value)}
            style={styles.input}
            keyboardType="password"
        />

        <TextInput
            placeholder="Confirme o Password"
            leftIcon={{type:'font-awesome', name:'lock' }}
            onChangeText={value=> setConfirm(value)}
            style={styles.input}
            keyboardType="password"
        />
        <View style={styles.ViewBt}>
            <TouchableOpacity style={styles.button}>
            <Text>Registrar</Text>
            </TouchableOpacity>
 
        </View>

        <View style={styles.ViewBt}>
           <TouchableOpacity style={styles.button2} onPress={()=> Tela_Login()}>
                <Text>Login</Text>
           </TouchableOpacity>
        </View>


    </View>

);
}
const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#00FA9A',
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
         borderRadius: 3
       },

     button: {
        backgroundColor: "#A9A9A9",
        padding: 10,
        borderRadius: 10,
        margin: 20,
        width:120,
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