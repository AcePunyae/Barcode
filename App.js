import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Scan from "./Screens/Scan"

import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'


export default function App() {
  return (
    <AppContainer></AppContainer>
  )
}
const TabNavigator= createBottomTabNavigator({
  Scan:{screen:Scan},

})

const AppContainer= createAppContainer(TabNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
