import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Button, PricingCard } from 'react-native-elements'
import tailwind from 'tailwind-rn'

export default function HomeScreen () {
  return (
    <View style={styles.container}>
      <View style={
        tailwind('bg-blue-200 px-3 py-1 rounded-full mb-2')
      }>
        <Text
          style={
            tailwind('text-blue-800 font-semibold')
          }
        >
          Hello World!!
        </Text>
      </View>
      <Button title={'Hello World'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
