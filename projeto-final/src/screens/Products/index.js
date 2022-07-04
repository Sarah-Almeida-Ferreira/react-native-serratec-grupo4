import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { ItemCell } from '../../components/ItemCell/index.js';
import { WrapperProducts } from './styles.js';
import { PlusButton } from '../../components/PlusButton/index.js';

export const Products = ({navigation}) => {
  return (
    <MainContainer>
      <Header title='Produtos' />
      <PlusButton />
      <WrapperProducts>
        <ItemCell name='Sonic 2000' code='Cód.123456'/>
        <ItemCell name='Conjunto Facas Ginzu' code='Cód.654321'/>
        <ItemCell name='Meias Vivarina M' code='Cód.321654'/>
        <ItemCell name='Rotoflex' code='Cód.654987'/>
        <ItemCell name='Ambervision' code='Cód.789456'/>
        <ItemCell name='Auri Shine' code='Cód.123789'/>
      </WrapperProducts>
    </MainContainer>
  )
}