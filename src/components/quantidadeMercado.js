import { View } from "react-native"
import { BotaoMais, BotaoMaisPequeno, BotaoMenos, BotaoMenosPequeno } from "./botoes"
import { StyleSheet, TextInput, Text, Dimensions } from "react-native"
import { useEffect, useState } from "react";
import { Grid, Col } from 'react-native-easy-grid';
import { definirNumPessoa, buscarListaPessoas } from "../localStorage/listaPessoas";
import Center from "./gerais";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function QuantidadeMercado(props) {

    let { nome } = props
    nome = String(nome)

    const [value, setValue] = useState(0);


    const handleTextChange = async (text) => {
        // Remove qualquer caractere que não seja um número
        const numericValue = text.replace(/[^0-9]/g, '');
        setValue(numericValue);
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

            <Col>
                <Text style={styles.text}> {nome}</Text>

            </Col>

            <Col>
                <View style={styles.organizarBotoes}>

                    <BotaoMenosPequeno funcaoDiminuirInput={diminuir} />
                    <TextInput
                        style={[styles.textInput, styles.pequeno]}
                        keyboardType="numeric"
                        onChangeText={handleTextChange}
                        value={String(value)}
                    />
                    <BotaoMaisPequeno funcaoAumentarInput={adicionar} />
                </View>

            </Col>

                <TextInput
                    style={styles.textInput}
                    keyboardType="numeric"
                    onChangeText={handleTextChange}
                />

        </View >

    )
}


const styles = StyleSheet.create({

    layout: {
        display: "flex",
        flexDirection: "row",
        width: 361,
        maxWidth: 361 ,
        justifyContent: "space-evenly",
        marginTop: 15
    },
    textInput: {
        minHeight: 40,
        width: 97,
        height: 35,
        borderRadius: 5,
        backgroundColor: "#fff",
        textAlign: "center",
        fontSize: 16,
    },
    pequeno: {
        width: 40,
    },
    text: {
        fontSize: 18,
        color: "#fff",
    },
    organizarBotoes: {
        display: "flex",
        flexDirection: "row",
        marginRight: 15,
        alignItems: "center",
        justifyContent: "space-evenly"
    }
})