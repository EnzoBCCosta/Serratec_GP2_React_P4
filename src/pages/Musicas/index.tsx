import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MusicCard from '../../components/MusicCard';
import { playMusic, setVolume, pauseMusic, resumeMusic, MusicId } from '../../services/musicaService';
import Header from '../../components/Header';
import { Button } from '../../components/Button';

const musicas: { id: MusicId; titulo: string }[] = [
  { id: 'music1', titulo: 'Música Tema Principal' },
  { id: 'music2', titulo: 'Música de Vitória' },
];

export default function Configuracoes() {
  const navigation = useNavigation<any>();
  const [volumeMusica, setVolumeMusica] = useState(1);
  const [musicaSelecionada, setMusicaSelecionada] = useState<MusicId>('music1');
  const [musicaTocando, setMusicaTocando] = useState(false);

  async function handleSelecionarMusica(id: MusicId) {
    setMusicaSelecionada(id);
    await playMusic(id);
    await setVolume(volumeMusica);
    setMusicaTocando(true);
  }

  async function handleToggleMusica() {
    if (musicaTocando) {
      await pauseMusic();
      setMusicaTocando(false);
    } else {
      await resumeMusic();
      setMusicaTocando(true);
    }
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.background}>
        <View style={styles.topo}>
          <View style={styles.tituloView}>
            <Text style={styles.texto}>Escolha uma música:</Text>
          </View>

          <Button
            title="Voltar"
            height={45}
            widht={90}
            corButton="red"
            raio={2}
            onPress={() => navigation.goBack()}
          />
        </View>

        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.secao}>
            {musicas.map((m) => (
              <MusicCard
                key={m.id}
                titulo={m.titulo}
                selecionada={musicaSelecionada === m.id}
                onSelecionar={() => handleSelecionarMusica(m.id)}
              />
            ))}
          </View>
        </ScrollView>

        <View style={styles.botaoContainer}>
          <TouchableOpacity
            style={[
              styles.botaoCircular,
              { backgroundColor: musicaTocando ? '#3B82F6' : '#EF4444' },
            ]}
            onPress={handleToggleMusica}
            activeOpacity={0.8}
          >
            {musicaTocando ? (
              <View style={styles.pauseIcon}>
                <View style={styles.pauseBarra} />
                <View style={styles.pauseBarra} />
              </View>
            ) : (
              // Ícone de play: triângulo
              <View style={styles.playIcon} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  tituloView: {
    flex: 1,
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
  label: {
    color: '#ccc',
    fontSize: 15,
    marginBottom: 8,
    fontWeight: '600',
  },

  botaoContainer: {
    alignItems: 'center',
    paddingVertical: 20,
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