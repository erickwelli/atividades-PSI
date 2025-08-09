/* 01
const saudar = (nome) => `Olá, ${nome}!`;


console.log(saudar("Erick")); 

// 02 

function executarOperacao(num1, num2, callback) {
    return callback(num1, num2);
}

const somar = (a, b) => a + b;

const multiplicar = (a, b) => a * b;

console.log(executarOperacao(5, 3, somar));       
console.log(executarOperacao(5, 3, multiplicar));

// 03 

function exibirMensagem(nome, callback) {
  return callback(nome);
}

const mensagemDeBoasVindas = nome => "Seja bem-vindo, " + nome + "!";
const mensagemDeDespedida = nome => "Até logo, " + nome + "!";

console.log(exibirMensagem("Erick", mensagemDeBoasVindas));
console.log(exibirMensagem("Erick", mensagemDeDespedida));

// 04 

function verificarNumero(numero) {
  return new Promise(function(resolve, reject) {
    if (numero >= 0) {
      resolve("Número válido: " + numero);
    } else {
      reject("Erro: número negativo não é permitido");
    }
  });
}

verificarNumero(5).then(console.log).catch(console.log);
verificarNumero(-3).then(console.log).catch(console.log);

// 05 

function consultarPaciente(nome) {
  return new Promise((resolve, reject) => {
    if (nome !== "") {
      resolve(`Consulta para ${nome} agendada com sucesso.`);
    } else {
      reject("Erro: nome do paciente não pode ser vazio.");
    }
  });
}

consultarPaciente("Erick")
  .then(msg => console.log(msg))
  .catch(err => console.log(err));

consultarPaciente("")
  .then(msg => console.log(msg))
  .catch(err => console.log(err));


// 06 

async function agendarConsulta(nome) {
  try {
    const mensagem = await consultarPaciente(nome);
    console.log(mensagem);
  } catch (erro) {
    console.log(erro);
  }
}

agendarConsulta("Maria");
agendarConsulta("");

// 07

function verificarHorario(hora) {
  return new Promise((resolve, reject) => {
    if (hora >= 8 && hora <= 18) {
      resolve("Atendimento disponível");
    } else if (hora >= 0 && hora < 8 || hora > 18 && hora <= 23) {
      resolve("Atendimento indisponível no momento");
    } else {
      reject("Hora inválida");
    }
  });
}


async function checarAtendimento(horaAtual) {
  try {
    const mensagem = await verificarHorario(horaAtual);
    console.log(mensagem);
  } catch (erro) {
    console.log("Erro: " + erro);
  }
}


checarAtendimento(10);  
checarAtendimento(22); 
checarAtendimento(25);  

*/