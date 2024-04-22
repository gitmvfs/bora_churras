// import Header from "../components/header";
import { View, StyleSheet , Dimensions, StatusBar} from "react-native";
import Titulo from "../components/titulo";
import ToggleComida from "../components/toggleComida";
import { BotaoConsumo, BotaoProximaTela, BotaoTelaAnterior } from "../components/botoesNav";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function HomeScreen() {

    return (
        <View style={styles.HomeScreen}>
            <StatusBar hidden={true}/>
            <Titulo nome="Titulo" />
            <ToggleComida nome="Picanha" />
            <BotaoProximaTela nome="Confirmar "/>
            <BotaoTelaAnterior nome="Anterior"/>
            <BotaoConsumo/>
        </View>
    )
}

const styles = StyleSheet.create({

    HomeScreen:{
        paddingTop: 30,
        backgroundColor:"#260101",
        minHeight: screenHeight,
        width: screenWidth,
        maxWidth: screenWidth,
        position:"absolute",
        top:"0",
        left:0
    }

})


export default HomeScreen;