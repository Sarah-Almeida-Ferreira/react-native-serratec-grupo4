import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';
import { ImgButton } from '../../components/ImgButton/index.js';

export const EditUser = ({navigation}) => {
  return (
    <MainContainer>
      <Header title='Editar Usuário' />
      <ImgButton sourceImg={require('../../../assets/abelha2.png')}/>
      <EditInput nome='Nome:' placeholder='Nome do Usuário' />
      <EditInput nome='CPF:' placeholder='999.999.999-99' />
      <EditInput nome='Data de Nascimento:' placeholder='01/01/2001' />
      <EditInput nome='Email:' placeholder='Usuario@email.com' />
      <EditInput nome='Senha:' placeholder='*************' />
      <MainButton style={{marginTop: 60}} onPress={() => navigation.navigate('Users')}>
        <ButtonText>Salvar</ButtonText>  
      </MainButton>
      <Footer />
    </MainContainer>
  )
}