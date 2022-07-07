import { Container, CustomButton, Code, Name, WrapperUser } from "./styles"
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import colors from "../../themes/colors";
import { useContext } from 'react'
import { IdContext } from "../../context";
import { useNavigation } from '@react-navigation/native';


export const ItemCell = ({name, code, onPressEdit, onPressDelete}) => {
    const {id, setId} = useContext(IdContext);
    const navigation = useNavigation();

    function teste() {
        setId(code);
        console.log(id);
        console.log(code);
        navigation.navigate('EditUser');
    };
    // const navigation = useNavigation();

    // function teste() {
    //     // navigation.navigate('EditUser');
    //     console.log(id);
    //     console.log(code);
    // }

    return (
        <Container>
            <WrapperUser>
                <Name>{name}</Name>
                <Code>Cód: {code}</Code>
            </WrapperUser>
            <CustomButton onPress={() => teste()}>
                <MaterialIcons name="edit" size={24} color={colors.secondary} />
            </CustomButton>
            <CustomButton onPress={onPressDelete}>
                <FontAwesome5 name="trash" size={24} color={colors.secondary} />
            </CustomButton>
        </Container>
    )
}