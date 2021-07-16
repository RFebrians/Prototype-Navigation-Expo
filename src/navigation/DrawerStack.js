import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import MainTabs from './MainTabs'

import DrawerFirstPage from '../screens/DrawerFirstPage'
import DrawerSecondPage from '../screens/DrawerSecondPage'


const Drawer = createDrawerNavigator()

export default function DrawerStack() {
  
  return(

    <Drawer.Navigator>
    <Drawer.Screen name="MainTabs" component={MainTabs}/>
    <Drawer.Screen name="DrawerFirstPage" component={DrawerFirstPage}/>
    <Drawer.Screen name="DrawerSecondPage" component={DrawerSecondPage}/>
    </Drawer.Navigator>
  )
}

