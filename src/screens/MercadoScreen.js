// import Header from "../components/header";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Center from "../components/gerais";
import { Descricao, Titulo } from "../components/textos";
import { ScrollView } from "react-native-gesture-handler";
import { Col, Grid } from "react-native-easy-grid";
import { BotaoProximaTela, BotaoTelaAnterior } from "../components/botoes";
import { useEffect, useState } from "react";
import { buscarListaProdutos } from "../localStorage/listaProdutos";
import { QuantidadeMercado } from "../components/quantidadeMercado";
import { Header } from "../components/layout";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function MercadoScreen({ navigation }) {


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
            <Header navigation={navigation}  telaAtual={"Mercado"}/>
            <View style={styles.MercadoScreen}>
                <ScrollView>
                    <Descricao nome="Estes são alguns mercados e açougues indicamos para o seu churrasco!"></Descricao>
                    <View style={styles.mapa}>

                    </View>

                    <Descricao nome="Aqui você anota suas compras, tudo no seu controle!">

                    </Descricao>

                    {listaProdutos &&
                        listaProdutos.map((produto, index) => {
                            if (produto !== "") {
                                return <QuantidadeMercado key={index} nome={produto} />;
                            }
                        })}

                    <View style={styles.botaoPadding} />

                    <Grid>

                        <Col>
                            <BotaoTelaAnterior
                                nome={"Voltar"}
                                funcao={() => navigation.navigate("ConsumoScreen")}
                            />
                        </Col>

                        <Col>
                            <BotaoProximaTela
                                nome={"Cobrança"}
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

    MercadoScreen: {
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
    }
})

