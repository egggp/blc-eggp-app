import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserInfoScreen from '@/screens/App/UserInfo.screen'

const UserInfoStack = createStackNavigator()

export const NAME = 'UserInfo'

export default function UserInfoNavigator () {
  return (
    <UserInfoStack.Navigator>
      <UserInfoStack.Screen
        name="UserInfo"
        component={UserInfoScreen}
        options={{
          headerShown: false
        }}
      />
    </UserInfoStack.Navigator>
  )
}
