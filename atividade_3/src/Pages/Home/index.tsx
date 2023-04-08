import {View} from "react-native";
import { StyleHome } from "./styles";
import { ButtonP } from "../../Components/Button";

export const Home = () =>{
    return <>
    <View style={StyleHome.home}>
        <ButtonP caracter="*"/>
        <ButtonP caracter="+"/>
        <ButtonP caracter="/"/>
        <ButtonP caracter="9"/>
        <ButtonP caracter="8"/>
        <ButtonP caracter="7"/>
        <ButtonP caracter="5"/>
        <ButtonP caracter="5"/>
        <ButtonP caracter="4"/>
        <ButtonP caracter="3"/>
        <ButtonP caracter="2"/>
        <ButtonP caracter="1"/>
    </View>
    </>
}