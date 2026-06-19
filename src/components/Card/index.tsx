import { styles } from "./Styles";
import { View, Text, ViewProps, TextProps } from "react-native";

interface CardProps extends ViewProps{

    // Texto do Card
    title: string, //Texto Central do Card

    corTitle?: string, //Cor do Texto

    tamTitle?: number, //Tamanho do texto do Card

    familyTitle?: string, //Familia do texto do Card (arial, serif etc...)

    // Configurações do Card
    corCard?: string, //Cor do Card

    height?: number, //Altura do Card

    widht?: number, //Largura do Card
};
//Exemplo de chamada do card:
// <Card title="teste" height={50} widht={200} corTitle='blue' corCard='White' />
//Com exceção do title, todos são opcionais (assim como eu não usei familyTitle no exemplo acima)

export const Card = ({title, corTitle='#ffffff', tamTitle=20, familyTitle='', height=50, widht=240, corCard='#64B9F9', ...rest}:CardProps) => {

    const cardStyles = styles(corTitle, tamTitle, familyTitle, corCard, height, widht);

    return <View style={cardStyles.card}>

        <Text style={cardStyles.texto}>
            {title}
        </Text>

    </View>
}