import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#180024',
    },
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: '#180024'
    },
    topo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
        paddingHorizontal: -10,
    },
    titulo: {
        backgroundColor: '#64B9F9',
        height: 60,
        width: 220,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    texto: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    container2:{
        alignItems: 'center',
    },


    secao: {
        width: '90%',
        marginTop: 28,
    },
    label: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#ffffff',
        borderRadius: 6,
        width: '100%',
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
    },
    opcoesDificuldade: {
        width: '100%',
        alignItems: 'center',
        gap: 12,
    },
    botaoSelecionado: {
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#FFFFFF',
    },
    botaoNaoSelecionado: {
        borderRadius: 10,
        borderWidth: 4,
        borderColor: 'transparent',
    },
    confirmar: {
        marginTop: 100,
    },
});