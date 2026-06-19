import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#121119',
        alignItems: 'center',
    },
    card: {
        alignSelf: 'flex-start',
        marginTop: 100,
        marginBottom: 30,
    },
    questao: {
        maxHeight: '30%',
        width: '90%',
        alignSelf: 'center',
        marginBottom: 30,
        
        backgroundColor: 'rgba(100, 185, 249, 0.48)',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(100, 185, 249, 0.44)',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 30,
        elevation: 4, 

    },
    enunciadoTexto: {
        color: 'white',
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
    },
    respostas: {
        gap: 30,
    }
})