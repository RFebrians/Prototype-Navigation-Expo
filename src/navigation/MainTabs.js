import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AntDesign } from '@expo/vector-icons'

import HomeStack from './HomeStack'

import Home from "../screens/Home"
import About from "../screens/About"

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = 'book';
          }

          if (route.name === 'Library') {
            iconName = 'home';
          }

          if (route.name === 'Profile') {
            iconName = 'setting';
          }

          return <AntDesign name={iconName} size={size} />;
        },                
      })}
    >
      
      <Tab.Screen name='Feed' component={About} />
      <Tab.Screen name='Library' component={Home} />
      <Tab.Screen name='Profile' component={HomeStack} />
    </Tab.Navigator>
  );
}
