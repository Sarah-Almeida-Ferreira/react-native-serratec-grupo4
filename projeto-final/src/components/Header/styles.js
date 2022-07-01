import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const Rectangle = styled.View`
    height: 77px;
    background-color: ${colors.secondary};
    border-radius: 10px;
    align-items: center;
`

export const Rectangle2 = styled.View`
    width: 337px;
    height: 46px;
    background-color: ${colors.secondary};
    border-radius: 10px;
`

export const Title = styled.Text`
    font-weight: 700;
    font-family: 'Roboto';
    font-size: 24px;
    color: ${colors.primary};
`

export const Container = styled.View`
    width: 100%;
    position: absolute;
    top: 0px;
`