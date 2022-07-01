import styled from "styled-components/native";
import colors from '../../themes/colors';

export const LogoContainer = styled.View`
    background-color: ${colors.secondary};
    height: 265px;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
`;

export const Message = styled.Text`
    font-size: 24px;
    color: ${colors.secondary};
    margin: 40px 0;
    font-weight: bold;
    line-height: 22px;
    font-family: 'sans-serif';
    text-align: center;
`;

export const Logo = styled.Image`
    width: 332px;
    height: 194px;
`;