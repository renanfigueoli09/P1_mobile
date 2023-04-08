import React, { useState } from "react"
import { Button, View } from "react-native";
import { StlyeButton } from "./styles";
interface PropButton {
    caracter: string,
}
export const ButtonP: React.FC<PropButton> = ({ caracter }) => {
    const [caracterDigitado, setCaracterDigitado] = useState("");
    return <View style={StlyeButton.Button}>
        <Button title={caracter}
            onPress={() => {
                setCaracterDigitado
            }} 
            />
    </View>
};