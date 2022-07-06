import styled from "styled-components/native";
import colors from "../../themes/colors";

export const Container = styled.View`
    flex-direction: row;
`;

export const Card = styled.View`
   display: flex;
   flex-direction: row;

   background-color: ${colors.secondary};
   width: 300px;
   height: 200px;
   border-radius: 20px;
   padding: 0px 16px;
   border: 3px solid ${colors.tertiary};
   
   & + & {
    margin-top: 16px;
  }
`;

export const TextContainer = styled.View`
`;

export const Name = styled.Text`
    justify-content: center;
    align-self: center;
    color: ${colors.primary};
    font-family: Roboto;
    font-weight: 700;
    font-size: 18px;
`;

export const Foto = styled.Image`
    justify-content: center;
    align-self: center;
    width: 100px;
    height: 150px;
    border-radius: 20px;
    border: 3px solid ${colors.primary}
`;

export const CustomButton = styled.TouchableOpacity`
    margin: 0px 10px 0px;
`