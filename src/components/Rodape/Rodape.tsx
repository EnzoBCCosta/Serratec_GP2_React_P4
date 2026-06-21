import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';

export default function Rodape() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.botao, styles.botaoConfiguracoes]}
        onPress={() => navigation.navigate('Musicas')}
      >
        <Text style={styles.icone}>⚙</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoRanking]}
        onPress={() => navigation.navigate('Ranking')}
      >
        <Text style={styles.texto}>Ranking</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoSobre]}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={styles.texto}>Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}