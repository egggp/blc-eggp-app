import React from 'react'
import { View } from 'react-native'

export default function DefaultLayout (
  props: { children: React.ReactNode }
) {
  return (
    <View>
      {props.children}
    </View>
  )
}
