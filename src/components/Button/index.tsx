import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./Styles";

interface ButtonProps extends TouchableOpacityProps {

    // Texto do Button
    title: string, //Texto Central do Botão

    tamButton?: number, //Tamanho do texto do Butão

    corTitle?: string, //Cor do Texto

    familyTitle?: string, //Familia do texto do Botão (arial, serif etc...)

    // Configurações do Botão

    height?: number, //Altura do Botão

    widht?: number, //Largura do Botão

    corButton?: string, //Cor do Botão
    
    raio?: number, //Suavidade das pontas da borda do Botão
}

//Exemplo de chamada do botão:
// <Button title="teste" height={50} widht={200} corTitle='blue' corButton='White' raio={20}/>
//Com exceção do title, todos são opcionais (assim como eu não usei familyTitle no exemplo acima)

export const Button = ({ title, tamButton=20, height= 42, widht= 320,corTitle= '#ffffff', familyTitle="", corButton= '#f3ba2b', raio=0, ...rest}: ButtonProps) => {

    const fredStyles = styles(tamButton, height, widht, corTitle, familyTitle, corButton, raio);

    return<TouchableOpacity activeOpacity={0.7} style={fredStyles.baseButton} {...rest}>
                
            <Text style={fredStyles.baseText}>
                { title }
            </Text>
        </TouchableOpacity>;
}