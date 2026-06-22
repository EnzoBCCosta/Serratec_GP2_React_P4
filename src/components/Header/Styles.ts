import { Platform, StyleSheet, StatusBar } from 'react-native';


export const styles = StyleSheet.create({

    safeArea: {
        backgroundColor: '#C41E3A',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    },
    header: {
        backgroundColor: '#C41E3A',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 140,
        height: 60,
        alignItems: 'center',
    }
});
