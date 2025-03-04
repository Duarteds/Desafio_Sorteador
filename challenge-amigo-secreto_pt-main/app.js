//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos=[];

function adicionarAmigo() {
    let obterAmigo = document.getElementById('amigo');
    let nomeAmigo = obterAmigo.value;

    if(!nomeAmigo) {
        alert("Por favor digite um nome válido"); 
        return; 
     }

    listaAmigos.push[nomeAmigo];
    obterAmigo.value = '';
    obterAmigo.focus();
    atualizaListaAmigo()
}

function atualizaListaAmigo(){
    let atualizaAmigos = document.getElementById("listaAmigos");
    atualizaAmigos.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++){
        let itemLista = document.createElement("li");
        itemLista.textContent = listaAmigos[i];
        atualizaAmigos.appendChild(itemLista);

    }
} 

function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert("Nenhum amigo adicionado");
        return;
    }
    let sortudo = listaAmigos[Math.floor(Math.random()* listaAmigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${sortudo}`;

    let limparLista = document.getElementById("listaAmigo");
    limparLista.innerHTML = "";
}




