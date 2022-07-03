import React from 'react';
import { CustomLogoutButton } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../themes/colors';

export const LogoutButton = ({ navigation }) => {
  return (
    <CustomLogoutButton
      onPress={() => {navigation.navigate('Logout')}}
    >
      <MaterialCommunityIcons
        name="logout-variant"
        color={colors.primary}
        size={24}
      />
    </CustomLogoutButton>
  )
}