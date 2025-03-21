import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const index = () => {
  return (
    <View>
      <Text style={styles.h1}>Como você deseja usar o app?</Text>
      <Link style={styles.align} href="/auth/driver">
        <Image style={styles.images} source={require('../assets/driver.png')}/>
      </Link>
      <Text style={styles.text}>Motorista</Text>
      <Text style={styles.text1}>esse cachorro vai já morrer viu</Text>
      <Link style={styles.align} href="/auth/passager">
        <Image style={styles.images} source={require('../assets/Passager.png')}/>
      </Link>
      <Text style={styles.text}>Carona</Text>
      <Text style={styles.text1}>Só comendo pão com banana</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 25,
    position: "relative",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20
  },

  align: {
    alignSelf: "center"
  },

  images: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 100,
    marginBottom: 25
  },

  text: {
    textAlign: "center",
    fontSize: 15
  },

  text1: {
    textAlign: "center",
    fontSize: 13
  }
})

export default index