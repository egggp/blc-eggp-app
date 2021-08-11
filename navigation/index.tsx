import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native'
import { ColorSchemeName } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import * as React from 'react'

import LinkingConfiguration from './LinkingConfiguration'

import HomeScreen from '@/screens/Home'
import NotFoundScreen from '@/screens/NotFoundScreen'

import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '@/types'

export default function Navigation ({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
      <StatusBar style={'light'} />
    </NavigationContainer>
  )
}

const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={HomeScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  )
}
