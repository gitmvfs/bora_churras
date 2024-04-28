import AsyncStorage from '@react-native-async-storage/async-storage';

export async function limparSelecaoProdutos() {
    await AsyncStorage.removeItem("produtos")
}

export async function buscarLista() {
    let listaSalva = await AsyncStorage.getItem('produtos');

    !!listaSalva == false ? listaSalva = [] : " "

    return listaSalva
}

buscarLista()