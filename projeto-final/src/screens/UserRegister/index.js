import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';

export const UserRegister = () => {
  return (
    <MainContainer>
      <Header />
      <EditInput placeholder={'Nome'} />
      <EditInput placeholder={'CPF'} />
      <EditInput placeholder={'Data Nascimento'} />
      <EditInput placeholder={'Login'} />
      <EditInput placeholder={'Senha'} />
      <MainButton>
        <ButtonText>Cadastrar</ButtonText>  
      </MainButton>
    </MainContainer>
  )
}
