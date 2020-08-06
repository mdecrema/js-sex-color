// Richiesta all'utente del nome
var nome = prompt('Inserisci il tuo nome');
// Richiesta all'utente del sesso
var sesso = prompt('Inserisci il tuo sesso');
// Elemento in cui verrà stampato il nome all'interno della pagina
var nomeUtente = document.getElementById('nomeUtente');
// Elemento html
var ciao = document.getElementById('ciao');


// Condizione iniziale per poter funzionare
if (isNaN(nome)) {
// Casistiche
if (sesso == "uomo") {
  nomeUtente.style.color="blue";
  ciao.style.display="block";
  nomeUtente.innerHTML=" "+nome;
} else if (sesso == "donna") {
  nomeUtente.style.color="pink"
  ciao.style.display="block";
  nomeUtente.innerHTML=" "+nome;
} else {
  alert('Il sesso inserito è errato');
}
// Messaggio di errore
} else {
  alert('Devi inserire un nome valido');
}
