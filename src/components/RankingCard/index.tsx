import React from "react";
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

const styles = StyleSheet.create({
 card: {
  borderRadius: 0,
  overflow: "hidden",

  width: "85%",
  alignSelf: "center",

  marginBottom: 12,
},

  topSection: {
    backgroundColor: "#74B6F2",
    paddingVertical: 14,
    paddingHorizontal: 16,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bottomSection: {
    backgroundColor: "#C51F48",
    paddingVertical: 8,
    paddingHorizontal: 16,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  nome: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  circle: {
  width: 28,
  height: 28,
  borderRadius: 14,

  backgroundColor: "white",
  justifyContent: "center",
  alignItems: "center",
},

  posicao: {
    color: "#E7B84C",
    fontWeight: "bold",
    fontSize: 18,
  },

  categoria: {
    color: "white",
    fontSize: 12,
  },

  resultado: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});