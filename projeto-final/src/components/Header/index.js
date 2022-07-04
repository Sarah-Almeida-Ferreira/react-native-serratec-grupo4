import React from 'react';
import { Container, WrapperText, Title, Logo } from './styles';

export const Header = ({ title }) => {
    return (
        <Container>
            <Logo source={require('../../../assets/logoheader.png')} />
            <WrapperText>
                <Title>{title}</Title>
            </WrapperText>
        </Container>
    )
}