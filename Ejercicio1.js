let invitados = new Set("")

invitados.add("Nicolas")
invitados.add("Danilo")
invitados.add("Carlos")
invitados.add("Diego")
console.log(invitados)
function agregarInvitado(nombre) {
    return invitados.add(nombre)
}
console.log(agregarInvitado("Daniel"))

function eliminarInvitado(nombre) {
    return invitados.delete(nombre)
}

eliminarInvitado("Nicolas")
console.log(invitados)