import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';
import { ImgButton } from '../../components/ImgButton/index.js';

export const EditProduct = ({navigation}) => {

  function goBack() {
    navigation.goBack();
  }
  
  return (
    <MainContainer>
      <Header title='Editar Produto' goBack={goBack} iconName='arrow-back'/>
      <ImgButton sourceImg={require('../../../assets/produto.png')} />
      <EditInput nome='Nome:' placeholder='Nome do Produto' />
      <EditInput nome='Descrição:' placeholder='Descrição do Produto' />
      <EditInput nome='Quantidade em Estoque' placeholder='00' />
      <EditInput nome='Valor:' placeholder='R$ 0,00' />
      <MainButton style={{marginTop: 60}} onPress={() => navigation.navigate('Products')}>
        <ButtonText>Salvar</ButtonText>  
      </MainButton>
      <Footer />
    </MainContainer>
  )
}