import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'

import React from "react";
import Home from "../pages/home/home";
import Categorias from "../pages/Categorias";
import Dificuldade from "../pages/Dificuldade";
import Quiz from "../pages/Quiz";
import Resultado from "../pages/Resultado";
import Ranking from "../pages/Ranking";

export type RootStackParamList = {
  Home: undefined;
  Categorias: undefined;

  Dificuldade: {
    category: number;
    categoryName: string,
  };

  Quiz: {
    qtdQuestions: number;
    category: number;
    categoryName: string;
    difficulty: string;
  };

  Resultado: {
    pontos: number;
    total: number;
    category: number;
  };

  Ranking: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categorias" component={Categorias} />
        <Stack.Screen name="Dificuldade" component={Dificuldade} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Resultado" component={Resultado} />
        <Stack.Screen name="Ranking" component={Ranking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}