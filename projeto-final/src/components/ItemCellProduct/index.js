import { ButtonsContainer, CustomButton, Name, Description, Foto, Card, TextContainer } from "./styles"
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import colors from "../../themes/colors";

export const ItemCellProduct = ({ nome, descricao, foto, onPressEdit, onPressDelete }) => {
    return (
            <Card>
                <Foto source={{ uri: foto }} />
                <TextContainer>
                    <Name>{nome}</Name>
                    <Description>{descricao}</Description>
                </TextContainer>
                <ButtonsContainer>
                    <CustomButton onPress={onPressEdit}>
                        <MaterialIcons
                            name="edit"
                            size={24}
                            color={colors.primary} />
                    </CustomButton>
                    <CustomButton
                        onPress={onPressDelete}
                    >
                        <FontAwesome5
                            name="trash"
                            size={20}
                            color={colors.primary}
                        />
                    </CustomButton>
                </ButtonsContainer>
            </Card>
    )
}