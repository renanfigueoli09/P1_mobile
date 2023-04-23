import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import listaNumeros from '../../utils/listaNumeros';
import { useFonts } from '@use-expo/font';
const Calculadora = () => {
    const [numero, setNumero] = useState("");
    const [ultimoNumero, setUltimoNuemro] = useState("");
    const OnclikInput = (operador: string) => {
        if (operador === "=") {
            setUltimoNuemro(numero + " = ")
            calcular()
            return
        }
        if (operador === "*" || operador === "/" || operador === "+" || operador === "-") {
            setNumero(numero + " " + operador + " ");
            return
        }
        if (operador === "DEL") {
            setNumero(numero.substring(0, (numero.length - 1)))
            return
        }
        if (operador === ".") {
            setNumero(numero + operador);
            return
        }
        if (operador === "+/-") {

            return
        }
        if (operador === "AC") {
            setUltimoNuemro("");
            setNumero("");
            return
        }
        setNumero(numero + operador);
    }
    const calcular = () => {
        const splitNumbers = numero.split(" ")
        const operator = splitNumbers[1]
        if (operator === "*") {
            setNumero((parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString());
            return
        }
        if (operator === "/") {
            setNumero((parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString());
            return
        }
        if (operator === "+") {

            setNumero((parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString());
            return
        }
        if (operator === "-") {
            setNumero((parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString());
            return
        }

    }


    return <>
        <View style={styles.results}>
            <Text style={styles.historyText}>{ultimoNumero}</Text>
            <Text style={styles.resultText}>{numero}</Text>
        </View>
        <View style={styles.buttons}>
            {listaNumeros.map((item: string, index) => {
                if (item == "AC") {
                    return <TouchableOpacity style={styles.button} onPress={() => OnclikInput(item)} key={index} >
                        <Text style={[styles.textButton, { color: "#ffbf60" }]}>{item}</Text>
                    </TouchableOpacity>
                } else if (item == "=") {
                    return <TouchableOpacity style={[styles.button, { backgroundColor: '#ffbf60', borderRadius: 50, }]} onPress={() => OnclikInput(item)} key={index} >
                        <Text style={[styles.textButton, { backgroundColor: '#ffbf60', borderRadius: 50, }]}>{item}</Text>
                    </TouchableOpacity>
                } else {
                    return <TouchableOpacity style={styles.button} onPress={() => OnclikInput(item)} key={index} >
                        <Text style={styles.textButton}>{item}</Text>
                    </TouchableOpacity>
                }
            })}
        </View>
    </>


}
export default Calculadora;