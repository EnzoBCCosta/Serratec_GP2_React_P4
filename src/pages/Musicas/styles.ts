import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12121f',
  },
  background: {
    flex: 1,
    padding: 24,
  },
  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  texto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  scroll: {
    flexGrow: 1,
  },
  secao: {
    marginBottom: 28,
  },
  volumeContainer: {
    marginBottom: 20,
  },
  volumeLabel: {
    color: '#fff',
    marginBottom: 6,
  },
  botaoContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  botaoCircular: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    width: 0,
    height: 0,
    borderTopWidth: 14,
    borderBottomWidth: 14,
    borderLeftWidth: 24,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#fff',
    marginLeft: 5,
  },
  pauseIcon: {
    flexDirection: 'row',
    gap: 8,
  },
  pauseBarra: {
    width: 8,
    height: 26,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
});