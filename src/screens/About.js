import React from 'react'

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'


export default function About({ navigation }) {
  return (
    <Background>

      <Logo />
      <Header>Under Construction Page</Header>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Back to StartScreen
      </Button>


    </Background>
  )
}
