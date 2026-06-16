import { View, Text, StyleSheet, ScrollView } from "react-native";
import RankingCard from "../../components/RankingCard";
import { rankingMock } from "../../data/rankingMock";

export default function Ranking() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Ranking:</Text>

        <View style={styles.backButtonContainer}>
          <Text style={styles.backButton}>←</Text>
        </View>
      </View>

      <View style={styles.rankingContainer}>
        {rankingMock.map((player) => (
          <RankingCard
            key={player.posicao}
            nome={player.nome}
            categoria={player.categoria}
            acertos={player.acertos}
            totalPerguntas={player.totalPerguntas}
            posicao={player.posicao}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#080A17",
    paddingTop: 80,
    paddingBottom: 30,
  },

  header: {
    marginHorizontal: 15,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 35,
  },

  titulo: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },

  backButtonContainer: {
    width: 40,
    height: 40,

    backgroundColor: "#C51F48",

    justifyContent: "center",
    alignItems: "center",
  },

  backButton: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  rankingContainer: {
    paddingHorizontal: 20,
  },
});