import { StyleSheet, TouchableOpacityProps } from "react-native";

export const styles = (height: number, width: number, corTitle: string, familyTitle: string, corButton: string, raio: number) => StyleSheet.create({

    baseButton: {
        width: width,
        height: height,
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