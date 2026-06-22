import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import Home from '../pages/home/home';
import Ranking from '../pages/Ranking';
import Configuracoes from '../pages/Musicas';
import Sobre from '../pages/Sobre';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {

    return (

        <Tab.Navigator screenOptions={({ route }) => {
                
                let corDeFundo = '#64B9F9';
                
                if (route.name === 'Volume') corDeFundo = '#C41E3A';
                if (route.name === 'Ranking') corDeFundo = '#F3BA2B';
                if (route.name === 'Home') corDeFundo = '#1a0d2e';

                return {
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute', 
                        height: 60, 
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

            <Tab.Screen name='Home' component={Home}
            options={{ tabBarIcon: () => (<Image source={require('../../assets/home.png')}
            style={{width: 30, height:30, resizeMode: 'contain', tintColor: 'white'}} />)
            }} />

            <Tab.Screen name="Volume" component={Configuracoes}
            options={{ 
                tabBarIcon: () => (<Image source={require('../../assets/volume.png')}
            style={{width: 30, height:30, resizeMode: 'contain', tintColor: 'white'}} />)
            }} />

            <Tab.Screen name="Ranking" component={Ranking}
            options={{ tabBarIcon: () => (<Image source={require('../../assets/ranking.png')}
            style={{width: 30, height:30, resizeMode: 'contain', tintColor: 'white'}} />)
            }} />

            <Tab.Screen name="Musica" component={Sobre}
            options={{ tabBarIcon: () => (<Image source={require('../../assets/sobre.png')}
            style={{width: 30, height:30, resizeMode: 'contain', tintColor: 'white'}} />)
            }}/>

        </Tab.Navigator>
    );
}