import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles';
import { FormContainer, Title, BeeIcon } from './styles';
import { LoginInput } from "../../components/LoginInput";

export const Login = () => {
  return (
    <MainContainer>
        <FormContainer>
            <BeeIcon source={require('../../../assets/abelha.png')}/>
            <Title>Login</Title>
            <LoginInput placeholder={'Digite seu login'} />
            <LoginInput placeholder={'Digite sua senha'} />
        </FormContainer>
    </MainContainer>
  );
}