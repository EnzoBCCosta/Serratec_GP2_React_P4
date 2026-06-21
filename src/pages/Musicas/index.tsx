import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

import MusicCard from '../../components/MusicCard';
import Header from '../../components/Header';
import { Button } from '../../components/Button';

import musicService, { MusicId } from '../../services/musicaService';

const musicas: { id: MusicId; titulo: string }[] = [
  { id: 'music1', titulo: 'Música Tema Principal'},
  { id: 'music2', titulo: 'Pleasure Quarter' },
];

export default function Configuracoes() {
  const navigation = useNavigation<any>();

  const [volumeMusica, setVolumeMusica] = useState(1);
  const [musicaSelecionada, setMusicaSelecionada] = useState<MusicId | null>(null);
  const [musicaTocando, setMusicaTocando] = useState(false);

  // 🔹 sincroniza estado da tela com o service
  useEffect(() => {
    setMusicaSelecionada(musicService.getCurrentMusic());
    setMusicaTocando(musicService.isPlaying());
  }, []);

  async function handleSelecionarMusica(id: MusicId) {
    await musicService.play(id);
    await musicService.setVolume(volumeMusica);

    setMusicaSelecionada(id);
    setMusicaTocando(true);
  }

  async function handleToggleMusica() {
    if (!musicaSelecionada) return;

    if (musicaTocando) {
      await musicService.pause();
      setMusicaTocando(false);
    } else {
      await musicService.resume();
      setMusicaTocando(true);
    }
  }

  async function handleVolumeChange(value: number) {
    setVolumeMusica(value);
    await musicService.setVolume(value);
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.background}>
        <View style={styles.topo}>
          <Text style={styles.texto}>Escolha uma música:</Text>

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

        <View style={styles.volumeContainer}>
          <Text style={styles.volumeLabel}>
            Volume: {Math.round(volumeMusica * 100)}%
          </Text>

          <Slider
            minimumValue={0}
            maximumValue={1}
            value={volumeMusica}
            onValueChange={handleVolumeChange}
            minimumTrackTintColor="#3B82F6"
            maximumTrackTintColor="#555"
            thumbTintColor="#3B82F6"
          />
        </View>

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
              <View style={styles.playIcon} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
