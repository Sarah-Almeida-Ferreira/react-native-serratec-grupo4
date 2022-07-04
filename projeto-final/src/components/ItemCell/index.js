import { Container, CustomButton, Code, Name, WrapperUser } from "./styles"
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import colors from "../../themes/colors";

export const ItemCell = ({name, code, onPressEdit, onPressDelete}) => {
    return (
        <Container>
            <WrapperUser>
                <Name>{name}</Name>
                <Code>{code}</Code>
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