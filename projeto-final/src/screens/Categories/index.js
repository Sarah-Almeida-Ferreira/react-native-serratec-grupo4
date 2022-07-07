//Components 
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { PlusButton } from '../../components/PlusButton/index.js';

//Styles
import { CustomButton, Name, Photo, Card, TextContainer, ButtonsContainer, Description } from "./styles"
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import colors from "../../themes/colors";

//Others
import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { api } from '../../services/api.js';
import { FlatList } from 'react-native';

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
    <ItemCellCategory name={item.nome} photo={item.foto} id={item.id} />
  );

  const ItemCellCategory = ({ name, id, photo }) => {
    const getCategoryToDelete = async (id) => {
      return api.delete(`/categoria/${id}`).then((res) => {
        alert('Item excluído com sucesso!')
        navigation.navigate('Categories');
      });
    };

    return (
      <Card>
        <Photo source={{ uri: photo }} />
        <TextContainer>
          <Name>{name}</Name>
          <Description>Cód: {id}</Description>
        </TextContainer>
        <ButtonsContainer>
          <CustomButton>
            <MaterialIcons name="edit" size={24} color={colors.primary} />
          </CustomButton>
          <CustomButton onPress={() => getCategoryToDelete(id)}>
            <FontAwesome5 name="trash" size={20} color={colors.primary} />
          </CustomButton>
        </ButtonsContainer>
      </Card>
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