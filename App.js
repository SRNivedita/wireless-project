import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Booktransactionscreen from './screens/booktransactionscreen';
import Searchscreen from './screens/searchscreen';

export default function App() {
  return (
  <AppContainer/>  
  );
}

const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:Booktransactionscreen},
  Search:{screen:Searchscreen}
  
})
const AppContainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
