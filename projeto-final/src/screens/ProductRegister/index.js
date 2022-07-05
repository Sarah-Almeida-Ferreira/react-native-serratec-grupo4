import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';
import { SpacingHeight  } from './styles.js';
import { ImgButton } from '../../components/ImgButton/index.js';





export const ProductRegister = ({ navigation }) => {
  return (
    <MainContainer>

     <Header title='Cadastrar Produto' />
     <SpacingHeight></SpacingHeight>
      <ImgButton></ImgButton>
      <EditInput placeholder={'Nome'} />
      <SpacingHeight></SpacingHeight>
      <EditInput placeholder={'Valor'} />
      <SpacingHeight></SpacingHeight>
      <EditInput placeholder={'Descrição'} />
      <SpacingHeight></SpacingHeight>
      <EditInput placeholder={'Estoque'} />
      <SpacingHeight></SpacingHeight>
      <EditInput placeholder={'Código'} />
      <SpacingHeight></SpacingHeight>

      <MainButton onPress={() => navigation.navigate('Products')}>
        <ButtonText>Cadastrar</ButtonText>
      </MainButton>
      <Footer />
    </MainContainer>
  )
}
