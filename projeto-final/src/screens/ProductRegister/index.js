import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';


export const ProductRegister = ({ navigation }) => {
  return (
    <MainContainer>
      <Header title='Cadastrar Produto' />

      <EditInput placeholder={'Nome'} />

      <EditInput placeholder={'Valor'} />

      <EditInput placeholder={'Descrição'} />

      <EditInput placeholder={'Estoque'} />

      <EditInput placeholder={'Código'} />

      <MainButton onPress={() => navigation.navigate('Products')}>
        <ButtonText>Cadastrar</ButtonText>
      </MainButton>
      <Footer />
    </MainContainer>
  )
}
