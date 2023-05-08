import React from 'react';
import { useFonts } from '@use-expo/font';
import { View } from 'react-native';
import { styles } from './styles'
import Calculadora from '../../Components/Calculadora';
const Home = () => {

    let [fontsLoaded] = useFonts({
        'Roboto-Thin': require('../../assets/fonts/Roboto-Thin.ttf'),
        'Roboto-Light': require('../../assets/fonts/Roboto-Light.ttf'),
    });
    if (!fontsLoaded) {
        return <>
        </>
    } return (
        <View style={styles.container}>
            <Calculadora />
        </View>
    );
}
export default Home;
