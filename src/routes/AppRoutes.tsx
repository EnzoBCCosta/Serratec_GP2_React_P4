import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'

import Home from "../pages/home/home";
import Categorias from "../pages/Categorias";
import Dificuldade from "../pages/Dificuldade/index";
import Quiz from "../pages/Quiz";
import Resultado from "../pages/Resultado";
import Ranking from "../pages/Ranking";

import TabRoutes from "./TabRoutes";

export type RootStackParamList = {
  TabRoutes: {screen: string} | undefined;

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
    categoryName: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabRoutes" screenOptions={{ headerShown: false } }>

        <Stack.Screen name="TabRoutes" component={TabRoutes} />

        <Stack.Screen name="Categorias" component={Categorias} />
        <Stack.Screen name="Dificuldade" component={Dificuldade} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Resultado" component={Resultado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}