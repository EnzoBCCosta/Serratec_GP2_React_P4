import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#180024",
  },

  background: {
    flex: 1,
    width: "100%",
    backgroundColor: "#180024",
  },

  /* TOPO DA TELA (Ranking + Voltar vou ver depois pra usar os card do cadu) */
  topo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 15,
  },

  titulo: {
    backgroundColor: "#64B9F9",
    height: 60,
    width: 220,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },

  textoTitulo: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  voltar: {
    backgroundColor: "#D10000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },

  textoVoltar: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  /* botao pra limpar rank */
  clearContainer: {
    alignItems: "center",
    marginVertical: 20,
  },

  clearText: {
    color: "#E63946",
    fontSize: 16,
    fontWeight: "bold",
  },

  /* a lista em si */
  rankingContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  emptyText: {
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});