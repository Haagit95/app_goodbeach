import * as React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Button, TextInput, TouchableOpacity, placeholder } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Input, Text, secureTextEntry } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

export default function Cadastro_Praiano({ navigation }) {

    const [name, setName] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [fone, setFone] = useState(null)
    const [email, setEmail] = useState(null)
    const [dateNasc, setDateNasc] = useState(null)
    const [address, setAdreess] = useState(null)
    const [sex, setSex] = useState(null)

////////////////////////////////////// Rotas onPress /////////////////////////////////////////////////////
    const Tela_Login = ()=>{ //function criada para resetar o navigation ao deslogar.
      navigation.reset({
        index:0,
        routes:[{name: "Login"}]
      })
    }

    const Menu = ()=>{ //function criada para resetar o navigation ao deslogar.
        navigation.reset({
          index:0,
          routes:[{name: "Menu Praiano"}]
        })
      }
////////////////////////////////////// Rederização //////////////////////////////////////////////////////
return (
    //Formulario de cadastro:
    <View style={styles.container}>
      <View style={{flex:1,justifyContent:'flex-end', alignItems:'center'}}>
         <Text h4>Faça seu cadastro aqui!</Text>
      </View>

        <View style={{flex:6, justifyContent:'space-around'}}>
            <TextInput
                placeholder="Nome"
                onChangeText={value=> setName(value)}
                style={styles.input}
                keyboardType="text"
            />

            <TextInput
                placeholder="CPF"
                leftIcon={{type:'font-awesome', name:'envelope' }}
                onChangeText={value=> setCpf(value)}
                style={styles.input}
                keyboardType="numeric"
                options={{
                    format: '999.999.999-99',
                }}
            />

            <TextInput
                placeholder="Contato"
                leftIcon={{type:'font-awesome', name:'envelope' }}
                onChangeText={value=> setFone(value)}
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
                placeholder="Data Nascimento"
                leftIcon={{type:'font-awesome', name:'envelope' }}
                onChangeText={value=> setDateNasc(value)}
                style={styles.input}
                keyboardType="text"
            />

            <TextInput
                placeholder="Endereço"
                leftIcon={{type:'font-awesome', name:'envelope' }}
                onChangeText={value=> setAdreess(value)}
                style={styles.input}
                keyboardType="text"
            />

            <TextInput
                placeholder="Sexo"
                leftIcon={{type:'font-awesome', name:'envelope' }}
                onChangeText={value=> setSex(value)}
                style={styles.input}
                keyboardType="text"
            />
        </View>

        <View style={styles.ViewBt}>
                <TouchableOpacity style={styles.button1}  
                onPress={() => Menu()}
                >
                <Text style={{fontWeight:'bold', color:'white'}}>Cadastrar</Text>
                </TouchableOpacity>
    
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
      
        alignItems: 'center',
        justifyContent: 'center',

      },
       input:{
         marginTop: 10,
         backgroundColor: '#7FFFD4',
         padding:3,
         width: 300,
         fontSize: 16,
         fontWeight: 'bold',
         borderRadius: 3
       },

     button1: {
        backgroundColor: "#1E90FF",
        padding: 5,
        borderRadius: 10,
        margin: 20,
        width:120,
        height: 30,
        flexDirection: "row",
        justifyContent:'center',
        alignItems: 'center'
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
      flex:2,
      flexDirection: "row",
      justifyContent: 'center',
      alignItems:'center'
    },
          check: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding:15
          }      


  })