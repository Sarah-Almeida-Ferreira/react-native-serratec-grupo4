import React, { useEffect, useState } from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { ItemCell } from '../../components/ItemCell/index.js';
import { PlusButton } from '../../components/PlusButton/index.js';
import { api } from '../../services/api.js';
import { FlatList } from 'react-native';

export const Categories = ({ navigation }) => {
  const [category, setCategory] = useState([]);

  const getCategories = async () => {
    const { data } = await api.get('/categoria');
    setCategory(data);
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
        <FlatList
          data={category}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
    </MainContainer>
  )
}