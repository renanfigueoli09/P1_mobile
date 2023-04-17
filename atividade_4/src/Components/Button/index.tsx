import React, { useState } from "react"
import { Button, View } from "react-native";
interface PropButton {
    caracter: string,
    onPress?: () => void
}
export const ButtonP: React.FC<PropButton> = ({ caracter, onPress }) => {

    return <Button title={caracter}
        onPress={onPress}
    />

};