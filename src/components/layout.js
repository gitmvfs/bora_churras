import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native"
import { Descricao } from "./textos"
import { useState } from "react"

export function Header() {
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
                    <Text style={style.TextIcon}>X</Text>
                    <Text>Home</Text>
                    <Text>Alimentos</Text>
                    <Text>Receitas</Text>
                    <Text>Consumo</Text>
                    <Text>Mercado</Text>
                    <Text>Cobrança</Text>
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
        fontSize: 28,
        marginLeft: "93%",
        marginBottom:20,
        padding: 0,
        margin: 0
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
    }
})