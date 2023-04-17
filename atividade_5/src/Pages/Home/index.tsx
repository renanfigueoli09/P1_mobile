import { useState } from "react";
import { View, Text } from "react-native";
import { StyleHome } from "./styles";
import { ButtonP } from "../../Components/Button";
import { alfabeto } from "../../utils/alfabeto";
export const Home = () => {

    return <>
        <View style={StyleHome.home}>
            <View style={StyleHome.butons}>
                {alfabeto.map((item: any) => {
                    return <View style={StyleHome.button}>
                        <ButtonP caracter={item} />
                    </View>
                })}
            </View>
        </View>
    </>
}