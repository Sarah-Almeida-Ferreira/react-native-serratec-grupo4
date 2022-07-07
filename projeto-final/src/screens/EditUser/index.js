import React, { useState, useContext } from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';
import { ImgButton } from '../../components/ImgButton/index.js';
import { api } from '../../services/api.js';
import { IdContext } from '../../context/index.js';

export const EditUser = ({navigation, code}) => {
  const [ user, setUser ] = useState({});
  const { id, setId } = useContext(IdContext);

  const getUser = async () => {
    const { data } = await api.get(`/usuario/${id}`);
    setUser(data);
    console.log(code);
    console.log(id);
    alert(data.nome);
  }

  function goBack() {
    navigation.goBack();
  }
  
  return (
    <MainContainer>
      <Header title='Editar Usuário' goBack={goBack} iconName='arrow-back'/>
      <ImgButton sourceImg={require('../../../assets/abelha2.png')}/>
      <EditInput nome='Nome:' placeholder='Nome do Usuário' />
      <EditInput nome='CPF:' placeholder='999.999.999-99' />
      <EditInput nome='Data de Nascimento:' placeholder='01/01/2001' />
      <EditInput nome='Email:' placeholder='Usuario@email.com' />
      <EditInput nome='Senha:' placeholder='*************' />
      <MainButton style={{marginTop: 60}} onPress={() => navigation.navigate('Users')}>
        <ButtonText>Salvar</ButtonText>  
      </MainButton>
      <MainButton style={{marginTop: 60}} onPress={() => getUser()}>
        <ButtonText>Salvar</ButtonText>  
      </MainButton>
      <Footer />
    </MainContainer>
  )
}