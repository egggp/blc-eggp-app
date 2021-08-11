import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Button, PricingCard } from 'react-native-elements'
import tailwind from 'tailwind-rn'

export default function HomeScreen () {
  return (
    <View style={styles.container}>
      <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full mb-2')}>
        <Text
          style={tailwind('text-blue-800 font-semibold')}
        >
          Hello World!!
        </Text>
      </View>
      <Button title={'Hello World'} />
  
      <PricingCard
        color="#4f9deb"
        title="Free"
        price="$0"
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
      />;
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
