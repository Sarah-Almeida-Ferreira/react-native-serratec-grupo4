import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles';
import { LogoContainer, Message, Logo, SpacingHeight } from './styles'
import { MainButton, ButtonText } from '../../components/MainButton/styles';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import colors from '../../themes/colors';


export const Welcome = () => {

  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('Home');
  }

  return (
    <MainContainer>
      <LogoContainer>
        <Logo source={require('../../../assets/logoheader.png')} />
      </LogoContainer>
      <Navbar />
      <Message>Modo bicicleta sem rodinhas ativado!</Message>
      <SpacingHeight />
      <MaterialCommunityIcons name="bike-fast" size={200} color="black" />
      <SpacingHeight />
      <MainButton onPress={openScreen}>
        <ButtonText>AVANÇAR</ButtonText>
      </MainButton>
      <Footer />
    </MainContainer>
  );
}