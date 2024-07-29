function calcularOrcamento(){
    let contador = 0;
    let preco = 0;
    let metroQuadrado = 0;
    let resposta = document.getElementById("resposta");
    let inRegiao = document.getElementById("regiao");
    let inEstado = document.getElementById("estado");
    let inNumeroHabitantes = document.getElementById("numeroHabitantes");
    let inLargura = document.getElementById("largura");
    let inComprimento = document.getElementById("comprimento");
    let inPiso = document.getElementById("piso");
    let inTipoTijolo = document.getElementById("tipoTijolo");
    let inQuantidadeQuartos = document.getElementById("quantidadeQuartos");
    let inTempoConstrucao = document.getElementById("tempoConstrucao");

    let regiao = inRegiao.value;
    let estado = inEstado.value;
    let numeroHabitantes = inNumeroHabitantes.value;
    let largura = inLargura.value;
    let comprimento = inComprimento.value;
    let piso = inPiso.value;
    let tipoTijolo = inTipoTijolo.value;
    let quantidadeQuartos = inQuantidadeQuartos.value;
    let tempoConstrucao = inTempoConstrucao.value;

    if(regiao == "" || estado == "" || numeroHabitantes == "" || largura == "" || comprimento == "" 
        || piso == "" || tipoTijolo == "" || quantidadeQuartos == "" || tempoConstrucao == ""){
            alert("Preencha todos os campos!");
            return
        }

    regiao = regiao.toLowerCase();
    estado = estado.toLowerCase();
    piso = piso.toLowerCase();
    tipoTijolo = tipoTijolo.toLowerCase();
    metroQuadrado = largura * comprimento;

    if(regiao != "sul" && regiao != "sudeste" && regiao != "norte" && regiao != "nordeste" 
        && regiao != "centro-oeste" && regiao != "centro oeste"){
            alert("Insira uma região válida");
            return
        }

    else if(estado != "distrito federal" && estado != "df" && estado != "goiás" && estado != "mato grosso" &&
    estado != "mato grosso do sul" && estado != "alagoas" && estado != "bahia" && estado != "ceará" &&
    estado != "maranhão" && estado != "paraíba" && estado != "pernambuco" && estado != "piauí" &&
    estado != "rio grande do norte" && estado != "sergipe" && estado != "acre" && estado != "amapá" &&
    estado != "amazonas" && estado != "pará" && estado != "rondônia" && estado != "roraima" && estado != "roraima"
    && estado != "tocantis" && estado != "espírito santo" && estado != "minas gerais" && estado != "são paulo" &&
    estado != "rio de janeiro" && estado != "rio grande do sul" && estado != "paraná" && estado != "santa catarina"){
        alert("Insira um estado brasileiro válido");
            return
        }
 
    else{
    if(regiao == "nordeste" || regiao == "norte"){
        contador += 1;
    }

    if(regiao == "centro-oeste"){
        contador += 2;
    }

    if(regiao == "sudeste" || regiao == "sul"){
        contador += 3;
        }

    if(estado == "alagoas" || estado == "ceará" || estado == "maranhão" || estado == "paraíba" || 
        estado == "pernambuco" || estado == "piauí" || estado == "rio grande do norte" || estado == "sergipe"
        || estado == "acre" || estado == "amapá" || estado == "amazonas" || estado == "pará" || 
        estado == "rondônia" || estado == "roraima" || estado == "roraima" || estado == "tocantis"){
            contador += 1;
        }

    if(estado == "bahia" || estado == "goiás" || estado == "mato grosso" ||
        estado == "mato grosso do sul" || estado == "rio grande do sul" || estado == "paraná" 
        || estado == "espírito santo" || estado == "minas gerais"){
            contador += 2;
        }

    if(estado == "distrito federal" || estado == "df" || estado == "são paulo" ||
        estado == "rio de janeiro" || estado == "santa catarina"){
            contador += 3;
        }

    if(numeroHabitantes > 0 && numeroHabitantes <= 60000){
            contador += 1;
        }

    if(numeroHabitantes > 60000 && numeroHabitantes <= 300000){
            contador += 2;
    }

    if(numeroHabitantes > 300000){
            contador += 3;
    }

    if(metroQuadrado <= 50){
        contador += 1;
    }

    if(metroQuadrado > 50 && metroQuadrado <= 150){
        contador += 2;
    }

    if(metroQuadrado > 150){
        contador += 3;
    }

    if(piso == "cerâmica" || piso == "piso cerâmico"){
        contador += 1;
    }

    if(piso == "madeira" || piso == "piso de madeira"){
        contador += 2;
    }

    if(piso == "porcelanato" || piso == "piso de porcelana" || piso == "piso de porcelanato"){
        contador += 3;
    }

    if(piso != "cerâmica" && piso != "piso cerâmico" && piso != "madeira" && piso != "piso de madeira" &&
        piso != "porcelanato" && piso != "piso de porcelana" && piso != "piso de porcelanato"){
            contador += 1;
        }

    if(tipoTijolo == "cerâmico" || tipoTijolo == "tijolo cerâmico" || tipoTijolo == "bloco cerâmico" || 
        tipoTijolo == "tijolo de cerâmica"){
            contador += 1;
    }

    if(tipoTijolo == "concreto" || tipoTijolo == "tijolo de concreto" || tipoTijolo == "bloco de concreto"){
        contador += 2;
    }

    if(tipoTijolo == "ecológico" || tipoTijolo == "tijolo ecológico" || tipoTijolo == "bloco ecológico" ||
        tipoTijolo == "vidro" || tipoTijolo == "tijolo de vidro"){
        contador += 3;
    }

    if(tipoTijolo != "cerâmico" && tipoTijolo != "tijolo cerâmico" && tipoTijolo != "bloco cerâmico" && 
        tipoTijolo != "tijolo de cerâmica" && tipoTijolo != "concreto" && tipoTijolo != "tijolo de concreto"
        && tipoTijolo != "bloco de concreto" && tipoTijolo != "ecológico" && tipoTijolo != "bloco ecológico" 
        && tipoTijolo != "tijolo ecológico" && tipoTijolo != "vidro" && tipoTijolo != "tijolo de vidro"){
        contador += 1;
    }

    if(quantidadeQuartos <= 2){
        contador += 1;
    }

    if(quantidadeQuartos > 2 && quantidadeQuartos <= 6){
        contador += 2;
    }

    if(quantidadeQuartos > 6){
        contador += 3;
    }

    if(tempoConstrucao <= 10){
        contador += 1;
    }

    if(tempoConstrucao > 10 && tempoConstrucao <= 24){
        contador += 2;
    }

    if(tempoConstrucao > 24){
        contador += 3;
    }
    }

    preco = contador * 83334;
    let precoFinal = "R$" + preco + ",00";

    if(preco == 2000016){
        resposta.textContent = "O imóvel irá custar, aproximadamente, mais que : " + precoFinal;
    }

    else{resposta.textContent = "O imóvel irá custar, aproximadamente: " + precoFinal;}
    
    let mensagemArmazenamento = document.getElementById("mensagem-armazenamento");

    let h4 = document.createElement("h4");

    let texto = document.createTextNode("Pronto, agora você pode criar seu projeto!");

    mensagemArmazenamento.appendChild(h4);

    h4.appendChild(texto);

    inRegiao.value = "";
    inEstado.value = "";
    inNumeroHabitantes.value = "";
    inLargura.value = "";
    inComprimento.value = "";
    inPiso.value = "";
    inTipoTijolo.value = "";
    inQuantidadeQuartos.value = "";
    inTempoConstrucao.value = "";
}