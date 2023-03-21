import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TestScreen from '../screens/TestScreen'
import { COLORS } from '../constants/colors'

const Stack = createNativeStackNavigator();

const TestNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
        headerTitleStyle: {
          fontFamily: 'OpenSans_700Bold'
        }
      }}
    >
      <Stack.Screen
        name="Cart"
        component={TestScreen}
        options={{
          title: 'Test de tab'
        }}
      />
    </Stack.Navigator>
  )
}

export default TestNavigator

const styles = StyleSheet.create({})