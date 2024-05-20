import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import { ReceitaContext } from "../contexts/receitaContext";
import React from "react";
import { Header } from "../components/layout";

export function ReceitaScreen({ navigation }) {
  const { receitas, receitaAtual } = React.useContext(ReceitaContext);
  console.log(receitas[receitaAtual]);

  return (
    <>
      <Header navigation={navigation} telaAtual={"Receitas"} />

      <View style={styles.container}>
        <ScrollView>
          <RenderItem item={receitas[receitaAtual]} />
        </ScrollView>
      </View>
    </>
  );
}

function RenderItem({ item }) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.nome}</Text>
      </View>

      <View style={styles.timeContainer}>
        <Text style={styles.time}>{item.tempo}</Text>
      </View>

      {/* INGREDIENTES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>INGREDIENTES</Text>
        {item.ingredientes.map((ingrediente, index) => (
          <Text key={index} style={styles.sectionContent}> - {ingrediente}</Text>
        ))}
      </View>

      {/* PREPARO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PREPARO</Text>
        {item.preparo.map((passo, index) => (
          <Text key={index} style={styles.sectionContent}> - {passo}</Text>
        ))}
      </View>

      {/* DICAS */}
      {/* Retorna a seção de dicas, caso exista alguma na receita em questão */}
      {item.dicas && item.dicas.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>DICAS</Text>
          {item.dicas.map((dica, index) => (
            <Text key={index} style={styles.sectionContent}> - {dica}</Text>
          ))}
        </View>
      )}
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#260101",
    flex: 1,
  },
  titleContainer: {
    padding: 8,
    backgroundColor: "#FF5D00",
    borderRadius: 5,
  },
  title: {
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
  sectionContent: {
    fontSize: 16,
    marginTop: 5,
    color: "#FFFFFF",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  time: {
    fontSize: 22,
  },
});
