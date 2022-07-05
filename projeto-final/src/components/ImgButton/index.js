import colors from "../../themes/colors"
import { Container, CustomButton, CustomImage } from "./styles"
import { MaterialIcons } from '@expo/vector-icons';
import { AddPhotoContainer } from './styles.js';

export const ImgButton = ({sourceImg, onPressEdit}) => {
                
    return (
        <Container> 
            <CustomImage source={sourceImg}/>
            <CamIcon></CamIcon>
            <CustomButton onPress={onPressEdit}>
                <MaterialIcons name="edit" size={24} color={colors.secondary} />
            </CustomButton>
            

        </Container>
    )
}