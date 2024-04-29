import { View } from "react-native-web"
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
        <View>

            <Grid>
                <Col style={styles.layout}>
                    <Text style={styles.text}> {nome} </Text>

                </Col>
                <BotaoMenos funcaoDiminuirInput={diminuir} />
                <TextInput
                    style={styles.textInput}
                    keyboardType="numeric"
                    onChangeText={handleTextChange}
                    value={value}
                />
                <BotaoMais funcaoAumentarInput={adicionar} />





            </Grid>

        </View>
    )
}


const styles = StyleSheet.create({

    layout: {
        justifyContent: "center",
    },
    textInput: {
        minHeight: 40,
        width: 80,
        height: 35,
        margin: 15,
        borderRadius: 5,
        backgroundColor: "#fff",
        textAlign: "center",
        fontSize: 16
    },
    text:{
        fontSize: 20,
        color: "#fff",
        textAlign:"center"
    }

})