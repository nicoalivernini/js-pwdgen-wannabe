// Variabile richiesta nome
var nome = prompt("Come ti chiami?");

// console.log(nome);

document.getElementById('nome').innerHTML = nome;


//Variabile richiesta cognome
var cognome = prompt ("Come fai di cognome?");

// console.log(cognome);

document.getElementById('cognome').innerHTML = cognome;

//Variabile colore preferito
var colore = prompt("Qual è il tuo colore preferito?")

// console.log(colore);

document.getElementById('col-preferito').innerHTML = colore;

//Variabile riepilogativa
var resoconto = nome + cognome + colore + "21";

// console.log(resoconto);

document.getElementById('riepilogo').innerHTML = resoconto;
