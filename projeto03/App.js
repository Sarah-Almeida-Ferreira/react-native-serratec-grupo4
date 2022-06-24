import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

const Teste = () => {
  return (
      <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
        <View style={{height:300, width:300, backgroundColor: "purple", borderRadius:5}}>
          <Text style={{textAlign:"center", fontSize:30, fontWeight:"bold", padding:10, color: "white"}}>Login</Text>
          <View style={{marginTop:20}}>
            <View style={{height:50, width:270, backgroundColor: "white", alignSelf:"center", borderRadius:3}}/>
            <View style={{marginTop:10, height:50, width:270, backgroundColor: "white", alignSelf:"center", borderRadius:3}}/>
          </View>
          <Pressable style={styles.button}>
            <Text style={{color:"white", fontWeight:"bold"}}>Entrar</Text>
          </Pressable>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height:50,
    width:150,
    marginTop:20,
    backgroundColor:"#9932CC",
    alignSelf:"center",
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center"
  }
});

export default Teste;