import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './Styles';
import Header from '../../components/Header';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';

export default function Result() {
    const acertos = 7;
    const total = 10;
    const percentual = Math.round((acertos / total) * 100);

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
            setMensagem('Pontuação enviada com sucesso!');
        } catch (error) {
            setMensagem('Não foi possível enviar a pontuação.');
        } finally {
            setEnviando(false);
        }
    }

    function handleJogarNovamente() {
    }

    function handleVerRanking() {

    }

    return (
        <View style={styles.container}>
            <Header />

            <Card title="Resultado:" corCard="#64B9F9" widht={320} height={47} />

            <View style={styles.scoreCard}>
                <Text style={styles.scoreText}>
                    {acertos}/{total}
                </Text>
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

            <View style={styles.botoes}>
                <Button
                    title={enviando ? 'Enviando...' : 'Enviar pontuação'}
                    onPress={handleEnviarPontuacao}
                    corButton="#64B9F9"
                    widht={320}
                    height={47}
                    raio={20}
                />
                <Button
                    title="Jogar novamente"
                    onPress={handleJogarNovamente}
                    corButton="#64B9F9"
                    widht={320}
                    height={47}
                    raio={20}
                />
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
