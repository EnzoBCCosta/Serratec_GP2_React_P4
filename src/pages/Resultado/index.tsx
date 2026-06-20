import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './Styles';
import Header from '../../components/Header';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';

import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/AppRoutes';
import { RouteProp } from '@react-navigation/native';

import { addPlayer } from '../../services/rankingStorage';
import { RankingPlayer } from "../../../types/ranking";

export default function Resultado() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const route =
    useRoute<RouteProp<RootStackParamList, 'Resultado'>>();

  const { pontos, total, category } = route.params;

  const percentual = Math.round((pontos / total) * 100);

  const [nome, setNome] = useState('');

  function handleJogarNovamente() {
    save();
    navigation.replace('Categorias');
  }

  function handleVerRanking() {
    save();
    navigation.navigate('Ranking');
  }

  function save(){

    if(nome.trim() === ''){
      return;
    }

    const player: RankingPlayer = {
      nome: nome,
      acertos: pontos,
      totalPerguntas: total,
      categoria: category,
      posicao: 0,
    };

    addPlayer(player);
  }

  return (
    <View style={styles.container}>
      <Header />

      <Card title="Resultado:" corCard="#64B9F9" widht={320} height={47} />

      <View style={styles.scoreCard}>
        <Text style={styles.scoreText}>
          {pontos}/{total}
        </Text>
        <Text style={styles.percentText}>
          {percentual}% de acerto
        </Text>
      </View>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

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