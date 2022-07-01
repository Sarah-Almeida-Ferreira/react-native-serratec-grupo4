import React from 'react';
import { Container, WrapperText, Title, Rectangle } from './styles';

export const Header = () => {
    return (
        <Container>
            <Rectangle>
                <WrapperText>
                    <Title>Olá, usuário!</Title>
                    <Title>Olá, usuário!</Title>
                </WrapperText>
            </Rectangle>
        </Container>
    )
}