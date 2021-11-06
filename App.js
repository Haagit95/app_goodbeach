import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tela_Praiano from './scr/components/Tela principal praiano-estabelecimento/Tela_Princ_Praiano';
import Tela_Estabelecimento from './scr/components/Tela principal praiano-estabelecimento/Tela_Princ_Estabelecimento';
import Tela_Login from './scr/components/Tela_Login/Login';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Tela Praiano" component={Tela_Praiano} />
      <Stack.Screen name="Tela_Estabelecimento" component={Tela_Estabelecimento} />
      <Stack.Screen name="Login" component={Tela_Login}/>
    </Stack.Navigator>
  );
}


export default function App() {
  return(
    <NavigationContainer>
      <MyStack />    
    </NavigationContainer>  
  )
}
