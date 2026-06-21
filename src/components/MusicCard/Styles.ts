import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3BA2B',
    borderRadius: 10,
    padding: 14,
    marginVertical: 6,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  cardSelecionado: {
    borderColor: '#ffffff',
  },
  icone: {
    fontSize: 22,
    marginRight: 12,
  },
  titulo: {
    flex: 1,
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  badge: {
    fontSize: 18,
    color: '#F3BA2B',
  },
});