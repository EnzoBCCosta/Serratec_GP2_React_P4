import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RankingProvider } from "./src/context/RankingContext";

import Home from "./src/pages/home/home";
import Categorias from "./src/pages/Categorias";
import Dificuldade from "./src/pages/Dificuldade/Index";
import Quiz from "./src/pages/Quiz";
import Resultado from "./src/pages/Resultado/index";
import Ranking from "./src/pages/Ranking";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RankingProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Categorias" component={Categorias} />
          <Stack.Screen name="Dificuldade" component={Dificuldade} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="Resultado" component={Resultado} />
          <Stack.Screen name="Ranking" component={Ranking} />
        </Stack.Navigator>
      </NavigationContainer>
    </RankingProvider>
  );
}