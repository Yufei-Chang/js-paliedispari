// Chiediamo la parola all'utente
const userWord = prompt("Inserisci una parola")

// Controlliamo se è palindroma
function isPalindroma(userWord) {
    const reverseWord = userWord.split('').reverse().join('');
    return userWord === reverseWord;
}

// Mostriamo il risultato del controllo
if (isPalindroma(userWord)) {
    console.log(`La parola "${userWord}" è palindroma!`);
} else {
    console.log(`La parola "${userWord}" non è palindroma.`);
}