import { StyleSheet } from "react-native";

export const styles = (corTitle: string, tamTitle: number, familyTitle: string, corCard: string, height: number, widht: number) => StyleSheet.create ({

    card: {
        alignItems:'flex-start',
        justifyContent: 'center',

        height: height,
        width: widht,
        backgroundColor: corCard,

    },
    texto: {

        paddingLeft: 15,
        fontWeight: 'bold',
        fontSize: tamTitle,
        fontFamily: familyTitle,
        color: corTitle,
        
    },
});