import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';
import { ImgButton } from '../../components/ImgButton/index.js';

export const EditCategory = ({navigation}) => {

  function goBack() {
    navigation.goBack();
  }
  
  return (
    <MainContainer>
      <Header title='Editar Categoria' goBack={goBack} iconName='arrow-back'/>
      <ImgButton sourceImg={require('../../../assets/produto.png')} />
      <EditInput nome='Nome:' placeholder='Nome da Categoria' />
      <MainButton style={{marginTop: 60}} onPress={() => navigation.navigate('Categories')}>
        <ButtonText>Salvar</ButtonText>  
      </MainButton>
      <Footer />
    </MainContainer>
  )
}