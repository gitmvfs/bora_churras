// import Header from "../components/header";
import { View, TextInput, StyleSheet, Dimensions, Text } from "react-native";
import Center from "../components/gerais";
import { Descricao, Titulo } from "../components/textos";
import { ScrollView } from "react-native-gesture-handler";
import { Col, Grid } from "react-native-easy-grid";
import { BotaoEnviar, BotaoProximaTela, BotaoTelaAnterior } from "../components/botoes";
import { useEffect, useState } from "react";
import { buscarListaProdutos } from "../localStorage/listaProdutos";
import { QuantidadeMercado } from "../components/quantidadeMercado";
import { Header } from "../components/layout";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function CobrancaScreen({ navigation }) {

    const [numericValue, setValue] = useState(false)


    const handleTextChange = async (text) => {
        // Remove qualquer caractere que não seja um número
        const numericValue = text.replace(/[^0-9]/g, '');
        setValue(numericValue);
    };



    return (
        <>
            <Header navigation={navigation} telaAtual={"Mercado"} />
            <View style={styles.CobrancaScreen}>
                <ScrollView>
                    <Descricao nome="Com grandes amigos você terá o melhor churrasco, então vamos rachar essa conta."></Descricao>

                    <View style={styles.divCobranca}>
                        <Center>
                            <Text style={styles.titulo}>Rateio de custos</Text>
                            <Text style={styles.informativo}>
                                VALOR TOTAL
                            </Text>
                            <Text style={styles.informativo}>
                                VALOR POR PESSOA
                            </Text>
                            <View style={styles.divQtdPessoas}>

                                <Text style={styles.textQtdPessoas}>
                                    Quantas pessoas vão pagar?
                                </Text>
                                <TextInput
                                    style={styles.inputQtdPessoas}
                                    keyboardType="numeric"
                                    onChangeText={handleTextChange}
                                    value={String(numericValue)}
                                />

                            </View>
                            <Text style={styles.informativo}>
                                Por pagamento: VALOR POR PESSOA
                            </Text>
                            <Text style={styles.informativo}>
                                Rateio das bebidas:
                            </Text>
                        </Center>

                    </View>
                    <Descricao nome="Defina a localização e mande para seus amigos, afinal o melhor churras é com quem gostamos."></Descricao>

                    <View style={styles.mapa}></View>

                    <Grid>

                        <Col>
                            <BotaoTelaAnterior
                                nome={"Voltar"}
                                funcao={() => navigation.navigate("MercadoScreen")}
                            />
                        </Col>

                        <Col>
                            {/*<BotaoEnviar/>*/}
                        </Col>
                    </Grid>


                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    CobrancaScreen: {
        backgroundColor: "#260101",
        // minWidth: screenWidth,
        minHeight: screenHeight,
        paddingTop: 40

    },
    mapa: {
        width: screenWidth,
        height: screenHeight * 0.5,
        backgroundColor: "#fff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row"
    },
    TextoFaixaLaranja: {
        fontSize: 12,
        color: "#fff"
    },
    botaoPadding: {
        paddingTop: 15
    },
    divCobranca: {
        borderRadius: 4,
        backgroundColor: "#FF5d00"
    },
    titulo: {
        marginTop: 15,
        fontSize: 24,
        color: "#fff",
        marginBottom: 14
    },
    informativo: {
        backgroundColor: "#fff",
        maxWidth: 360,
        width: 360 - 20,
        textAlign: "center",
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 4,
        marginBottom: 15
    },
    divQtdPessoas: {
        display: "flex",
        flexDirection: "row",
    },
    textQtdPessoas: {
        color: "white",
        marginRight: 35
    },
    inputQtdPessoas:{
        backgroundColor: "white",
        marginBottom: 15,
        width: 100,
        borderRadius: 5,
        textAlign: "center"
    }
})

