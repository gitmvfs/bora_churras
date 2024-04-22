import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Center from "./gerais";

export function BotaoTelaAnterior(props) {

    return (
        <Center>
            <TouchableOpacity
                style={[
                    styles.botaoLayout,
                    styles.BotaoTelaAnterior,
                ]}
            >
                <Text style={styles.Text}>{props.nome}</Text>
            </TouchableOpacity>
        </Center>
    );

}

export function BotaoProximaTela(props) {

    return (
        <Center>
            <TouchableOpacity
                style={[
                    styles.botaoProximaTela,
                    styles.botaoLayout,
                ]}
            >
                <Text style={styles.Text}>{props.nome}</Text>
            </TouchableOpacity>
        </Center>
    );
}

export function BotaoConsumo() {

    return (
        <Center>
            <TouchableOpacity
                style={[
                    styles.botaoLayout,
                    styles.botaoConsumo,
                ]}
            >
                <Text style={styles.Text}>Consumo</Text>
            </TouchableOpacity>
        </Center>
    );

}

const styles = StyleSheet.create({

    botaoLayout: {
        minWidth: 135,
        maxWidth: 135,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },

    BotaoTelaAnterior: {
        backgroundColor: "#DF0707"
    },

    botaoProximaTela: {
        backgroundColor: "#9EC928"

    },
    botaoConsumo: {
        backgroundColor: "#587DFF"
    },
    Text: {
        fontSize: 18,
        textAlign: "center",
        color: "#fff",
        fontWeight: "400"
    }

});

