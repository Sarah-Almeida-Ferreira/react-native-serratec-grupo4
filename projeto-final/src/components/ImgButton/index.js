import colors from "../../themes/colors"
import { Container, CustomButton, CustomImage } from "./styles"
import { MaterialIcons } from '@expo/vector-icons';

export const ImgButton = ({sourceImg, onPressEdit}) => {
    return (
        <Container>
            <CustomImage source={sourceImg}/>
            <CustomButton onPress={onPressEdit}>
                <MaterialIcons name="edit" size={24} color={colors.secondary} />
            </CustomButton>
        </Container>
    )
}