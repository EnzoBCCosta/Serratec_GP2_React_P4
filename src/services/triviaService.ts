import api from './api'

export async function getToken() {
    try {
        const response = await api.get('/api_token.php?command=request');
        return response.data.token;
    } catch (erro) {
        console.error('Erro no Token: ', erro);
        throw erro;
    }
}

export async function getQuestion(Token: string, quantidade: number, dificuldade: string, categoria: number) {
    try {
        const response = await api.get('/api.php', {
            params: {
                amount: quantidade,
                category: categoria,
                difficulty: dificuldade,
                token: Token,
            }
        })

        return response.data.results;

    } catch (erro) {
        console.error('Erro ao pegar perguntas: ', erro);
        throw erro;
    }
}