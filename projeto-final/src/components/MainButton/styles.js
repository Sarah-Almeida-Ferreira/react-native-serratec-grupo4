import styled from "styled-components/native";
import colors from '../../themes/colors';

export const MainButton = styled.TouchableOpacity`
    padding: 5px;
    box-sizing: border-box;
    height: 33px;
    width: 120px;
    background-color: ${colors.buttonColor};
    border: 2px solid ${colors.tertiary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin: 20px;
    justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.tertiary};
  align-self: center;
  position: absolute;
  font-family: 'sans-serif';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
`;