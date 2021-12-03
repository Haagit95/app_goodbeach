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
import Tipo_Cadastro from './scr/components/Telas_Cadastros/Tela_Tipo_Cad';
import Cadastro_Praiano from './scr/components/Telas_Cadastros/Cadastro_Praiano';
import Cadastro_Estabelecimento from './scr/components/Telas_Cadastros/Cadastro_Estabelecimento';
import Menu_Praiano from './scr/components/Tela_Menu/Menu_Praiano';
import Menu_Estabelecimento from './scr/components/Tela_Menu/Menu_Estabelecimento';
/////////////////////////////////////////////////////////////////////////

const Stack = createNativeStackNavigator();

function MyStack() {
  return (

    <Stack.Navigator initialRouteName="Login">

      <Stack.Screen name="Login" component={Tela_Login} />
      <Stack.Screen name="Conta" component={Conta} /> 
      <Stack.Screen name="Esqueceu Senha" component={Esqueceu} />
    
      <Stack.Screen name="Avaliação" component={Tela_Avaliacao_Praiano} />
      <Stack.Screen name="Ranking" component={Ranking} /> 

      <Stack.Screen name="Estabelecimento" component={Tela_Estabelecimento} />
      <Stack.Screen name="Nota" component={Nota_Estab} />
      <Stack.Screen name="Selo" component={Selo_Estab} />
      <Stack.Screen name="Relatorio da Avaliação" component={Tela_RelatorioAvaliacao_Estabelecimento} />
      <Stack.Screen name="Sugestões e Críticas" component={Mensagens} />

      <Stack.Screen name="Cadastro Praiano" component={Cadastro_Praiano} />
      <Stack.Screen name="Cadastro Estabelecimento" component={Cadastro_Estabelecimento} />
      <Stack.Screen name="Tipo Cadastro" component={Tipo_Cadastro} />
     
      <Stack.Screen name="Menu Praiano" component={Menu_Praiano} />
      <Stack.Screen name="Menu Estabelecimento" component={Menu_Estabelecimento} />


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
