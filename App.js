import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tela_Praiano from './scr/components/Telas_Praiano/Tela_Avaliacao_Praiano';
import Tela_Estabelecimento from './scr/components/Telas_Estabelecimento/Tela_RelatorioAvaliacao_Estabelecimento';
import piie from './scr/components/Telas_Praiano/Ranking';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Praiano">
      <Stack.Screen name="Praiano" component={Tela_Praiano} />
      <Stack.Screen name="Estabelecimento" component={Tela_Estabelecimento} />   
      <Stack.Screen name="teste" component={piie} /> 
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
