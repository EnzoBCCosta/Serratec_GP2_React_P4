import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, Text } from 'react-native';

import Home from '../pages/home/home';
import Ranking from '../pages/Ranking';
import Configuracoes from '../pages/Musicas';
import Sobre from '../pages/Sobre';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {

    return (

        <Tab.Navigator screenOptions={({ route }) => {
                
                let corDeFundo = '#1E1E1E';
                
                if (route.name === 'Configuração') corDeFundo = '#C41E3A';
                if (route.name === 'Ranking') corDeFundo = '#F3BA2B';
                if (route.name === '⚙') corDeFundo = '#64B9F9';

                return {
                    headerShown: false,
                    tabBarStyle: {
                        position: 'absolute', 
                        height: 56, 
                        bottom: 0, 
                        left: 0, 
                        right: 0,
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        borderTopWidth: 0,
                        backgroundColor: corDeFundo,
                    },
                };
            }}
        >

            <Tab.Screen name="Configuração" component={Configuracoes}
            options={{
            }} />

            <Tab.Screen name="Ranking" component={Ranking}
            options={{
            }} />

            <Tab.Screen name="⚙" component={Sobre}
            options={{}} />

        </Tab.Navigator>
    );
}