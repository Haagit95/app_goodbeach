import * as React from 'react';
import { StyleSheet, Image, Text, View, Button, TouchableOpacity, ScrollView, Platform} from 'react-native';
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
      routes:[{name:"Estabelecimento"}]
    })
  }

  const Avaliac = () => {
    navigation.reset({
      index:0,
      routes:[{name:"Relatorio_Avaliação"}]
    })
  }
  
  return (
    <View style={{backgroundColor:'purple', flex:1}}> 
    <><NavigationContainer independent={true}>
          <Stack.Navigator  initialRouteName="Sugestoes e criticas">      
            <Stack.Screen name="Sugestoes e criticas" component={Men} />
          </Stack.Navigator>
      </NavigationContainer>

      <View style={styles.ViewBt}>
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => voltar_menuP()}
              >
                  <Text>Menu</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.button}
                  onPress={() => Avaliac()}
              >
                  <Text >Relatório avaliação</Text>
              </TouchableOpacity>
          </View></>
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
    justifyContent: 'center'
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
});