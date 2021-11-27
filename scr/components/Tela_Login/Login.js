import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
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
      <Text h4>GoodBeach</Text>
      <Text h4>Login</Text>

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
      <View style={{flexDirection:'row', justifyContent:'center', marginBottom: 5}}>
        <Button
            icon={
            <Icon
            name="check"
            size={10}
            color="white"
            />
        }
        title="Entrar"
        />
            <Button
            icon={
            <Icon
            name="check"
            size={10}
            color="white"
            />
        }
        title="Esqueceu sua Senha?"
        onPress={()=> Tela_Esqueceu()}
        />
    </View>
        <Button
        icon={
        <Icon
        name="check"
        size={10}
        color="white"
        />
    }
    title="Registre-se"
    onPress={()=> Tela_registre()}
    />



    {/* <Button
            icon={
            <Icon
            name="check"
            size={10}
            color="white"
            />
        }
        title="Cancelar"
        /> */}
      
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

