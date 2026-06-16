import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import RankingCard from "../../components/RankingCard";
import { getRanking, addPlayer } from "../../services/rankingStorage";
import { RankingPlayer } from "../../@types/ranking";

export default function Ranking() {
  const [ranking, setRanking] = useState<RankingPlayer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        await addPlayer({
  nome: "jonh quiz1",
  categoria: "História",
  acertos: 7,
  totalPerguntas: 10,
});

await addPlayer({
  nome: "Jonh quiz2",
  categoria: "Geografia",
  acertos: 5,
  totalPerguntas: 10,
});

await addPlayer({
  nome: "jonh quiz 3",
  categoria: "Ciências",
  acertos: 9,
  totalPerguntas: 10,
});

        const data = await getRanking();

        const ordered = data
       .sort((a, b) => {
       if (b.acertos !== a.acertos) {
       return b.acertos - a.acertos;
       }

       return b.totalPerguntas - a.totalPerguntas;
       })
       .map((player, index) => ({
       ...player,
       posicao: index + 1,
       }));

        setRanking(ordered);
      } catch (error) {
        console.error("Erro ao carregar ranking:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Ranking:</Text>

        <View style={styles.backButtonContainer}>
          <Text style={styles.backButton}>←</Text>
        </View>
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