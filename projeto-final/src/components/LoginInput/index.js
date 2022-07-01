import React from 'react';
import { InputContainer, InputContainerPassword } from "./styles";
import colors from '../../themes/colors';

export const LoginInput = ({ placeholder }) => {
  return (
      <InputContainer
        placeholderTextColor={`${colors.tertiary}`}
        placeholder={placeholder}
      />
  )
} 

export const PasswordInput  = ({ placeholder }) => {
  return (
    <InputContainerPassword
      placeholderTextColor={`${colors.tertiary}`}
      placeholder={placeholder}
    />
  )
}
