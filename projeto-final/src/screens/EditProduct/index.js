import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';

export const EditProduct = ({navigation}) => {
  return (
    <MainContainer>
     <Header title='Editar Produto' />
      <EditInput placeholder={'Nome'} />
      <EditInput placeholder={'CPF'} />
      <EditInput placeholder={'Data Nascimento'} />
      <EditInput placeholder={'Login'} />
      <EditInput placeholder={'Senha'} />
      <MainButton onPress={() => navigation.navigate('Products')}>
        <ButtonText>Salvar</ButtonText>  
      </MainButton>
      <Footer />
    </MainContainer>
  )
}
