import { StyleSheet, TouchableOpacityProps } from "react-native";

export const styles = (tamButton: number, height: number, width: number, corTitle: string, familyTitle: string, corButton: string, raio: number) => StyleSheet.create({

    baseButton: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: corButton,
        borderRadius: raio,
    },

    baseText: {
        fontWeight: 'bold',
        fontSize: tamButton,
        color: corTitle,
        fontFamily: familyTitle
    },

})