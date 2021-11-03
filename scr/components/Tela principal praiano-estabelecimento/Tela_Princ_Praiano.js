import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Tela_Praiano({ navigation }) {

  const tela_Passagem = () => {
    navigation.navigate("Tela_Estabelecimento")
  }

  return (
    <View style={styles.container}>
      <Text>Tela Praiano</Text>
      <StatusBar style="auto" />

      <Button
        title="estabelecimento"
        onPress={() => tela_Passagem()}
      />

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
});
