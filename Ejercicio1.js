// ### **1️⃣ Manejo de una lista de invitados (Set)**  
// Crea un programa que permita agregar nombres a una lista de invitados utilizando un `Set`. El programa debe incluir las siguientes funciones:  
// - `agregarInvitado(nombre)`: Agrega un nombre al Set de invitados.  
// - `eliminarInvitado(nombre)`: Elimina un nombre del Set.  
// - `mostrarInvitados()`: Muestra todos los nombres en el Set.  
let invitados = new Set("")

invitados.add("Nicolas")
invitados.add("Danilo")
invitados.add("Carlos")
invitados.add("Diego")
function agregarInvitado(nombre) {
    return invitados.add(nombre)
}
agregarInvitado("Daniel")

function eliminarInvitado(nombre) {
    return invitados.delete(nombre)
}
eliminarInvitado("Nicolas")

function mostrarInvitados() {
    return console.log(invitados)
}
mostrarInvitados()
