import React from 'react';
import { MainContainer, SpacingHeight } from '../../components/MainContainer/styles';
import { LogoContainer, Message, Logo} from './styles'
import { MainButton, ButtonText } from '../../components/MainButton/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Footer } from '../../components/Footer';
import spacing from '../../themes/spacing';

export const Welcome = ({ navigation }) => {

  return (
    <MainContainer>
      <LogoContainer>
        <Logo source={require('../../../assets/logoheader.png')} />
      </LogoContainer>
      <Message>Modo bicicleta sem rodinhas ativado!</Message>
      <SpacingHeight height={spacing.extraLarge} />
      <MaterialCommunityIcons name="bike-fast" size={200} color="black" />
      <SpacingHeight height={spacing.extraLarge} />
      <MainButton onPress={()=>navigation.navigate('Home')}>
        <ButtonText>AVANÇAR</ButtonText>
      </MainButton>
    </MainContainer>
  );
}