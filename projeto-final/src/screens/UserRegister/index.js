import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';
import { ImgButton } from '../../components/ImgButton/index.js';
import {SpacingHeight} from './styles.js';
import { MaterialIcons } from '@expo/vector-icons';



export const UserRegister = ({navigation}) => {
  return (
    <MainContainer>
     <Header title='Cadastrar Usuário' />
     <SpacingHeight></SpacingHeight>
     <ImgButton>
     <MaterialIcons name="camera-enhance" size={40} color="#1e1e23" />
     </ImgButton>
      <EditInput placeholder={'Nome'} />
      <SpacingHeight></SpacingHeight>
      <EditInput placeholder={'CPF'} />
      <SpacingHeight></SpacingHeight>
      <EditInput placeholder={'Data Nascimento'} />
      <SpacingHeight></SpacingHeight>
      <EditInput placeholder={'Login'} />
      <SpacingHeight></SpacingHeight>
      <EditInput placeholder={'Senha'} />
      <SpacingHeight></SpacingHeight>
      <MainButton onPress={() => navigation.navigate('Users')}>
        <ButtonText>Cadastrar</ButtonText>  
      </MainButton>
      <Footer />
    </MainContainer>
  )
}
