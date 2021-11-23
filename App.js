import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
///////////////////////////////////Rotas///////////////////////////////////
import Tela_Praiano from './scr/components/Tela principal praiano-estabelecimento/Tela_Princ_Praiano';
import Tela_Estabelecimento from './scr/components/Tela principal praiano-estabelecimento/Tela_Princ_Estabelecimento';
import Tela_Login from './scr/components/Tela_Login/Login';
import Cadastro_praiano from './scr/components/telaCadastroPraianoEstabelecimento/Cadastro_praiano';
import Cadastro_estabelecimento from './scr/components/telaCadastroPraianoEstabelecimento/Cadastro_estabelecimento';
import Menu_praiano from './scr/components/telaMenu/Menu_praiano';
import Menu_estabelecimento from './scr/components/telaMenu/Menu_estabelecimento';
/////////////////////////////////////////////////////////////////////////
const Stack = createNativeStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Praiano" component={Tela_Praiano} />
      <Stack.Screen name="Estabelecimento" component={Tela_Estabelecimento} />  
      <Stack.Screen name="Cadastro" component={Tela_Estabelecimento} />  
      <Stack.Screen name="Login" component={Tela_Login} /> 
      <Stack.Screen name="Cadastro_praiano" component={Cadastro_praiano} />  
      <Stack.Screen name="Cadastro_estabelecimento" component={Cadastro_estabelecimento} /> 
      <Stack.Screen name="Login" component={Tela_Login} /> 
      <Stack.Screen name="Menu_praiano" component={Menu_praiano} /> 
      <Stack.Screen name="Menu_estabelecimento" component={Menu_estabelecimento} /> 
 
 

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
