import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native'
import { ColorSchemeName } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import * as React from 'react'

import BottomTabNavigator from '@/navigations/BottomTabNavigator'
import NotFoundScreen from '@/screens/NotFound.screen'

import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '@/types'

export default function Navigation ({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <StatusBar style={'light'} />
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  )
}
