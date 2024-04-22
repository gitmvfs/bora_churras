import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Center from "./gerais";

function ToggleComida(props) {
    const [ativo, setAtivo] = useState(true);

    const toggleAtivo = () => {
        setAtivo(!ativo);
        console.log(ativo)
    };

    return (
        <Center>
            <TouchableOpacity
                style={[
                    styles.botaoLayout,
                    !!ativo == true ? styles.ativo : null // Aplica o estilo "ativo" se ativo for verdadeiro
                ]}
                onPress={toggleAtivo}
            >
                <Text style={styles.text}>{props.nome}</Text>
            </TouchableOpacity>
        </Center>
    );
}

const styles = StyleSheet.create({

    botaoLayout: {
        minWidth: 135,
        maxWidth: 135,
        height: 44,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5,
        backgroundColor: "#FF5D00",
    },


    text: {
        fontSize: 18,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        color: "#FFFFFF",

    },
    ativo: {
        backgroundColor: "rgba(245, 39, 145, 0)",
    },
});

export default ToggleComida;
