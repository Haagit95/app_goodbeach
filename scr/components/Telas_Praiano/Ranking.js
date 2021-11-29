import React from 'react';
import { StyleSheet, FlatList, Text, View, Button, TouchableOpacity, ScrollView, Platform} from 'react-native';


export default function Ranking ({navigation}) {

    const voltar_menuP = () => {
        navigation.reset({
          index:0,
          routes:[{name:"Menu"}]
        })
      }
    
    const user = [
        {pos: '1°',name:'Estab_1'},
        {pos: '2°',name:'estab_2'},
        {pos: '3°',name:'estab_3'},
    ] 
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
          <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{fontWeight:'bold', fontSize:20}}>Ranking dos estabelecimentos melhores avaliados:</Text>
         </View>

            <FlatList
                style={{flex:2}}
                data={user}
                renderItem={(obj) => {
                    return(
                        <Text  style={{ fontSize:20}}>{obj.item.pos} - {obj.item.name}</Text>
                    )
                }}
            />

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
