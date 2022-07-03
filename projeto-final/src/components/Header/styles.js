import styled from 'styled-components/native';
import colors from '../../themes/colors'

export const Container = styled.View`
    position: absolute;
    top: 0px;
    width: 100%;
    height:77px;
    background-color: ${colors.secondary};
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const WrapperText = styled.View`
    align-items: center;
    margin-top: 30px;
`;

export const Title = styled.Text`
    color: ${colors.primary};
    font-family: 'sans-serif';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
`;