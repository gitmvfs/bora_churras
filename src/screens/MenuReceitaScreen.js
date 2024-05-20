import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ReceitaContext } from "../contexts/receitaContext";

export function MenuReceitaScreen({ navigation }) {
    const { receitas, setReceitaAtual } = React.useContext(ReceitaContext);

    const renderItem = ({ item, index }) => (
        <RenderItem item={item} index={index} navigation={navigation} setReceitaAtual={setReceitaAtual} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.slogan}>
                Quer impressionar a família com uma boa receita?
                Veja algumas que dão água na boca...
            </Text>

            <FlatList
                data={receitas}
                renderItem={renderItem}
            />
        </View>
    );
}

function RenderItem({ item, index, navigation, setReceitaAtual }) {
    return (
        <TouchableOpacity
            style={styles.containerReceita}
            onPress={() => {
                navigation.navigate("ReceitaScreen")
                setReceitaAtual(index)
            }}
        >
            <Text style={styles.tituloReceita}>{item.nome}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#A60303",
        flex: 1
    },
    containerReceita: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#FF5D00",
        borderRadius: 5,
        marginBottom: 15
    },
    tituloReceita: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    slogan: {
        width: 300,
        margin: "auto",
        marginVertical: 10,
        fontSize: 14,
        color: "#FFF"
    }
});
