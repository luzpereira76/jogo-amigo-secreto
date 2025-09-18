//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim();   

    if (!nomeAmigo) {
        alert("Digite o nome do amigo");
        return;                                     
    }
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado!");
        inputAmigo.value = "";
        inputAmigo.focus ();
        return;
    }
    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus(); 
    atualizarlista();   
}
function atualizarlista() {
    let listaAmigos = document.getElementById("listaAmigos"); 
        listaAmigos.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);                           
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo adicionado");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indiceSorteado];
    amigos.splice(indiceSorteado, 1);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;

    let limparLista = document.getElementById("listaAmigos"); 
    limparLista.innerHTML = ""; 
}
