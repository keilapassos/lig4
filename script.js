// // // // VARIÁVEIS \\ \\ \\ \\

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
    const botaoZerarPlacar = document.getElementById("resetPlacar")
    const colunas = document.getElementsByClassName("coluna")
    let discos = document.getElementsByClassName("boxDisco")
    const iniciaJogador1 = document.getElementById("start1")
    const iniciaJogador2 = document.getElementById("start2")
    let alertaBox = document.getElementById("alertBox")
    let mensagemBox = document.getElementById("titleBox")
    let comentarioBox = document.getElementById("subBox")
    let fecharBox = document.getElementById("closeBox")
    let jogoEmAndamento = true;
    
    //Captura os elementos Referentes ao placar de cada jogador
    let placarLaranja = document.getElementById("ptsLaranja");
    let placarAzul = document.getElementById("ptsAzul");
    let ptsAzul = 0;
    let ptsLaranja = 0;
    
    // // // // Cria divs nas colunas dinamicamente \\ \\ \\ \\
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
    
    // // // // Alternar entre jogadores (cores) \\ \\ \\ \\
    function sortearJogador() {
        let numero_aletorio = Math.ceil(Math.random()*2);// ou 1 ou 2 nunca 0
        return numero_aletorio;
    }
    let jogadorAtual = sortearJogador();
    const alterador =(param)=>{
        if(param === 1) {
        iniciaJogador1.innerText = "Jogador A começa!"
        iniciaJogador2.innerText = "Jogador B"
        }
        if(param === 2) {
        iniciaJogador1.innerText = "Jogador A"
        iniciaJogador2.innerText = "Jogador B começa!"
    }
    }
    alterador(jogadorAtual);
    
    // // // // Adicionar função reset no botão \\ \\ \\ \\
    botaoReset.addEventListener('click', function() {
        jogoEmAndamento = true;
        let coluna;
        let filhosColuna;
        for (let i = 0; i < colunas.length; i++) {
                coluna = colunas[i];// coluna 0
                filhosColuna = coluna.childNodes;// array de filhos da coluna;
            for(let j = 0 ; j < filhosColuna.length;j++){
                filhosColuna[j].innerText = "";
            }
        }
        // placarLaranja.innerText = "0";
        // placarAzul.innerText= "0";
        jogadorAtual = sortearJogador();
        tabuleiroArray = [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
            ]
    })

    // // // // Adicionar função reset que limpa o placar \\ \\ \\ \\
    botaoZerarPlacar.addEventListener('click', function() {
        jogoEmAndamento = true;
        let coluna;
        let filhosColuna;
        for (let i = 0; i < colunas.length; i++) {
                coluna = colunas[i];// coluna 0
                filhosColuna = coluna.childNodes;// array de filhos da coluna;
            for(let j = 0 ; j < filhosColuna.length;j++){
                filhosColuna[j].innerText = "";
            }
        }
        placarLaranja.innerText = "0";
        placarAzul.innerText= "0";
        ptsAzul = 0
        ptsLaranja = 0
        jogadorAtual = sortearJogador();
        tabuleiroArray = [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
            ]
    })
    
    // // // // Adicionar handler de clique nas colunas \\ \\ \\ \\
    for (let i = 0; i < colunas.length; i++) {    
            
        colunas[i].addEventListener('click', (event) => {
            let colunaAtual = event.currentTarget
            let colunaFilhos = colunaAtual.childNodes
    
            if(jogoEmAndamento === true){
    
                for (let j = 0; j < colunaFilhos.length; j++) {
                    if (jogadorAtual === 1 && colunaFilhos[j].childNodes.length === 0) {
                        let x = colunaFilhos[j].dataset.coluna
                        let y = colunaFilhos[j].dataset.linha
                        tabuleiroArray[y][x] = 1
                        iniciaJogador1.innerText = "Jogador A"
                        iniciaJogador2.innerText = "Turno Jogador B"
                        let disco = document.createElement("div")
                        disco.classList.add("jogador1")
                        colunaFilhos[j].appendChild(disco)
                        jogadorAtual = 2;
                        //alterador(jogadorAtual);
                        break;
                    }
                    else if (jogadorAtual === 2 && colunaFilhos[j].childNodes.length === 0) {
                        let x = colunaFilhos[j].dataset.coluna
                        let y = colunaFilhos[j].dataset.linha
                        tabuleiroArray[y][x] = 2
                        iniciaJogador1.innerText = "Turno Jogador A"
                        iniciaJogador2.innerText = "Jogador B"
                        let disco = document.createElement("div")
                        disco.classList.add("jogador2")
                        colunaFilhos[j].appendChild(disco)
                        jogadorAtual = 1;
                        //alterador(jogadorAtual);
                        break;
                    }
                }
                horizontal();
                vertical();
                diagonal();
                empate();
            }
        })
    }
    
    // // // // Verificação horizontal \\ \\ \\ \\
    
    const horizontal = () => {
    const bordaX = tabuleiroArray[0].length - 3;
        for(let y = 0; y < tabuleiroArray.length; y++){
            for(let x = 0; x < bordaX; x++) {
                let item = tabuleiroArray[y][x];
                if(item !== 0) {
                    if(item === tabuleiroArray[y][x+1] && item === tabuleiroArray[y][x+2] && item === tabuleiroArray[y][x+3] ) {
                        if(item === 1){
                            console.log('jogador A ganhou')
                            alertaBox.style.display = 'block'
                            mensagemBox.innerText = "Jogador A venceu!"
                            comentarioBox.innerText = "Boa sorte na próxima, jogador B."
                            jogoEmAndamento = false;   
                            ptsAzul++;
                            placarAzul.innerText = ptsAzul;                    
                        }
    
                        else if(item === 2){
                            console.log('jogador B ganhou')
                            alertaBox.style.display = 'block'
                            mensagemBox.innerText = "Jogador B venceu!"
                            comentarioBox.innerText = "Boa sorte na próxima, jogador A."
                            jogoEmAndamento = false;
                            ptsLaranja++;
                            placarLaranja.innerText = ptsLaranja;   
                        }
                    }
                }
            }
        }
    }
    
    // // // // Verificação vertical \\ \\ \\ \\
    
    const vertical = () => {
    const bordaY = tabuleiroArray.length - 3;
        for(let y = 0; y < bordaY; y++){
            for(let x = 0; x < tabuleiroArray[0].length; x++) {
                let item = tabuleiroArray[y][x];
                if(item !== 0) {
                    if(item === tabuleiroArray[y+1][x] && item === tabuleiroArray[y+2][x] && item === tabuleiroArray[y+3][x]) {
                        if(item === 1){
                            console.log('jogador A ganhou');
                            alertaBox.style.display = 'block'
                            mensagemBox.innerText = "Jogador A venceu!"
                            comentarioBox.innerText = "Boa sorte na próxima, jogador B."
                            jogoEmAndamento = false;   
                            ptsAzul++;
                            placarAzul.innerText = ptsAzul;  
                        }
    
                        else if(item === 2){
                            console.log('jogador B ganhou')
                            alertaBox.style.display = 'block'
                            mensagemBox.innerText = "Jogador B venceu!"
                            comentarioBox.innerText = "Boa sorte na próxima, jogador A."
                            jogoEmAndamento = false;
                            ptsLaranja++;
                            placarLaranja.innerText = ptsLaranja;  
                        }                    
                    }
                }
            }
        }
      
    }
    
    // // // // Verificação diagonal \\ \\ \\ \\
    
    const diagonal = () => { //Diagonal ascendente
        for (let y = 0; y < tabuleiroArray.length - 3; y++) {
            for (let x = 0; x < tabuleiroArray[y].length - 3; x++) {
            let item  = tabuleiroArray[y][x];
                if (item !== 0) {
                    if (item === tabuleiroArray[y+1][x+1] && item === tabuleiroArray[y+2][x+2] && item === tabuleiroArray[y+3][x+3]) {
                        if(item === 1){
                            console.log("O jogador A ganhou");
                            alertaBox.style.display = 'block'
                            mensagemBox.innerText = "Jogador A venceu!"
                            comentarioBox.innerText = "Boa sorte na próxima, jogador B."
                            jogoEmAndamento = false;       
                            ptsAzul++;
                            placarAzul.innerText = ptsAzul;                   
                        }else{
                            console.log("O jogador B ganhou");
                            alertaBox.style.display = 'block'
                            mensagemBox.innerText = "Jogador B venceu!"
                            comentarioBox.innerText = "Boa sorte na próxima, jogador A."
                            jogoEmAndamento = false;    
                            ptsLaranja++;
                            placarLaranja.innerText = ptsLaranja;                      
                        }
                    }
                }
            }
        }
    
        for (let y = 3; y < tabuleiroArray.length; y++) {  //Diagonal descendente
            for (let x = 0; x < tabuleiroArray[y].length - 3; x++) {
                item = tabuleiroArray[y][x];
                if (item !== 0) {
                    if (item === tabuleiroArray[y-1][x+1] && item === tabuleiroArray[y-2][x+2] && item === tabuleiroArray[y-3][x+3]) {
                        if(item === 1){
                            console.log("O jogador A ganhou");
                            alertaBox.style.display = 'block'
                            mensagemBox.innerText = "Jogador A venceu!"
                            comentarioBox.innerText = "Boa sorte na próxima, jogador B."
                            jogoEmAndamento = false;
                            ptsAzul++;
                            placarAzul.innerText = ptsAzul;  
                        }
                        if(item === 2){
                            console.log("O jogador B ganhou");
                            alertaBox.style.display = 'block'
                            mensagemBox.innerText = "Jogador B venceu!"
                            comentarioBox.innerText = "Boa sorte na próxima, jogador A."
                            jogoEmAndamento = false;
                            ptsLaranja++;
                            placarLaranja.innerText = ptsLaranja;  
                        }
                    }
                }
            }
        }
    }
    
    // // // // Verificação empate \\ \\ \\ \\
    
    const empate = () => {
        let contador = 0
        for(let y = 0; y < tabuleiroArray.length; y++) {
            for(let x = 0; x < tabuleiroArray[y].length; x++) {
                let item = tabuleiroArray[y][x]
                if (item !== 0) {
                    contador += 1
                    if (contador === 42) {
                        console.log("empate")
                        alertaBox.style.display = 'block'
                        mensagemBox.innerText = "EMPATE!"
                        comentarioBox.innerText = "Tentem novamente."
                    }
                }
            }
        }
    }
    
fecharBox.addEventListener('click', function() {
    alertaBox.style.display = 'none'
});
