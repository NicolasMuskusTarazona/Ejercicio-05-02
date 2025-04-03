// 2. Crea un programa que genere un conjunto de números aleatorios 
// únicos entre 1 y 100. El tamaño del conjunto será determinado por el usuario.

let min = Number(prompt("Ingrese un numero (minimo):",10))
let max = Number(prompt("Ingrese un numero (maximo):",100))
function getRandomIntInclusive(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(`Numero aleatorio: ${getRandomIntInclusive(min,max)}`)