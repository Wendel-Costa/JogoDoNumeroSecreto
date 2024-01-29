/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/

exibirTexto('h1','Jogo do número secreto');
exibirTexto('p','Escolha um número entre 1 e 10');

function exibirTexto(tag,texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
}

function gerarNumero(){
    return parseInt(Math.random()*10 + 1)
}

let numeroSecreto = gerarNumero();
let chute
let tentativas = 1
function verificarChute(){
    while(chute != numeroSecreto){
        let chute = document.querySelector('input').value;
        if (chute == numeroSecreto){
            exibirTexto('h1','Acertou!');
            exibirTexto('p',`Você descobriu o número secreto com ${tentativas} tentativas!`);
            break;
        } else if(chute > numeroSecreto){
            exibirTexto('h1','Errou!');
            exibirTexto('p','O número secreto é menor que seu chute!');
        } else{
            exibirTexto('h1','Errou!');
            exibirTexto('p','O número secreto é maior que seu chute!');
        }
        tentativas = tentativas + 1
    }
}