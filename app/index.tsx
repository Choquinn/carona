import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../components/CustomButton'

const index = () => {
  return (
    <View>
      <Text style={styles.h1}>Como você deseja usar o app?</Text>
      <Button
        backgroundImage='driver.png'
        height="150px"
        width="150px"
        radius="50%"
        alignSelf="center"
        marginTop="100px"
        marginBottom="25px"
        onClick={() => console.log("você clicou no botão, coma pão com banana")}
      />
      <Text style={styles.text}>Motorista</Text>
      <Text style={styles.text1}>esse cachorro vai já morrer viu</Text>
      <Image style={styles.images} source={require('../assets/Passager.png')}/>
      <Text style={styles.text}>Carona</Text>
      <Text style={styles.text1}>Só comendo pão com banana</Text>
    </View>
  )
}

/*<h1>Colorful Custom Button Components</h1>
<Image style={styles.images} source={require('../assets/driver.png')}/>
      <Button 
        border="none"
        color="pink"
        height = "200px"
        onClick={() => console.log("You clicked on the pink circle!")}
        radius = "50%"
        width = "200px"
        children = "I'm a pink circle!"
      />*/

const styles = StyleSheet.create({
  h1: {
    fontSize: 25,
    position: "relative",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20
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