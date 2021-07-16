import React from 'react'
import { Provider } from 'react-native-paper'
import RootNavigator from './src/navigation/RootNavigator'
import { theme } from './src/core/theme'

export default function App() {
  return (
    <Provider theme={theme}>
      <RootNavigator />
      </Provider>
  );
}
