// import Header from "../components/header";
import { View, StyleSheet, Dimensions, StatusBar, Image } from "react-native";
import Center from "../components/gerais";
import { Descricao, Titulo } from "../components/textos";
import { QuantidadePessoas } from "../components/quantidadePessoas";
import { ScrollView } from "react-native-gesture-handler";
import { validarQuantidadePessoas } from "../validacao/quantidadePessoasValidacao";
import { BotaoProximaTela } from "../components/botoes";
import { Header } from "../components/layout";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function HomeScreen({ navigation }) {

    return (
        <>
            <Header navigation={navigation}  telaAtual={"Home"}/>
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

                    <View style={styles.botaoPadding} />

                    <BotaoProximaTela
                        nome={"Produtos"}
                        funcao={() => validarQuantidadePessoas(navigation)}
                    />
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    HomeScreen: {
        backgroundColor: "#260101",
        // minWidth: screenWidth,
        minHeight: screenHeight,
        paddingTop: 40
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
    },
    botaoPadding: {
        paddingTop: 15
    }
})


export default HomeScreen;