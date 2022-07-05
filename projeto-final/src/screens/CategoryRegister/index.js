import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';
import { SpacingHeight  } from './styles.js';
import { ImgButton } from '../../components/ImgButton/index.js';

export const CategoryRegister = ({ navigation }) => {
  return (
    <MainContainer>
      <Header title='Cadastrar Categoria' />
      <ImgButton></ImgButton>
      <SpacingHeight></SpacingHeight>
      <EditInput placeholder={'Informe a categoria'} />
      <SpacingHeight></SpacingHeight>
      <MainButton
        onPress={() => {
          navigation.navigate('Categories')
        }}>
          <SpacingHeight></SpacingHeight>
        <ButtonText>Cadastrar</ButtonText>
      </MainButton>
      <Footer />
    </MainContainer>
  )
}
