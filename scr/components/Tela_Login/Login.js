import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import Esqueceu from './Esqueceu';

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
        routes:[{name: "Esqueceu"}]
      })
    }

    const Tela_registre = ()=>{
      navigation.reset({
        index:0,
        routes:[{name: "Conta"}]
      })
    }

    // const Tela_Entrar = ()=>{
    //   navigation.reset({
    //     index:0,
    //     routes:[{name: "Esqueceu"}]
    //   })
    // } // DEFINIR QUAL TELA ACESSAR

  return (
    <View style={styles.container}>

      <Image
        style={{width: 250, height:250,alignItems:'stretch'}}
        source={require('../../Image/praia2.png')}/>

      <View style={{justifyContent:'center',justifyContent:'flex-end', alignItems:'center'}}>
          <Text h4>GoodBeach</Text>
          <Text style={{justifyContent:'flex-end'}} h4>Login</Text>
      </View>

      <View style={{width:'100%', justifyContent:'flex-end'}}>
          <Input
            placeholder="E-mail"
            leftIcon={{type:'font-awesome', name:'envelope' }}
            style={styles}
            onChangeText={value=> setEmail(value)}
            secureTextEntry={true}
            keyboardType="email-address"
          />
      
          <Input
            placeholder="Password"
            leftIcon={{type:'font-awesome', name:'lock' }}
            style={styles}
            onChangeText={value=> setPassword(value)}
            keyboardType="password"
          />
      </View>

      <View style={{flexDirection:'row', width:'100%'}}>

      <Text onPress={()=> Tela_Esqueceu()} style={{width:'50%', fontSize:14, paddingTop:10,paddingLeft:10}}> Esqueceu sua senha?</Text> 

      <View style={{width:'50%',fontSize:18, paddingRight:10}}>
        <Button
          title="Entrar"
          onPress={() => alert('entrar no sistema')}
        >
        </Button>
      </View>

      </View >

        <View style={{alignItems:'center', justifyContent:'center', flex:1}}>   
           <Text onPress={()=> Tela_registre()} style={{fontSize:18, padding:10}}> Registre-se!</Text>
        </View>

      <StatusBar style="auto" />
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
});

//<Text onPress={()=> Tela_Esqueceu()} style={{width:'50%', fontSize:15}}> Esqueceu sua senha?</Text> 
//<Text onPress={() => alert('entrar no sistema')} style={{width:'50%',fontSize:18,textAlign:'right', paddingRight:35}}> Entrar</Text>