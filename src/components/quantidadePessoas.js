import { View } from "react-native"
import { BotaoMais, BotaoMenos } from "./botoes"
import { StyleSheet, TextInput, Text, Dimensions } from "react-native"
import { useEffect, useState } from "react";
import { Grid, Col } from 'react-native-easy-grid';
import { definirNumPessoa, buscarListaPessoas } from "../localStorage/listaPessoas";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function QuantidadePessoas(props) {

    let { nome } = props
    nome = String(nome)

    const [value, setValue] = useState(0);
    //Variavel para controlar o useEffect (caso contrário n libera para alterar o value)
    const [numeroDefinido, setNumeroDefinido] = useState(false)


    useEffect(() => {

        async function definirNumero() {
            // Define o número no input baseado na lista. 

            const listaPessoas = await buscarListaPessoas(nome)

            if (listaPessoas[0] > 0 && numeroDefinido == false) {
                setValue(Number(listaPessoas[0]))
                setNumeroDefinido(true)
            }
        }
        definirNumero()
    })

    const handleTextChange = async(text) => {
        // Remove qualquer caractere que não seja um número
        const numericValue = text.replace(/[^0-9]/g, '');
        setValue(numericValue);
        await definirNumPessoa(nome,text)
    };

    async function adicionar() {
        setValue(Number(value + 1))

        await definirNumPessoa(nome, value + 1)

    }

    async function diminuir() {
        if (value > 0) {
            setValue(Number(value - 1))
            await definirNumPessoa(nome, value - 1)
        }
    }

    return (
        <View style={styles.layout}>

            <View style={styles.esquerda}>
                <Text style={styles.text}> {nome}</Text>

            </View>
            <View style={styles.direita}>

                <Col style={styles.layout}>

                </Col>
                <BotaoMenos funcaoDiminuirInput={diminuir} />
                <TextInput
                    style={styles.textInput}
                    keyboardType="numeric"
                    onChangeText={handleTextChange}
                    value={String(value)}
                />
                <BotaoMais funcaoAumentarInput={adicionar} />

            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    layout: {
        display: "flex",
        flexDirection: "row",
        maxWidth: screenWidth - 30,
        justifyContent: "center"
    },
    esquerda: {
        minWidth: "40%",
        maxWidth: "40%"
    },
    direita: {
        minWidth: "60%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    textInput: {
        minHeight: 40,
        width: 80,
        height: 35,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: "#fff",
        textAlign: "center",
        fontSize: 16
    },
    text: {
        marginTop: 15,
        marginLeft: 16,
        fontSize: 18,
        color: "#fff",

    }

})