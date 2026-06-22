import AsyncStorage from "@react-native-async-storage/async-storage";
import { RankingPlayer } from "../../@types/ranking";

const STORAGE_KEY = "@quizgame_ranking";

export async function getRanking(): Promise<RankingPlayer[]> {
  const stored = await AsyncStorage.getItem(STORAGE_KEY);

  if (!stored) return [];

  try {
    return JSON.parse(stored);
  } catch (error) {
    console.log("Erro no ranking:", error);
    return [];
  }
}

export async function addPlayer(
  player: Omit<RankingPlayer, "posicao">
): Promise<void> {
  const currentRanking = await getRanking();

  const updatedRanking = [...currentRanking, player];

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedRanking)
  );
}

export async function clearRanking(): Promise<void> {
  await AsyncStorage.removeItem(STORAGE_KEY);
}