import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';

export const Users = ({navigation}) => {
  return (
    <MainContainer>
     <Header title='Usuários Cadastrados' />
      <MainButton onPress={() => navigation.navigate('UserRegister')}>
        <ButtonText>Cadastrar Novo Usuário</ButtonText>  
      </MainButton>
      <EditInput placeholder={'Usuário da Silva'} />
      <MainButton onPress={() => navigation.navigate('EditUser')}>
        <ButtonText>Editar Usuário</ButtonText>  
      </MainButton>
      <EditInput placeholder={'Usuário da Silva'} />
      <EditInput placeholder={'Usuário da Silva'} />
      <EditInput placeholder={'Usuário da Silva'} />
      <EditInput placeholder={'Usuário da Silva'} />
    </MainContainer>
  )
}
