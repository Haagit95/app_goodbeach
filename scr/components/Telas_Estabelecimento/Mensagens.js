import * as React from 'react';
import { StyleSheet, Image, Text, View, Button, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Men() {
  return(
    <Text>Sugestões e criticas</Text>
  )
}

const Stack = createNativeStackNavigator();

export default function Mensagens({ navigation}) {
  const voltar_menuP = () => {
    navigation.reset({
      index:0,
      routes:[{name:"Menu Estabelecimento"}]
    })
  }

  const Avaliac = () => {
    navigation.reset({
      index:0,
      routes:[{name:"Relatorio da Avaliação"}]
    })
  }
  const user = [
    {name:'João Silva', msgm:'Prai muito bem limpa e com boas ondas, parabens a todos envolvidos com o projeto de limpeza das praias.'},
    {name:'Maria Luiza', msgm:'Sem lixeiras em alguns pontos e ninguem verificou.'},
    {name:'Julia Moura', msgm:'Muito bom ter um estabelcimento que cuide das praias.'},
    {name:'Julia Moura', msgm:'Muito bom ter um estabelcimento que cuide das praias.Muito bom ter um estabelcimento que cuide das praias'},
    {name:'Julia Moura', msgm:'Muito bom ter um estabelcimento que cuide das praias.'},
    {name:'Julia Moura', msgm:'Muito bom ter um estabelcimento que cuide das praias.Muito bom ter um estabelcimento que cuide das praias'},
    {name:'Julia Moura', msgm:'Muito bom ter um estabelcimento que cuide das praias.Muito bom ter um estabelcimento que cuide das praias'},
    {name:'Julia Moura', msgm:'Muito bom ter um estabelcimento que cuide das praias.'},
    {name:'Julia Moura', msgm:'Muito bom ter um estabelcimento que cuide das praias.Muito bom ter um estabelcimento que cuide das praias'},
    {name:'Julia Moura', msgm:'Muito bom ter um estabelcimento que cuide das praias.Muito bom ter um estabelcimento que cuide das praias'},
] 
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 

      <View style={{flex:1,justifyContent:'center'}}>
        <Text style={{fontWeight:'bold', fontSize:20}}>Mensagens de Sugestões e Críticas:</Text>
     </View >
     
     <View style={{flex:8,justifyContent:'center',width:'90%'}}>
        <FlatList
            style={{flex:2}}
            data={user}
            renderItem={(obj) => {
                return(
                    <><><Text style={{ fontSize: 20 }}>{obj.item.name}</Text>
                    <Text style={{ fontSize: 15 }}>{obj.item.msgm}</Text></>
                    <Text>    </Text></>
                )
            }}
        />
      </View>

        <View style={styles.ViewBt}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => voltar_menuP()}
            >
            <Text>Menu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button1}
            onPress={() => Avaliac()}
            >
            <Text>Relatório</Text>
          </TouchableOpacity>
        </View>

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
  txt: {
    fontSize: 14,
    color: "black",
    margin:5,
    alignItems:'center',
    justifyContent:'center'
  },
  ViewBt2:{
    flexDirection: "row",
    padding:10
  },
  ViewBt:{
    flexDirection: "row",
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#00FA9A',
    width:'100%'
  }, 
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    margin: 20,
    width:150,
    height: 50,
    justifyContent:'center',
    alignItems: 'center'
  },
  button1: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    margin: 20,
    width:120,
    height: 30,
    flexDirection: "row",
    justifyContent:'center',
    alignItems: 'center'
  },
});