import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./Styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string,
    cor: string,
    raio: number,
}

export const Button = ({ title, cor, raio, ...rest}: ButtonProps) => {

    return<TouchableOpacity activeOpacity={0.7} style={[styles.baseButton,
            { backgroundColor: cor, borderRadius: raio}]} {...rest}>
                
          <Text style={styles.baseText}>
            { title }
          </Text>
        </TouchableOpacity>;
}