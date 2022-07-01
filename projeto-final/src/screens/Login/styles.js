import styled from "styled-components/native";
import colors from '../../themes/colors';

export const FormContainer = styled.View`
    background-color: ${colors.secondary};
    height: 549px;
    width: 330px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
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

export const EnterButton = styled.TouchableOpacity`
    padding: 5px;
    box-sizing: border-box;
    height: 33px;
    width: 120px;
    background-color: ${colors.button};
    border: 2px solid ${colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin: 20px;
    justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.primary};
  align-self: center;
  position: absolute;
  font-family: 'sans-serif';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
`;
