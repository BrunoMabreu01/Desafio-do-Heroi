let heroi = prompt("Qual o nome do herói?");
let XP = parseInt(prompt("Quantos pontos de experiência (XP) o herói possui?"));
let nivel = "";

if (XP < 1000) {
    nivel = "Ferro";
} else if (XP < 2000) {
    nivel = "Bronze";
} else if (XP < 5000) {
    nivel = "Prata";
} else if (XP < 7000) {
    nivel = "Ouro";
} else if (XP < 8000) {
    nivel = "Platina";
} else if (XP < 9000) {
    nivel = "Ascendente";
} else if (XP < 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O herói de nome " + heroi + " está no nível " + nivel);
console.log("Com " + XP + " pontos de experiência (XP).");
