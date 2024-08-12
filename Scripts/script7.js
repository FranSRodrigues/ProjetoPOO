function calcularOrcamento(){
let inLarguraParede = document.getElementById('larguraParede');
let larguraParede = inLarguraParede.value;
let inAlturaParede = document.getElementById('alturaParede');
let alturaParede = inAlturaParede.value;
let inPrecoMaoDeObra = document.getElementById('precoMaoDeObra');
let precoMaoDeObra = inPrecoMaoDeObra.value;

if(larguraParede == "" || alturaParede == "" || precoMaoDeObra == ""){
    alert('Preencha todos os campos!!');
    return
}

let calculoMetros = larguraParede * alturaParede;
let CalculoMaoDeObra = calculoMetros * precoMaoDeObra;

let mensagemArmazenamento = document.getElementById("mensagem-armazenamento");
let h4 = document.createElement("h4");
let texto = document.createTextNode(`Você gastará em torno de R$ ${CalculoMaoDeObra.toFixed(2)} 
com mão de obra`);
mensagemArmazenamento.appendChild(h4);
h4.appendChild(texto);

inLarguraParede = "";
inAlturaParede = "";
inPrecoMaoDeObra = "";
}