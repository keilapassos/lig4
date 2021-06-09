let tabuleiroArray = [
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0]
]

const tabuleiro = document.getElementById("tabuleiro")
const jogador1 = document.getElementsByClassName("disco jogador1")
const jogador2 = document.getElementsByClassName("disco jogador2")
const botaoReset = document.getElementById("reset")
const colunas = document.getElementsByClassName("coluna")
let discos = document.getElementsByClassName("boxDisco")
const iniciaJogador1 = document.getElementById("start1")
const iniciaJogador2 = document.getElementById("start2")

// Criar divs nas colunas dinamicamente
for (let i=0; i < colunas.length; i++) {
    let coluna = colunas[i]
    for (let j=0; j < 6; j++) {
        let boxDisco = colunas[i][j]
        boxDisco = document.createElement("div")
        boxDisco.classList.add("boxDisco")
        boxDisco.dataset.coluna = i
        boxDisco.dataset.linha = j
        coluna.appendChild(boxDisco)
    }
}

// Adicionar função reset no botão
botaoReset.addEventListener('click', function() {
    for (let i=0; i<colunas.length; i++) {
        for (let j=0; j<6; j++) {
            colunas[i][j].innerHTML = ""
        }
        
    }
})

// Alternar entre jogadores (cores)
function sortearJogador() {
    if(Math.floor(Math.random() * 2)==0) {
        iniciaJogador1.innerText = "Jogador A começa!"
        iniciaJogador2.innerText = "Jogador B"
        return "1" 
    }
    else if(Math.floor(Math.random() * 2)!=0) {
        iniciaJogador1.innerText = "Jogador A"
        iniciaJogador2.innerText = "Jogador B começa!"
        return "2"
    }
}
console.log(sortearJogador())
let jogadorAtual = 1

// Adicionar handler de clique nas colunas
for (let i = 0; i < colunas.length; i++) {

    colunas[i].addEventListener('click', (event) => {
        let colunaAtual = event.currentTarget
        let colunaFilhos = colunaAtual.childNodes

        for (let j = 0; j < colunaFilhos.length; j++) {
            if (jogadorAtual == 1 && colunaFilhos[j].childNodes.length === 0) {
                let colunaDiscoAtual = colunaFilhos[j].dataset.coluna
                let linhaDiscoAtual = colunaFilhos[j].dataset.linha
                tabuleiroArray[linhaDiscoAtual][colunaDiscoAtual] = 1
                let disco = document.createElement("div")
                disco.classList.add("jogador1")
                colunaFilhos[j].appendChild(disco)
                jogadorAtual = 2 
                break;
            }
            else if (jogadorAtual == 2 && colunaFilhos[j].childNodes.length === 0) {
                let colunaDiscoAtual = colunaFilhos[j].dataset.coluna
                let linhaDiscoAtual = colunaFilhos[j].dataset.linha
                tabuleiroArray[linhaDiscoAtual][colunaDiscoAtual] = 2
                let disco = document.createElement("div")
                disco.classList.add("jogador2")
                colunaFilhos[j].appendChild(disco)
                jogadorAtual = 1
                break;
            }            
        }        
    })
}

// Verificação horizontal

const horizontal = () => {
    
}

// Verificação vertical

const vertical = () => {
    
}

// Verificação diagonal

const diagonal = () => {
    
}