
import styled from "styled-components/native";
import colors from '../../themes/colors';

export const FormContainer = styled.View`
    background-color: ${colors.secondary};
    height: 500px;
    width: 300px;
    border-radius: 10px;
    self-align: center;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: ${colors.tertiary};
    margin: 40px 0;
    font-weight: bold;
    line-height: 22px;
    font-family: 'sans-serif';
`;

export const BeeIcon = styled.Image`
    height: 98px;
    width: 95px;
`;
