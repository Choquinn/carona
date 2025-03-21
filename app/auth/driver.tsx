import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const driver = () => {
  return (
    <>
        <View style={{
            backgroundColor: '#000',
            height: 86,
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row'
        }}>
            <MaterialIcons style={styles.arrow} name='arrow-back'/>
            <Text style={styles.title}>Cadastro de novo Motorista</Text>
        </View>
        <View>
            <Text style={styles.text}>Vamos iniciar seu cadastro! Começe preenchendo os campos abaixo:</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#FFF',
    fontSize: 23,
    textAlign: 'center',
    marginLeft: 16 
  },

  arrow: {
    color: '#FFF',
    alignSelf: 'center',
    fontSize: 30,
    marginLeft: 15
  },

  text: {
    fontSize: 20,
    
  }
})


export default driver