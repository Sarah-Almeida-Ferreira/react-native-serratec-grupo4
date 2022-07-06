import styled from 'styled-components/native';
import colors from '../../themes/colors'

export const Container = styled.View`
    align-self: flex-start;
    width: 100%;
    height:77px;
    background-color: ${colors.secondary};
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom:30px;
`;

export const WrapperText = styled.View`
    align-items: center;
    margin-top: 30px;
`;

export const Title = styled.Text`
    color: ${colors.primary};
    font-family: 'sans-serif';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
`;

export const Logo = styled.Image`
    width: 100px;
    height: 50px;
    left: 5px;
    top: 12px;
    margin-right: 10px;
`;