import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
///////////////////////////////////Rotas///////////////////////////////////
import Tela_Estabelecimento from './scr/components/Telas_Estabelecimento/Tela_RelatorioAvaliacao_Estabelecimento';
import Tela_Login from './scr/components/Tela_Login/Login';
import Cadastro_praiano from './scr/components/telaCadastroPraianoEstabelecimento/Cadastro_praiano';
import Cadastro_estabelecimento from './scr/components/telaCadastroPraianoEstabelecimento/Cadastro_estabelecimento';
import Menu_praiano from './scr/components/telaMenu/Menu_praiano';
import Menu_estabelecimento from './scr/components/telaMenu/Menu_estabelecimento';
import Nota_Estab from './scr/components/Telas_Estabelecimento/Nota_Estab';
import Selo_Estab from './scr/components/Telas_Estabelecimento/Selo';
import Tela_Avaliacao_Praiano from './scr/components/Telas_Praiano/Tela_Avaliacao_Praiano';
import Ranking from './scr/components/Telas_Praiano/Ranking';
import Tela_RelatorioAvaliacao_Estabelecimento from './scr/components/Telas_Estabelecimento/Tela_RelatorioAvaliacao_Estabelecimento';
/////////////////////////////////////////////////////////////////////////

const Stack = createNativeStackNavigator();


function MyStack() {
  return (

    <Stack.Navigator initialRouteName="Login">

      <Stack.Screen name="Login" component={Tela_Login} /> 

      <Stack.Screen name="Cadastro_praiano" component={Cadastro_praiano} /> 
      <Stack.Screen name="Menu_praiano" component={Menu_praiano} />
      <Stack.Screen name="Avaliação_Praiano" component={Tela_Avaliacao_Praiano} />
      <Stack.Screen name="Ranking_praiano" component={Ranking} /> 

      <Stack.Screen name="Estabelecimento" component={Tela_Estabelecimento} />
      <Stack.Screen name="Cadastro_estabelecimento" component={Cadastro_estabelecimento} /> 
      <Stack.Screen name="Menu_estabelecimento" component={Menu_estabelecimento} /> 
      <Stack.Screen name="Nota" component={Nota_Estab} />
      <Stack.Screen name="Selo" component={Selo_Estab} />
      <Stack.Screen name="Relatorio_Avaliação" component={Tela_RelatorioAvaliacao_Estabelecimento} />

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
