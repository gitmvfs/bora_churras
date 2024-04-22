import { Text, StyleSheet, View } from "react-native";

import Center from "./gerais"

function Titulo(props) {
    return (

        <Center>
            <Center>
                <View
                    style={[
                        styles.botaoLayout,
                    ]}
                >
                    <Text style={styles.text}>{props.nome}</Text>
                </View>
            </Center>
        </Center>
    )
}

const styles = StyleSheet.create({

    botaoLayout: {
        minWidth: 284,
        maxWidth: 284,
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