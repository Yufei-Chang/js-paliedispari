// Chiediamo all'utente di scegliere
const choice = prompt("Scegli tra pari o dispari").toLowerCase();

let userNum = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(`Il tuo numero è: ${userNum}`);

// Input automatico del computer
const cpuNum = randomNum();
function randomNum() {
    return Math.floor(Math.random() * 5) + 1;
}
console.log(`Il numero del computer è: ${cpuNum}`);

const result = userNum + cpuNum;
console.log(`La somma dei vostri numeri è: ${result}`);

const finalResult = oddeven(result);
console.log(`La somma è ${finalResult}.`);

function oddeven(number) {
    return number % 2 === 0 ? 'pari' : 'dispari';
}

if (finalResult === choice) {
    console.log("You win! Humanity safe!");
    } else {
    console.log("CPU wins! Humanity doomed!");
    }
