import React, { useState } from 'react';
import { MainContainer } from '../../components/MainContainer/styles';
import { FormContainer, BeeIcon, EnterButton, ButtonText } from './styles';

export const LogoutModal = ({ navigation }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <MainContainer>
      <BeeIcon source={require('../../../assets/abelha.png')} />
      <FormContainer>
        <EnterButton
          onPress={() => navigation.navigate('Logout')}
        >
          <ButtonText> Confirmar Logout</ButtonText>
        </EnterButton>
      </FormContainer>
    </MainContainer>
  );
}