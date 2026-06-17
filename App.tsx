import { RankingProvider } from "./src/context/RankingContext";
import Ranking from "./src/pages/Ranking";

export default function App() {
  return (
    <RankingProvider>
      <Ranking />
    </RankingProvider>
  );
}