import * as Linking from 'expo-linking'
import { LinkingOptions } from '@react-navigation/native/lib/typescript/src/types'

const linkConfiguration = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Home: '/'
    }
  }
}


export default linkConfiguration
