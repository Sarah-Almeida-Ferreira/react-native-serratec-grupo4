import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../themes/colors';

const { Screen, Navigator } = createNativeStackNavigator();

import { Login } from '../screens/Login';
import { UserRegister } from '../screens/UserRegister';

export function StackRoutes() {
  return (
    <Navigator
    >
      <Screen
        name='Login'
        component={Login}
        options={{
          stackIcon: () => <MaterialIcons name="logout" size={22} />,
          headerStyle: {
            backgroundColor: `${colors.primary}`,
          },
          headerTintColor: `${colors.secondary}`,
          headerTitleAlign: 'center',
          title: 'Cadastro'

        }}
      />
      <Screen
        name='UserRegister'
        component={UserRegister}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="logout"
              color={color}
              size={size}
            />
          )
        }}
      />

    </Navigator>
  )
}