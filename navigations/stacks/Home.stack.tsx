import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '@/screens/App/Home.screen'

const HomeStack = createStackNavigator()

export const NAME = 'Home'

export default function HomeStackNavigator () {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={NAME}
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
    </HomeStack.Navigator>
  )
}
