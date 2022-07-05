import React, { useEffect, useState } from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { ItemCell } from '../../components/ItemCell/index.js';
import { WrapperUsers } from './styles.js';
import { PlusButton } from '../../components/PlusButton/index.js';
import { api } from '../../services/api.js';
import { FlatList } from 'react-native';

export const Users = ({navigation}) => {
  const [user, setUser] = useState({});

  const getUsers = async () => {
    const { data } = await api.get('/usuario');
    setUser(data);
  }

  const renderItem = ({item}) => (
    <ItemCell name={item.nome} code={item.id} onPressEdit={() => navigation.navigate('EditCategory')} />
  );

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <MainContainer>
      <Header title='Usuários' />
      <PlusButton onPress={() => navigation.navigate('UserRegister')} />
      <WrapperUsers>
        <FlatList
          data={user}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </WrapperUsers>
    </MainContainer>
  )
}