import AsyncStorage from '@react-native-async-storage/async-storage';

export async function limparSelecaoProdutos() {
    await AsyncStorage.removeItem("produtos")
}

export async function buscarLista() {
    let listaSalva = await AsyncStorage.getItem('produtos');

    !!listaSalva == false ? listaSalva = [] : " "

    // Verifica se listaSalva é null, undefined ou não é uma string
    if (!listaSalva || typeof listaSalva !== 'string') {
        listaSalva = '';
    }

    const lista = listaSalva.split(",")
    return lista
}

export async function adicionarProduto(produto) {
    let lista = await buscarLista();

    lista.push(produto); // Adiciona o novo item à lista
    await AsyncStorage.setItem("produtos", lista.join(","));

}

export async function removerProduto(produto) {

    let listaSalva = await buscarLista();
    const novaLista = listaSalva.filter(i => i !== produto);
    await AsyncStorage.setItem("produtos", novaLista.join(","));
}
