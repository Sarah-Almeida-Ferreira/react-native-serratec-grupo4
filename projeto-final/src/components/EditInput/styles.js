import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const InputContainer = styled.TextInput`
  height: 31px;
  width: 188px;
  background-color: ${colors.secondary};
  border: 2px solid ${colors.tertiary};
  border-radius: 5px;
  padding-left: 5px;
  font-family: 'sans-serif';
`;