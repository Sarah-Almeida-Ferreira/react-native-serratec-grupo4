import React from 'react';
import { Container, WrapperText, Title, Rectangle } from './styles';

export const Header = ({ title }) => {
    return (
        <Container>
            <WrapperText>
                <Title>{title}</Title>
            </WrapperText>
        </Container>
    )
}