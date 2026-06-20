import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './Styles';

export default function Rodape() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.botao, styles.botaoConfiguracoes]}>
        <Text style={styles.icone}>⚙</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoRanking]}>
        <Text style={styles.texto}>Ranking</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoSobre]}>
        <Text style={styles.texto}>Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}