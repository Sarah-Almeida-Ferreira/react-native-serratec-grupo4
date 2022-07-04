import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { ItemCell } from '../../components/ItemCell/index.js';
import { WrapperUsers } from './styles.js';
import { PlusButton } from '../../components/PlusButton/index.js';

export const Users = ({navigation}) => {
  return (
    <MainContainer>
      <Header title='Usuários' />
      <PlusButton />
      <WrapperUsers>
        <ItemCell name='Wanderson Chevrand' code='Cód.123456'/>
        <ItemCell name='André Lucas' code='Cód.654321'/>
        <ItemCell name='Patrick Monteiro' code='Cód.321654'/>
        <ItemCell name='Theo Bittencourt' code='Cód.654987'/>
        <ItemCell name='Sarah Almeida' code='Cód.789456'/>
        <ItemCell name='Xaimalai Pereira' code='Cód.123789'/>
      </WrapperUsers>
    </MainContainer>
  )
}