import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CheckBox } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

function Pergunta_1({ navigation }) {
  const [isSelectedSim, setSelected1] = useState(false)
  const [isSelectedNao, setSelected2] = useState(false)
  return (     
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
      <Button
        title="Próxima"
        onPress={() => navigation.navigate('Pergunta 2')}
      />
    </View>
  );
}

function Pergunta_2({ navigation }) {
  const [isSelected2, setSelected3] = useState(false)
  const [isSelected4, setSelected4] = useState(false)
  const [isSelected6, setSelected5] = useState(false)
  const [isSelected8, setSelected6] = useState(false)
  const [isSelected10, setSelected7] = useState(false)
    return (   
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
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
  
        <Button
          title="Próxima"
          onPress={() => navigation.navigate('Pergunta 3')}
        />
      </View>
    );
  }



  function Pergunta_3 ({ navigation }) {
    const [isSelectedSim1, setSelected8] = useState(false)
    const [isSelectedNao1, setSelected9] = useState(false)
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
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
        <Button
          title="Próxima"
          onPress={() => navigation.navigate('Pergunta 4')}
        />
      </View>
    );
  }

  function Pergunta_4 ({ navigation }) {
    const [isSelectedSim2, setSelected10] = useState(false)
    const [isSelectedNao2, setSelected11] = useState(false)
    return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
        <Text style={styles.txt}>A quantidade de lixeiras disponíveis é suficiente para uso?</Text>
        <View style={styles.check}>
        <CheckBox 
          title="Sim"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checkedColor="green"
          uncheckedColor="blue"  
          checked={isSelectedSim2}   
          onPress={() => setSelected10(!isSelectedSim2)} 
        />
        <CheckBox 
          title="Não"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checkedColor="green"
          uncheckedColor="blue"  
          checked={isSelectedNao2}   
          onPress={() => setSelected11(!isSelectedNao2)} 
        />
        </View>
        <Button
          title="Próxima"
          onPress={() => navigation.navigate('Pergunta 5')}
        />
      </View>
    );
  }

  function Pergunta_5 ({ navigation }) {
    const [isSelectedSim3, setSelected12] = useState(false)
    const [isSelectedNao3, setSelected13] = useState(false)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.txt}>O estabelecimento fornece material biodegradável? Canudos, copos de papel?</Text>
        <View style={styles.check}>
        <CheckBox 
          title="Sim"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checkedColor="green"
          uncheckedColor="blue"  
          checked={isSelectedSim3}   
          onPress={() => setSelected12(!isSelectedSim3)} 
        />
        <CheckBox 
          title="Não"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checkedColor="green"
          uncheckedColor="blue"  
          checked={isSelectedNao3}   
          onPress={() => setSelected13(!isSelectedNao3)} 
        />
        </View>
        <Button
          title="Próxima"
          onPress={() => navigation.navigate('Pergunta 6')}
        />
      </View>
    );
  }

  function Pergunta_6 ({ navigation }) {
    const [isSelectedSim4, setSelected14] = useState(false)
    const [isSelectedNao4, setSelected15] = useState(false)
    return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
        <Text style={styles.txt}>A limpeza da areia quanto a lixos industrializados é satisfatória?</Text>
        <View style={styles.check}>
        <CheckBox 
          title="Sim"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checkedColor="green"
          uncheckedColor="blue"  
          checked={isSelectedSim4}   
          onPress={() => setSelected14(!isSelectedSim4)} 
        />
        <CheckBox 
          title="Não"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checkedColor="green"
          uncheckedColor="blue"  
          checked={isSelectedNao4}   
          onPress={() => setSelected15(!isSelectedNao4)} 
        />
        </View>
        <Button
          title="Próxima"
          onPress={() => navigation.navigate('Pergunta 7')}
        />
      </View>
    );
  }

  function Pergunta_7 ({ navigation }) {
    const [isSelectedSim5, setSelected16] = useState(false)
    const [isSelectedNao5, setSelected17] = useState(false)
    return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
        <Text style={styles.txt}> O estabelecimento passou alguma informação de concientização sobre o cuidado com as vidas marinhas?</Text>
        <View style={styles.check}>
          <CheckBox 
            title="Sim"
            checkedIcon="check"
            uncheckedIcon="square-o"
            checkedColor="green"
            uncheckedColor="blue"  
            checked={isSelectedSim5}   
            onPress={() => setSelected16(!isSelectedSim5)} 
          />
          <CheckBox 
            title="Não"
            checkedIcon="check"
            uncheckedIcon="square-o"
            checkedColor="green"
            uncheckedColor="blue"  
            checked={isSelectedNao5}   
            onPress={() => setSelected17(!isSelectedNao5)} 
          />
        </View>
        <Button
          title="Próxima"
          onPress={() => navigation.navigate('Pergunta 8')}
        />
      </View>
    );
  }

  function Pergunta_8 ({ navigation }) {
    const [isSelectedSemValor, setSelected18] = useState(false)
    const [isSelectedPoucoValor, setSelected19] = useState(false)
    const [isSelectedMod, setSelected20] = useState(false)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.txt}>Como você avalia esta experiência na sua vida?</Text>
        <View style={styles.check}>
        <CheckBox 
          title="Sem valor"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checkedColor="green"
          uncheckedColor="blue"  
          checked={isSelectedSemValor}   
          onPress={() => setSelected18(!isSelectedSemValor)} 
        />
        <CheckBox 
          title="Pouco valor"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checkedColor="green"
          uncheckedColor="blue"  
          checked={isSelectedPoucoValor}   
          onPress={() => setSelected19(!isSelectedPoucoValor)} 
        />
        <CheckBox 
          title="Modificadora"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checkedColor="green"
          uncheckedColor="blue"  
          checked={isSelectedMod}   
          onPress={() => setSelected20(!isSelectedMod)} 
        />
        </View>
        <Button
          title="Próxima"
          onPress={() => navigation.navigate('Crítica e Sugestões')}
        />
      </View>
    );
  }

  function CriticaSugestao ({ navigation }) {

    const [text, setText] = React.useState('')

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <View>
            <TextInput
            style={styles.txtIn}
            label="Críticas ou sugestões"
            value={text}
            onChangeText={text => setText(text)}
           />
        </View>
        <Button
          title="Próxima"
          onPress={() => navigation.navigate('Fim')}
        />
      </View>
    );
  }

  function Tela_fim () {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <View>
            <Text style={{fontSize:25}}>Obrigado pela Participação!</Text>
        </View>

     </View>
       
    );
  }

const Stack = createNativeStackNavigator();

function Tela_Praiano() {
  return (
    <View style={{backgroundColor:'purple', flex:1}}> 
    <><NavigationContainer independent={true}>
          <Stack.Navigator  initialRouteName="Pergunta1">
           
              <Stack.Screen name="Pergunta 1" component={Pergunta_1} />
              <Stack.Screen name="Pergunta 2" component={Pergunta_2} />
              <Stack.Screen name="Pergunta 3" component={Pergunta_3} />
              <Stack.Screen name="Pergunta 4" component={Pergunta_4} />
              <Stack.Screen name="Pergunta 5" component={Pergunta_5} />
              <Stack.Screen name="Pergunta 6" component={Pergunta_6} />
              <Stack.Screen name="Pergunta 7" component={Pergunta_7} />
              <Stack.Screen name="Pergunta 8" component={Pergunta_8} />
              <Stack.Screen name="Crítica e Sugestões" component={CriticaSugestao} />
              <Stack.Screen name="Fim" component={Tela_fim} />
        
          </Stack.Navigator>
      </NavigationContainer>

      <View style={styles.ViewBt}>
              <TouchableOpacity
                  style={styles.button}
              >
                  <Text>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.button}
              >
                  <Text>Menu</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.button}
              >
                  <Text>Salvar</Text>
              </TouchableOpacity>
          </View></>
       </View>
  );
}

export default Tela_Praiano ;

const styles = StyleSheet.create({
    txt: {
      fontSize: 18,
      color: "black",
      margin:12,
      alignItems:'center',
      justifyContent:'center'
    },
    check: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      height: 30,
      margin:30,
    },
    button: {
      backgroundColor: "#A9A9A9",
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
    }
   
  });
