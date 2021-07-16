import React from 'react'

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'


export default function StartScreen({ navigation }) {
  return (

    <Background>

      <Logo />
      <Header>Prototype Navigation</Header>
      <Paragraph>
        We Learn A Lot
      </Paragraph>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Dashboard')}
      >
        Go To Dashboard
      </Button>

    </Background>
  )
}
