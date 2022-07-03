import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';

export const CategoryRegister = ({ navigation }) => {
  return (
    <MainContainer>
      <Header title='Cadastrar Categoria' />
      <EditInput placeholder={'Informe a categoria'} />
      <MainButton
        onPress={() => {
          navigation.navigate('Categories')
        }}>
        <ButtonText>Cadastrar</ButtonText>
      </MainButton>
      <Footer />
    </MainContainer>
  )
}
