import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { ItemCell } from '../../components/ItemCell/index.js';
import { WrapperCategories } from './styles.js';
import { PlusButton } from '../../components/PlusButton/index.js';

export const Categories = ({navigation}) => {
  return (
    <MainContainer>
      <Header title='Categorias' />
      <PlusButton />
      <WrapperCategories>
        <ItemCell name='Eletrônicos' code='Cód.123'/>
        <ItemCell name='Bugingangas' code='Cód.456'/>
        <ItemCell name='Alimentos' code='Cód.789'/>
      </WrapperCategories>
    </MainContainer>
  )
}