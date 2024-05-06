import { buscarListaPessoas } from "../localStorage/listaPessoas"
import { ToastAndroid } from 'react-native';

export async function validarQuantidadePessoas(navigation) {

  let resultadoValidacao = false
  let mensagemErro = ""

  let numero_homens = await buscarListaPessoas("Homem")
  let numero_mulheres = await buscarListaPessoas("Mulher")
  let numero_criancas = await buscarListaPessoas("Criança")
  let numero_pessoas_bebem = await buscarListaPessoas("Quantos bebem?")

  numero_homens = Number(numero_homens[0])
  numero_mulheres = Number(numero_mulheres[0])
  numero_criancas = Number(numero_criancas[0])
  numero_pessoas_bebem = Number(numero_pessoas_bebem[0])

  // Validação de 50 pessoas => RN 3

  const totalPessoas = numero_homens + numero_mulheres + numero_criancas
  const totalAdultos = numero_homens + numero_mulheres


  if ( totalPessoas > 50) {
    mensagemErro = "O número máximo de usuários é 50."
  }


  if (numero_pessoas_bebem > totalAdultos ){
    mensagemErro = "O número de pessoas q bebem é maior que o número de adultos"
  }

  if (numero_homens <= 0 && numero_mulheres <= 0){
    mensagemErro = "Necessário 1 (um) adulto"

  }

  // Se não tiver mensagem de erro, o resultado da validação é true.
  !!mensagemErro == false? resultadoValidacao = true : ""

  if (!resultadoValidacao && mensagemErro != "") {
    ToastAndroid.showWithGravity(mensagemErro, ToastAndroid.LONG, ToastAndroid.CENTER);
  } else {
    navigation.navigate("ProdutoScreen")
  }

}


