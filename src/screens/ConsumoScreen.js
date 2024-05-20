// import Header from "../components/header";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Center from "../components/gerais";
import { Descricao, Titulo } from "../components/textos";
import { QuantidadePessoas } from "../components/quantidadePessoas";
import { ScrollView } from "react-native-gesture-handler";
import { Col, Grid } from "react-native-easy-grid";
import { calcularConsumo } from "../validacao/calcularConsumo";
import { BotaoProximaTela, BotaoTelaAnterior } from "../components/botoes";
import { QuantidadeConsumo } from "../components/quantidadeConsumo";
import { useEffect, useState } from "react";
import { buscarListaProdutos } from "../localStorage/listaProdutos";
import { Header } from "../components/layout";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function ConsumoScreen({ navigation }) {


    const [listaProdutos, setListaProdutos] = useState(null);

    useEffect(() => {
        async function pegarListaProdutos() {
            const lista = await buscarListaProdutos();
            setListaProdutos(lista);
            console.log(lista);
        }

        // Chama pegarListaProdutos apenas uma vez, na montagem do componente
        pegarListaProdutos();

    }, [buscarListaProdutos]); // Removido listaProdutos da lista de dependências

    return (
        <>
            <Header navigation={navigation}  telaAtual={"Consumo"}/>
            <View style={styles.ConsumoScreen}>
                <ScrollView>
                    <Descricao nome="Recomendamos essa quantidade de acordo com o número de convidados, mas você pode alterar esses valores."></Descricao>
                    <View style={styles.FaixaLaranja}>
                        <Col>
                            <Center>
                                <Text style={styles.TextoFaixaLaranja}>Produto</Text>

                            </Center>

                        </Col>

                        <Col>
                            <Center>
                                <Text style={styles.TextoFaixaLaranja}>Consumo</Text>
                            </Center>

                        </Col>
                    </View>
                    {listaProdutos &&
                        listaProdutos.map((produto, index) => {
                            if (produto !== "") {
                                return <QuantidadeConsumo key={index} nome={produto} valor={async () => await calcularConsumo(listaProdutos,produto)} />;
                            }
                        })}

                    <View style={styles.botaoPadding} />

                    <Grid>

                        <Col>
                            <BotaoTelaAnterior
                                nome={"Voltar"}
                                funcao={() => navigation.navigate("ProdutoScreen")}
                            />
                        </Col>

                        <Col>
                            <BotaoProximaTela
                                nome={"Mercado"}
                                funcao={() => navigation.navigate("MercadoScreen")}
                            />
                        </Col>
                    </Grid>

                </ScrollView>
            </View>
        </>

    )
}

const styles = StyleSheet.create({

    ConsumoScreen: {
        backgroundColor: "#260101",
        // minWidth: screenWidth,
        minHeight: screenHeight,
        paddingTop: 40

    },
    FaixaLaranja: {
        width: screenWidth,
        height: 18,
        backgroundColor: "#FF4D00",
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
    }
})

