import React, { useState } from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';
import { SpacingHeight } from './styles.js';
import { ImgButton } from '../../components/ImgButton/index.js';
import { api } from '../../services/api.js';

export const CategoryRegister = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");

  const addPost = () => {
    const data = {
      nome: nome,
      foto: foto,
    };

    api.post('/categoria', data)
      .then((response) => renderOutput(response));

    navigation.goBack();
    alert('Categoria salva com sucesso!')
  };

  return (
    <MainContainer>
      <Header title='Cadastrar Categoria' />
      <ImgButton sourceImg={foto} />
      <SpacingHeight></SpacingHeight>
      <EditInput
        placeholder={'Informe a categoria'}
        value={nome}
        onChangeText={(text) => setNome(text)}
        autoCapitalize='words'
      />
      <EditInput
        placeholder={'Informe a endereço da imagem'}
        value={foto}
        onChangeText={(text) => setFoto(text)}
        autoCapitalize='words'
      />
      <SpacingHeight></SpacingHeight>
      <MainButton
        onPress={() => addPost()}
      >
        <SpacingHeight></SpacingHeight>
        <ButtonText>Cadastrar</ButtonText>
      </MainButton>
      <Footer />
    </MainContainer>
  )
};