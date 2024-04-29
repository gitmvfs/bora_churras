// import Header from "../components/header";
import { View, StyleSheet, Dimensions, StatusBar, Image } from "react-native";
import Center from "../components/gerais";
import { Descricao, Titulo } from "../components/textos";
import { BotoesProximoEvoltar } from "../components/layout";
import { QuantidadePessoas } from "../components/quantidadePessoas";
import { ScrollView } from "react-native-gesture-handler";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function HomeScreen({ navigation }) {

    return (
        <View style={styles.HomeScreen}>
            <ScrollView>
                <Descricao nome="Está pensando naquele churrasco com a família? Comece por aqui, porque isso é coisa séria!"></Descricao>

                <Center>
                    <View style={styles.imagemDiv}>
                        <Image style={styles.imagem} source={{ uri: "https://amoreceita.com.br/wp-content/uploads/2023/10/Tecnicas-de-preparo-de-carne-grelhada.png" }} />
                    </View>
                </Center>

                <Titulo nome="Quantas pessoas vão pro churrasco?"></Titulo>
                <Center>
                    <QuantidadePessoas nome="Homem" />
                    <QuantidadePessoas nome="Mulher" />
                    <QuantidadePessoas nome="Criança" />
                    <QuantidadePessoas nome="Quantos bebem?" />

                </Center>


                <BotoesProximoEvoltar
                    linkProximaTela={"ProdutoScreen"}
                    navigation={navigation}
                    nomeProximaTela="Produtos"
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    HomeScreen: {
        backgroundColor: "#260101",
        // minWidth: screenWidth,
        minHeight: screenHeight
    },
    imagemDiv: {
        minHeight: screenHeight / 3,
        maxHeight: screenHeight / 3,
        width: screenWidth,
        padding: 0,
        margin: 0,
        marginBottom: 15,
        overflow: "hidden"
    },
    imagem: {
        height: "100%",// pega 100% da div
        padding: 0,
        margin: -15,
        transform: [{ scale: 1.8 }]
    }

})


export default HomeScreen;