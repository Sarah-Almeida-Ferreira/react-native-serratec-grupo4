import React from 'react';
import {  } from 'react-native';
import TextBox from '../../components/TextBox';
import { Container, Title, Image, Logo } from './styles';

export default function Login(){
  return(
    <Container>
      <Logo
      source={require('../../../assets/login.png')}
      />
      <Title> Login </Title>
      <TextBox />
      <TextBox />
    </Container>
  )
}
