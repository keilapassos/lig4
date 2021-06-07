const tabuleiro = document.getElementById("tabuleiro")
const jogador1 = document.getElementsByClassName("disco jogador1")
const jogador2 = document.getElementsByClassName("disco jogador2")
const botaoReset = document.getElementById("reset")

const colunas = document.getElementsByClassName("coluna")

// Criar discos nas colunas

// Alternar entre jogadores (cores)
const sortearJogador = () => {
    if(Math.floor(Math.random() * 2)==0) {
            return "1" 
        }
    return "2"
}

console.log(sortearJogador())



// Adicionar handler de clique nas colunas
let jogadorAtual = sortearJogador()

for (let i = 0; i < 7; i++) {
    colunas[i].addEventListener('click', () => {
    let contador = colunas[i].childElementCount
    // let jogadorAtual = sortearJogador()
    if (jogadorAtual == 1 && contador < 6) {
        let disco = document.createElement("div")
        disco.classList.add("disco","jogador1")
        colunas[i].appendChild(disco)
        jogadorAtual = 2            
    }
    else if (jogadorAtual == 2 && contador < 6) {
        let disco = document.createElement("div")
        disco.classList.add("disco","jogador2")
        colunas[i].appendChild(disco)
        jogadorAtual = 1
    }
})
}
        

// Adicionar função reset no botão