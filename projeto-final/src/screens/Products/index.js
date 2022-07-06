import React, { useEffect, useState } from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { ItemCellProduct } from '../../components/ItemCellProduct/index.js';
import { WrapperProducts } from './styles.js';
import { PlusButton } from '../../components/PlusButton/index.js';
import { api } from '../../services/api.js';
import { FlatList } from 'react-native';

export const Products = ({ navigation }) => {
  const [product, setProduct] = useState([]);

  const getProducts = async() => {
    const {data}= await api.get('/produto')
      setProduct(data);
  }

  const renderItem = ({ item }) => (
    <ItemCellProduct
    foto={item.foto}
    nome={item.nome} 
    descricao={item.descricao}
    onPressEdit={() => navigation.navigate('EditProduct')} />


  );

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainContainer>
      <Header title='Produtos' />
      <WrapperProducts>
        <PlusButton onPress={() => navigation.navigate('ProductRegister')} />
        <FlatList
          data={product}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </WrapperProducts>
    </MainContainer>
  )
}