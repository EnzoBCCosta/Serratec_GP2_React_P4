import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./Styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string, //Texto Central do Botão

    height?: number, //Altura do Botão

    widht?: number, //Largura do Botão

    corTitle?: string, //Cor do texto do Botão

    familyTitle?: string, //Familia do texto do Botão (arial, serif etc...)

    corButton?: string, //Cor do Botão
    
    raio?: number, //Suavidade das pontas da borda do Botão
}

//Exemplo de chamada do botão:
// <Button title="teste" height={50} widht={200} corTitle='blue' corButton='White' raio={20}/>
//Com exceção do title, todos são opcionais (assim como eu não usei familyTitle no exemplo acima)

export const Button = ({ title, height= 42, widht= 320,corTitle= '#ffffff', familyTitle="", corButton= '#f3ba2b', raio=0, ...rest}: ButtonProps) => {

    const fredStyles = styles(height, widht, corTitle, familyTitle, corButton, raio);

    return<TouchableOpacity activeOpacity={0.7} style={fredStyles.baseButton} {...rest}>
                
            <Text style={fredStyles.baseText}>
                { title }
            </Text>
        </TouchableOpacity>;
}