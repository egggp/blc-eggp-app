import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import React from 'react'

export default function UserInfoScreen () {
  return (
    <View style={tailwind('flex-auto bg-white items-center justify-center')}>
      <View style={
        tailwind('bg-blue-200 px-3 py-1 rounded-full mb-2')
      }>
        <Text
          style={
            tailwind('text-blue-800 font-semibold')
          }
        >
          UserInfo
        </Text>
      </View>
    </View>
  )
}
