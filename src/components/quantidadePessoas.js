import { View } from "react-native"
import { BotaoMais, BotaoMenos } from "./botoes"
import { StyleSheet, TextInput, Text, Dimensions } from "react-native"
import { useState } from "react";
import { Grid, Col } from 'react-native-easy-grid';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function QuantidadePessoas(props) {

    const { nome } = props

    const [value, setValue] = useState(0);

    const handleTextChange = (text) => {
        // Remove qualquer caractere que não seja um número
        const numericValue = text.replace(/[^0-9]/g, '');
        setValue(numericValue);
    };

    function adicionar() {
        setValue(Number(value + 1))
    }
    function diminuir() {
        if (value > 0) {
            setValue(Number(value - 1))
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