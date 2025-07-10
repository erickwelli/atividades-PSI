/*const idade = 50

if (idade < 30){
    console.log("Você é novo")
} else if(idade > 30 && idade < 40){
    console.log("Você é velho!")
} else{
    console.log("Você é idoso!")
} */

/* for e while

for (let i=0; i<10; i++){
    console.log(i)
}

while (testando){

}
*/

/*let lista = [10, "Thiago", true, "Barreto"] //lista em python

console.log(lista);

let objetos = {nome: "Tiago", idade: 29, sexo:"M"} // dicionario

console.log(objetos["sexo"])

const motos = {
    nome: "MT03",
    marca: "Yamaha",
    cc: 300,
    cor: "Azul",
    endereco_loja: {
        rua: "Rua Martelo Cinza",
        cidade: "Natal",
        numero: 2020
    }
}

console.log(motos.endereco_loja["cidade"])*/


/* const corUsuario = null
const corPadrao = corUsuario || 'padrão'

console.log(corPadrao)
*/

/*const nomeUsuario = null
const nomeUsuarioPadrao = "User111"

console.log(nomeUsuario || nomeUsuarioPadrao)*/



//FUNCOES

/*function soma(valor1, valor2){
    return valor1 + valor2
}

console.log(soma(25,35)); */

function somaTodosValores(...valores){
    let soma = 0
    for(let i=0; i < valores.length; i++){
        if(typeof(valores[i]) !== 'number'){
            return `Valor Inválido!`
        }
        soma +=valores[i]
    }
    return soma
}

console.log(somaTodosValores(10, 20, 30, 40, 'texto'))