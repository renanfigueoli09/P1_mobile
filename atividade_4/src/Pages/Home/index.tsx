import { useState } from "react";
import { View, Text } from "react-native";
import { StyleHome } from "./styles";
import { ButtonP } from "../../Components/Button";

export const Home = () => {
    const [num25, setNum25] = useState("25");
    const [num2, setNum2] = useState("2");
    return <>
        <View style={StyleHome.home}>
            <Text>{num25}</Text>
            <ButtonP
                caracter="+"
                onPress={() => {
                    setNum25((parseInt(num25) + 25).toString())
                }}
            ></ButtonP>
            <ButtonP
                caracter="-"
                onPress={() => {
                    setNum25((parseInt(num25) - 25).toString())
                }}
            ></ButtonP>
        </View>
        <View style={StyleHome.home}>
            <Text>{num2}</Text>
            <ButtonP
                caracter="+"
                onPress={() => {
                    setNum2((parseInt(num2) * 2).toString())
                }}
            ></ButtonP>
            <ButtonP
                caracter="-"
                onPress={() => {
                    setNum2((parseInt(num2) / 2).toString())
                }}
            ></ButtonP>
        </View>
    </>
}