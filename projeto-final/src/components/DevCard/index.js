import React from "react";
import { Card, ProfileImage, Title, IconsContainer } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import colors from '../../themes/colors';

export const DevCard = ({ image, name }) => {
    return (
        <Card>
            <ProfileImage source={image} />
            <Title> {name} </Title>
            <IconsContainer>
                <TouchableOpacity>
                    <AntDesign name="github" size={28} color={colors.secondary} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="linkedin-square" size={28} color={colors.secondary} />
                </TouchableOpacity>
            </IconsContainer>
        </Card>
    );
}