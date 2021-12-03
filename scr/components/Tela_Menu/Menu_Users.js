import * as React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text,TouchableOpacity, Button } from 'react-native';


export default function Manu({ navigation }) {
   const log = () => {
      navigation.reset({
        index:0,
        routes:[{name:"Login"}]
      })
    }
   

return (
   <View style={{flex:1}}>
       <View style={{flex:1,justifyContent:'flex-end', alignItems:'center', width:'100%'}}>
          <Text style={{fontWeight:'bold', fontSize:30}}>Escolha sua opção!</Text>
       </View>

      <View style={{flex:10, justifyContent:'space-evenly', alignItems:'center'}}>
        <View style={styles.ViewBt}>
           <TouchableOpacity style={styles.button} 
            onPress={() => navigation.navigate('Sugestões e Críticas')}
             
           >
                <Text style={styles.txt}>Feedback</Text>
           </TouchableOpacity>
        </View>
      
        <View style={styles.ViewBt}>
           <TouchableOpacity style={styles.button} 
              onPress={() => navigation.navigate('Relatorio da Avaliação')}
           >
             <Text style={styles.txt}>Relatório</Text>
           </TouchableOpacity>
        </View>

        <View style={styles.ViewBt}>
           <TouchableOpacity style={styles.button} 
              onPress={() => navigation.navigate('Nota')}
           >
               <Text style={styles.txt}>Nota</Text>
           </TouchableOpacity>
        </View>
        
        <View style={styles.ViewBt}>
           <TouchableOpacity style={styles.button} 
              onPress={() => navigation.navigate('Ranking')}
           >
                <Text style={styles.txt}>Ranking</Text>
           </TouchableOpacity>
        </View>

        <View style={styles.ViewBt}>
           <TouchableOpacity style={styles.button} 
              onPress={() => navigation.navigate('Avaliação')}
           >
                <Text style={styles.txt}>Avaliação</Text>
           </TouchableOpacity>
        </View>
      </View>


        <View style={{flex:1,backgroundColor:'#00FA9A', width:'100%',justifyContent:'center', alignItems:'center'}}>
              <TouchableOpacity
                  style={styles.button1}
                  onPress={() => log()}
              >
                  <Text>Sair</Text>
              </TouchableOpacity>
        </View>
      </View>
);
}
/////////////////// Estilos Menu //////////////////////////////////////
const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center',
      },
      txt: {
         fontWeight:'bold',
         color:'white',
         fontSize:19
       },
     button: {
      padding: 30,
      borderRadius: 10,
      marginTop: 16,
      width:300,
      height:50,
      flexDirection: "row",
      justifyContent:'center',
      alignItems: "center",
      backgroundColor: "#1E90FF",
      padding: 10,
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
          
      ViewBt:{
            flexDirection: "row",
            justifyContent: 'center'
      }
  })