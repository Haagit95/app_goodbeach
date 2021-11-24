import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

export default function Menu_praiano({ Navigation}) {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const Entrar = () =>{
        console.log("entrou no APP")
        console.log(email)
        console.log(password)
    }

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

