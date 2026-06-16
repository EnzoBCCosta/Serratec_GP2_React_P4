import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./Styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string,
    corTitle?: string,
    familyTitle?: string,
    corButton?: string,
    raio?: number,
}

export const Button = ({ title, corTitle= '#ffffff', familyTitle="", corButton= '#f3ba2b', raio=0, ...rest}: ButtonProps) => {

    const fredStyles = styles(corTitle, familyTitle, corButton, raio);

    return<TouchableOpacity activeOpacity={0.7} style={fredStyles.baseButton} {...rest}>
                
            <Text style={fredStyles.baseText}>
                { title }
            </Text>
        </TouchableOpacity>;
}