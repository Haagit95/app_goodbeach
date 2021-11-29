import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
///////////////////////////////////Rotas///////////////////////////////////
import Tela_Estabelecimento from './scr/components/Telas_Estabelecimento/Tela_RelatorioAvaliacao_Estabelecimento';
import Tela_Login from './scr/components/Tela_Login/Login';
import Nota_Estab from './scr/components/Telas_Estabelecimento/Nota_Estab';
import Selo_Estab from './scr/components/Telas_Estabelecimento/Selo';
import Tela_Avaliacao_Praiano from './scr/components/Telas_Praiano/Tela_Avaliacao_Praiano';
import Ranking from './scr/components/Telas_Praiano/Ranking';
import Tela_RelatorioAvaliacao_Estabelecimento from './scr/components/Telas_Estabelecimento/Tela_RelatorioAvaliacao_Estabelecimento';
import Mensagens from './scr/components/Telas_Estabelecimento/Mensagens';
import Conta from './scr/components/Tela_Login/Conta';
import Esqueceu from './scr/components/Tela_Login/Esqueceu';
import Cadastro_PxE from './scr/components/Telas_Cadastros/Cadastro_PxE';
import Menu_Users from './scr/components/Tela_Menu/Menu_Users';
/////////////////////////////////////////////////////////////////////////

const Stack = createNativeStackNavigator();

function MyStack() {
  return (

    <Stack.Navigator initialRouteName="Login">

      <Stack.Screen name="Login" component={Tela_Login} />
      <Stack.Screen name="Conta" component={Conta} /> 
      <Stack.Screen name="Esqueceu" component={Esqueceu} />
    
      <Stack.Screen name="Avaliação_Praiano" component={Tela_Avaliacao_Praiano} />
      <Stack.Screen name="Ranking_praiano" component={Ranking} /> 

      <Stack.Screen name="Estabelecimento" component={Tela_Estabelecimento} />
      <Stack.Screen name="Nota" component={Nota_Estab} />
      <Stack.Screen name="Selo" component={Selo_Estab} />
      <Stack.Screen name="Relatorio_Avaliação" component={Tela_RelatorioAvaliacao_Estabelecimento} />
      <Stack.Screen name="Msgm" component={Mensagens} />

      <Stack.Screen name="Cadastro_Praiano_Estabelecimento" component={Cadastro_PxE} />
      <Stack.Screen name="Menu" component={Menu_Users} />


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
