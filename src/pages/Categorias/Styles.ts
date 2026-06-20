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
    }
})