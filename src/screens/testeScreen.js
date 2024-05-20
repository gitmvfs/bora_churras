import {Header} from "../components/layout";
import { View, StyleSheet, Dimensions, StatusBar, Image } from "react-native";

export function TesteScreen({ navigation }){
    return(
        <View style={style.testeScreen}>
            <Header telaAtual={"Home"} navigation={navigation} />
        </View>
    )
}

const style = StyleSheet.create({

    testeScreen:{
        minWidth: "100%",
        minHeight: "100%"
    }

})