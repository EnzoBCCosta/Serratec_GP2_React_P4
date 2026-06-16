import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a0d2e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 220,
    height: 220,
    marginBottom: 48,
  },
  containerBotoes: {
    width: '100%',
    gap: 16,
  },
  botao: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoAzul: {
    backgroundColor: '#64B9F9',
  },
  botaoAmarelo: {
    backgroundColor: '#F3BA2B',
  },
  botaoVermelho: {
    backgroundColor: '#C41E3A',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default styles;