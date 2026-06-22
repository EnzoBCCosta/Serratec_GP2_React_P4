import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    height: 56,
  },
  botao: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoConfiguracoes: {
    backgroundColor: '#C41E3A',
  },
  botaoRanking: {
    backgroundColor: '#F3BA2B',
  },
  botaoSobre: {
    backgroundColor: '#64B9F9',
  },
  icone: {
    fontSize: 22,
    color: '#aaa',
  },
  texto: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
});

export default styles;