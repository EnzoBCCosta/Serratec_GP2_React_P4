import React from 'react';
import { styles } from './Styles';
import { View, Image, SafeAreaView} from 'react-native';

export default function Header() {

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Image 
                    source={require('../../../assets/LOGO-QUIZ.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
        </SafeAreaView>
    );
}