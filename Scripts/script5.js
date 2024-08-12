class Imovel{

    constructor(cliente, regiao, estado, metroQuadrado, piso, tipoTijolo, quantidadeQuartos, tempoConstrucao,
        preco){
        this.cliente = cliente;
        this.regiao = regiao;
        this.estado = estado;
        this.metroQuadrado = metroQuadrado;
        this.piso = piso;
        this.tipoTijolo = tipoTijolo;
        this.quantidadeQuartos = quantidadeQuartos;
        this.tempoConstrucao = tempoConstrucao;
        this.preco = preco

        this.id = 1;
        this.arrayProjetos = [];
        this.edicaoId = null;
    }

    getCliente(){
        return this.cliente;
    }

    setCliente(novoCliente){
        this.cliente = novoCliente;
    }

    getRegiao(){
        return this.regiao;
    }

    setRegiao(novaRegiao){
        this.regiao = novaRegiao;
    }

    getEstado(){
        return this.estado;
    }

    setEstado(novoEstado){
        this.estado = novoEstado;
    }

    getMetroQuadrado(){
        return this.metroQuadrado;
    }

    setMetroQuadrado(novoMetroQuadrado){
        this.metroQuadrado = novoMetroQuadrado;
    }

    getPiso(){
        return this.piso;
    }

    setPiso(novoPiso){
        this.piso = novoPiso;
    }

    getTipoTijolo(){
        return this.tipoTijolo;
    }

    setTipoTijolo(novoTipoTijolo){
        this.tipoTijolo = novoTipoTijolo;
    }

    getQuantidadeQuartos(){
        return this.quantidadeQuartos;
    }

    setQuantidadeQuartos(novaQuantidadeQuartos){
        this.quantidadeQuartos = novaQuantidadeQuartos;
    }

    getTempoConstrucao(){
        return this.tempoConstrucao;
    }

    setTempoConstrucao(novoTempoConstrucao){
        this.tempoConstrucao = novoTempoConstrucao;
    }

    getPreco(){
        return this.preco;
    }

    setPreco(novoPreco){
        this.preco = novoPreco;
    }

    mostrarInformacoes(){
        return `Cliente:  ${this.numeroHabitantes}\nRegião: ${this.regiao}\nEstado: ${this.estado}\nMetragem: ${this.metroQuadrado}\nPiso: ${this.piso}\nTipo de Tijolo:
        ${this.tipoTijolo}\nQuantidade de Quartos: ${this.quantidadeQuartos}\nTempo de Construção: 
        ${this.tempoConstrucao}\nPreço: ${this.preco}`;
    }

    salvar(){
        let projeto = this.lerDados();

        if(this.validarCampos(projeto)){
            if(this.edicaoId == null){
                this.adicionar(projeto);
            }
            else{
                this.atualizar(this.edicaoId, projeto);
            }
        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProjetos.length; i++){
            let tr = tbody.insertRow();
 
            let tdId = tr.insertCell();
            let tdCliente = tr.insertCell();
            let tdRegiao = tr.insertCell();
            let tdEstado= tr.insertCell();
            let tdMetroQuadrado = tr.insertCell();
            let tdPiso = tr.insertCell();
            let tdTipoTijolo = tr.insertCell();
            let tdQuantidadeQuartos = tr.insertCell();
            let tdTempoConstrucao = tr.insertCell();
            let tdPreco = tr.insertCell();
            let tdAcao = tr.insertCell();

            tdId.innerText = this.arrayProjetos[i].id;
            tdCliente.innerText = this.arrayProjetos[i].cliente;
            tdRegiao.innerText = this.arrayProjetos[i].regiao;
            tdEstado.innerText = this.arrayProjetos[i].estado;
            tdMetroQuadrado.innerText = this.arrayProjetos[i].metroQuadrado;
            tdPiso.innerText = this.arrayProjetos[i].piso;
            tdTipoTijolo.innerText = this.arrayProjetos[i].tipoTijolo;
            tdQuantidadeQuartos.innerText = this.arrayProjetos[i].quantidadeQuartos;
            tdTempoConstrucao.innerText = this.arrayProjetos[i].tempoConstrucao;
            tdPreco.innerText = this.arrayProjetos[i].preco;

            tdId.classList.add('centro');

            let imagemEdicao = document.createElement('img');
            imagemEdicao.src = 'imagens/img-11.png';
            imagemEdicao.setAttribute("onclick", "projeto.prepararEdicao("+ JSON.stringify(this.arrayProjetos[i]) +")");

            tdAcao.appendChild(imagemEdicao);

            let imagemDeletar = document.createElement('img');
            imagemDeletar.src = 'Imagens/img-12.png';
            imagemDeletar.setAttribute("onclick", "projeto.deletar("+ this.arrayProjetos[i].id +")");

            tdAcao.appendChild(imagemDeletar);
        }
    }

    adicionar(projeto){
        projeto.metroQuadrado = parseFloat(projeto.metroQuadrado);
        projeto.quantidadeQuartos = parseFloat(projeto.quantidadeQuartos);
        projeto.tempoConstrucao = parseFloat(projeto.tempoConstrucao);
        projeto.preco = parseFloat(projeto.preco);
        this.arrayProjetos.push(projeto);
        this.id++;
    }

    atualizar(id, projeto){
        for(let i = 0; i < this.arrayProjetos.length; i++){
            if(this.arrayProjetos[i].id == id){
                this.arrayProjetos[i].cliente = projeto.cliente;
                this.arrayProjetos[i].regiao = projeto.regiao;
                this.arrayProjetos[i].estado = projeto.estado;
                this.arrayProjetos[i].metroQuadrado = projeto.metroQuadrado;
                this.arrayProjetos[i].piso = projeto.piso;
                this.arrayProjetos[i].tipoTijolo = projeto.tipoTijolo;
                this.arrayProjetos[i].quantidadeQuartos = projeto.quantidadeQuartos;
                this.arrayProjetos[i].tempoConstrucao = projeto.tempoConstrucao;
                this.arrayProjetos[i].preco = projeto.preco;
            }
        }
    }

    prepararEdicao(dados){
        this.edicaoId = dados.id;

        document.getElementById('cliente').value = dados.cliente;
        document.getElementById('regiao').value = dados.regiao;
        document.getElementById('estado').value = dados.estado;
        document.getElementById('metroQuadrado').value = dados.metroQuadrado;
        document.getElementById('piso').value = dados.piso;
        document.getElementById('tipoTijolo').value = dados.tipoTijolo;
        document.getElementById('quantidadeQuartos').value = dados.quantidadeQuartos;
        document.getElementById('tempoConstrucao').value = dados.tempoConstrucao;
        document.getElementById('preco').value = dados.preco;

        document.getElementById('botao1').innerText = "Atualizar";
    }

    lerDados(){
        let projeto = {};

        projeto.cliente = document.getElementById('cliente').value;
        projeto.id = this.id;
        projeto.regiao = document.getElementById('regiao').value;
        projeto.estado = document.getElementById('estado').value;
        projeto.metroQuadrado = document.getElementById('metroQuadrado').value;
        projeto.piso = document.getElementById('piso').value;
        projeto.tipoTijolo = document.getElementById('tipoTijolo').value;
        projeto.quantidadeQuartos = document.getElementById('quantidadeQuartos').value;
        projeto.tempoConstrucao = document.getElementById('tempoConstrucao').value;
        projeto.preco = document.getElementById('preco').value;

        return projeto;
    }

    validarCampos(projeto){
        let mensagem = ''

        if(projeto.cliente == '' || projeto.regiao == '' || projeto.estado == '' || projeto.metroQuadrado == ''
            || projeto.piso == '' || projeto.tipoTijolo == '' || projeto.quantidadeQuartos == '' || projeto.tempoConstrucao
            == '' || projeto.preco == ''){
                mensagem = 'Preencha todos os campos!'
            }

        if(mensagem != ''){
            alert(mensagem);
            return false;
        }

        return true;
    }

    cancelar(){
        document.getElementById('cliente').value = '';
        document.getElementById('regiao').value = '';
        document.getElementById('estado').value = '';
        document.getElementById('metroQuadrado').value = '';
        document.getElementById('piso').value = '';
        document.getElementById('tipoTijolo').value = '';
        document.getElementById('quantidadeQuartos').value = '';
        document.getElementById('tempoConstrucao').value = '';
        document.getElementById('preco').value = '';

        document.getElementById('botao1').innerText = "Salvar";
        this.edicaoId = null;
    }

    deletar(id){

        if(confirm('Você realmente deseja deletar este projeto?')){
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayProjetos.length; i++){
            if(this.arrayProjetos[i].id == id){
                this.arrayProjetos.splice(i, 1);
                tbody.deleteRow(i);
            }
        }
    }
}
}

let projeto = new Imovel;
