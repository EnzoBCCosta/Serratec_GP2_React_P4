import { Audio } from 'expo-av';

export type MusicId =
  | 'music1'
  | 'music2';

const musicMap: Record<MusicId, any> = {
  music1: require('../../assets/music/placeholder1.mp3'),
  music2: require('../../assets/music/placeholder2.mp3'),
};

let currentSound: Audio.Sound | null = null;
let currentVolume = 1;

/**
 * ok enzo so pra voce nao ficar confuso essa parte Toca uma música.
 * e se outra estiver funcionando quando outra toca, ela para automaticamente.
 */

export async function playMusic(musicId: MusicId) {
  try {
    // Para a música atual (se estiver tocando claro)
    if (currentSound) {
      await currentSound.stopAsync();
      await currentSound.unloadAsync();
      currentSound = null;
    }

    const { sound } = await Audio.Sound.createAsync(
      musicMap[musicId],
      {
        shouldPlay: true,
        isLooping: true,
      }
    );

    currentSound = sound;
  } catch (error) {
    console.log('Erro ao tocar música:', error);
  }
}

/**
 * funcao pra completamente parar qualquer música ja pronta pra usar em um botao
 */
export async function stopMusic() {
  try {
    if (currentSound) {
      await currentSound.stopAsync();
      await currentSound.unloadAsync();
      currentSound = null;
    }
  } catch (error) {
    console.log('Erro ao parar música:', error);
  }
}

// Volume: 0.0 (mudo) até 1.0 (máximo)
export async function setVolume(volume: number) {
  currentVolume = Math.max(0, Math.min(volume, 1));

  if (currentSound) {
    await currentSound.setVolumeAsync(currentVolume);
  }
}

// Pausa a música (sem resetar ela)
export async function pauseMusic() {
  if (currentSound) {
    await currentSound.pauseAsync();
  }
}

// despausa a música pausada
export async function resumeMusic() {
  if (currentSound) {
    await currentSound.playAsync();
  }
}