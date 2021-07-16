import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'

import { theme } from '../core/theme'

export default function TextInputs({ errorText, description, ...props }) {
  return (    
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    padding: 1 ,
    flexDirection:'row'
  },
  input: {
    backgroundColor: theme.colors.surface,
    flex: 1 ,
    
  },
  description: {
    fontSize: 8,
    color: theme.colors.secondary,
    paddingTop: 3,
  },
  error: {
    flex: 1,
    fontSize: 10,
    color: theme.colors.error,
    flexDirection: 'row',
  },
})
