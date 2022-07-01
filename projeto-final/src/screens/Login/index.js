import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles';
import { FormContainer, Title, BeeIcon, EnterButton, ButtonText } from './styles';
import { LoginInput, PasswordInput } from "../../components/LoginInput";
import { useNavigation } from '@react-navigation/native';

export const Login = () => {

  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('Welcome');
  }

  return (
    <MainContainer>

      <BeeIcon source={require('../../../assets/abelha.png')} />
      <FormContainer>
        <Title>Login</Title>
        <LoginInput placeholder={'Digite seu login'} />
        <PasswordInput placeholder={'Digite sua senha'} />
        <EnterButton onPress={openScreen}>
          <ButtonText>ENTRAR</ButtonText>
        </EnterButton>


      </FormContainer>
    </MainContainer>
  );
}