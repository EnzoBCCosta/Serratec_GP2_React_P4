import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#180024',
        paddingTop: 20,
    },
    // CORRIGIDO: Removido o flex: 1 para o container não empurrar os elementos de baixo
    background: {
        width: '100%',
        backgroundColor: '#180024',
        marginBottom: 10, // Pequena margem opcional para afastar sutilmente o título do scoreCard
    },
    // CORRIGIDO: Removido o padding negativo que quebra o layout
    topo: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
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
        color: '#000000', // Garante que o texto digitado seja visível (preto) sobre o fundo branco
    },
    mensagem: {
        color: '#ffffff',
        marginBottom: 12,
    },
    botao: {
        marginBottom: 16,
    },
    container2: {
        width: '100%', // Garante que alinhará os filhos baseados na largura total da tela
        alignItems: 'center',
    }
});