import { RankingProvider } from "./src/context/RankingContext";
import Categorias from "./src/pages/Categorias";
import Dificuldade from "./src/pages/Dificuldade/Index";
import Home from "./src/pages/home/home";
import Quiz from "./src/pages/Quiz";
import Ranking from "./src/pages/Ranking";
import Resultado from "./src/pages/Resultado/index"

export default function App() {
  return (
    <>
      <Home /> 
      <Categorias />
      <Dificuldade />
      <Quiz /> 
      <Resultado />
      <Ranking />
    </>
  );
}