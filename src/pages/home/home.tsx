import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './homestyles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/quiz.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.containerBotoes}>
        <TouchableOpacity
          style={[styles.botao, styles.botaoAzul]}
          onPress={() => console.log('Iniciar Quiz')}
        >
          <Text style={styles.textoBotao}>Iniciar Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, styles.botaoAmarelo]}
          onPress={() => console.log('Ver Ranking')}
        >
          <Text style={styles.textoBotao}>Ver Ranking</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, styles.botaoVermelho]}
          onPress={() => console.log('Sobre')} 
        >
          <Text style={styles.textoBotao}>Sobre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}