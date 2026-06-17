import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./Styles";
import React from "react";

export default function Sobre() {
  return (
  
  <View style={styles.container}>
    
    <Image
        source={require("../../../assets/LOGO-QUIZ.png")}
        style={styles.logo}
      />


      <Text style={styles.titulo}>
        Sobre o Aplicativo
      </Text>
      
      <Text style={styles.descricao}>
        O Quizzo é um aplicativo de perguntas e respostas desenvolvido para proporcionar uma experiência divertida e interativa.
        Escolha uma categoria, teste seus conhecimentos, acompanhe sua pontuação e desafie seus amigos através do ranking de jogadores.
      </Text>

      <Text style={styles.secaoProgramacao}>
        Programação :
      </Text>

      <Text style={styles.texto}>
        Home Quiz - Felipe Damásio {'\n'} 
        Ranking - Carlos Eduardo   {'\n'}
        Categoria - Gabriel Ecard  {'\n'}
        Resultado - Vitor Ribeiro  {'\n'}
        Créditos - Vinicius Lamas
      </Text>

      <Text style={styles.secaoDesign}>
        Design :
      </Text>

      <Text style={styles.texto}>
        Visual Key - Enzo Costa {'\n'}
        UI - Enzo Costa
      </Text>

      <Text style={styles.secaoMusica}>
        Músicas :
      </Text>

      <Text style={styles.texto}>
        Música tema - Nome do responsável
      </Text>


</View>



    );
}