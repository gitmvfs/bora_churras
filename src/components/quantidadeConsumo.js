import { View } from "react-native"
import { BotaoMais, BotaoMenos } from "./botoes"
import { StyleSheet, TextInput, Text, Dimensions } from "react-native"
import { useEffect, useState } from "react";
import { Grid, Col } from 'react-native-easy-grid';
import { definirNumPessoa, buscarListaPessoas } from "../localStorage/listaPessoas";
import Center from "./gerais";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function QuantidadeConsumo(props) {
    const { nome, valor } = props; 

    const [value, setValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const initialValue = await valor([nome], nome);
            setValue(initialValue);
        };

        fetchData();
    }, [nome, valor]);

    const handleTextChange = (text) => {
        // Remove qualquer caractere que não seja um número
        const numericValue = text.replace(/[^0-9]/g, '');
        setValue(numericValue);
    };

    return (
        <View style={styles.layout}>
            <Col>
                <Text style={styles.text}> {nome}</Text>
            </Col>
            <Col>
                <Center>
                    <TextInput
                        style={styles.textInput}
                        inputMode="none"
                        onChangeText={handleTextChange}
                        value={String(value)}
                    />
                </Center>
            </Col>
        </View>
    );
}

const styles = StyleSheet.create({

    layout: {
        display: "flex",
        flexDirection: "row",
        width: screenWidth,
        justifyContent: "center"
    },
    textInput: {
        minHeight: 40,
        width: 150,
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