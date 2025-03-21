import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View>
      <Text style={styles.h1}>Como você deseja usar o app?</Text>
      <Image style={styles.images} source={require('../assets/driver.png')}/>
      <Text>Motorista</Text>
      <Text>esse cachorro vai já morrer viu</Text>
      <Image style={styles.images} source={require('../assets/Passager.png')}/>
      <Text>Carona</Text>
      <Text>Só comendo pão com banana</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 25,
    position: "relative",
    textAlign: "center"
  },

  images: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 100,
    marginBottom: 20
  }
})

export default index