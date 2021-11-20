import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Image, Text, View, Button, TouchableOpacity, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RadioButton, TextInput} from 'react-native-paper';

function relatorio_perg (){
  return(
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.txt}>O estabelecimento apresentou o App?</Text>
      <View style={styles.check}>
          <RadioButton            
          />
          <Text style={{fontSize:12}}>Sim = 25%</Text>
          <RadioButton  
         />
         <Text style={{fontSize:12}}>Não = 75%</Text>
      </View>
      <Text style={styles.txt}>Qual o nível de higiene do estabelecimento?</Text>
      <View style={styles.check}>
          <RadioButton            
          />
          <Text>2 = 20%</Text>
          <RadioButton  
          />
          <Text>4 = 20%</Text>
          <RadioButton            
           />
          <Text>6 = 25%</Text>
          <RadioButton  
         />
         <Text>8 = 20%</Text>
         <RadioButton  
         />
         <Text>10 = 15%</Text>
      </View>
      <Text style={styles.txt}>O estabelecimento mantém lixeiras para uso?</Text>
      <View style={styles.check}>
          <RadioButton            
          />
          <Text>Sim = 25%</Text>
          <RadioButton  
         />
         <Text>Não = 75%</Text>
      </View>
      <Text style={styles.txt}>A quantidade de lixeiras disponíveis é suficiente para uso?</Text>
      <View style={styles.check}>
          <RadioButton            
          />
          <Text>Sim = 25%</Text>
          <RadioButton  
         />
         <Text>Não = 75%</Text>
      </View>
      <Text style={styles.txt}>O estabelecimento fornece material biodegradável? Canudos, copos de papel?</Text>
      <View style={styles.check}>
          <RadioButton            
          />
          <Text>Sim = 25%</Text>
          <RadioButton  
         />
         <Text>Não = 75%</Text>
      </View>
      <Text style={styles.txt}>A limpeza da areia quanto a lixos industrializados é satisfatória?</Text>
      <View style={styles.check}>
          <RadioButton            
          />
          <Text style={{fontSize:12}}>Sim = 25%</Text>
          <RadioButton  
         />
         <Text  style={{fontSize:12}}>Não = 75%</Text>
      </View>
      <Text style={styles.txt}> O estabelecimento passou alguma informação de concientização sobre o cuidado com as vidas marinhas?</Text>
      <View style={styles.check}>
      <RadioButton            
          />
          <Text style={{fontSize:12}}>Sim = 25%</Text>
          <RadioButton  
         />
         <Text  style={{fontSize:12}}>Não = 75%</Text>
      </View>
      <Text style={styles.txt}>Como você avalia esta experiência na sua vida?</Text>
      <View style={styles.check}>
          <RadioButton            
          />
          <Text style={{fontSize:12}}>Sem Valor Valor = 25%</Text>
          <RadioButton  
         />
         <Text style={{fontSize:12}}>Pouco Valor = 75%</Text>
         <RadioButton  
         />
         <Text style={{fontSize:12}}>Modificadora = 75%</Text>
      </View>
  </View>
  );
}

function sugestoes() {
  return(
    <Text>Sugestões e criticas</Text>
  )
}

const Stack = createNativeStackNavigator();

export default function Tela_Estabelecimento({ navigation}) {
  return (
    <View style={{backgroundColor:'purple', flex:1}}> 
    <><NavigationContainer independent={true}>
          <Stack.Navigator  initialRouteName="Relatório de Questões">      
            <Stack.Screen name="Relatório de Questões" component={relatorio_perg} />
            <Stack.Screen name="mensagens" component={sugestoes} />
          </Stack.Navigator>
      </NavigationContainer>

      <View style={styles.ViewBt}>
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => alert('Ir para o menu!')}
              >
                  <Text>Menu</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate()}
              >
                  <Text>Mensagens</Text>
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
    width:100,
    height: 50,
    justifyContent:'center',
    alignItems: 'center'
  },
  check: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15
    
  },
});