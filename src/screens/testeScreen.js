import {Header} from "../components/layout";
import { View, StyleSheet, Dimensions, StatusBar, Image } from "react-native";

export function TesteScreen(){
    return(
        <View style={style.testeScreen}>
            <Header/>
        </View>
    )
}

const style = StyleSheet.create({

    testeScreen:{
        minWidth: "100%",
        minHeight: "100%"
    }

})