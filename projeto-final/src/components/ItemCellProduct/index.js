import { Container, CustomButton, Code, Name, WrapperUser, Foto } from "./styles"
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import colors from "../../themes/colors";

export const ItemCellProduct = ({ nome, code, foto, onPressEdit, onPressDelete }) => {
    return (
        <Container>
            <WrapperUser>
                <Name>{nome}</Name>
                <Code>Cód: {code}</Code>
                <Foto source={{uri: foto} } />
            </WrapperUser>
            <CustomButton onPress={onPressEdit}>
                <MaterialIcons name="edit" size={24} color={colors.secondary} />
            </CustomButton>
            <CustomButton onPress={onPressDelete}>
                <FontAwesome5 name="trash" size={24} color={colors.secondary} />
            </CustomButton>
        </Container>
    )
}