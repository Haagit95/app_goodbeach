import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Image, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';


export default function Tela_Login({ navigation}) {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const Entrar = () =>{
        console.log("entrou no APP")
        console.log(email)
        console.log(password)
    }

    const Tela_Esqueceu = ()=>{
      navigation.reset({
        index:0,
        routes:[{name: "Esqueceu Senha"}]
      })
    }

    const Tela_registre = ()=>{
      navigation.reset({
        index:0,
        routes:[{name: "Conta"}]
      })
    }

    const Tela_TipoCadastro = ()=>{
      navigation.reset({
        index:0,
        routes:[{name: "Tipo Cadastro"}]
      })
    }

  return (
    
    <View style={styles.container}>
    
      <View >
          <Image
            style={{width: 250, height:250,alignItems:'stretch'}}
            source={require('../../Image/praia2.png')}/>

          <View style={{justifyContent:'center',justifyContent:'flex-end', alignItems:'center', margin:15}}>
              <Text  h4>Good Beach</Text>     
          </View>
          <View style={{justifyContent:'center',justifyContent:'flex-end', alignItems:'center', margin:10}}>
              <Text  h4>Login</Text>     
          </View>
      </View>
     

      <View style={{width:'100%', justifyContent:'flex-end'}}>
          <Input
            placeholder="E-mail"
            leftIcon={{type:'font-awesome', name:'envelope' }}
            style={styles}
            onChangeText={value=> setEmail(value)}
            keyboardType="email-address"
          />
      
          <Input
            placeholder="Password"
            leftIcon={{type:'font-awesome', name:'lock' }}
            style={styles}
            onChangeText={value=> setPassword(value)}
            secureTextEntry={true}
            keyboardType="password"
          />
      </View>
    
      <View style={{flexDirection:'row', width:'100%'}}>

      <Text onPress={()=> Tela_Esqueceu()} style={{width:'50%', fontSize:14, paddingTop:10,paddingLeft:10}}> Esqueceu sua senha?</Text> 

      <View style={{width:'50%',fontSize:18, paddingRight:10}}>
        <Button
          title="Entrar"
          onPress={() => Tela_TipoCadastro()}
        >
        </Button>
      </View>

      </View >

        <View style={{alignItems:'center', justifyContent:'flex-start', padding:70}}>   
           <Text onPress={()=> Tela_registre()} style={{fontSize:15, padding:10, fontWeight:'bold',textAlign:'center'}}> Registre-se!</Text>
        </View>

      <StatusBar style="auto" />
    </View>
   
  );
}


const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

