import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';

export const Categories = ({navigation}) => {
  return (
    <MainContainer>
     <Header title='Categorias' />
      <MainButton onPress={() => navigation.navigate('CategoryRegister')}>
        <ButtonText>Cadastrar Nova Categoria</ButtonText>  
      </MainButton>
      <EditInput placeholder={'ALIMENTOS'} />
      <MainButton onPress={() => navigation.navigate('EditCategory')}>
        <ButtonText>Editar Categoria</ButtonText>  
      </MainButton>
      <EditInput placeholder={'ELETRONICOS'} />
      <EditInput placeholder={'VESTUÁRIOS'} />
    </MainContainer>
  )
}
