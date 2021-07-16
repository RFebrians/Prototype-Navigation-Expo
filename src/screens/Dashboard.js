import React from 'react'

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'


export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Congratulations !</Header>
      <Paragraph>
        You're on Dashboard
      </Paragraph>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('StartScreen')}
      >
        Back to Homescreen
      </Button>

    </Background>
  )
}
