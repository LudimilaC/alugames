/*
Implementando a Alugames
Nesse exemplo temos 3 jogos
1 - Monopoly - id="game-1"
2 - Ticket to ride id="game-2"
3 - Takenono - id="game-3"

Botões alugar e devolver
*/
let quantidadeAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${quantidadeAlugados}`);
}

function alterarStatus(id){

    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
        
    if (imagem.classList.contains('dashboard__item__img--rented')){
        if(confirm(`Você tem certeza que quer devolver o jogo ${nomeJogo.textContent}?`)){
          imagem.classList.remove('dashboard__item__img--rented'); //devolve
          botao.classList.remove('dashboard__item__button--return');
          botao.textContent = 'Alugar';    
          quantidadeAlugados--;
        }     
    }

    else{
      imagem.classList.add('dashboard__item__img--rented');
      botao.textContent = 'Devolver';
      botao.classList.add('dashboard__item__button--return')
      quantidadeAlugados++
    }  
    contarEExibirJogosAlugados();   
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    quantidadeAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});