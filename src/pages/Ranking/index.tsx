import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import RankingCard from "../../components/RankingCard";
import { useRanking } from "../../context/RankingContext";
import { styles } from "./Style";
import Header from "../../components/Header";
import { Button } from '../../components/Button';


export default function Ranking() {
  const { ranking, loading, clear } = useRanking();
  const navigation = useNavigation<any>();

  async function handleClearRanking() {
    await clear();
  }

  return (
    <View style={styles.container}>
      
      <Header />

      
      <View style={styles.topo}>
        <View style={styles.titulo}>
          <Text style={styles.textoTitulo}>Ranking</Text>
        </View>

        <Text
          style={styles.voltar}
          onPress={() => navigation.replace("Home")}
        >
          <Text style={styles.textoVoltar}>Voltar</Text>
        </Text>
      </View>

    
      <ScrollView>
        <View style={styles.clearContainer}>
          <Text style={styles.clearText} onPress={handleClearRanking}>
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
    </View>
  );
}