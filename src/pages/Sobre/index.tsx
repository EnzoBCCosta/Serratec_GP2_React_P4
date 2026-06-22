import { View, Text, Image, ScrollView, Animated, TouchableOpacity, Linking } from "react-native";
import { styles } from "./Styles";
import React, { useEffect, useRef } from "react";


export default function Sobre() {
  
  const posicao = useRef(new Animated.Value(1000)).current;
  
  useEffect(() => {
  Animated.timing(posicao, {
    toValue: 0,
    duration: 10000,
    useNativeDriver: true,
  }).start();
}, []);
  return (
  
  <ScrollView contentContainerStyle={styles.container}>
    <Animated.View
    
    style={{
      width: "100%",
      alignItems: "center",
      transform: [{ translateY: posicao }],
    }}>
    
    <Image
        source={require("../../../assets/LOGO-QUIZ.png")}
        style={styles.logo}
      />
      

      <Text style={styles.titulo}>
        🎮 Sobre o Aplicativo
      </Text>
      
      <Text style={styles.descricao}>
        O Quizzo é um aplicativo de perguntas e respostas desenvolvido para proporcionar uma experiência divertida e interativa.
        Escolha uma categoria, teste seus conhecimentos, acompanhe sua pontuação e desafie seus amigos através do ranking de jogadores.
      </Text>

      <Text style={styles.secaoProgramacao}>
       💻 Programação :
      </Text>

      <Text style={styles.texto}>
        🧠 Quiz - Carlos Eduardo   {'\n'}
        ⚙️ Configurações - Enzo Costa {'\n'}
        🏠 Home Quiz - Felipe Damásio {'\n'}
        🏆 Ranking - Gabriel Ecard    {'\n'}
        📚 Categoria - Vitor Ribeiro  {'\n'}
        📊 Resultado - Kenny Pavelka  {'\n'}
        🎬 Créditos - Vinicius Lamas  {'\n'}
        {/* {'\n'} */}
        🌐 API service    Carlos Eduardo{'\n'}

        
      </Text>

      <Text style={styles.secaoDesign}>
       🎨 Design :
      </Text>

      <Text style={styles.texto}>
        Visual Key - Enzo Costa {'\n'}
        UI - Enzo Costa
      </Text>

      <Text style={styles.secaoMusica}>
       🎵 Músicas :
      </Text>

      <Text style={styles.texto}>
        Música tema - Nome do responsável
      </Text>

      <Text style={styles.secaoGit}>
       🔗 Links :
      </Text>

      <Text style={styles.texto}>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/EnzoBCCosta/Serratec_GP2_React_P4")}>
            <Text style={styles.link}>
              Projeto 
            </Text>
        </TouchableOpacity> {'\n'}
        <TouchableOpacity
          onPress={() => Linking.openURL("")}>
            <Text style={styles.link}>
              Carlos Eduardo
            </Text>
        </TouchableOpacity> {'\n'}
        <TouchableOpacity
          onPress={() => Linking.openURL("")}>
            <Text style={styles.link}>
              Enzo Costa
            </Text>
        </TouchableOpacity> {'\n'}
        <TouchableOpacity
          onPress={() => Linking.openURL("")}>
            <Text style={styles.link}>
              Felipe Damasio
            </Text>
        </TouchableOpacity> {'\n'}
        <TouchableOpacity
          onPress={() => Linking.openURL("")}>
            <Text style={styles.link}>
              Gabriel Ecard
            </Text>
        </TouchableOpacity> {'\n'}
        <TouchableOpacity
          onPress={() => Linking.openURL("")}>
            <Text style={styles.link}>
              Kenny Pavelca 
            </Text>
        </TouchableOpacity> {'\n'}
        <TouchableOpacity
          onPress={() => Linking.openURL("")}>
            <Text style={styles.link}>
              Vitor Ribeiro 
            </Text>
        </TouchableOpacity> {'\n'}
        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/vLamass")}>
            <Text style={styles.link}>
               Vinicius Lamas
            </Text>
        </TouchableOpacity> {'\n'}

        <Text style={styles.texto}>
          🚀 Desenvolvido pela equipe Quizzo{'\n'}
          Quizzo v1.0.0

        </Text>

      </Text>
    </Animated.View>
</ScrollView>



    );
}



  