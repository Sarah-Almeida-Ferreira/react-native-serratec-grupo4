import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../themes/colors';

const { Screen, Navigator } = createNativeStackNavigator();

//Screens
import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { Welcome } from '../screens/Welcome/index';
import { UserRegister } from '../screens/UserRegister';

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name='Login'
        component={Login}
      />
      <Screen
        name='Home'
        component={Home}
      />
      <Screen
        name='Welcome'
        component={Welcome}
      />
      <Screen
        name='UserRegister'
        component={UserRegister}
      />
    </Navigator>
  )
}