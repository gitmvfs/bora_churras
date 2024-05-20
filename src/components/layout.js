import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native"
import { Descricao } from "./textos"
import { useEffect, useState } from "react"

export function Header({ navigation, telaAtual }) {
    const [menuAberto, setMenuAberto] = useState(false)


    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <View>
            <View style={style.Header}>
                <TouchableOpacity onPress={toggleMenu}>
                    <Image source={require("../img/menu-bar.png")} style={style.Icon}></Image>
                </TouchableOpacity >
            </View>
            <View style={[style.sideBar, !!menuAberto == true ? style.menuAberto : style.menuFechado]}>

                <TouchableOpacity onPress={toggleMenu}>
                    <Text style={[style.TextIcon]}>X</Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => {navigation.navigate("HomeScreen") ;toggleMenu()}}>

                    <Text style={[style.Text, "Home" == telaAtual ? style.ativo : ""]}>Home</Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => navigation.navigate("ProdutoScreen")}>

                    <Text style={[style.Text, "Alimentos" == telaAtual ? style.ativo : ""]}>Alimentos</Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => navigation.navigate("ReceitaScreen")}>

                    <Text style={[style.Text, "Receitas" == telaAtual ? style.ativo : ""]}>Receitas</Text>
                </TouchableOpacity >

                <TouchableOpacity onPress={() => navigation.navigate("ConsumoScreen")}>

                    <Text style={[style.Text, "Consumo" == telaAtual ? style.ativo : ""]}>Consumo</Text>
                </TouchableOpacity >

                <TouchableOpacity onPress={() => navigation.navigate("MercadoScreen")}>

                    <Text style={[style.Text, "Mercado" == telaAtual ? style.ativo : ""]}>Mercado</Text>
                </TouchableOpacity >

                <TouchableOpacity onPress={() => navigation.navigate("CobrancaScreen")}>

                    <Text style={[style.Text, "Cobrança" == telaAtual ? style.ativo : ""]}>Cobrança</Text>
                </TouchableOpacity >

            </View>
        </View>

    )



}


const style = StyleSheet.create({
    Header: {
        position: "absolute",
        zIndex: 1,
        minWidth: "100%",
        minHeight: 40,
        backgroundColor: "#260101",
        borderBottomColor: "#FF5d00",
        borderBottomWidth: 5,
    },
    Icon: {
        width: 32,
        height: 32,
        marginLeft: "90%"
    },
    TextIcon: {
        fontSize: 32,
        marginLeft: "91%",
        marginBottom: 0,
        padding: 0,
        margin: 0,
        color: "#fff"
    },
    sideBar: {
        minHeight: "100%",
        zIndex: 2,
        minWidth: 100,
        backgroundColor: "#FF5d00"
    },
    menuAberto: {
        minheight: "50%",
    },
    menuFechado: {
        display: "none"
    },
    ativo: {
        fontSize: 32,
        color: "#fff",
        borderBottomColor: "#fff",
        borderBottomWidth: 2,
        width: "94%",
        marginLeft: "2%",
        paddingLeft: 18,
        paddingBottom: 5,
        marginBottom: 15
    },
    Text: {
        fontSize: 32,
        color: "black",
        width: "94%",
        marginLeft: "2%",
        paddingLeft: 18,
        paddingBottom: 5,
        marginBottom: 15
    }
})