import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import RankingCard from "../../components/RankingCard";
import { useRanking } from "../../context/RankingContext";

export default function Ranking() {
  const { ranking, loading, clear } = useRanking();
  const navigation = useNavigation<any>();

  async function handleClearRanking() {
    await clear();
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Ranking:</Text>

        <View style={styles.backButtonContainer}>
          <Text
            style={styles.backButton}
            onPress={() => navigation.replace("Categorias")}
          >
            ←
          </Text>
        </View>
      </View>

      <View style={{ alignItems: "center", marginBottom: 15 }}>
        <Text
          onPress={handleClearRanking}
          style={{
            color: "#C41E3A",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Limpar Ranking
        </Text>
      </View>

      <View style={styles.rankingContainer}>
        {!loading && ranking.length === 0 && (
          <Text style={styles.emptyText}>
            Nenhum jogador no ranking ainda
          </Text>
        )}

        {!loading &&
          ranking.map((player) => (
            <RankingCard
              key={`${player.nome}-${player.categoria}`}
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
  emptyText: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});