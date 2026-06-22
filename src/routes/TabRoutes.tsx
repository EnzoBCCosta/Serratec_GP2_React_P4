import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, Text } from 'react-native';

import Ranking from '../pages/Ranking';
import Configuracoes from '../pages/Musicas';
import Sobre from '../pages/Sobre';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (

        <Tab.Navigator screenOptions={{ headerShown: false, 
        tabBarStyle: {position: 'absolute', height:56, bottom: 0, left: 0, right: 0,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}}>

            <Tab.Screen name="Configuração" component={Configuracoes}
            options={{ tabBarLabel: 'Configuração' , 
            tabBarStyle: {backgroundColor: '#C41E3A'}}} />

            <Tab.Screen name="Ranking" component={Ranking}
            options={{ tabBarLabel: 'Ranking' , 
            tabBarStyle: {backgroundColor: '#F3BA2B'}}} />

            <Tab.Screen name="Sobre" component={Sobre}
            options={{ tabBarLabel: 'Sobre', 
            tabBarStyle: {backgroundColor: '#64B9F9'}}} />

        </Tab.Navigator>
    );
}

    {/* //     <View style={styles.container}>
    //   <TouchableOpacity style={[styles.botao, styles.botaoConfiguracoes]}
    //     onPress={() => navigation.navigate('Musicas')}
    //   >
    //     <Text style={styles.icone}>⚙</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity style={[styles.botao, styles.botaoRanking]}
    //     onPress={() => navigation.navigate('Ranking')}
    //   >
    //     <Text style={styles.texto}>Ranking</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity style={[styles.botao, styles.botaoSobre]}
    //     onPress={() => navigation.navigate('Sobre')}
    //   >
    //     <Text style={styles.texto}>Sobre</Text>
    //   </TouchableOpacity>
    // </View> */}