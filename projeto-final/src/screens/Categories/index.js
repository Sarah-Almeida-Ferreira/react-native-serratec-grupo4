import React, { useEffect, useState } from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { PlusButton } from '../../components/PlusButton/index.js';
import { api } from '../../services/api.js';
import { FlatList } from 'react-native';

import { Container, CustomButton, Code, Name, WrapperUser, Foto } from "./styles"
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import colors from "../../themes/colors";
import { useNavigation } from "@react-navigation/native";

export const Categories = () => {
  const [category, setCategory] = useState([]);
  const navigation = useNavigation();

  const getCategories = async () => {
    const { data } = await api.get('/categoria');
    setCategory(data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  const renderItem = ({ item }) => (
    <ItemCell name={item.nome} image={item.foto} id={item.id} />
  );

  const ItemCell = ({ id, name, image, code }) => {

    function openCategoryDelete() {
      deleteCategory(id);
      navigation.navigate('Categories');
    }

    const deleteCategory = async (id) => {
      return api.delete(`/categoria/${id}`).then((response) => response.data);
    };

    return (
      <Container>
        <WrapperUser>
          <Name>{name}</Name>
          <Code>Cód: {id}</Code>
          <Foto source={image}></Foto>
        </WrapperUser>
        <CustomButton onPress={() => teste()}>
          <MaterialIcons name="edit" size={24} color={colors.secondary} />
        </CustomButton>
        <CustomButton onPress={openCategoryDelete}>
          <FontAwesome5 name="trash" size={24} color={colors.secondary} />
        </CustomButton>
      </Container>
    )
  };

  function goBack() {
    navigation.goBack();
  }

  return (
    <MainContainer>
      <Header title='Categorias' goBack={goBack} iconName='arrow-back' />
      <PlusButton onPress={() => navigation.navigate('CategoryRegister')} />
      <FlatList
        data={category}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </MainContainer>
  )
}