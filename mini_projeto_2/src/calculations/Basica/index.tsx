import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../Botao';
import Display from '../Display';
import {
  decimalBinario,
  binarioDecimal,
  decimalOcta,
  octaDecimal,
  decimalHexadecimal,
  hexadecimalDecimal,
} from '../Aritmetica';
import { sin, cos, tan } from '../Trigonometria';

const Calculo = () => {
  const [value, setValue] = useState('');

  const botaoprecionado = (title: string) => {
    switch (title) {
      case 'Limpar':
        setValue('');
        break;
      case '=':
        try {
          const resultado = eval(value);
          setValue(resultado.toString());
        } catch (error) {
          setValue('erro');
        }
        break;
      case 'Bin':
        try {
          const decimalValue = eval(value);
          const binaryValue = decimalBinario(decimalValue);
          setValue(binaryValue.toString());
        } catch (error) {
          setValue('erro');
        }
        break;
      case 'Oct':
        try {
          const decimalValue = eval(value);
          const octalValue = decimalOcta(decimalValue);
          setValue(octalValue.toString());
        } catch (error) {
          setValue('erro');
        }
        break;
      case 'Hex':
        try {
          const decimalValue = eval(value);
          const hexadecimalValue = decimalHexadecimal(decimalValue);
          setValue(hexadecimalValue.toString());
        } catch (error) {
          setValue('erro');
        }
        break;
      case 'Sin':
        try {
          const angulo = eval(value);
          const resultado = sin(angulo);
          setValue(resultado.toString());
        } catch (error) {
          setValue('erro');
        }
        break;
      case 'Cos':
        try {
          const angulo = eval(value);
          const resultado = cos(angulo);
          setValue(resultado.toString());
        } catch (error) {
          setValue('erro');
        }
        break;
      case 'Tan':
        try {
          const angulo = eval(value);
          const resultado = tan(angulo);
          setValue(resultado.toString());
        } catch (error) {
          setValue('Error');
        }
        break;
      default:
        setValue(value + title);
    }
  };

  return (
    <View style={styles.caixa}>
      <Display value={value} />
      <View style={styles.linha}>
        <Button title="Bin" onPress={() => botaoprecionado('Bin')} />
        <Button title="Oct" onPress={() => botaoprecionado('Oct')} />
        <Button title="Hex" onPress={() => botaoprecionado('Hex')} />
        <Button title="Sin" onPress={() => botaoprecionado('Sin')} />
        <Button title="Cos" onPress={() => botaoprecionado('Cos')} />
        <Button title="Tan" onPress={() => botaoprecionado('Tan')} />
      </View>
      <View style={styles.linha}>
        <Button title="Limpar" onPress={() => botaoprecionado('Limpar')} />
        <Button title="(" onPress={() => botaoprecionado('(')} />
        <Button title=")" onPress={() => botaoprecionado(')')} />
        <Button title="/" onPress={() => botaoprecionado('/')} />
      </View>
      <View style={styles.linha}>
        <Button title="7" onPress={() => botaoprecionado('7')} />
        <Button title="8" onPress={() => botaoprecionado('8')} />
        <Button title="9" onPress={() => botaoprecionado('9')} />
        <Button title="X" onPress={() => botaoprecionado('*')} />
      </View>
      <View style={styles.linha}>
        <Button title="4" onPress={() => botaoprecionado('4')} />
        <Button title="5" onPress={() => botaoprecionado('5')} />
        <Button title="6" onPress={() => botaoprecionado('6')} />
        <Button title="-" onPress={() => botaoprecionado('-')} />
      </View>
      <View style={styles.linha}>
        <Button title="1" onPress={() => botaoprecionado('1')} />
        <Button title="2" onPress={() => botaoprecionado('2')} />
        <Button title="3" onPress={() => botaoprecionado('3')} />
        <Button title="+" onPress={() => botaoprecionado('+')} />
      </View>
      <View style={styles.linha}>
        <Button title="0" onPress={() => botaoprecionado('0')} />
        <Button title="." onPress={() => botaoprecionado('.')} />
        <Button title="=" onPress={() => botaoprecionado('=')} />
      </View>

    </View>
  );
  };
  
  const styles = StyleSheet.create({
    caixa: {
      flex: 1,
      backgroundColor: '#494949',
      paddingTop: 40,
      paddingHorizontal: 20,
    },
    linha: {
      flexDirection: 'row',
      marginBottom: 5,
    },
  });
  
  export default Calculo;