// 🎯 Ejercicios opcionales
//  Agregar a los personajes "Flash" y "Shazam" en el array heroes desde la posición 1 sin eliminar ningún elemento.
//  Eliminar héroes específicos:
// Eliminar el héroe en la posición 1.
// Eliminar el héroe que esté en la mitad del array.

let heroes = ["Iroman","Hulk","Spiderman"]
console.log(`Lista heroes original: ${heroes}`)

let agregar = heroes.unshift("Flash","Shazam")
console.log(`Lista heroes cambios: ${heroes}`)

let eliminarPrimerHeroes = heroes.shift()
console.log(`Flash eliminado: ${heroes}`)

let eliminarMitadHeroes = heroes.splice(2,1)
console.log(`Hulk eliminado: ${heroes}`)