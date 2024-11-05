function randomNum() {
    return Math.floor(Math.random() * 5) + 1;
}

function oddeven(number) {
    return number % 2 === 0 ? 'pari' : 'dispari';
}

const choice = prompt("Scegli tra pari o dispari").toLowerCase();

let userNum = parseInt(prompt("Scegli un numero da 1 a 5"));

if (userNum < 1 || userNum > 5 || isNaN(userNum)) {
    const cpuNum = randomNum();
    console.log(`Il numero del computer è: ${numeroComputer}`);

    const result = userNum + cpuNum;
    console.log(`La somma dei numeri è: ${somma}`);

    const finalResult = oddeven(result);
    console.log(`La somma è ${finalResult}.`);

    if (finalResult === choice) {
        console.log("You win! Humanity safe!");
    } else {
        console.log("CPU wins! Humanity doomed!");
    }
}
