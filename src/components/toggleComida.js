import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Center from "./gerais";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { adicionarProduto, buscarLista, limparSelecaoProdutos, removerProduto } from "../localStorage/listaProdutos";

function ToggleComida(props) {
    const [ativo, setAtivo] = useState(null);

    useEffect(() => {

        async function ativarInputs() {
            const lista = await buscarLista()

            lista.map((produto) => { produto == props.nome ? setAtivo(true) : "" })
        }

        ativarInputs()
    }, [props, buscarLista, ativo])


    async function toggleAtivo() {

        const nome = props.nome

        if (!ativo) {
            await adicionarProduto(nome)
            setAtivo(true)
        } else if (ativo) {
            await removerProduto(nome)
            setAtivo(null)
        }

        let listaSalva = await buscarLista();
        console.log(listaSalva)
    }

    return (
        <Center>
            <TouchableOpacity
                style={[
                    styles.botaoLayout,
                    !!ativo == true ? styles.ativo : null // Aplica o estilo "ativo" se ativo for verdadeiro
                ]}
                onPress={() => toggleAtivo()}
            >
                <Text style={[
                    styles.text,
                    !!ativo == true ? styles.ativo : null // Aplica o estilo "ativo" se ativo for verdadeiro
                ]}>{props.nome}</Text>
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
        borderColor: "#FF5D00",
        borderRadius: 5,
        marginBottom: 25,
        backgroundColor: "rgba(245, 39, 145, 0)",

    },

    text: {
        fontSize: 18,
        color: "#FF5D00",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
    },
    ativo: {
        color: "#FF5D00",
        backgroundColor: "#fff",
    },
});

export default ToggleComida;
