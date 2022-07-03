import React from 'react';
import { MainContainer, SpacingHeight } from '../../components/MainContainer/styles';
import { FormContainer, BeeIcon, Content } from './styles';

export const Logout = () => {
  return (
    <MainContainer>
      <BeeIcon source={require('../../../assets/abelha.png')} />
      <FormContainer>
        <Content>You have been logged Out!</Content>
        <SpacingHeight />
        <Content>Thank you!</Content>
      </FormContainer>
    </MainContainer>
  );
}