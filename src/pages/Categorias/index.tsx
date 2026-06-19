import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './Styles';
import { Button } from '../../components/Button/index';
import Header from '../../components/Header';

interface Categoria {
  id: number;
  name: string;
}

export default function Categorias() {
  const navigation = useNavigation<any>();
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    async function carregarCategorias() {
      try {
        const response = await fetch(
          'https://tryvia.ptr.red/api_category.php'
        );
        const data = await response.json();
        setCategorias(data.trivia_categories);
      } catch (error) {
        console.log(error);
      }
    }

    carregarCategorias();
  }, []);

  function handleSelecionarCategoria(id: number) {
    navigation.navigate('Dificuldade', {
      categoryId: id,
    });
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.background}>
        <View style={styles.topo}>
          <View style={styles.titulo}>
            <Text style={styles.texto}>Escolha um tema:</Text>
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

        <FlatList
          data={categorias}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            alignItems: 'center',
            paddingTop: 20,
            paddingBottom: 20,
            gap: 12,
          }}
          renderItem={({ item }) => (
            <Button
              title={item.name}
              widht={320}
              height={50}
              corButton="#f3ba2b"
              onPress={() => handleSelecionarCategoria(item.id)}
            />
          )}
        />
      </View>
    </View>
  );
}