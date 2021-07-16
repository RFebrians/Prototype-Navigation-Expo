import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import StartScreen from "../screens/StartScreen"
import Dashboard from "../screens/Dashboard"

import Home from "../screens/Home"
import About from "../screens/About"
import DrawerFirstPage from "../screens/DrawerFirstPage"
import DrawerSecondPage from "../screens/DrawerSecondPage"


const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
    initialRouteName="StartScreen"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="About" component={About}/>
      <Stack.Screen name="DrawerFirstPage" component={DrawerFirstPage}/>
      <Stack.Screen name="DrawerSecondPage" component={DrawerSecondPage}/>

      </Stack.Navigator>
  );
}
