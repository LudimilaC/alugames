/*
Implementando a Alugames
Nesse exemplo temos 3 jogos
1 - Monopoly - id="game-1"
2 - Ticket to ride id="game-2"
3 - Takenono - id="game-3"

Botões alugar e devolver
*/

function alterarStatus(id){

    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
        
    if (imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented'); //devolve
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    }

    else{
      imagem.classList.add('dashboard__item__img--rented');
      botao.textContent = 'Devolver';
      botao.classList.add('dashboard__item__button--return')
    }     
}

