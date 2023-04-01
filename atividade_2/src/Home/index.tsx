import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, TextInput, Text, View, Button } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import AleatoriaNumeros from '../utils/AleatorizaNumero';
const Home = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [mostrarNumero, setMostrarNumero] = useState(false);
    const [numeroEscolhido, setNumeroEscolhido] = useState(Array);

    return (
        <View style={styles.view}>
            <Text>Escolha dois Números</Text>
            <SafeAreaView >
                <TextInput
                    style={styles.input}
                    onChangeText={setNumber1}
                    value={number1}
                    placeholder="número inicial"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setNumber2}
                    value={number2}
                    placeholder="número final"
                    keyboardType="numeric"

                />
                <Button title="Escolher Número" onPress={() => {
                    if (number1 && number2) {
                        setNumeroEscolhido([
                            AleatoriaNumeros(parseInt(number1), parseInt(number2)),
                            AleatoriaNumeros(parseInt(number1), parseInt(number2)),
                            AleatoriaNumeros(parseInt(number1), parseInt(number2)),
                            AleatoriaNumeros(parseInt(number1), parseInt(number2)),
                            AleatoriaNumeros(parseInt(number1), parseInt(number2))
                        ]);
                        setMostrarNumero(true);
                    } else {
                        setMostrarNumero(false);
                    }
                }} />
            </SafeAreaView>
            {mostrarNumero && (<View style={styles.view2}>
                <Text>5 Números Aleatórios entre eles:</Text>
                <Text>
                    {numeroEscolhido.map((item: any, index: any) => {
                        if (numeroEscolhido.length == (index + 1))return item + ".";
                        else return item + ", "
                    })}
                </Text>
                <Button title="Limpar"
                    onPress={() => {
                        setNumber1('');
                        setNumber2('');
                        setNumeroEscolhido([])
                        setMostrarNumero(false);
                    }}
                />
            </View>)}
        </View>
    );
}
export default Home