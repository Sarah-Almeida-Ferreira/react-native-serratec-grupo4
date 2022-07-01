import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const InputContainer = styled.TextInput`
  height: 50px;
  width: 170px;
  background-color: ${colors.primary};
  border: 3px solid ${colors.tertiary};
  border-radius: 30px;
  font-family: 'sans-serif';
  padding-left: 10px;
  margin: 10px;
`;

export const InputContainerPassword = styled.TextInput`
  height: 40px;
  width: 230px;
  background-color: ${colors.primary};
  border: 2px solid ${colors.tertiary};
  border-radius: 10px;
  font-family: 'sans-serif';
  padding-left: 10px;
  margin: 10px;
  -webkit-text-security: disc;
  text-security: disc;

`;

