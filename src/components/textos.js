import { Text, StyleSheet, View, Dimensions } from "react-native";

import Center from "./gerais"
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function Titulo(props) {
    return (

        <Center>
            <View
                style={[
                    styles.botaoLayout,
                ]}
            >
                <Text style={styles.text}>{props.nome}</Text>
            </View>
        </Center>
    )
}

export function Descricao(props) {

    return (
        <Center>
            <View style={""}>
                <Text style={styles.descricao}>
                    {props.nome}
                </Text>
            </View>

        </Center>
    )
}

const styles = StyleSheet.create({

    botaoLayout: {
        minWidth: screenWidth - 30,
        maxWidth: screenWidth - 30,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderRadius: 5,
        backgroundColor: "#FF5D00",
    },


    text: {
        fontSize: 20,
        backgroundColor: "#FF5D00",
        textAlign: "center",
        color: "#FFFFFF",
        borderRadius: 5
    },

    descricao: {
        fontSize: 14,
        color: "#FFFFFF",
        minHeight: 30,
        margin: 15,
        textAlign: "center",
        lineHeight: 20
    }
})

