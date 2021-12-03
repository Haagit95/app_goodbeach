import React from 'react';
import { StyleSheet, FlatList, Text, View, Button, TouchableOpacity, ScrollView, Platform} from 'react-native';


export default function Ranking ({navigation}) {

    const voltar_menuP = () => {
        navigation.reset({
          index:0,
          routes:[{name:"Menu Praiano"}]
        })
      }
    
    const user = [
      {pos: '1°',name:'Coqueiros'},
      {pos: '2°',name:'Praia Mar'},
      {pos: '3°',name:'Bela vista mar'},
      {pos: '4°',name:'Areia branca'},
      {pos: '5°',name:'Espaço Praia'},
      {pos: '6°',name:'Praieiras'},
      {pos: '7°',name:'Pinhal'},
      {pos: '8°',name:'Estação Verão'},
      {pos: '9°',name:'Água de coco'},
    ] 
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
          <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{fontWeight:'bold', fontSize:20}}>Ranking dos estabelecimentos melhores avaliados:</Text>
         </View>

          <View style={{flex:3}}>
            <FlatList
                style={{flex:2}}
                data={user}
                renderItem={(obj) => {
                    return(
                        <Text  style={{ fontSize:20}}>{obj.item.pos} - {obj.item.name}</Text>
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
            </View>

        </View>
      );
    }
    
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
        
        ViewBt:{
          flexDirection: "row",
          justifyContent: 'center',
          backgroundColor:'#00FA9A',
          width:'100%'
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
