import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const InputContainer = styled.TextInput`
  height: 31px;
  width: 188px;
  background-color: ${colors.secondary};
  border: 5px solid ${colors.tertiary};
  border-radius: 5px;
  align-items: center;
  font-weight: 800;
  font-family: 'sans-serif';
`;