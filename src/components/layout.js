import { StyleSheet, View, } from "react-native";
import { BotaoProximaTela, BotaoTelaAnterior } from "./botoesNav";

export function BotoesProximoEvoltar(props) {
    const {nomeTelaAnterior, nomeProximaTela, linkProximaTela, linktelaAnterior, navigation} = props
    return (
        <View style={Styles.Footer}>
            {/* Pego o nome do botão, o link para aonde ele vai, e a propriedade de navegação da pagina */}
            <BotaoTelaAnterior nome={nomeTelaAnterior || "voltar"} linktelaAnterior={linktelaAnterior} navigation={navigation} />
            <BotaoProximaTela nome={nomeProximaTela || "proxima tela"} linkProximaTela={linkProximaTela} navigation={navigation} />
        </View>
    )
}

const Styles = StyleSheet.create({
    ProdutoSelectScreen: {
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#260101",
        // minWidth: screenWidth,
        // minHeight: screenHeight
    },
    scrollViewContent: {
    },

    ProdutoContent: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: 20,
        justifyContent: "left",
    },
    Footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 30
    },
});
