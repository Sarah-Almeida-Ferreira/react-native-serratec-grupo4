import React, { useState } from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';
import { ImgButton } from '../../components/ImgButton/index.js';
import { api } from '../../services/api.js';

export const ProductRegister = ({ navigation }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('https://i.imgur.com/khLyPgQ.png');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const addPost = () => {
    const data = {
      nome: name,
      foto: photo,
      descricao: description,
      qtdEstoque: stock,
      preco: price,
      categoriaId: category,
    };

    api.post('/produto', data)
      .then((res) => {
        alert('Item cadastrado com sucesso!')
        navigation.goBack();
      });
  };

  function goBack() {
    navigation.goBack();
  }

  return (
    <MainContainer>

      <Header title='Cadastrar Produto' goBack={goBack} iconName='arrow-back' />
      <ImgButton sourceImg={photo} />
      <EditInput
        placeholder={'Informe o nome do produto'}
        onChangeText={(text) => setName(text)}
        autoCapitalize='words' />
      <EditInput
        placeholder={'Informe a descrição do produto'}
        onChangeText={(text) => setDescription(text)}
        autoCapitalize='words'
      />
      <EditInput
        placeholder={'Informe o estoque'}
        onChangeText={(text) => setStock(text)}
        autoCapitalize='words'
      />
      <EditInput
        placeholder={'Informe o valor do produto'}
        onChangeText={(text) => setPrice(text)}
        autoCapitalize='words'
      />
      <EditInput
        placeholder={'Informe o número da categoria do produto'}
        onChangeText={(text) => setCategory(text)}
        autoCapitalize='words'
      />
      <EditInput
        placeholder={'Informe o endereço da imagem do produto'}
        onChangeText={(text) => setPhoto(text)}
        autoCapitalize='words'
      />
      <MainButton onPress={() => addPost()}>
        <ButtonText>Cadastrar</ButtonText>
      </MainButton>
      <Footer />
    </MainContainer>
  )
};