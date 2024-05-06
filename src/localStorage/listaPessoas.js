import AsyncStorage from '@react-native-async-storage/async-storage';

export async function limparSelecaoPessoas() {
    await AsyncStorage.removeItem("pessoas")
}

export async function buscarListaPessoas(tipo) {

    // O tipo devera ser : homem, mulher ou crianca


    if (tipo != "Homem" && tipo != "Mulher" && tipo != "Criança" && tipo != "Quantos bebem?") {
        console.log(tipo)
        throw Error("Erro ao buscar lista de pessoas, tipo inválido: ", tipo)
    }

    let listaSalva = await AsyncStorage.getItem(tipo);

    !!listaSalva == false ? listaSalva = [] : " "

    // Verifica se listaSalva é null, undefined ou não é uma string
    if (!listaSalva || typeof listaSalva !== 'string') {
        listaSalva = '';
    }

    const lista = listaSalva.split(",")
    return lista
}

export async function definirNumPessoa(tipo, quantidade) {



    if (tipo != "Homem" && tipo != "Mulher" && tipo != "Criança" && tipo != "Quantos bebem?") {
        throw Error("Erro ao buscar lista de pessoas, tipo inválido: ", tipo)
    } else {


        let lista = await buscarListaPessoas(tipo);

        lista[0] = quantidade.toString() // Adiciona a quantidade de pessoas
        console.log("lista adicionar: ", lista)
        await AsyncStorage.setItem(tipo, lista.toString());

    }
}
