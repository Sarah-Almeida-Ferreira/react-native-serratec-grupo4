import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const InputContainer = styled.TextInput`
  height: 40px;
  width: 230px;
  background-color: ${colors.primary};
  border-radius: 10px;
  font-family: 'sans-serif';
  color: ${colors.secondary};
  padding-left: 10px;
  margin: 10px;
`;

export const InputContainerPassword = styled.TextInput`
  height: 40px;
  width: 230px;
  background-color: ${colors.primary};
  border: 2px solid ${colors.secondary};
  border-radius: 10px;
  font-family: 'sans-serif';
  color: ${colors.tertiary};
  padding-left: 10px;
  margin: 10px;

`;

