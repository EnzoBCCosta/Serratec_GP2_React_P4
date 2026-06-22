import React from "react";
import { styles } from "./Styles";
import { View, Text, StyleSheet } from "react-native";
import { RankingPlayer } from "../../../types/ranking";

export default function RankingCard({
  nome,
  categoria,
  acertos,
  totalPerguntas,
  posicao,
}: RankingPlayer) {
  const percentual =
    totalPerguntas > 0
      ? Math.round((acertos / totalPerguntas) * 100)
      : 0;

  return (
    <View style={styles.card}>
      <View style={styles.topSection}>
        <Text style={styles.nome}>{nome}</Text>

        <View style={styles.circle}>
          <Text style={styles.posicao}>{posicao}°</Text>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.categoria}>{categoria}</Text>

        <Text style={styles.resultado}>
          {acertos}/{totalPerguntas} ({percentual}%)
        </Text>
      </View>
    </View>
  );
}