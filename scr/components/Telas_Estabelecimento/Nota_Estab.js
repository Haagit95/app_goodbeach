import * as React from 'react';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { StyleSheet, Image, Text, View, Button, TouchableOpacity, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RadioButton, TextInput} from 'react-native-paper';

function tela_nota (){
    return(
        <View style={styles.txt}>
            <Text style={{fontSize:30}}>
                Nota Média:
            </Text>
            <Text style={{fontSize:30}}>
                8,5
            </Text>
        </View>
    )
}

const Stack = createNativeStackNavigator(); 

function Noota({navigation}) {

    const voltar_menuP = () => {
      navigation.reset({
        index:0,
        routes:[{name:"Menu"}]
      })
    }
  
    return (
     
      <View style={{backgroundColor:'purple', flex:1}}> 
          <><NavigationContainer independent={true}>
                <Stack.Navigator >      
                    <Stack.Screen name="tela_notas" component={tela_nota} />          
                </Stack.Navigator>
              </NavigationContainer>
        
          <View style={styles.ViewBt}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => voltar_menuP()}
              >
              <Text>Menu</Text>
            </TouchableOpacity>
          </View>
        </>
      </View>
      
      
    );
  }
  
  export default Noota ;
  
  const styles = StyleSheet.create({
      txt: {
        fontSize: 18,
        color: "black",
        margin:12,
        alignItems:'center',
        justifyContent:'center',
       
      },
      check: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:15
        
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
      ViewBt:{
        flexDirection: "row",
        justifyContent: 'center'
      },
      txtIn:{
        width: 300,
        height: 50,
        margin: 20
      },
      ViewBt2:{
        flexDirection: "row",
        padding:20
      },
     
    });