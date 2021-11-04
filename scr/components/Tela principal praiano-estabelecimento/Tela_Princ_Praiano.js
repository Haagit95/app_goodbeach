import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';


export default function Tela_Praiano({ navigation }) {

  const [isSelectedSim, setSelected1] = useState(false)
  const [isSelectedNao, setSelected2] = useState(false)
  const [isSelected2, setSelected3] = useState(false)
  const [isSelected4, setSelected4] = useState(false)
  const [isSelected6, setSelected5] = useState(false)
  const [isSelected8, setSelected6] = useState(false)
  const [isSelected10, setSelected7] = useState(false)
  const [isSelectedSim1, setSelected8] = useState(false)
  const [isSelectedNao1, setSelected9] = useState(false)
  

  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
      <Text style={styles.txt}>O estabelecimento apresentou o App?</Text>
      <View style={styles.check}>
      <CheckBox 
        title="Sim"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="blue"  
        checked={isSelectedSim}   
        onPress={() => setSelected1(!isSelectedSim)} 
      />
      <CheckBox 
        title="Não"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="blue"  
        checked={isSelectedNao}   
        onPress={() => setSelected2(!isSelectedNao)} 
      />
      </View>
      
      <Text style={styles.txt}>Qual o nível de higiene do estabelecimento?</Text>
      <View style={styles.check}>
      <CheckBox 
        title="2"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="blue"  
        checked={isSelected2}   
        onPress={() => setSelected3(!isSelected2)} 
      />
      <CheckBox 
        title="4"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="blue"  
        checked={isSelected4}   
        onPress={() => setSelected4(!isSelected4)} 
      />
      <CheckBox 
        title="6"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="blue"  
        checked={isSelected6}   
        onPress={() => setSelected5(!isSelected6)} 
      />
      <CheckBox 
        title="8"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="blue"  
        checked={isSelected8}   
        onPress={() => setSelected6(!isSelected8)} 
      />
      <CheckBox 
        title="10"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="blue"  
        checked={isSelected10}   
        onPress={() => setSelected7(!isSelected10)} 
      />
      </View>

      <Text style={styles.txt}>O estabelecimento mantém lixeiras para uso?</Text>
      <View style={styles.check}>
      <CheckBox 
        title="Sim"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="blue"  
        checked={isSelectedSim1}   
        onPress={() => setSelected8(!isSelectedSim1)} 
      />
      <CheckBox 
        title="Não"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="blue"  
        checked={isSelectedNao1}   
        onPress={() => setSelected9(!isSelectedNao1)} 
      />
      </View>

      <View style={styles.bt}>
        <button 
        title="Cancelar"
        onPress={() => Alert.alert('Simple Button pressed')}      
        />
        <button
        title="Salvar"
        onPress={() => Alert.alert('Simple Button pressed')}      
        />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 18,
    color: "white"
  },
  check: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50
  }
});


