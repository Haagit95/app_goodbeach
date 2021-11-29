import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Image, Text, View, Button, TouchableOpacity, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RadioButton, TextInput} from 'react-native-paper';



  function Pergunta_1({ navigation }) {
  const [checked, setChecked] = React.useState('');

  return (     
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.txt}>O estabelecimento apresentou o App?</Text>
        <View style={styles.check}>
          
          <RadioButton
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
          />
          <Text>Sim</Text>

          <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
          />
          <Text>Não</Text>
          
      </View>
      
        <View style={styles.ViewBt2}>
          <View style={{marginHorizontal:10}}>
            <Button        
             title="Enviar"
             onPress={() => alert('Avaliação salva!!')}
            />
          </View>
            <View>
              <Button 
                title="Próxima"
                onPress={() => navigation.navigate('Pergunta 2')}
              />
          </View>
        </View>
    </View>
  );
  }

  function Pergunta_2({ navigation }) {

    const [checked, setChecked] = React.useState('');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.txt}>Qual o nível de higiene do estabelecimento?</Text>
        <View style={styles.ViewBt}>
          <RadioButton
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
          />
          <Text style={{padding:8}} >2</Text>
          <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
          />
          <Text style={{padding:8}}>4</Text>
          <RadioButton
            value="tree"
            status={ checked === 'tree' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('tree')}
          />
          <Text style={{padding:8}}>6</Text>
          <RadioButton
            value="four"
            status={ checked === 'four' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('four')}
          />
          <Text style={{padding:8}}>8</Text>
          <RadioButton
            value="five"
            status={ checked === 'five' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('five')}
          />
          <Text style={{padding:8}}>10</Text>
         
        </View>

        <View style={styles.ViewBt2}>
          <View style={{marginHorizontal:10}}>
            <Button          
             title="Enviar"
             onPress={() => alert('Avaliação salva!')}
            />
          </View>
            <Button 
              title="Próxima"
              onPress={() => navigation.navigate('Pergunta 3')}
            />
          </View>
    </View>
    );
  }

  function Pergunta_3 ({ navigation }) {
    const [checked, setChecked] = React.useState('');

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
     <Text style={styles.txt}>O estabelecimento mantém lixeiras para uso?</Text>
        <View style={styles.check}>
          
          <RadioButton
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
          />
          <Text>Sim</Text>

          <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
          />
          <Text>Não</Text>
        </View>

        <View style={styles.ViewBt2}>
          <View style={{marginHorizontal:10}}>
            <Button          
             title="Enviar"
             onPress={() => alert('Avaliação salva!')}
            />
          </View>
            <Button 
              title="Próxima"
              onPress={() => navigation.navigate('Pergunta 4')}
            />
          </View>
       </View>
   );
  }

  function Pergunta_4 ({ navigation }) {
    const [checked, setChecked] = React.useState('');

    return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
        <Text style={styles.txt}>A quantidade de lixeiras disponíveis é suficiente para uso?</Text>
        <View style={styles.check}>
        <RadioButton
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
          />
          <Text>Sim</Text>

          <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
          />
          <Text>Não</Text>

        </View>

        <View style={styles.ViewBt2}>
          <View style={{marginHorizontal:10}}>
            <Button          
             title="Enviar"
             onPress={() => alert('Avaliação salva!')}
            />
          </View>
              <Button 
                title="Próxima"
                onPress={() => navigation.navigate('Pergunta 5')}
              />
          </View>
       </View>
    );
  }

  function Pergunta_5 ({ navigation }) {
    const [checked, setChecked] = React.useState('');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.txt}>O estabelecimento fornece material biodegradável? Canudos, copos de papel?</Text>
        <View style={styles.check}>
        <RadioButton
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
          />
          <Text>Sim</Text>

          <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
          />
          <Text>Não</Text>
        </View>

        <View style={styles.ViewBt2}>
          <View style={{marginHorizontal:10}}>
            <Button          
             title="Enviar"
             onPress={() => alert('Avaliação salva!')}
            />
          </View>
              <Button 
                title="Próxima"
                onPress={() => navigation.navigate('Pergunta 6')}
              />
          </View>
       </View>
    );
  }

  function Pergunta_6 ({ navigation }) {
    const [checked, setChecked] = React.useState('');

    return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
      <Text style={styles.txt}>A limpeza da areia quanto a lixos industrializados é satisfatória?</Text>
        <View style={styles.check}>
          <RadioButton
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
          />
          <Text>Sim</Text>

          <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
          />
          <Text>Não</Text>

        </View>

        <View style={styles.ViewBt2}>
          <View style={{marginHorizontal:10}}>
            <Button          
             title="Enviar"
             onPress={() => alert('Avaliação salva!')}
            />
          </View>
              <Button 
                title="Próxima"
                onPress={() => navigation.navigate('Pergunta 7')}
              />
          </View>
       </View>
    );
  }

  function Pergunta_7 ({ navigation }) {
    const [checked, setChecked] = React.useState('');
    
    return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
        <Text style={styles.txt}> O estabelecimento passou alguma informação de concientização sobre o cuidado com as vidas marinhas?</Text>
        <View style={styles.check}>
          <RadioButton
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
          />
          <Text>Sim</Text>

          <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
          />
          <Text>Não</Text>

        </View>

        <View style={styles.ViewBt2}>
          <View style={{marginHorizontal:10}}>
            <Button          
             title="Enviar"
             onPress={() => alert('Avaliação salva!')}
            />
          </View>
              <Button 
                title="Próxima"
                onPress={() => navigation.navigate('Pergunta 8')}
              />
          </View>
       </View>
    );
  }

  function Pergunta_8 ({ navigation }) {
    const [checked, setChecked] = React.useState('');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.txt}>Como você avalia esta experiência na sua vida?</Text>
        
        <View style={styles.check}>
          <RadioButton
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
          />
          <Text>Sem Valor</Text>

          <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
          />
          <Text>Pouco Valor</Text>
          <RadioButton
            value="tree"
            status={ checked === 'tree' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('tree')}
          />
          <Text>Modificadora</Text>

        </View>

        <View style={styles.ViewBt2}>
          <View style={{marginHorizontal:10}}>
            <Button          
             title="Enviar"
             onPress={() => alert('Avaliação salva!')}
            />
          </View>
              <Button 
                title="Próxima"
                onPress={() => navigation.navigate('Crítica e Sugestões')}
              />
          </View>
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
            label="Deixe usa críticas ou sugestões"
            value={text}
            onChangeText={text => setText(text)}
           />
        </View>
        <View style={styles.ViewBt2}>
          <View style={{marginHorizontal:10}}>
            <Button          
             title="Enviar"
             onPress={() => alert('Avaliação salva!')}
            />
          </View>
              <Button 
                title="Próxima"
                onPress={() => navigation.navigate('Fim')}
              />
          </View>
       </View>
    );
  }

  function Tela_fim () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style = {{fontSize:30, padding:20}}>Obrigado pela Participação!</Text>
        <View>
          <Image
            style={{width: 250, height:250}}
            source={require('../../Image/iconn.png')}/>
         </View>
      </View>
    );
  }

const Stack = createNativeStackNavigator();

function Tela_Avaliacao_Praiano({navigation}) {
  return (
    <View style={{backgroundColor:'#00FA9A', flex:1}}> 
    <><NavigationContainer independent={true}>
          <Stack.Navigator  initialRouteName="Pergunta 1">      
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
                  style={styles.button1}
                  onPress={() => navigation.navigate('Menu')}
              >
                  <Text>Menu</Text>
              </TouchableOpacity>
          </View></>
       </View>
  );
}

export default Tela_Avaliacao_Praiano ;

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
      padding:15
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
