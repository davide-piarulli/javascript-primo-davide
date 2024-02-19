console.log('ciao');

const nome = prompt('Scrivi il tuo nome');

const cognome = prompt('Scrivi il tuo cognome');

const nomeCompleto = nome + ' ' + cognome;

const annoNascita = prompt('Scrivi il tuo anno di nascita');

console.log(nome, cognome, annoNascita);

const annoAttuale = 2024;

const eta = annoAttuale - annoNascita;

console.log(eta);

document.getElementById('saluto').innerHTML = 
` 
<p>Ciao ${nomeCompleto}, hai ${eta} anni </p>
`;