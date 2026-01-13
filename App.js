import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LearnScreen from './screens/LearnScreen';
import CodePlaygroundScreen from './screens/CodePlaygroundScreen';
import ExercisesScreen from './screens/ExercisesScreen';
import ProgressScreen from './screens/ProgressScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#3776ab',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#3776ab',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen
          name="Learn"
          component={LearnScreen}
          options={{
            tabBarLabel: 'Learn',
            title: 'Learn Python',
          }}
        />
        <Tab.Screen
          name="Playground"
          component={CodePlaygroundScreen}
          options={{
            tabBarLabel: 'Playground',
            title: 'Code Playground',
          }}
        />
        <Tab.Screen
          name="Exercises"
          component={ExercisesScreen}
          options={{
            tabBarLabel: 'Exercises',
            title: 'Practice',
          }}
        />
        <Tab.Screen
          name="Progress"
          component={ProgressScreen}
          options={{
            tabBarLabel: 'Progress',
            title: 'Your Progress',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
