import React, { useState } from "react"
import { Button, View, Text } from "react-native";
import { LetraEnum } from "./enum"
interface PropButton {
    caracter: string,
    onPress?: () => void
}
export const ButtonP: React.FC<PropButton> = ({ caracter, onPress }) => {
    const [letra, setLetra] = useState("");
    let Letra: any = LetraEnum
    return <>
        <Text>{letra}</Text>
        <Button title={caracter}
            onPress={() => {
                if (letra) {
                    setLetra("");
                } else {
                    setLetra(Letra[caracter]);
                }
            }}
        />
    </>
};