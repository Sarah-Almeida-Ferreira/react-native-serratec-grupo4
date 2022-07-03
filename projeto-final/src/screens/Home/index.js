import React from 'react';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer/styles';

export const Home = () => {
    return (
        <MainContainer>
            <Header title='Olá, Admin' />
        </MainContainer>
    )
}