import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Linking } from 'react-native';
import { styles } from './Styles';
import Header from '../../components/Header';
import { Button } from '../../components/Button';

import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/AppRoutes';
import { RouteProp } from '@react-navigation/native';

import { useRanking } from '../../context/RankingContext';

export default function Resultado() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'Resultado'>>();

  const { pontos, total, category, categoryName } = route.params;
  
  const percentual = Math.round((pontos / total) * 100);
  const [nome, setNome] = useState('');
  const { addPlayer } = useRanking();

  function handleJogarNovamente() {
    navigation.replace('Categorias');
  }

  async function handleVerRanking() {
    if (!nome.trim()) return;

    await addPlayer({
      nome: nome.trim(),
      categoria: categoryName,
      acertos: pontos,
      totalPerguntas: total,
    });

    navigation.navigate('TabRoutes', { screen: 'Ranking' });
  }

  function handleHome() {
    navigation.navigate('TabRoutes', { screen: 'Home' });
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.background}>
        <View style={styles.topo}>
          <View style={styles.titulo}>
            <Text style={styles.texto}>Resultado do Quiz:</Text>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
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

        <View style={styles.botao}>
          <Button
            title="Voltar para o início"
            onPress={handleHome}
            widht={320}
            height={47}
            raio={20}
          />
        </View>
      </View> 
    </View> 
  );
}