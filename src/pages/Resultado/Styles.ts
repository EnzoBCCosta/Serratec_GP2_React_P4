import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121119',
        alignItems: 'center',
        paddingTop: 20,
    },
    scoreCard: {
        backgroundColor: '#C41E3A',
        borderRadius: 10,
        width: '90%',
        paddingVertical: 32,
        alignItems: 'center',
        marginVertical: 24,
    },
    scoreText: {
        color: '#ffffff',
        fontSize: 48,
        fontWeight: 'bold',
    },
    percentText: {
        color: '#ffffff',
        fontSize: 16,
        marginTop: 4,
    },
    label: {
        color: '#ffffff',
        alignSelf: 'flex-start',
        marginLeft: '5%',
        marginBottom: 6,
    },
    input: {
        backgroundColor: '#ffffff',
        borderRadius: 6,
        width: '90%',
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 20,
    },
    mensagem: {
        color: '#ffffff',
        marginBottom: 12,
    },
    botao: {
        marginBottom: 16,
    },
});