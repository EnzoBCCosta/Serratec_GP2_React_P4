import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './homestyles';
import Rodape from '../../components/Rodape/Rodape';
import { Router } from 'react-router';
import TabRoutes from '../../routes/TabRoutes';

export default function Home() {
  const navigation = useNavigation<any>();

  function handlePlay() {
    navigation.navigate('Categorias');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/quiz.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.botaoPlay} onPress={handlePlay}>
        <Text style={styles.iconePlay}>▶</Text>
      </TouchableOpacity>
    </View>
  );
}