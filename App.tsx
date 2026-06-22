import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RankingProvider } from "./src/context/RankingContext";

import Categorias from "./src/pages/Categorias";
import Dificuldade from "./src/pages/Dificuldade/Index";
import Quiz from "./src/pages/Quiz";
import Resultado from "./src/pages/Resultado/index";
import Sobre from './src/pages/Sobre';
import Musicas from "./src/pages/Musicas";
import TabRoutes from "./src/routes/TabRoutes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RankingProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="TabRoutes"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="TabRoutes" component={TabRoutes} />

          <Stack.Screen name="Categorias" component={Categorias} />
          <Stack.Screen name="Dificuldade" component={Dificuldade} />
          <Stack.Screen name="Resultado" component={Resultado} />
          <Stack.Screen name="Quiz" component={Quiz} />

        </Stack.Navigator>
      </NavigationContainer>
    </RankingProvider>
  )
}