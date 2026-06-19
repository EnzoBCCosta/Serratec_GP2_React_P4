import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#121119',
        alignItems: 'center',
    },
    card: {
        width: '100%',
        marginTop: 100,
        marginBottom: 50,
        alignSelf: 'flex-start',
    },
    questao: {
        width: '100%',
        marginBottom: 100,
        alignSelf: 'flex-start',
        marginLeft: 20,
        paddingRight: 40,
    },
    enunciadoTexto: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,
    },
    respostas: {
        gap: 30,
        alignItems: 'center',

    }
})