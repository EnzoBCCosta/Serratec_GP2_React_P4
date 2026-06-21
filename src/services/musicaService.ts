import { Audio } from 'expo-av';

export type MusicId = 'music1' | 'music2';

const musicMap: Record<MusicId, any> = {
  music1: require('../../assets/music/placeholder1.mp3'),
  music2: require('../../assets/music/placeholder2.mp3'),
};

class MusicService {
  private sound: Audio.Sound | null = null;
  private volume = 1;
  private playing = false;
  private loading = false;
  private currentMusic: MusicId | null = null;

  async play(musicId: MusicId) {
    // ajuda a evitar multiplas musicas ao mesmo tempo
    if (this.loading) return;
    this.loading = true;

    try {
      //se já estiver tocando a mesma música, não roda e ignora o press
      if (this.sound && this.currentMusic === musicId) {
        if (!this.playing) {
          await this.sound.playAsync();
          this.playing = true;
        }
        return;
      }

      // limpa qualquer som anterior
      if (this.sound) {
        await this.sound.stopAsync();
        await this.sound.unloadAsync();
        this.sound = null;
      }

      const { sound } = await Audio.Sound.createAsync(
        musicMap[musicId],
        {
          shouldPlay: true,
          isLooping: true,
          volume: this.volume,
        }
      );

      this.sound = sound;
      this.currentMusic = musicId;
      this.playing = true;
    } catch (error) {
      console.log('Erro ao tocar música:', error);
    } finally {
      this.loading = false;
    }
  }

  async pause() {
    if (!this.sound || !this.playing) return;

    await this.sound.pauseAsync();
    this.playing = false;
  }

  async resume() {
    if (!this.sound || this.playing) return;

    await this.sound.playAsync();
    this.playing = true;
  }

  async stop() {
    if (!this.sound) return;

    await this.sound.stopAsync();
    await this.sound.unloadAsync();
    this.sound = null;
    this.playing = false;
    this.currentMusic = null;
  }
//o slide claro 
  async setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(volume, 1));

    if (this.sound) {
      await this.sound.setVolumeAsync(this.volume);
    }
  }

  isPlaying() {
    return this.playing;
  }

  getCurrentMusic() {
    return this.currentMusic;
  }
}

/**
 * 
 * isso existe pra garantir que so UM ÚNICO MusicService toque caso contrario a mesma music vai tocar 5x
 */
const musicService = new MusicService();
export default musicService;