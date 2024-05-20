
import { buscarListaPessoas } from "../localStorage/listaPessoas"
import { ToastAndroid } from 'react-native';

export async function calcularConsumo(listaCarnes, produto) {
    let numero_homens = await buscarListaPessoas("Homem")
    let numero_mulheres = await buscarListaPessoas("Mulher")
    let numero_criancas = await buscarListaPessoas("Criança")
    let numero_pessoas_bebem = await buscarListaPessoas("Quantos bebem?")

    numero_homens = Number(numero_homens[0])
    numero_mulheres = Number(numero_mulheres[0])
    numero_criancas = Number(numero_criancas[0])
    numero_pessoas_bebem = Number(numero_pessoas_bebem[0])

    const pesoCarnes = (numero_homens * 600) + (numero_mulheres * 400) + (numero_criancas * 200)

    const gramasPorCarne = pesoCarnes / (listaCarnes.length - 1)

    const tabelaPreco = {
        "Maminha": 42.99,
    }

    console.log(tabelaPreco[`${produto.trim()}`])
    if (tabelaPreco[`${produto.trim()}`]) {
        return `R$: ${((gramasPorCarne / 1000) * tabelaPreco[`${produto}`]).toFixed(2)} (${gramasPorCarne / 1000} kg) `
    } else {
        return "PREÇO NÃO DEFINIDO"
    }

}