const botao = document.getElementById("tema");

botao.addEventListener("click", function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

botao.innerHTML="☀️ Modo Claro";

}else{

botao.innerHTML="🌙 Modo Escuro";

}

});

// Mensagem no console
console.log("Projeto Agrinho 2026 carregado!");

// Mensagem de boas-vindas
window.onload = function(){
alert("Bem-vindo ao projeto Agrinho 2026! 🌱");
}
function mostrarNome(){

let nome = document.getElementById("nome").value;

if(nome == ""){

document.getElementById("mensagem").innerHTML = "Por favor, digite seu nome.";

}else{

document.getElementById("mensagem").innerHTML =
"Seja bem-vindo(a), <strong>" + nome + "</strong>! 🌱";

}

}