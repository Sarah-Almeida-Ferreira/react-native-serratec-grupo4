import React, { useState } from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';
import { SpacingHeight } from './styles.js';
import { ImgButton } from '../../components/ImgButton/index.js';
import { api } from '../../services/api.js';

export const ProductRegister = ({ navigation }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');

  const addPost = () => {
    const data = {
      nome: name,
      foto: photo,
      descricao: description,
      estoque: stock,
      preco: price,
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
      <ImgButton />
      <EditInput
        placeholder={'Informe o nome do produto'}
        value={name}
        onChangeText={(text) => setName(text)}
        autoCapitalize='words' />
      
      <EditInput
        placeholder={'Informe o endereço da imagem do produto'}
        value={photo}
        onChangeText={(text) => setPhoto(text)}
        autoCapitalize='words' />
    
      <EditInput
        placeholder={'Informe a descrição do produto'}
        value={description}
        onChangeText={(text) => setDescription(text)}
        autoCapitalize='words' />
 
      <EditInput
        placeholder={'Informe o estoque'}
        value={stock}
        onChangeText={(text) => setStock(text)}
        autoCapitalize='words' />
 
      <EditInput
        placeholder={'Informe o valor do produto'}
        value={price}
        onChangeText={(text) => setPrice(text)}
        autoCapitalize='words'
      />
      <MainButton
        onPress={() => addPost()}
      >
        <ButtonText>Cadastrar</ButtonText>
      </MainButton>
      <Footer />
    </MainContainer>
  )
}
