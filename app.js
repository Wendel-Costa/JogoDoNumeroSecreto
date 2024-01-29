/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/
let numLimite = 10;
let listaDeNumeros = []
let numeroSecreto = gerarNumero();
let tentativas = 1;
let rodadas = 1;
function exibirTotal(){
    exibirTexto('h1',`Jogo do número secreto | ${rodadas}ª rodada`);
    exibirTexto('p','Escolha um número entre 1 e 10');
}

function exibirTexto(tag,texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function gerarNumero(){
    let num = parseInt(Math.random() * numLimite + 1);
    let quantidadeNum = listaDeNumeros.length;
    if (quantidadeNum == numLimite){
        listaDeNumeros = [];
    }
    if (listaDeNumeros.includes(num)){
        return gerarNumero();
    } else{
        listaDeNumeros.push(num);
        return num;
    }
}

function reiniciar(){
    limparCampo()
    document.getElementById('reiniciar').setAttribute('disabled',true);
    rodadas = rodadas + 1
    exibirTotal()
    numeroSecreto = gerarNumero();
    tentativas = 1;    
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTexto('h1','Acertou!');
        let palavratentativa = tentativas == 1? 'tentativa':'tentativas';
        exibirTexto('p',`Você descobriu o número secreto com ${tentativas} ${palavratentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if(chute > numeroSecreto){
            exibirTexto('h1','Errou!');
            exibirTexto('p','O número secreto é menor que seu chute!');
        } else{
            exibirTexto('h1','Errou!');
            exibirTexto('p','O número secreto é maior que seu chute!');
        }
        tentativas++
        limparCampo();
    }
}
    
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

exibirTotal()