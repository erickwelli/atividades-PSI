//Questão 1
//console.log("Bem-vindo à nossa loja online!");

//Questão 2
/*let nomeProduto = "Camiseta Estampada";
let preco = 49.90;
let produtoDisponivel = true;

console.log("Produto:", nomeProduto);
console.log("Preço:", preco);
console.log("Disponível?", produtoDisponivel);*/

//Questão 3

/*let precoOriginal = 100;
let desconto = precoOriginal * 0.10;
let precoComDesconto = precoOriginal - desconto;
console.log("Preço com desconto:", precoComDesconto);


let precoProduto1 = 30;
let precoProduto2 = 45;
let precoProduto3 = 25;
let totalCompra = precoProduto1 + precoProduto2 + precoProduto3;
console.log("Total da compra:", totalCompra);

let valorProduto = 80;
let frete = 15;
let totalFinal = valorProduto + frete;
console.log("Total com frete:", totalFinal);*/

//Questão 4
/*let nomeCliente = "Maria";

console.log(`Bem-vindo à nossa loja online, ${nomeCliente}!`);*/

//Questão 5
/*let carrinho = ["Camiseta", "Calça", "Tênis", "Boné"];

let posicaoRemover = 1;

let itemRemovido = carrinho.splice(posicaoRemover, 1)[0];
    
console.log(`Você removeu do carrinho o item: ${itemRemovido}`);

console.log("Carrinho atualizado:", carrinho);*/

//Questão 6
/*let precoProduto = 150;
let dinheiroCliente = 200;

if (dinheiroCliente >= precoProduto) {
  console.log("Compra efetuada com sucesso!");
} else {
  console.log("Saldo insuficiente para a compra.");
}*/

//Questão 7
/*let limiteEstoque = 10;
let contadorPecas = 0;

while (contadorPecas < limiteEstoque) {
  contadorPecas++;
  console.log(`Peça adicionada. Total no estoque: ${contadorPecas}`);
}

console.log("Limite de estoque atingido. Não é possível adicionar mais peças.");*/

//Questão 8

/*function calcularPrecoComDesconto(preco, percentualDesconto) {
  return preco - (preco * percentualDesconto / 100);
}

function boasVindas(nomeCliente) {
  console.log(`Bem-vindo à nossa loja online, ${nomeCliente}!`);
}

let precoOriginal = 200;
let precoFinal = calcularPrecoComDesconto(precoOriginal, 10);
console.log("Preço com desconto:", precoFinal);

boasVindas("Erick");*/

//Questão 9
/*let produto = {
  nome: "Tênis Esportivo",
  preco: 120.00
};

let cliente = {
  nome: "Erick",
  email: "erick@email.com"
};

console.log(produto);
console.log(cliente);*/

//Questão 10

/*function calcularPagamentoParcelado(valorTotal, parcelas) {
  let valorParcela = valorTotal / parcelas;
  return `Pagamento em ${parcelas}x de R$${valorParcela.toFixed(2)} (Total: R$${valorTotal.toFixed(2)})`;
}

function calcularPagamentoComDesconto(valorTotal, percentualDesconto) {
  let valorFinal = valorTotal - (valorTotal * percentualDesconto / 100);
  return `Preço com ${percentualDesconto}% de desconto: R$${valorFinal.toFixed(2)}`;
}

console.log(calcularPagamentoParcelado(300, 6));
console.log(calcularPagamentoComDesconto(300, 15));*/
