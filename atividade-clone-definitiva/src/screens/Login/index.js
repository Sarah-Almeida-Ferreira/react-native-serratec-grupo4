import React from 'react';
import login from '../../../assets/login.png';
import { Input } from '../../components/Input';
import { ButtonPrimary, TextButton } from '../../components/CustomButton/styles';
import { Logo } from '../../components/Logo/styles';
import { Container, Title, TextInfo, SpacingHeight, WrapperTextInfo } from './styles';
import colors from '../../themes/colors';

import { useNavigation } from '@react-navigation/native';
import spacing from '../../themes/spacing';
import { LinearGradient } from 'expo-linear-gradient';


export const Login = () => {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('UserRegister');
  }


  return (
    <Container>
      <LinearGradient
        colors={[`${colors.primary}`, 'transparent', '#0ff']}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          height: '100%',
          width: '100%',
          position: 'absolute',
        }}
      />
      <Logo source={login} />
      <Title> Login </Title>
      <Input placeholder={'Digite seu login'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Digite sua senha'} />
      <WrapperTextInfo>
        <TextInfo>
          Esqueceu a sua senha? Clique aqui!
        </TextInfo>
      </WrapperTextInfo>
      <SpacingHeight height={spacing.large} />
      <ButtonPrimary
        onPress={openScreen}
      >
        <TextButton>ENTRAR</TextButton>
      </ButtonPrimary>
      <WrapperTextInfo>
        <TextInfo>
          Não possui cadastro? Cadastre-se!
        </TextInfo>
      </WrapperTextInfo>
    </Container>
  )
}