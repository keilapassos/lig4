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
    let coluna;
    let filhosColuna;
    for (let i = 0; i < colunas.length; i++) {
            coluna = colunas[i];// coluna 0
            filhosColuna = coluna.childNodes;// array de filhos da coluna;
        for(let j = 0 ; j < filhosColuna.length;j++){
            filhosColuna[j].innerText = "";
        }
    }

    tabuleiroArray = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
        ]
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
                let x = colunaFilhos[j].dataset.coluna
                let y = colunaFilhos[j].dataset.linha
                tabuleiroArray[y][x] = 1
                let disco = document.createElement("div")
                disco.classList.add("jogador1")
                colunaFilhos[j].appendChild(disco)
                
                jogadorAtual = 2 
                break;
            }
            else if (jogadorAtual == 2 && colunaFilhos[j].childNodes.length === 0) {
                let x = colunaFilhos[j].dataset.coluna
                let y = colunaFilhos[j].dataset.linha
                tabuleiroArray[y][x] = 2
                let disco = document.createElement("div")
                disco.classList.add("jogador2")
                colunaFilhos[j].appendChild(disco)
               
                jogadorAtual = 1
                break;
            }            
        }  
        horizontal()
        vertical()    
        diagonal();  
    })
}

// Verificação horizontal

const horizontal = () => {
    
const bordaX = tabuleiroArray[0].length - 3;

// passando por cada linha
    for(let y = 0; y < tabuleiroArray.length; y++){

        // passando por cada item
        for(let x = 0; x < bordaX; x++) {
            let item = tabuleiroArray[y][x];
            
            // checando se a célula está preenhida
            if(item !== 0) {
            
                // checando se os próximos três itens tem o mesmo valor
                if(item === tabuleiroArray[y][x+1] && item === tabuleiroArray[y][x+2] && item === tabuleiroArray[y][x+3] ) {
                    
                    if(item === 1){
                        //mensagem vitória
                        console.log('jogador 1 ganhou')                        
                        paraDeCriarDiscos()
                    }

                    else if(item === 2){
                        //mensagem vitória
                        console.log('jogador 2 ganhou')
                        paraDeCriarDiscos()
                    }
                }
            }
        }
    }
}

// Verificação vertical

const vertical = () => {

const bordaY = tabuleiroArray.length - 3;
    
// passando por cada linha  
    for(let y = 0; y < bordaY; y++){

        // passando por cada célula
        for(let x = 0; x < tabuleiroArray[0].length; x++) {
            let item = tabuleiroArray[y][x];
        
            // checando se a célula está preenchida
            if(item !== 0) {
                
                // checando se os próximos três itens têm o mesmo valor
                if(item === tabuleiroArray[y+1][x] && item === tabuleiroArray[y+2][x] && item === tabuleiroArray[y+3][x]) {
                    
                    if(item === 1){
                        //mensagem vitória
                        console.log('jogador 1 ganhou');
                        paraDeCriarDiscos()
                    }

                    else if(item === 2){
                        //mensagem vitória
                        console.log('jogador 2 ganhou')
                        paraDeCriarDiscos()
                    }                    
                }
            }
        }
    }
  
}

// Verificação diagonal

const diagonal = () => {
    
// DIAGONAL (DIREITA ABAIXO)
// itere cada linha
for (let y = 0; y  <= 3; y ++) {
    // itere cada célula na linha
    for (let x = 0; x <= 3; x++) {
        let item  = tabuleiroArray[y][x];
 /*
   tabuleiroArray = [
        [0,0,0,1,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
        ]
 */
        // Checa apenas se a célula estiver preenchida
        if (item !== 0) {
            // Checa as próximas duas células para o mesmo valor
            if (item === tabuleiroArray[y+1][x+1] && item === tabuleiroArray[y+2][x+2] && item === tabuleiroArray[y+3][x+3]) {
                if(item === 1){
                    console.log("O jogador 1 ganhou");
                    paraDeCriarDiscos()
                    
                }else{
                    console.log("O jogador 2 ganhou");
                    paraDeCriarDiscos()
                }
            }
            // chamar funcao empate
        }
    }
}

// Esquerda pra baixo
for (let y = 3; y < tabuleiroArray.length; y ++) {

    // itere cada célula em cada linha
    for (let x = 0; x <= 3; x++) {
        item = tabuleiroArray[y ][x];

         /*
   tabuleiroArray = [
        [0,0,0,1,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
        ]
 */
 
        // Checa somente se a célula está preenchida
        if (item !== 0) {
 
            // Checa as próximas duas células para o mesmo valor
            if (item === tabuleiroArray[y-1][x+1] && item === tabuleiroArray[y-2][x+2] && item === tabuleiroArray[y-3][x+3]) {
                if(item === 1){
                    console.log("O jogador 1 ganhou");
                    paraDeCriarDiscos()
                }
                if(item === 2){
                    console.log("O jogador 2 ganhou");
                    paraDeCriarDiscos()
                }
            }
        }
    }
 }
}

// testes para-de-criar-discos
function paraDeCriarDiscos(){    
    jogadorAtual = 0
}


