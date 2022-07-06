import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles';
import { FormContainer, Title, BeeIcon, EnterButton, ButtonText, WrapperLogin } from './styles';
import { LoginInput, PasswordInput } from "../../components/LoginInput";
import { api } from '../../services/api.js';

export const Login = ({ navigation }) => {




  return (
    <MainContainer style={{}}>
      <WrapperLogin>
        <BeeIcon source={require('../../../assets/abelha.png')} />
        <FormContainer>
          <Title>Login</Title>
          <LoginInput
            secureTextEntry
            placeholder={'Digite seu login'}
          />
          <PasswordInput
            secureTextEntry
            placeholder={'Digite sua senha'}
          />
          <EnterButton onPress={() => navigation.navigate('Welcome')}>
            <ButtonText>ENTRAR</ButtonText>
          </EnterButton>
        </FormContainer>
      </WrapperLogin>
    </MainContainer>
  );
}