import { StyleSheet, TouchableOpacityProps } from "react-native";

export const styles = (corTitle: string, familyTitle: string, corButton: string, raio: number) => StyleSheet.create({

    baseButton: {
        width: 320,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: corButton,
        borderRadius: raio,
    },

    baseText: {
        fontSize: 15,
        color: corTitle,
        fontFamily: familyTitle
    },

})