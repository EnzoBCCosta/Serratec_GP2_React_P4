import { styles } from "./Styles";
import { View, Text, ViewProps, TextProps } from "react-native";

interface CardProps extends ViewProps{

    // Texto
    title: string,
    corTitle?: string,
    tamTitle?: number,
    familyTitle?: string,

    // Card
    corCard?: string,
    height?: number,
    widht?: number,
};

export const Card = ({title, corTitle='#ffffff', tamTitle=20, familyTitle='', height=20, widht=200, corCard='#64B9F9', ...rest}:CardProps) => {

    const cardStyles = styles(corTitle, tamTitle, familyTitle, corCard, height, widht);

    return <View style={cardStyles.card}>

        <Text style={cardStyles.texto}>
            {title}
        </Text>

    </View>
}