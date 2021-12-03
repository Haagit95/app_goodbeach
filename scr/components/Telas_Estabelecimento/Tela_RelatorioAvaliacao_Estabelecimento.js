import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';


export default function Tela_RelatorioAvaliacao_Estabelecimento({ navigation}) {
  const voltar_menuP = () => {
    navigation.reset({
      index:0,
      routes:[{name:"Menu Estabelecimento"}]
    })
  }

  const mensagem = () => {
    navigation.reset({
      index:0,
      routes:[{name:"Sugestões e Críticas"}]
    })
  }
  
  return (
  <View style={{flex:1}}> 
  <ScrollView>
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.txt}>O estabelecimento apresentou o App?</Text>
        <View>
           
          <Text>Sim = 25%    </Text>
           
          <Text>Não = 75%</Text>
        </View>
        <Text style={styles.txt}>Qual o nível de higiene do estabelecimento?</Text>
        <View >
            
          <Text>2 = 20%   </Text>
          <Text>4 = 20%   </Text>
          <Text>6 = 25%   </Text>
          <Text>8 = 20%   </Text>
          <Text>10 = 15%   </Text>

        </View>
          <Text style={styles.txt}>O estabelecimento mantém lixeiras para uso?</Text>
          <View >
             
            <Text>Sim = 25%    </Text>
            <Text>Não = 75%</Text>

        </View>
        <Text style={styles.txt}>A quantidade de lixeiras disponíveis é suficiente para uso?</Text>
        <View >
            
           <Text>Sim = 25%    </Text>
           <Text>Não = 75%</Text>

        </View>
        <Text style={styles.txt}>O estabelecimento fornece material biodegradável? Canudos, copos de papel?</Text>
        <View >
           
            <Text>Sim = 25%    </Text>
            <Text>Não = 75%</Text>

        </View>
        <Text style={styles.txt}>A limpeza da areia quanto a lixos industrializados é satisfatória?</Text>
        <View >
           
            <Text>Sim = 25%    </Text>
            <Text>Não = 75%</Text>

        </View>
        <Text style={styles.txt}> O estabelecimento passou alguma informação de concientização sobre o cuidado com as vidas marinhas?</Text>
        <View >
           
            <Text>Sim = 25%    </Text>
            <Text>Não = 75%</Text>

        </View>
        <Text style={styles.txt}>Como você avalia esta experiência na sua vida?</Text>
        <View>
           
         <Text>Sem Valor Valor = 25%    </Text>
         <Text>Pouco Valor = 75%    </Text>
         <Text>Modificadora = 75%</Text>

        </View>
    </View>
  </ScrollView>

      <View style={styles.ViewBt}>
              <TouchableOpacity
                  style={styles.button1}
                  onPress={() => voltar_menuP()}
              >
                  <Text>Menu</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.button1}
                  onPress={() => mensagem()}
              >
                  <Text>Mensagens</Text>
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
    margin:8,
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold'
  },
  ViewBt2:{
    flexDirection: "row",
    padding:10
  },
  ViewBt:{
  
    flexDirection: "row",
    justifyContent: 'center',
    backgroundColor:'#00FA9A', 
  },
  
  check: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15
    
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