import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabBarIcon from '@/components/atoms/tabs/TabBarIcon'
import HomeStackNavigator, { NAME as HomeName } from '@/navigations/stacks/Home.stack'
import UserInfoNavigator, { NAME as UserInfoName } from '@/navigations/stacks/UserInfo.stack'

const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigator () {
  return (
    <BottomTab.Navigator
      initialRouteName={HomeName}
    >
      <BottomTab.Screen
        name={HomeName}
        component={HomeStackNavigator}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        }}
      />
      <BottomTab.Screen
        name={UserInfoName}
        component={UserInfoNavigator}
        options={{
          tabBarLabel: '내정보',
          tabBarIcon: ({ color }) => <TabBarIcon name="person-outline" color={color} />
        }}
      />
    </BottomTab.Navigator>
  )
}
