import { StyleSheet, View, } from "react-native";
import { BotaoProximaTela, BotaoTelaAnterior } from "./botoes";

export function BotoesProximoEvoltar(props) {
    const {nomeTelaAnterior, nomeProximaTela, linkProximaTela, linkTelaAnterior, navigation} = props
    return (
        <View style={Styles.Footer}>
            {/* Pego o nome do botão, o link para aonde ele vai, e a propriedade de navegação da pagina */}
            <BotaoTelaAnterior nome={nomeTelaAnterior || "voltar"} linkTelaAnterior={linkTelaAnterior} navigation={navigation} />
            <BotaoProximaTela nome={nomeProximaTela || "proxima tela"} linkProximaTela={linkProximaTela} navigation={navigation} />
        </View>
    )
}

const Styles = StyleSheet.create({
    Footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 5,
        paddingRight: 5,
        margin: 15,
        marginBottom: 30
    },
});
