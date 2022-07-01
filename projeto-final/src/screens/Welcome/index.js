import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles';
import { LogoContainer, Message, Logo } from './styles'
import { MainButton, ButtonText } from '../../components/MainButton/styles';
import { useNavigation } from '@react-navigation/native';
import { Footer } from '../../components/Footer'

export const Welcome = () => {

  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('Home');
  }
  
  return (
    <MainContainer>
      <LogoContainer>
        <Logo source={require('../../../assets/logoheader.png')}/>
      </LogoContainer>
      <Message>Modo bicicleta sem rodinhas ativado!</Message>
      <MainButton onPress={openScreen}>
        <ButtonText>AVANÇAR</ButtonText>
      </MainButton>
      <Footer/>
    </MainContainer>
  );
}