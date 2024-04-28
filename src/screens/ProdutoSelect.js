import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import Titulo from "../components/titulo";
import ToggleComida from "../components/toggleComida";
import { BotaoProximaTela, BotaoTelaAnterior } from "../components/botoesNav";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export function ProdutoSelect() {
  return (
    <View style={Styles.ProdutoSelectScreen}>
      <ScrollView style={StyleSheet.scrollViewContent}>
        <Titulo nome="Bovina" />

        <View style={Styles.ProdutoContent}>
          <ToggleComida nome="Contra-filé" />
          <ToggleComida nome="Cupim" />
          <ToggleComida nome="Maminha" />
        </View>

        <Titulo nome="Frango" />

        <View style={Styles.ProdutoContent}>
          <ToggleComida nome="Coxa" />
          <ToggleComida nome="Coração" />
          <ToggleComida nome="Asa" />
        </View>

        <Titulo nome="Suína" />

        <View style={Styles.ProdutoContent}>
          <ToggleComida nome="Pernil" />
          <ToggleComida nome="Linguiça" />
          <ToggleComida nome="Paleta" />
        </View>

        <Titulo nome="Queridinhos" />

        <View style={Styles.ProdutoContent}>
          <ToggleComida nome="Pão de alho" />
          <ToggleComida nome="Milho" />
          <ToggleComida nome="Pão francês" />
          <ToggleComida nome="Farofa" />
          <ToggleComida nome="Pimenta" />
          <ToggleComida nome="Arroz" />
        </View>

        <Titulo nome="Suprimentos" />

        <View style={Styles.ProdutoContent}>
          <ToggleComida nome="Carvão" />
          <ToggleComida nome="Descartáveis" />
          <ToggleComida nome="Sal" />
          <ToggleComida nome="Gelo" />
          <ToggleComida nome="Guardanapo" />
        </View>

        <Titulo nome="Bebidas" />

        <View style={Styles.ProdutoContent}>
          <ToggleComida nome="Refrigerante" />
          <ToggleComida nome="Suco" />
          <ToggleComida nome="Cerveja" />
        </View>

        <View style={Styles.Footer}>
          <BotaoTelaAnterior nome="voltar" />
          <BotaoProximaTela nome="proxima tela" />
        </View>
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  ProdutoSelectScreen: {
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#260101",
    flex: 1, // Preencher todo o espaço disponível
  },
  scrollViewContent: {
    flexGrow: 1, // Garante que o conteúdo do ScrollView ocupe todo o espaço disponível
  },

  ProdutoContent: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 20,
    paddingLeft: 35,
    paddingRight: 35,
    justifyContent: "space-between",
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
