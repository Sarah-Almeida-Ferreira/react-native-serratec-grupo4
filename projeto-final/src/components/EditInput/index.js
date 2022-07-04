import React from 'react';
import { Container, CustomInput, NomeInput, WrapperInput } from "./styles"
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../themes/colors';

// import { Container } from './styles';

export const EditInput = ({nome, placeholder}) => {
  return (
    <Container>
      <NomeInput>{nome}</NomeInput>
      <WrapperInput>
        <CustomInput placeholder={placeholder} />
        <MaterialIcons name="edit" size={24} color={colors.secondary} style={{marginLeft: -20}}/>
      </WrapperInput>
    </Container>
  );
}