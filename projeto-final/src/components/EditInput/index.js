import React from 'react';
import { Container, CustomInput, NomeInput, WrapperInput } from "./styles"
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../themes/colors';

// import { Container } from './styles';

export const EditInput = ({nome, placeholder, value, onChangeText, autoCapitalize}) => {
  return (
    <Container>
      <NomeInput>{nome}</NomeInput>
      <WrapperInput>
        <CustomInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize={autoCapitalize}
        />
        <MaterialIcons name="edit" size={24} color={colors.secondary} style={{marginLeft: 10}}/>
      </WrapperInput>
    </Container>
  );
}