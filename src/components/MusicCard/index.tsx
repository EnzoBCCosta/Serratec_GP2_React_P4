import React from 'react';
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

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3BA2B',
    borderRadius: 10,
    padding: 14,
    marginVertical: 6,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  cardSelecionado: {
    borderColor: '#ffffff',
  },
  icone: {
    fontSize: 22,
    marginRight: 12,
  },
  titulo: {
    flex: 1,
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  badge: {
    fontSize: 18,
    color: '#F3BA2B',
  },
});