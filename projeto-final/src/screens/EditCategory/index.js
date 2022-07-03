import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';

export const EditCategory = ({ navigation }) => {
  return (
    <MainContainer>
      <Header title='Editar Categoria' />
      <EditInput placeholder={'Nome'} />
      <EditInput placeholder={'CPF'} />
      <MainButton
        onPress={() => {
          navigation.navigate('Categories')
        }}>
        <ButtonText>Salvar</ButtonText>
      </MainButton>
      <Footer />
    </MainContainer>
  )
}
