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



// keila aqui:

let count = [0, 0, 0, 0, 0, 0];



let combinacoes = [
    //horizontais
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],   //primeira linha
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],   //segunda linha
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],   //terceira linha
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],   //quarta linha
    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],   //quinta linha
    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],    //sexta linha
    //verticais
    [0, 7, 14, 21],
    [7, 14, 21, 28],
    [14, 21, 28, 35],   //coluna1
    [1, 8, 15, 22],
    [8, 15, 22, 29],
    [15, 22, 29, 36],   //coluna2
    [2, 9, 16, 23],
    [9, 16, 23, 30],
    [16, 23, 30, 37],   //coluna3
    [3, 10, 17, 24],
    [10, 17, 24, 31],
    [17, 24, 31, 38],   //coluna4
    [4, 11, 18, 25],
    [11, 18, 25, 32],
    [18, 25, 32, 39],   //coluna5
    [5, 12, 19, 26],
    [12, 19, 26, 33],
    [19, 26, 33, 40],   //coluna6
    [6, 13, 20, 27],
    [13, 20, 27, 34],
    [20, 27, 34, 41]    //coluna7
]


let final = ''

for(let j=0; j<combinacoes.length; j++){
    let posicao1 = combinacoes[j][0]
    let posicao2 = combinacoes[j][1]
    let posicao3 = combinacoes[j][2]
    let posicao4 = combinacoes[j][3]

    if(posicao1.classList.contains("jogador1") &&
    posicao2.classList.contains("jogador1") &&
    posicao3.classList.contains("jogador1") &&
    posicao4.classList.contains("jogador1")){
        console.log('Player1 ganhou iruu!')

    }
   
}
        console.log('Player1 ganhou!')
        //console.log(final)