import styled from "styled-components/native";
import colors from '../../themes/colors';
import img from '../../../assets/splash.png'
export const MainContainer = styled.View`
    flex: 1;
    background-image: url(${img});
    background-size: contain;
    background-color: ${colors.primary};
    justify-content: center;
    align-items: center;
`;