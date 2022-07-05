import React, { useEffect, useState } from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { ItemCell } from '../../components/ItemCell/index.js';
import { WrapperCategories } from './styles.js';
import { PlusButton } from '../../components/PlusButton/index.js';
import { api } from '../../services/api.js';
import { FlatList } from 'react-native';

export const Categories = ({ navigation }) => {
  const [category, setCategory] = useState({});

  const getCategories = async () => {
    const { data } = await api.get('/categoria', {
      auth: {
        username: 'reactnative',
        password: '2022'
      }
    });
    setCategory(data);
    console.log(data);
  }

  const renderItem = ({item}) => (
    <ItemCell name={item.nome} code={item.id} onPressEdit={() => navigation.navigate('EditCategory')} />
  );

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <MainContainer>
      <Header title='Categorias' />
      <PlusButton onPress={() => navigation.navigate('CategoryRegister')} />
      <WrapperCategories>
        <FlatList
          data={category}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </WrapperCategories>
    </MainContainer>
  )
}