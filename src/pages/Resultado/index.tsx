import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './Styles';
import Header from '../../components/Header';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../@types/navigation';
// import { useQuiz } from '../../hooks/useQuiz';
// import { postScore } from '../../services/rankingService';

export default function Result() {
    const acertos = 7;
    const total = 10;
    // const { acertos, total, categoria } = useQuiz();

    const percentual = Math.round((acertos / total) * 100);

    // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Result'>>();

    const [nome, setNome] = useState('');
    const [enviando, setEnviando] = useState(false);
    const [mensagem, setMensagem] = useState('');

    async function handleEnviarPontuacao() {
        if (enviando) return;

        if (!nome.trim()) {
            setMensagem('Digite seu nome antes de enviar.');
            return;
        }

        setEnviando(true);
        setMensagem('');
        try {
            // await postScore({ nome: nome.trim(), categoria, acertos, total });
            setMensagem('Pontuação enviada com sucesso!');
        } catch (error) {
            setMensagem('Não foi possível enviar a pontuação.');
        } finally {
            setEnviando(false);
        }
    }

    function handleJogarNovamente() {
        // navigation.navigate('Quiz');
    }

    function handleVerRanking() {
        // navigation.navigate('Ranking');
    }

    return (
        <View style={styles.container}>
            <Header />

            <Card title="Resultado:" corCard="#64B9F9" widht={320} height={47} />

            <View style={styles.scoreCard}>
                <Text style={styles.scoreText}>{acertos}/{total}</Text>
                <Text style={styles.percentText}>{percentual}% de acerto</Text>
            </View>

            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Digite seu nome"
            />

            {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}

            <View style={styles.botao}>
                <Button
                    title={enviando ? 'Enviando...' : 'Enviar pontuação'}
                    onPress={handleEnviarPontuacao}
                    corButton="#64B9F9"
                    widht={320}
                    height={47}
                    raio={20}
                />
            </View>
            <View style={styles.botao}>
                <Button
                    title="Jogar novamente"
                    onPress={handleJogarNovamente}
                    corButton="#64B9F9"
                    widht={320}
                    height={47}
                    raio={20}
                />
            </View>
            <View style={styles.botao}>
                <Button
                    title="Ver Ranking"
                    onPress={handleVerRanking}
                    corButton="#64B9F9"
                    widht={320}
                    height={47}
                    raio={20}
                />
            </View>
        </View>
    );
}
