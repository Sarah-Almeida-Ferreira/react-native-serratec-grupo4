import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles';
import { FormContainer, Title, BeeIcon, EnterButton, ButtonText } from './styles';
import { LoginInput, PasswordInput } from "../../components/LoginInput";

export const Login = ({ navigation }) => {

  return (
    <MainContainer>
      <BeeIcon source={require('../../../assets/abelha.png')} />
      <FormContainer>
        <Title>Login</Title>
        <LoginInput placeholder={'Digite seu login'} />
        <PasswordInput placeholder={'Digite sua senha'} />
        <EnterButton onPress={() => navigation.navigate('Welcome')}>
          <ButtonText>ENTRAR</ButtonText>
        </EnterButton>
      </FormContainer>
    </MainContainer>
  );
}