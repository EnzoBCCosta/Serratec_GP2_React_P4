import React from 'react';
import { styles } from './Styles';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  titulo: string;
  selecionada: boolean;
  onSelecionar: () => void;
};

export default function MusicCard({ titulo, selecionada, onSelecionar }: Props) {
  return (
    <TouchableOpacity
      style={[styles.card, selecionada && styles.cardSelecionado]}
      onPress={onSelecionar}
    >
      <Text style={styles.titulo}>
        {titulo}
      </Text>
      {selecionada && <Text style={styles.badge}>✔</Text>}
    </TouchableOpacity>
  );
}