import { Container, CustomButton, Name, Foto, Card, TextContainer } from "./styles"
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import colors from "../../themes/colors";

export const ItemCellProduct = ({ nome, descricao, foto, onPressEdit, onPressDelete }) => {
    return (
        <Container>
            <Card>
                <Foto source={{ uri: foto }} />
                <TextContainer>
                    <Name>{nome}</Name>
                </TextContainer>
                <TextContainer>
                    <Name>Descrição: {descricao}</Name>
                </TextContainer>
            </Card>

            <CustomButton onPress={onPressEdit}>
                <MaterialIcons
                    name="edit"
                    size={24}
                    color={colors.secondary} />
            </CustomButton>
            <CustomButton
                onPress={onPressDelete}
            >
                <FontAwesome5
                    name="trash"
                    size={24}
                    color={colors.secondary}
                />
            </CustomButton>
        </Container>
    )
}