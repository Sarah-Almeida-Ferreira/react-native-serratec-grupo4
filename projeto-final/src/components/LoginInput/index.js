import React from 'react';
import { InputContainer, InputContainerPassword } from "./styles"

export const LoginInput = ({ placeholder }) => {
  return (
    <InputContainer
      placeholder={placeholder}
    />
  )
}

export const PasswordInput = ({ placeholder }) => {
  return (
    <InputContainerPassword
      placeholder={placeholder}
    />
  )
}
