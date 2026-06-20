export interface RankingPlayer {
  nome: string;
  categoria: string;
  acertos: number;
  totalPerguntas: number;
  posicao?: number;
}