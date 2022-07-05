import React, { useEffect } from 'react';
import { MainContainer, SpacingHeight } from '../../components/MainContainer/styles';
import spacing from '../../themes/spacing';
import { FormContainer, BeeIcon, Content } from './styles';

export const Logout = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 3000)
  }, []);
  return (
    <MainContainer>
      <BeeIcon source={require('../../../assets/abelha.png')} />
      <FormContainer>
        <Content>Você foi deslogado!</Content>
        <SpacingHeight height={spacing.extraLarge} />
        <Content>Obrigado e volte sempre!</Content>
      </FormContainer>
    </MainContainer>
  );
}