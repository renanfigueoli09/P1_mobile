import React,{useState} from "react"
import { Button } from "react-native";
interface PropButton{
    caracter: string,
}
export const ButtonP:React.FC<PropButton> = ({caracter}) =>{
    const [caracterDigitado,setCaracterDigitado] = useState("");
    return <>
    <Button title={caracter} onPress={()=>{

    }} />
    </>
};