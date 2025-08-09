/* Questao 1

console.log("Olá, mundo!");

/* Questão 2 

let nome = "Erick";
console.log("Olá, " + nome);

const nomeConst = "Erick";
console.log("Olá, " + nomeConst);

/* Questão 3 

let num1 = 10;
let num2 = 3;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;

console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Multiplicação: " + multiplicacao);
console.log("Divisão: " + divisao);
console.log("Resto da divisão: " + resto);

/* Questão 4

let numero = 7;

if (numero % 2 === 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}


/* Questão 5 

let hora = 22; // Pode trocar para testar

if (hora >= 6 && hora < 12) {
    console.log("Bom dia");
} else if (hora >= 12 && hora < 18) {
    console.log("Boa tarde");
} else if (hora >= 18 && hora < 24) {
    console.log("Boa noite");
} else {
    console.log("Boa madrugada");
}


/* Questão 6

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];
let impares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
}

console.log("Números pares: " + pares);
console.log("Números ímpares: " + impares);


/* Questão 7

function quadrado(numero) {
    return numero * numero;
}

console.log(quadrado(5)); // Saída: 25

/* Questão 8

function maioresQueDez(numeros) {
    let resultado = [];
    
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 10) {
            resultado.push(numeros[i]);
        }
    }
    
    return resultado;
}

let lista = [5, 12, 8, 21, 10, 30];
console.log(maioresQueDez(lista)); // Saída: [12, 21, 30]

/* Questão 9 
 
let idade = 25;

if (idade >= 0 && idade <= 12) {
    console.log("Criança");
} else if (idade >= 13 && idade <= 17) {
    console.log("Adolescente");
} else if (idade >= 18 && idade <= 59) {
    console.log("Adulto");
} else if (idade >= 60) {
    console.log("Idoso");
} else {
    console.log("Idade inválida");
}

/* Questão 10

function executarComAtraso(callback) {
    console.log("Iniciando...");

    setTimeout(() => {
        callback();
        console.log("Finalizado.");
    }, 3000); // 3000 ms = 3 segundos
}

executarComAtraso(() => {
    console.log("Executando o callback!");
});

*/