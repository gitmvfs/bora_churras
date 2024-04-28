import { Text, StyleSheet, View } from "react-native";

import Center from "./gerais"

function Titulo(props) {
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

const styles = StyleSheet.create({

    botaoLayout: {
        minWidth: 363,
        maxWidth: 363,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderRadius: 5,
        backgroundColor: "#FF5D00",
    },


    text: {
        fontSize: 22,
        backgroundColor: "#FF5D00",
        textAlign: "center",
        color: "#FFFFFF",
        borderRadius: 5
    },
})

export default Titulo