import { createContext, useContext, useEffect, useState } from "react";
import {
  getRanking,
  addPlayer as addPlayerStorage,
  clearRanking
} from "../services/rankingStorage";
import { RankingPlayer } from "../types/ranking";

type RankingContextData = {
  ranking: RankingPlayer[];
  loading: boolean;
  addPlayer: (player: RankingPlayer) => Promise<void>;
  clear: () => Promise<void>;
};

const RankingContext = createContext<RankingContextData>(
  {} as RankingContextData
);

export function RankingProvider({ children }: { children: React.ReactNode }) {
  const [ranking, setRanking] = useState<RankingPlayer[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadRanking() {
    setLoading(true);

    const data = await getRanking();

    const sorted = data
      .sort((a, b) => b.acertos - a.acertos)
      .slice(0, 5)
      .map((player, index) => ({
        ...player,
        posicao: index + 1
      }));

    setRanking(sorted);
    setLoading(false);
  }

  async function addPlayer(player: RankingPlayer) {
    await addPlayerStorage(player);
    await loadRanking();
  }

  async function clear() {
    await clearRanking();
    setRanking([]);
  }

  useEffect(() => {
    loadRanking();
  }, []);

  return (
    <RankingContext.Provider
      value={{
        ranking,
        loading,
        addPlayer,
        clear
      }}
    >
      {children}
    </RankingContext.Provider>
  );
}

export function useRanking() {
  return useContext(RankingContext);
}