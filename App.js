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
import Tipo_Cadastro from './scr/components/Telas_Cadastros/Tela_Tipo_Cad';
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

      <Stack.Screen name="Cadastro" component={Cadastro_PxE} />
      <Stack.Screen name="Tipo Cadastro" component={Tipo_Cadastro} />
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
