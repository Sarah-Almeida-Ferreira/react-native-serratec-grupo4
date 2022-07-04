import { AntDesign } from '@expo/vector-icons';
import { Text, TouchableOpacity } from "react-native";
import colors from '../../themes/colors';

export const PlusButton = () => {
    return (
        <TouchableOpacity style={{marginBottom: 50}}>
            <AntDesign name="pluscircleo" size={60} color={colors.secondary} />
        </TouchableOpacity>
    )
}