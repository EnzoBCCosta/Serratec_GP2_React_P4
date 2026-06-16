import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#121119',
        alignItems: 'center',

    },
    enunciado: {
        width: 350,
        marginTop: 200,
        marginBottom: 100,
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
    enunciadoTexto: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,
    },
    respostas: {
        gap: 30,
    }
})