import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { Login } from '../screens/Login';

export function StackRoutes() {
    return (
      <Navigator>
        <Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    )
  }