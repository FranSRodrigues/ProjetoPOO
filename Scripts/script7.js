function calcularOrcamento(){
let larguraParede = document.getElementById('larguraParede').value;
larguraParede = Number(larguraParede);
let alturaParede = document.getElementById('alturaParede').value;
alturaParede = Number(alturaParede);
let precoMaoDeObra = document.getElementById('precoMaoDeObra').value;
precoMaoDeObra = Number(precoMaoDeObra)

if(larguraParede == "" || alturaParede == "" || precoMaoDeObra){
    alert('Preencha todos os campos!!');
    return
}

let calculoMetros = larguraParede * alturaParede;
let CalculoMaoDeObra = calculoMetros * precoMaoDeObra;

let mensagemArmazenamento = document.getElementById("mensagem-armazenamento");
let h4 = document.createElement("h4");
let texto = document.createTextNode(`Você gastará em torno de R$ ${CalculoMaoDeObra.toFixed(2)} com mão de obra`);
mensagemArmazenamento.appendChild(h4);
h4.appendChild(texto);

document.getElementById('larguraParede').value = "";
document.getElementById('alturaParede').value = "";
document.getElementById('precoMaoDeObra').value = "";
}