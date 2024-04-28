import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Center from "./gerais";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { buscarLista, limparSelecaoProdutos } from "../localStorage/localStorage";

function ToggleComida(props) {
    const [ativo, setAtivo] = useState(null);
    const [lista, setLista] = useState();

    useEffect(() => {

        async function ativarInputs() {
            const lista = await buscarLista()
            // listaSalva.map((produto) => { if (props.nome == produto) { console.log("achei") } else { console.log("nao achei") } })
            console.log(lista)
        }

        ativarInputs()
    }, [props, buscarLista, ativo])


    async function toggleAtivo() {
        setAtivo(prevAtivo => !prevAtivo); // Atualiza o estado com base no estado anterior
    
        const novoAtivo = !ativo; // Obtém o novo valor de ativo depois de atualizar o estado
        let listaSalva = await buscarLista();
        console.log(listaSalva)
        
        // Verifica se listaSalva é null, undefined ou não é uma string
        if (!listaSalva || typeof listaSalva !== 'string') {
            listaSalva = '';
        }
    
        if (novoAtivo) {
            const lista = listaSalva.split(",").filter(produto => produto !== props.nome);
            lista.push(props.nome); // Adiciona o novo item à lista
            await AsyncStorage.setItem("produtos", lista.join(","));
        } else {
            const novaLista = listaSalva.split(",").filter(produto => produto !== props.nome);
            await AsyncStorage.setItem("produtos", novaLista.join(","));
        }
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
