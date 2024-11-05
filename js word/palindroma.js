const userWord = prompt("Inserisci una parola")

function isPalindroma(userWord) {
    const reverseWord = userWord.split('').reverse().join('');
    return userWord === reverseWord;
}

if (isPalindroma(userWord)) {
    console.log(`La parola "${userWord}" è palindroma!`);
} else {
    console.log(`La parola "${userWord}" non è palindroma.`);
}