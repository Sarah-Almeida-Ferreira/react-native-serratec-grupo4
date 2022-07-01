import styled from 'styled-components/native';
import colors from '../../themes/colors'

export const Container = styled.View`
    position: absolute;
    top: 0px;
    width: 100%;
`;

export const WrapperText = styled.View`
    align-items: center;
`;

export const Rectangle = styled.View`
    height:77px;
    background-color: ${colors.secondary};
`;

export const Title = styled.Text`
    color: ${colors.primary};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
`;