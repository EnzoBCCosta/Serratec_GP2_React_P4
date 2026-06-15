import React from 'react';
import { styles } from './Styles'
import { View, Text } from 'react-native';
import { Button } from '../../components/Button/index'

export default function Quiz() {

    

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
                aoooooo
            </Text>

            <Button title='teste' cor='#f20e0e' raio={25}/>

        </View>
    );
}