import AsyncStorage from '@react-native-async-storage/async-storage';

export async function limparSelecaoPessoas() {
    await AsyncStorage.removeItem("pessoas")
}

export async function buscarValor() {

    // O tipo devera ser : homem, mulher ou crianca


    let listaSalva = await AsyncStorage.getItem("valorTotal");

    !!listaSalva == false ? listaSalva = [] : " "

    // Verifica se listaSalva é null, undefined ou não é uma string
    if (!listaSalva || typeof listaSalva !== 'string') {
        listaSalva = '';
    }

    const lista = listaSalva.split(",")
    return lista
}

export async function definirValor(valorTotal) {

    let lista = await buscarValor();

    lista[0] = valorTotal.toString() // Define o valor
    await AsyncStorage.setItem("valorTotal", lista.toString());

}
