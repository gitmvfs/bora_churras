import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Center from "./gerais";
import { buscarLista } from "../localStorage/listaProdutos";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export function BotaoTelaAnterior(props) {

    const { nome, linkTelaAnterior, navigation } = props
    return (
        <Center>
            <TouchableOpacity
                onPress={async () => { navigation.navigate(linkTelaAnterior)}}
                style={[
                    styles.botaoLayout,
                    styles.BotaoTelaAnterior,
                ]}
            >
                <Text style={styles.Text}>{nome}</Text>
            </TouchableOpacity>
        </Center>
    );

}

export function BotaoProximaTela(props) {

    const { nome, linkProximaTela, navigation } = props

    return (
        <Center>
            <TouchableOpacity
                onPress={async () => { navigation.navigate(linkProximaTela) }}
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

export function BotaoMais(props) {
    const { funcaoAumentarInput } = props

    return (


        <TouchableOpacity
            onPress={() => funcaoAumentarInput()}
            style={[
                styles.botaoMaisOuMenosLayout,
                styles.botaoMais
            ]}>
            <Center>
                <Text style={styles.botaoMaisOuMenosText}>
                    +
                </Text>
            </Center>

        </TouchableOpacity>
    )
}

export function BotaoMenos(props) {
    const { funcaoDiminuirInput } = props

    return (


        <TouchableOpacity
            onPress={() => funcaoDiminuirInput()}
            style={[
                styles.botaoMaisOuMenosLayout,
                styles.botaoMenos
            ]}>
            <Center>
                <Text style={styles.botaoMaisOuMenosText}>
                    -
                </Text>
            </Center>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    botaoLayout: { // Layout padrão dos botões
        minWidth: 135,
        maxWidth: 135,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },

    BotaoTelaAnterior: { // Botão para tela anterior
        backgroundColor: "#DF0707"
    },

    botaoProximaTela: { // Botão para proxima tela
        backgroundColor: "#9EC928"

    },
    botaoConsumo: { // Botão para tela consumo
        backgroundColor: "#587DFF"
    },
    Text: { // Texto padrão dos botões
        fontSize: 18,
        textAlign: "center",
        color: "#fff",
        fontWeight: "400"
    },
    botaoMaisOuMenosLayout: { // layout para os botões de mais ou menos
        minWidth: 40,
        minHeight: 40,
        width: 40,
        height: 35,
        margin: 15,
        borderRadius: 5
    },
    botaoMaisOuMenosText: { // texto para os botões de mais ou menos
        color: "#fff",
        textAlign: "center",
        fontSize: 30,
    },
    botaoMais: { // fundo botão mais
        backgroundColor: "#93A957",
    },
    botaoMenos: { // fundo botão menos
        backgroundColor: "#DF0707"
    }
});

