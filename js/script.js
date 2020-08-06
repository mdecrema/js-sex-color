var nome = prompt('Inserisci il tuo nome');
var sesso = prompt('Inserisci il tuo sesso');
var nomeUtente = document.getElementById('nomeUtente');
var ciao = document.getElementById('ciao');


if (sesso == "uomo") {
  ciao.style.display="block";
  nomeUtente.innerHTML=" "+nome;
} else if (sesso == "donna") {
  ciao.style.display="block";
  nomeUtente.innerHTML=" "+nome;
} else {
  alert('Il sesso inserito è errato');
}
