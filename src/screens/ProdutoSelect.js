import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import Titulo from "../components/titulo";
import ToggleComida from "../components/toggleComida";
import { BotaoProximaTela, BotaoTelaAnterior } from "../components/botoesNav";
import {Grid, Col } from 'react-native-easy-grid';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


export function ProdutoSelect() {
  return (
    <View style={Styles.ProdutoSelectScreen}>
      <ScrollView style={StyleSheet.scrollViewContent}>
        <Titulo nome="Bovina" />

        <Grid style={Styles.ProdutoContent}>
          <Col>
            <ToggleComida nome="Contra-filé" />
            <ToggleComida nome="Maminha" />
          </Col>
          <Col>
            <ToggleComida nome="Cupim" />
          </Col>
        </Grid>

        <Titulo nome="Frango" />

        <Grid style={Styles.ProdutoContent}>
          <Col>
            <ToggleComida nome="Coxa" />
            <ToggleComida nome="Coração" />
          </Col>
          <Col>
            <ToggleComida nome="Asa" />
          </Col>
        </Grid>

        <Titulo nome="Suína" />

        <Grid style={Styles.ProdutoContent}>
          <Col>
            <ToggleComida nome="Pernil" />
            <ToggleComida nome="Linguiça" />
          </Col>
          <Col>
            <ToggleComida nome="Paleta" />
          </Col>
        </Grid>

        <Titulo nome="Queridinhos" />

        <Grid style={Styles.ProdutoContent}>
          <Col>
            <ToggleComida nome="Pão de alho" />
            <ToggleComida nome="Milho" />
            <ToggleComida nome="Pão francês" />
          </Col>
          <Col>
            <ToggleComida nome="Farofa" />
            <ToggleComida nome="Pimenta" />
            <ToggleComida nome="Arroz" />
          </Col>
        </Grid>

        <Titulo nome="Suprimentos" />

        <Grid style={Styles.ProdutoContent}>
          <Col>
            <ToggleComida nome="Carvão" />
            <ToggleComida nome="Descartáveis" />
            <ToggleComida nome="Sal" />
          </Col>
          <Col>
            <ToggleComida nome="Gelo" />
            <ToggleComida nome="Guardanapo" />
          </Col>
        </Grid>

        <Titulo nome="Bebidas" />

        <Grid style={Styles.ProdutoContent}>
          <Col>
            <ToggleComida nome="Refrigerante" />
            <ToggleComida nome="Suco" />
          </Col>
          <Col>
            <ToggleComida nome="Cerveja" />

          </Col>
        </Grid>

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
