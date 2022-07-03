import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';

export const Products = ({navigation}) => {
  return (
    <MainContainer>
     <Header title='Produtos Cadastrados' />
      <MainButton onPress={() => navigation.navigate('ProductRegister')}>
        <ButtonText>Cadastrar Novo Produto</ButtonText>  
      </MainButton>
      <EditInput placeholder={'Produto 1'} />
      <MainButton onPress={() => navigation.navigate('EditProduct')}>
        <ButtonText>Editar Produto</ButtonText>  
      </MainButton>
      <EditInput placeholder={'Produto 1'} />
      <EditInput placeholder={'Produto 1'} />
      <EditInput placeholder={'Produto 1'} />
      <EditInput placeholder={'Produto 1'} />
    </MainContainer>
  )
}
