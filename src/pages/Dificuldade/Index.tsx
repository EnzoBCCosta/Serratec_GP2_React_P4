import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './Styles';
import { Button } from '../../components/Button';
import Header from '../../components/Header';
import { useLocalSearchParams, router } from 'expo-router';

type Dificuldade = 'easy' | 'medium' | 'hard';

const OPCOES_DIFICULDADE: { label: string; valor: Dificuldade }[] = [
    { label: 'Fácil', valor: 'easy' },
    { label: 'Médio', valor: 'medium' },
    { label: 'Difícil', valor: 'hard' },
];

// Cor de cada dificuldade quando 
const COR_BASE: Record<Dificuldade, string> = {
    easy: '#64B9F9',
    medium: '#f3ba2b',
    hard: '#C41E3A',
};

const QUANTIDADE_PADRAO = '10';

export default function Dificuldade() {

    const { category } = useLocalSearchParams();

    const [qtdQuestions, setQtdQuestions] = useState('');
    const [difficulty, setDifficulty] = useState<Dificuldade>('easy');

    function handleConfirmar() {
        const quantidadeDigitada = qtdQuestions.trim();
        const quantidadeFinal = quantidadeDigitada === '' ? QUANTIDADE_PADRAO : quantidadeDigitada;

        router.push({
            pathname: '/Quiz',
            params: {
                qtdQuestions: quantidadeFinal,
                difficulty,
                category,
            },
        });
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.background}>
                <View style={styles.topo}>
                    <View style={styles.titulo}>
                        <Text style={styles.texto}>Configurar Quiz:</Text>
                    </View>

                    <Button
                        title="Voltar"
                        height={45}
                        widht={90}
                        corButton="red"
                        raio={2}
                        onPress={() => router.back()}
                    />
                </View>

                <View style={styles.secao}>
                    <Text style={styles.label}>Quantidade de perguntas:</Text>
                    <TextInput
                        style={styles.input}
                        value={qtdQuestions}
                        onChangeText={setQtdQuestions}
                        placeholder={`Padrão: ${QUANTIDADE_PADRAO}`}
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.secao}>
                    <Text style={styles.label}>Dificuldade:</Text>
                    <View style={styles.opcoesDificuldade}>
                        {OPCOES_DIFICULDADE.map((opcao) => {
                            const selecionado = difficulty === opcao.valor;
                            return (
                                <View
                                    key={opcao.valor}
                                    style={selecionado ? styles.botaoSelecionado : styles.botaoNaoSelecionado}
                                >
                                    <Button
                                        title={opcao.label}
                                        widht={312}
                                        height={42}
                                        raio={8}
                                        corButton={COR_BASE[opcao.valor]}
                                        onPress={() => setDifficulty(opcao.valor)}
                                    />
                                </View>
                            );
                        })}
                    </View>
                </View>

                <View style={styles.confirmar}>
                    <Button
                        title="Começar Quiz"
                        widht={320}
                        height={50}
                        raio={10}
                        corButton="#f3ba2b"
                        onPress={handleConfirmar}
                    />
                </View>
            </View>
        </View>
    );
}