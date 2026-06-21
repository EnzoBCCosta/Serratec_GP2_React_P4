import React, { useEffect, useState } from 'react';
import { styles } from './Styles';
import { View, Text, ScrollView } from 'react-native';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { getToken, getQuestion } from '../../services/triviaService';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/AppRoutes';

interface apiBack {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface Options {
  value: string;
  correct: boolean;
  index: number;
}

export default function Quiz() {
  const tamButton = 47;
  const raioButton = 20;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Quiz'>>();

  const route =
    useRoute<RouteProp<RootStackParamList, 'Quiz'>>();

  const { qtdQuestions, category,categoryName,  difficulty } = route.params;

  const [token, setToken] = useState('');
  const [question, setQuestion] = useState<apiBack[]>([]);
  const [pontos, setPontos] = useState(0);
  const [count, setCount] = useState(0);
  const [memoryOpcoes, setMemoryOpcoes] = useState<Options[]>([]);
  const [opcSelected, setOpcSelected] = useState(false);

  useEffect(() => {
    async function starter() {
      const Token = await getToken();
      setToken(Token);

      const response = await getQuestion(
        Token,
        Number(qtdQuestions),
        String(difficulty),
        Number(category)
      );

      setQuestion(response);
    }

    starter();
  }, []);

  useEffect(() => {
    if (question.length === 0) return;

    const questionAtual = question[count];

    const incorrect = questionAtual.incorrect_answers.map(qst => ({
      value: qst,
      correct: false,
      index: Math.random(),
    }));

    const correct = {
      value: questionAtual.correct_answer,
      correct: true,
      index: Math.random(),
    };

    setMemoryOpcoes([...incorrect, correct].sort((a, b) => a.index - b.index));
    setOpcSelected(false);
  }, [count, question]);

  function responder(option: Options) {
    if (opcSelected) return;

    setOpcSelected(true);

    
    const novoPontos = option.correct ? pontos + 1 : pontos;

    if (option.correct) {
      setPontos(novoPontos);
    }

    setTimeout(() => {
      setCount(prev => {
        const proxima = prev + 1;

        if (proxima < question.length) {
          return proxima;
        } else {
          navigation.replace('Resultado', {
  pontos: novoPontos,
  total: question.length,
  category: Number(category), // Passa o ID correto como número
});
          return prev;
        }
      });
    }, 3000);
  }

  if (question.length === 0) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: 'white', fontSize: 18 }}>
          Carregando Quiz...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Card title={`Questão: ${count + 1}`} />
      </View>

      <ScrollView style={styles.questao}>
        <Text style={styles.enunciadoTexto}>
          {question[count].question}
        </Text>
      </ScrollView>

      <View>
        {memoryOpcoes.map((option, index) => (
          <Button
            key={index}
            title={option.value}
            height={tamButton}
            raio={raioButton}
            {...(opcSelected
              ? { corButton: option.correct ? '#29c41e' : '#C41E3A' }
              : {})}
            onPress={() => responder(option)}
          />
        ))}
      </View>
    </View>
  );
}