const readline = require('readline-sync');

let heroi = readline.question("Qual o nome do herói? ");
let XP = parseInt(readline.question("Quantos pontos de experiência (XP) o herói possui? "));

let nivel = "";

if (XP < 1000) {
    nivel = "Ferro";
} else if (XP < 2000) {
    nivel = "Bronze";
} else if (XP < 3000) {
    nivel = "Prata";
} else if (XP < 4000) {
    nivel = "Ouro";
} else if (XP < 5000) {
    nivel = "Platina";
} else if (XP < 6000) {
    nivel = "Diamante";
} else if (XP < 7000) {
    nivel = "Ascendente";
} else if (XP < 8000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O herói ${heroi} está no nível ${nivel}.`);
