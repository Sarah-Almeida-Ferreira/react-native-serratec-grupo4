import { Container, CustomButton, Code, Name, WrapperUser } from "./styles"
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import colors from "../../themes/colors";

export const ItemCell = ({name, code}) => {
    return (
        <Container>
            <WrapperUser>
                <Name>{name}</Name>
                <Code>{code}</Code>
            </WrapperUser>
            <CustomButton>
                <MaterialIcons name="edit" size={24} color={colors.secondary} />
            </CustomButton>
            <CustomButton>
                <FontAwesome5 name="trash" size={24} color={colors.secondary} />
            </CustomButton>
        </Container>
    )
}