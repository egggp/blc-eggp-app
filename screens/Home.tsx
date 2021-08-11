import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Button, PricingCard } from 'react-native-elements'
import tailwind from 'tailwind-rn'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/features'
import { HELLO, helloThunks, IHelloState } from '@/features/modules/hello'

export default function HomeScreen () {
  const dispatch = useDispatch()
  const { count } = useSelector<RootState, IHelloState>(state => state[HELLO])

  const handleClickBtn = () => {
    dispatch(helloThunks.addCount())
  }

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
          Hello World!! : {count}
        </Text>
      </View>
      <Button
        title={'Hello World'}
        onPress={handleClickBtn}
      />
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
