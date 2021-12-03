import * as React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Button, TextInput, TouchableOpacity, placeholder } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Input, Text, secureTextEntry } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';



export default function Esqueceu({ navigation }) {
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
      
        <View style={{flex:10,justifyContent:'center', alignItems:'center'}}>
        <Text h4>GoodBeach - Recuperar Senha</Text>
            <TextInput
                placeholder="Digite o E-mail para recuperação de senha"
                onChangeText={value=> setEmailReupera(value)}
                style={styles.input}
                keyboardType="text"
            />
            
            <View style={styles.ViewBt}>
                <TouchableOpacity style={styles.button}
                onPress={()=> alert('Redefinição de senha concluida!')}
                >
                <Text style={{color:'white'}}>Enviar Link de Recuperação</Text>
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
const styles = StyleSheet.create({
      container: {
        flex: 1,
      
        alignItems: 'center',
        justifyContent: 'center',
      },
       input:{
         marginTop: 30,
         backgroundColor: '#7FFFD4',
         padding:10,
         width: 350,
         fontSize: 16,
         fontWeight: 'bold',
         borderRadius: 3
       },

     button: {
        backgroundColor: "#1E90FF",
        padding: 20,
        borderRadius: 10,
        margin: 20,
        width:250,
        height: 30,
        flexDirection: "row",
        justifyContent:'center',
        alignItems: 'center'
     },
     button2: {
      backgroundColor: "white",
      padding: 10,
      borderRadius: 10,
      margin: 20,
      width:80,
      height: 30,
      flexDirection: "row",
      justifyContent:'center',
      alignItems: 'center'
  },
   
          ViewBt:{
            flexDirection: "row",
            justifyContent: 'center',
            padding:20
          }


  })