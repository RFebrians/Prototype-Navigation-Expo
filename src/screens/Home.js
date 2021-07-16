import React from 'react'

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'


export default function Home({ navigation }) {
  return (
    <Background>

      <Logo />
      <Header>Library is Under Construction </Header>
      <Paragraph>
        Back Again Soon 
      </Paragraph>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('StartScreen')}
      >
        Back to StartScreen
      </Button>

    </Background>
  )
}
