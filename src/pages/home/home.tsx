import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './homestyles';
import Rodape from '../../components/Rodape/Rodape';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/quiz.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.botaoPlay}>
        <Text style={styles.iconePlay}>▶</Text>
      </TouchableOpacity>

      <Rodape />
    </View>
  );
}